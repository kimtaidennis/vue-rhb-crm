<template>
    <v-container
        id="dashboard-view"
        fluid
        tag="section"
    >
        <v-row>
            <v-col cols="12" class="pb-0">
                <div class="text-h4  pb-0 font-weight-light">
                    Customer - 257716904375
                </div>
            </v-col>
            <v-col
                v-for="({ ...attrs }, i) in stats"
                :key="i"
                cols="12"
                md="6"
                lg="3"
            >
                <material-stat-card v-bind="attrs">
                </material-stat-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col
                v-for="({ ...attrs }, i) in stats1"
                :key="i"
                cols="12"
                md="6"
                lg="3"
            >
                <material-stat-card v-bind="attrs">
                </material-stat-card>
            </v-col>
            <v-col md="6">
                <v-row>
                    <v-col md="12">
                        <div class="text-h4  pb-0 font-weight-light">
                            Customer Actions
                        </div>
                    </v-col>
                    <v-col>
                        <v-dialog      
                            v-model="dialog"
                            persistent
                            max-width="400px"
                            >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                color="primary"
                                class="mr-2"
                                dark
                                v-bind="attrs"
                                v-on="on"
                                >
                                CRM Deposit
                                </v-btn>
                            </template>
                            <v-card>
                                <v-card-title>
                                    <span class="text-h5">Customer Deposit</span>
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
                                                    label="68222111"
                                                    required
                                                    outlined
                                                    dense
                                                ></v-text-field>
                                            </v-col>
                                            <v-col
                                                cols="12"
                                                sm="6"
                                                md="6"
                                            >
                                                <v-text-field
                                                    label="Amount"
                                                    outlined
                                                    dense
                                                    hint="example of helper text only on focus"
                                                ></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        color="blue darken-1"
                                        @click="dialog = false"
                                    >
                                        Close
                                    </v-btn>
                                    <v-btn
                                        color="primary"
                                        @click="dialog = false"
                                    >
                                        Submit
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                        <v-dialog      
                            v-model="dialog1"
                            persistent
                            max-width="400px"
                            >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                color="primary"
                                class="mr-2"
                                dark
                                v-bind="attrs"
                                v-on="on"
                                >
                                Block Customer
                                </v-btn>
                            </template>
                            <v-card >
                                <v-card-title class="display-1">
                                    Block User
                                </v-card-title>
                                <v-card-text class="">
                                    <v-row>
                                        <v-col md="6">
                                            <v-checkbox
                                                v-model="allowSpaces"
                                                label="Block Withdraw "
                                            ></v-checkbox>
                                        </v-col>
                                        <v-col md="6">
                                            <v-checkbox
                                                v-model="allowSpaces"
                                                label="UnBlock Betting"
                                            ></v-checkbox>
                                        </v-col>
                                    </v-row>
                                    <v-textarea
                                        name="input-7-1"
                                        label="Reasons"
                                        outlined
                                        auto-grow
                                        value=""
                                    ></v-textarea>
                                    
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        color="blue darken-1"
                                        @click="dialog1 = false"
                                    >
                                        Close
                                    </v-btn>
                                    <v-btn
                                        color="primary"
                                        @click="dialog1 = false"
                                    >
                                        Submit
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                        <v-dialog      
                            v-model="dialog2"
                            persistent
                            max-width="300px"
                            >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                color="primary"
                                
                                dark
                                v-bind="attrs"
                                v-on="on"
                                >
                                Pay Customer
                                </v-btn>
                            </template>
                            <v-card >
                                <v-card-title class="display-1">
                                   Pay Customer
                                </v-card-title>
                                <v-card-text class="">
                                    <v-row>
                                        <v-col md="12">
                                            <v-text-field
                                                outlined
                                                dense
                                                label="Amount"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        color="blue"
                                        @click="dialog2 = false"
                                    >
                                        Close
                                    </v-btn>
                                    <v-btn
                                        color="primary"
                                        @click="dialog2 = false"
                                    >
                                        Pay
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-col>
                </v-row>               
            </v-col>  
        </v-row>
        <v-row>
            <v-col>
                <v-card>
                    <v-card-title  class="display-1">
                        Customer Account Details
                    </v-card-title>
                    <v-card-body>
                        <v-tabs
                            v-model="tab"
                            align-with-title
                        >
                            <v-tabs-slider color="primary"></v-tabs-slider>
                            <v-tab
                                v-for="item in tabitems"
                                :key="item"
                                class="v-tabs--pill"
                            >
                                {{ item }}
                            </v-tab>
                        </v-tabs>
                        <v-tabs-items v-model="tab">
                            <v-tab-item>
                                <v-card>
                                    <v-card-text class="pa-4">
                                        <v-data-table
                                          :headers="latestBets"
                                          :items="itemZ"
                                          :items-per-page="5"
                                        >
                                        </v-data-table>
                                    </v-card-text>
                                </v-card>
                            </v-tab-item>
                            <v-tab-item>
                                <v-card flat>
                                    <v-card-text class="pa-4">
                                        <v-data-table
                                          :headers="latestBets"
                                          :items="itemZ"
                                          :items-per-page="5"
                                        >
                                        </v-data-table>
                                    </v-card-text>
                                </v-card>
                            </v-tab-item>
                            <v-tab-item>
                                <v-card flat>
                                    <v-card-text class="pa-4">
                                        <v-data-table
                                          :headers="latestBets"
                                          :items="itemZ"
                                          :items-per-page="5"
                                        >
                                        </v-data-table>
                                    </v-card-text>
                                </v-card>
                            </v-tab-item>
                            <v-tab-item>
                                <v-card flat>
                                    <v-card-text class="pa-4">
                                        <v-data-table
                                          :headers="latestBets"
                                          :items="itemZ"
                                          :items-per-page="5"
                                        >
                                        </v-data-table>
                                    </v-card-text>
                                </v-card>
                            </v-tab-item>
                            <v-tab-item>
                                <v-card flat>
                                    <v-card-text class="pa-4">
                                        <v-data-table
                                            :headers="crmDeposit"
                                            :items="crmDepositI"
                                            :items-per-page="5"
                                            >
                                        </v-data-table>
                                    </v-card-text>
                                </v-card>
                            </v-tab-item>
                        </v-tabs-items>
                    </v-card-body>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card>
                    <v-card-title  class="display-1">
                        System Activities
                    </v-card-title>
                    <v-card-text>
                        <v-data-table
                            :headers="latestBets"
                            :items="itemZ"
                            :items-per-page="5"
                        >
                        </v-data-table>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import { headers,items,crm_deposit,crm_deposit_items} from '@/util/fake.js';
