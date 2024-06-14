<template>
    <v-container>
        <v-row>
            <v-col md="4">
                <v-card>
                    <v-card-text>
                        <v-menu
                            ref="menu"
                            v-model="menu"
                            :close-on-content-click="false"
                            :return-value.sync="date"
                            transition="scale-transition"
                            offset-y
                            min-width="auto"
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="dateRangeText"
                                    label="Filter by date range"
                                    prepend-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                ></v-text-field>
                            </template>
                            <v-date-picker
                                v-model="date"
                                range
                                no-title
                                scrollable
                            >
                                <v-spacer></v-spacer>
                                <v-btn
                                    text
                                    color="primary"
                                    @click="menu = false"
                                >
                                    Cancel
                                </v-btn>
                                <v-btn
                                    text
                                    color="primary"
                                    @click="$refs.menu.save(date)"
                                >
                                    OK
                                </v-btn>
                            </v-date-picker>
                        </v-menu>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col
                v-for="({ ...attrs }, i) in stats1"
                :key="i"
                cols="12"
                md="4"
                lg="4"
            >
                <material-stat-card v-bind="attrs">
                </material-stat-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <material-card
                    icon="mdi-clipboard-text"
                    icon-small
                    title="Withdrawals"
                    color="accent"
                >
                    
                    <v-card-text>
                        <v-data-table
                            :headers="headers"
                            :items="items"
                            :items-per-page="5"
                        >
                        <template v-slot:[`item.amount`]="{ item }">
                            {{ item.amount.toLocaleString() }}
                        </template>
                        <template v-slot:[`item.created_at`]="{ item }">
							{{ item.created_at | moment('DD-MM-YY HH:mm') }}
						</template>
                        
                        </v-data-table>
                    </v-card-text>
                </material-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import { deposits,deposits_items} from '@/util/fake.js';
export default {
    name: 'Withdrawals',
    data: () =>({
        date: [],
        menu: false,
        stats1: [
            {
            color: 'primary',
            icon: 'mdi-curling',
            title: 'Today Withdrawals',
            value: '350045',
            },
            {
            color: 'primary',
            icon: 'mdi-currency-usd',
            title: 'Total Withdrawals',
            value: '8082398.00',
            },
        ],
    }),
    computed: {
        dateRangeText () {
            return this.date.join(' - ')
        },
        headers() {
            return deposits;
        },
        items() {
            return deposits_items
        },
    },
}
</script>
<style scoped>

</style>