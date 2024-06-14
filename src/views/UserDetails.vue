<template>
	<v-container>
		<v-row>
			<v-col md="6" sm="12">
				<v-card>
					<v-card-title>
						<span class="display-1">Add Roles</span>
					</v-card-title>
					<v-card-text>
						<v-form v-model="valid">
							<v-text-field
					            label="Name"
					            required
					            dense
					            outlined
					        ></v-text-field>
					        <v-text-field
					            label="Email"
					            required
					            dense
					            outlined
					        ></v-text-field>
					        <v-textarea
					          outlined
					          name="input-7-4"
					          label="Roles">
					        </v-textarea>
					        <v-btn
							    color="primary"
							    class="mr-4"
						    >
						        Update
						    </v-btn>
						</v-form>
					</v-card-text>
				</v-card>
			</v-col>
			<v-col md="6" sm="12">
				<v-card>
					<v-card-title>
						<span class="display-1">Reset Password</span>
					</v-card-title>
					<v-card-text>
						<v-form v-model="valid">
							
					        <v-text-field
					            label="Email"
					            required
					            dense
					            outlined
					        ></v-text-field>
					        <v-text-field
					            label="Password"
					            required
					            dense
					            outlined
					        ></v-text-field>
					        <v-text-field
					            label="Confirm Password"
					            required
					            dense
					            outlined
					        ></v-text-field>
					        <v-btn
							    color="primary"
							    class="mr-4"
						    >
						        Update
						    </v-btn>
						</v-form>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
export default {

}
</script>
<style>
	
</style>