export default {
    name: 'CustomerDetails',
    data: () => ({
        stats: [
            {
                color: 'primary',
                icon: 'mdi-account-group-outline',
                title: 'Bets',
                value: 12,
            },
            {
                color: 'primary',
                icon: 'mdi-cloud-arrow-down-outline',
                title: 'Active Bets',
                value: 8,
            },
            {
                color: 'success',
                icon: 'mdi-database',
                title: 'Withdraw',
                value: 5,
            },
            {
                color: 'light-blue darken-4',
                icon: 'mdi-minus-circle',
                title: 'Lost Bet',
                value: 28,
            },
        ],
        stats1: [
            {
                color: 'primary',
                icon: 'mdi-currency-usd',
                title: 'Account',
                value: 1200,
            },
            {
                color: 'primary',
                icon: 'mdi-alert',
                title: 'Reset',
                value: 23456,
            }
        ],
        tab: null,
        headers:null,
        tabitems: [
          'Latest Bets', 'Old Bets', 'Deposits', 'Withdrawals', 'CRM Deposit',
        ],
        dialog: false,
        dialog1: false,
        dialog2: false,
    }),
    computed: {
        latestBets() {
            return headers;
        },
        crmDeposit() {
            return crm_deposit;
        },
        itemZ() {
            return items
        },
        crmDepositI() {
            return crm_deposit_items;
        }
    },
    mounted() {

    }
}
</script>