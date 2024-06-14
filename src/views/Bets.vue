<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <material-card
                    icon="mdi-clipboard-text"
                    icon-small
                    title="Bets List"
                    color="accent"
                >
                    <v-card-text class="mt-5">
                        <v-row>
                            <v-col md="6">
                                <v-text-field
                                    v-model="search"
                                    append-icon="mdi-magnify"
                                    label="Bet Code"
                                    dense
                                    outlined
                                ></v-text-field>
                            </v-col>
                            <v-col md="6">
                                <v-select
                                :items="type"
                                item-text="text"
                                item-value="value"
                                label="Bet Type"
                                outlined
                                dense
                            ></v-select>
                            </v-col>
                            <v-col md="12">
                                <v-data-table
                                    :headers="headers"
                                    :items="items"
                                    :items-per-page="5"
                                >
                                    <template v-slot:[`item.date_placed`]="{ item }">
                                        {{ item.date_placed | moment('DD-MM-YY HH:mm') }}
                                    </template>
                                    <template v-slot:[`item.actions`] ="{item}">
                                        <span class="label" @click="viewItem(item)">view</span>
                                    </template>
                                </v-data-table>
                                <v-dialog      
                                    v-model="dialog"
                                    persistent
                                    max-width="800px"
                                >
                                    <v-card >
                                        <v-card-text>
                                            <v-simple-table>
                                                <template v-slot:default>
                                                    <thead>
                                                        <tr>
                                                            <th class="text-left">
                                                                Name
                                                            </th>
                                                            <th class="text-left">
                                                                Pick
                                                            </th>
                                                            <th>
                                                                Scheduled
                                                            </th>
                                                            <th>
                                                                Odds
                                                            </th>
                                                            <th class="text-center">
                                                                Resulted
                                                            </th>
                                                            <th class="text-center">
                                                                Status
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr v-for="(arg,i) in picks" :key="`pt${i}`">
                                                            <td>{{ arg.name }}</td>
                                                            <td>{{ arg.pick }}</td>
                                                            <td>{{ arg.scheduled }}</td>
                                                            <td>{{ arg.odds }}</td>
                                                            <td class="text-center"> {{ arg.resulted }}</td>
                                                            <td class="text-center">
                                                                <span class="label" :class="{'red': arg.active}">{{ (arg.active) ? 'Done' : 'Active' }}</span> 
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </template>
                                            </v-simple-table>
                                        </v-card-text>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn
                                                color="primary"
                                                @click="dialog = false"
                                            >
                                                Close
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </material-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import { bets,bet_items} from '@/util/fake.js';
export default {
    name: 'Bets',
    data: () =>({
        dialog:false,
        picks:[
            {
                name:'Chelsea v Real Madrid',
                pick: 'Real Madrid',
                scheduled: '2023-04-18 21:00:00',
                odds: 2.5,
                resulted: 1,
                active: 1
            },
            {
                name:'Chelsea v Real Madrid',
                pick: 'Real Madrid',
                scheduled: '2023-04-18 21:00:00',
                odds: 2.5,
                resulted: 0,
                active: 0
            },
            {
                name:'Chelsea v Real Madrid',
                pick: 'Real Madrid',
                scheduled: '2023-04-18 21:00:00',
                odds: 2.5,
                resulted: 0,
                active: 0
            },
            {
                name:'Chelsea v Real Madrid',
                pick: 'Real Madrid',
                scheduled: '2023-04-18 21:00:00',
                odds: 2.5,
                resulted: 0,
                active: 0
            },
            {
                name:'Chelsea v Real Madrid',
                pick: 'Real Madrid',
                scheduled: '2023-04-18 21:00:00',
                odds: 2.5,
                resulted: 0,
                active: 0
            }
        ],
        search: null,
        type: [
            { text:'Active',value: 0},
            { text:'Done',value: 1}
        ],
    }),
    computed: {
        headers() {
            return bets;
        },
        items() {
            return bet_items
        },
    },
    methods: {
        viewItem: function() {
            this.dialog = true
        }
    }
}
</script>
<style scoped>

</style>