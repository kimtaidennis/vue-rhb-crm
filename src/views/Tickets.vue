<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <material-card
                    icon="mdi-clipboard-text"
                    icon-small
                    title="Tickets"
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
                                               New Ticket
                                            </v-btn>
                                        </template>
                                        <v-card>
                                            <v-card-title>
                                                <span class="text-h5"> {{ formTitle }}</span>
                                            </v-card-title>
                                            <v-card-text>
                                                <v-container> 
                                                    <v-row>
                                                        <v-col
                                                            cols="12"
                                                            sm="6"
                                                            md="6"
                                                        >
                                                            <v-text-field
                                                                v-model="editedItem.name"
                                                                label="Client Phone"
                                                                outlined
                                                                dense
                                                                required
                                                            ></v-text-field>
                                                        </v-col>
                                                        <v-col
                                                            cols="12"
                                                            sm="6"
                                                            md="6"
                                                        >
                                                            <v-text-field
                                                                v-model="editedItem.phone"
                                                                label="Client name"
                                                                outlined
                                                                dense
                                                                hint="example of helper text only on focus"
                                                            ></v-text-field>
                                                        </v-col>
                                                        
                                                        
                                                        <template v-if="editedIndex != -1"> 
                                                            <v-col md="6">
                                                                <v-combobox
                                                                    v-model="editedItem.issue_type"
                                                                    :items="issues"
                                                                    label="Issue Type"
                                                                    outlined
                                                                    dense
                                                                ></v-combobox>
                                                            </v-col>
                                                            <v-col>
                                                                <v-radio-group
                                                                    v-model="editedItem.status"
                                                                    column
                                                                >
                                                                    <v-radio
                                                                        label="Pending"
                                                                        :value=0
                                                                    ></v-radio>
                                                                    <v-radio
                                                                        label="Solved"
                                                                        :value=1
                                                                    ></v-radio>
                                                                </v-radio-group>
                                                            </v-col>
                                                        </template>
                                                        <template v-else>
                                                            <v-col md="12">
                                                                <v-combobox
                                                                    v-model="editedItem.issue_type"
                                                                    :items="issues"
                                                                    label="Issue Type"
                                                                    outlined
                                                                    dense
                                                                ></v-combobox>
                                                            </v-col>
                                                        </template>
                                                        <v-col md="12">
                                                            <v-textarea
                                                                v-model="editedItem.description"
                                                                name="input-7-1"
                                                                label="Issue description"
                                                                outlined
                                                                hint="Hint text"
                                                            ></v-textarea>
                                                        </v-col>
                                                    </v-row>
                                                </v-container>
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
                            <template v-slot:[`item.status`]="{ item }">
                                <span
                                    v-if="item.status"
                                    class="label"
                                >
                                    Solved
                                </span>
                                <span
                                    v-else
                                    class="label red"
                                >
                                    Pending
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
import { tickets,issues} from '@/util/fake.js';
export default {
    name: 'Tickets',
    data: () => ({
        dialog:false,
        issues: [
          'Phone',
          'Registation',
          'Login',
          'Deposit',
          'Withdrawal',
          'Place bet',
          'Wrong settlement',
          'Active Bets',
        ],
        editedIndex: -1,
        editedItem: {
            name: '',
            phone: 0,
            issue_type: '',
            status: 0,
            description: '',
        },
        defaultItem: {
            name: '',
            phone: 0,
            issue_type: 0,
            status: 0,
            description: '',
        },
    }),
    computed: {
        headers() {
            return tickets;
        },
        items() {
            return issues
        },
        formTitle () {
            return this.editedIndex === -1 ? 'New Ticket' : 'Edit Ticket'
          },
    },
    methods:{
        editItem: function(item) {
            this.editedIndex = this.items.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },
        close: function () {
            this.dialog = false
            this.$nextTick(() => {
              this.editedItem = Object.assign({}, this.defaultItem)
              this.editedIndex = -1
            })
        },
        save () {
            if (this.editedIndex > -1) {
                console.log(this.editedItem)
            } else {
                console.log(this.editedItem)
            }
            this.close()
        },
    }
}
</script>
<style scoped>
   
</style>