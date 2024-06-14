<template>
    <v-container fluid>
        <v-row>
            <v-col sm="6" md="8">
                <v-card>
                    <v-card-title>
                        <span class="display-1">Select Match</span>
                    </v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col
                                md="6"
                            >
                                <v-text-field
                                    label="Team"
                                    required
                                    outlined
                                    dense
                                ></v-text-field>
                            </v-col>
                            <v-col
                                md="6"
                            >
                                <v-btn
                                    color="primary"
                                    
                                    block
                                >
                                    Search
                                </v-btn>
                            </v-col> 
                            <v-col md="12">
                                <v-data-table
                                    :headers="headers"
                                    :items="items"
                                    :items-per-page="10"
                                >
                                <template v-slot:[`item.action`] ="{item}">
                                    <v-icon
                                        class="mr-2"
                                        @click="addItem(item)"
                                    >
                                        mdi-plus-box
                                    </v-icon>
                                </template>
                                </v-data-table>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col sm="6" md="4">
                <v-card>
                    <v-card-text>
                        <v-list dense>
                            <v-list-item
                                v-for="(sport,i) in selected"
                                :key="sport.id"
                            >
                                <v-list-item-content>
                                    <v-list-item-title>{{ sport.name }}</v-list-item-title>
                                </v-list-item-content>
                                <v-list-item-action>
                                    <v-btn small icon @click="removeItem(i)">
                                        <v-icon>mdi-minus-box</v-icon>
                                    </v-btn>
                                </v-list-item-action>
                            </v-list-item>
                        </v-list>
                        <v-alert
                            v-if="selected.length == 0"
                            type="info"
                            dense
                        >
                            No Matches.
                        </v-alert>
                        <template v-if="selected.length > 0">
                            <v-radio-group
                                v-model="type"
                                column
                                
                            >
                                <v-radio
                                    label="Jackpots"
                                    value="jackpots"
                                ></v-radio>
                                <v-radio
                                    label="Featured"
                                    value="featured"
                                ></v-radio>
                                <v-radio
                                    label="Highlights"
                                    value="highlights"
                                ></v-radio>
                            </v-radio-group>
                        </template>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn class="primary" block :disabled="selected.length == 0" @click="setGames">
                            Set Games        
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import { games,games_items} from '@/util/fake.js';
export default {
    name: 'Games',
    data: () => ({
        selected: [],
        type:'',
    }),
    computed: {
        headers() {
            return games;
        },
        items() {
            return games_items
        },
    },
    methods: {
        addItem: function(item) {
           this.selected.push(item)
        },
        removeItem: function(i) {
            this.selected.splice(i,1);
        },
        setGames: function() {
            console.log(this.type,this.selected);
        }
    }
}
</script>