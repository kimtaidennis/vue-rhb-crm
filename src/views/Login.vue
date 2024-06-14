<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12">
        <v-card-title dark color="primary" class="text-center">
          <v-img
            src="/logo.png"
            height="30"
            contain
          ></v-img>
          
        </v-card-title>
        <v-card-text>
          <v-divider class="mt-2 mb-2"/>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              prepend-icon="mdi-account"
              label="Email"
              v-model="email"
              :rules="emailRules"
            ></v-text-field>
            <v-text-field
              prepend-icon="mdi-lock"
              label="Password"
              type="password"
              :rules="rules"
              v-model="password"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn block color="primary" @click="validate">Login</v-btn>
      </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import { json } from 'body-parser'
import { ajaxCallMixin } from '../components/HttpCommon'
  import { localDb } from '../components/localDb'
  export default {
    name: 'Login',
    mixins: [ajaxCallMixin, localDb],
    data () {
      return {
        valid:true,
        currentAlertCounter: 0,
        email:'',
        password:'',
        rules: [
          v => !!v || 'Required.',
          v => (v && v.length >= 6) || 'Password must be greater than 5 characters',
        ],
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
      }
    },
    methods: {
      validate: function () {
        if(!this.$refs.form.validate()) {
          return
        } else {
          const data = { email: this.email, password: this.password }
          localStorage.setItem("auth", JSON.stringify(data));
          if (this.$route.query.redirect != null) {
            console.log(this.$route.query.redirect);
            this.$router.replace( this.$route.query.redirect).catch( err =>console.log(err))
          } else {
            this.$router.push("/");
          }
        }
      },
      loginUser: function () {
        const data = { username: this.email, password: this.password }
        
        const url = 'authenticator/auth/loginUser'
        const param = {}
        param.data = data
        this.$router.push({ name: 'Dashboard', path: '/' })
        // this.ajaxCall(url, param, this.saveLoginUser)
      },
      forgetPassword: function () {
        const data = { username: this.username, password: this.password }
        const url = 'authenticator/auth/loginUser'
        const param = {}
        param.data = data
        this.ajaxCall(url, param)
      },
      saveLoginUser: function (apiResponse) {
        if (apiResponse.error !== true && apiResponse.data.roleData.roleId === 1) {
          this.currentAlertCounter = 0
          this.save('loginUser', 'admin')
          this.save('userCompanyId', apiResponse.data.userData.companyId)
          this.save('token', apiResponse.data.userToken)
          this.save('tokenExpiry', apiResponse.data.expiryTime)
          this.getCompanyFeatures()
          this.$router.push({ name: 'Dashboard', path: '/' })
        } else {
          this.currentAlertCounter = 3
        }
      },
      
    },
  }
</script>
