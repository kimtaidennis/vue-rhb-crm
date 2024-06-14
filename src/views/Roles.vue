<template>
	<v-container fluid>
		<v-row>
			<v-col>
				<material-card
		          	icon="mdi-account-group-outline"
		          	icon-small
		          	title="Manage Roles"
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
                                               Add Role
                                            </v-btn>
                                        </template>
                                        <v-card>
                                            <v-card-title>
                                                <span class="text-h5"> {{ formTitle }}</span>
                                            </v-card-title>
                                            <v-card-text>
                                                <v-row>
                                                    <v-col
                                                        cols="12"
                                                        sm="12"
                                                        md="4"
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
                                                        md="4"
                                                    >
                                                        <v-text-field
                                                            v-model="editedItem.title"
                                                            label="Title"
                                                            outlined
                                                            dense
                                                            
                                                        ></v-text-field>
                                                    </v-col>
                                                    
                                                    <v-col
                                                        cols="12"
                                                        sm="12"
                                                        md="4"
                                                    >
                                                        <v-text-field
                                                            v-model="editedItem.level"
                                                            label="Level"
                                                            outlined
                                                            dense
                                                            required
                                                        ></v-text-field>
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
                            <template v-slot:item.actions ="{item}">
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
import { roles,roles_item} from '@/util/fake.js';
export default {
    name: 'Users',
    data: () => ({
    	dialog:false,
        editedIndex: -1,
    	editedItem: {
            name: '',
            title: '',
            level: '',
        },
        defaultItem: {
            name: '',
            title: '',
            level: '',
        },
    }),
    computed: {
        headers() {
            return roles;
        },
        items() {
            return roles_item
        },
        formTitle () {
            return this.editedIndex === -1 ? 'New Role' : 'Edit Role'
        },
    },
    methods: {
    	close: function() {
            this.$nextTick(() => {
              this.editedItem = Object.assign({}, this.defaultItem)
              this.editedIndex = -1
            })
    		this.dialog = false;
    	},
    	save: function() {
    		this.dialog = false;
    	},
    	editItem: function(item) {
    		this.editedIndex = this.items.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
    	}
    }
}
</script>
</script>
<style>
	
</style>