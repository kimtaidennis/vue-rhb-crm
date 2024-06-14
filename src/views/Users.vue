<template>
	<v-container fluid>
		<v-row>
			<v-col>
				<material-card
		          	icon="mdi-account-group-outline"
		          	icon-small
		          	title="Manage Users"
		          	color="accent"
		        > 
			        <v-card-text>
			            <v-data-table
			                :headers="headers"
			                :items="items"
			                :items-per-page="5" 
			            >
			            	<template v-slot:top>
                                <v-toolbar flat>
                                    <v-spacer></v-spacer>
                                    <v-dialog      
                                        v-model="dialog"
                                        persistent
                                        max-width="600px"
                                    >
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn
                                            color="primary"
                                            class="mr-2"
                                            dark
                                            v-bind="attrs"
                                            v-on="on"
                                            >
                                               Add user
                                            </v-btn>
                                        </template>
                                        <v-card>
                                            <v-card-title>
                                                <span class="text-h5"> Add User</span>
                                            </v-card-title>
                                            <v-card-text>
                                                <v-row>
                                                    <v-col
                                                        cols="12"
                                                        sm="12"
                                                        md="6"
                                                    >
                                                        <v-text-field
                                                            v-model="editedItem.name"
                                                            label="Name"
                                                            outlined
                                                            dense
                                                            required
                                                        ></v-text-field>
                                                    </v-col>
                                                    <v-col
                                                        cols="12"
                                                        sm="12"
                                                        md="6"
                                                    >
                                                        <v-text-field
                                                            v-model="editedItem.email"
                                                            label="Email"
                                                            outlined
                                                            dense
                                                            
                                                        ></v-text-field>
                                                    </v-col>
                                                    
                                                    <v-col
                                                        cols="12"
                                                        sm="12"
                                                        md="6"
                                                    >
                                                        <v-text-field
                                                            v-model="editedItem.password"
                                                            label="Password"
                                                            outlined
                                                            dense
                                                            required
                                                        ></v-text-field>
                                                    </v-col>
                                                    <v-col
                                                        cols="12"
                                                        sm="12"
                                                        md="6"
                                                    >
                                                        <v-text-field
                                                            v-model="editedItem.confirm_password"
                                                            label="Confirm Password"
                                                            outlined
                                                            dense
                                                            
                                                        ></v-text-field>
                                                    </v-col>
                                                    
                                         
                                                    <v-col md="12">
                                                        <v-textarea
                                                            v-model="editedItem.roles"
                                                            name="input-7-1"
                                                            label="Roles"
                                                            outlined
                                                            hint="Hint text"
                                                        ></v-textarea>
                                                    </v-col>
                                                </v-row>
                                            </v-card-text>
                                            <v-card-actions>
                                                <v-spacer></v-spacer>
                                                <v-btn
                                                    color="purple"
                                                    @click="close"
                                                >
                                                    Cancel
                                                </v-btn>
                                                <v-btn
                                                    color="primary"
                                                    @click="save"
                                                >
                                                    Save
                                                </v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-dialog>
                                </v-toolbar>
                            </template>
			              	<template v-slot:[`item.roles`]="{ item }">
				                <span class="label" v-for="(it,i) in item.roles" :key="`f${i}`">
				                    {{ it }}
				                </span>
				            </template>
				            <template v-slot:[`item.actions`] ="{item}">
                                <v-icon
                                    small
                                    class="mr-2"
                                    @click="editItem(item)"
                                >
                                    mdi-pencil
                                </v-icon>
                            </template>
			            </v-data-table>
			        </v-card-text>
			    </material-card>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
import { users,users_items} from '@/util/fake.js';
export default {
    name: 'Users',
    data: () => ({
    	dialog:false,
    	editedItem: {
            name: '',
            email: '',
            password: '',
            confirm_password: '',
            roles: '',
        },
    }),
    computed: {
        headers() {
            return users;
        },
        items() {
            return users_items
        },
    },
    methods: {
    	close: function() {
    		this.dialog = false;
    	},
    	save: function() {
    		this.dialog = false;
    	},
    	editItem: function(item) {
    		this.$router.push(`/users/user-details/${item.id}` )
    	}
    }
}
</script>
<style scoped>
	
</style>