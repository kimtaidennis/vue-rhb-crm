<template>
    <v-container>
        <v-row>
            <v-col md="3" v-for="num in 7" :key="`ag${num}`">
                <v-card>
                    <v-card-title>
                        <span class="display-1">{{ items.name }}</span>
                    </v-card-title>
                    <v-card-text>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>
                                    Total Deposits Count
                                </v-list-item-title>
                            </v-list-item-content>

                            <v-list-item-icon>
                                <span class="label">
                                    {{ items.total_deposits }}
                                </span>
                            </v-list-item-icon>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>
                                    Sum Deposits
                                </v-list-item-title>
                            </v-list-item-content>

                            <v-list-item-icon>
                                <span class="label">
                                    {{ items.sum_deposit }}
                                </span>
                            </v-list-item-icon>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>
                                    Sum Withdrawals 
                                </v-list-item-title>
                            </v-list-item-content>

                            <v-list-item-icon>
                                <span class="label red">
                                    {{ items.sum_withdrawal }}
                                </span>
                            </v-list-item-icon>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>
                                    Total Withdrawals
                                </v-list-item-title>
                            </v-list-item-content>

                            <v-list-item-icon>
                                <span class="label red">
                                    {{ items.total_withdrawal }}
                                </span>
                            </v-list-item-icon>
                        </v-list-item>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name:'Agents',
    data: () => ({
        items: {
            name: 'Admin',
            total_deposits: 0,
            sum_deposit: 5400,
            sum_withdrawal: 0,
            total_withdrawal: 0
        }
    })
}
</script>
<style scoped>
   
</style>