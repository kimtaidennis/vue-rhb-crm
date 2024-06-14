<template>
  <v-container
    id="dashboard-view"
    fluid
    tag="section"
    
  >
    <v-row>
      <v-col cols="12" class="pb-0">
        <div class="text-h4  pb-0 font-weight-light">
        All time
        </div>
      </v-col>
     
      <v-col
        v-for="({ actionText, ...attrs }, i) in stats"
        :key="i"
        cols="12"
        md="6"
        lg="3"
      >
        <material-stat-card v-bind="attrs">
          <template #actions>
            <div class="text-truncate">
              {{ actionText }}
            </div>
          </template>
        </material-stat-card>
      </v-col>

      <v-col cols="12" class="pb-0">
        <div class="text-h4  pb-0 font-weight-light">
          Today
        </div>
      </v-col>
     
      <v-col
        v-for="({ ...attrs }, i) in stats1"
        :key="i"
        cols="12"
        md="6"
        lg="4"
      >
        <material-stat-card v-bind="attrs">
        </material-stat-card>
      </v-col>

      <v-col
        v-for="({ ...attrs }, i) in stats2"
        :key="i"
        cols="12"
        md="6"
        lg="4"
      >
        <material-stat-card v-bind="attrs">
        </material-stat-card>
      </v-col>

      <v-col
        cols="12"
        md="12"
      >
        <material-card
          icon="mdi-clipboard-text"
          icon-small
          title="Recent Deposits"
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
              <template v-slot:[`item.ref_code`]="{ item }">
                <span class="label">
                  {{ item.ref_code }}
                </span>
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
// Utilities
  import { get } from 'vuex-pathify'
  import Vue from 'vue'

  const lineSmooth = Vue.chartist.Interpolation.cardinal({
    tension: 0,
  })

  export default {
    name: 'DashboardView',
    data: () => ({
      headers: [
        {
          sortable: false,
          text: 'Name',
          value: 'name',
        },
        {
          sortable: false,
          text: 'Phone',
          value: 'phone',
          align: 'center',
        },
        {
          sortable: false,
          text: 'Ref Code',
          value: 'ref_code',
          align: 'center',
        },
        {
          sortable: false,
          text: 'Amount',
          value: 'amount',
          align: 'center',
        },
        {
          sortable: false,
          text: 'Made By',
          value: 'made_by',
          align: 'center',
        },
        {
          sortable: false,
          text: 'Created At',
          value: 'created_at',
          align: 'center',
        },
      ],
      items: [
        {
          name: 'N/A',
          phone: '25765796835',
          ref_code: '23040840177304',
          amount: 1700,
          made_by:'system',
          created_at:'2023-04-08 08:22:54'
        },
        {
          name: 'N/A',
          phone: '25765796835',
          ref_code: '23040840177304',
          amount: 10000,
          made_by:'system',
          created_at:'2023-04-08 08:22:54'
        },
        {
          name: 'N/A',
          phone: '25765796835',
          ref_code: '23040840177304',
          amount: '10000',
          made_by:'system',
          created_at:'2023-04-08 08:22:54'
        },
        {
          name: 'N/A',
          phone: '25765796835',
          ref_code: '23040840177304',
          amount: '10000',
          made_by:'system',
          created_at:'2023-04-08 08:22:54'
        },
        {
          name: 'N/A',
          phone: '25765796835',
          ref_code: '23040840177304',
          amount: '10000',
          made_by:'system',
          created_at:'2023-04-08 08:22:54'
        },
        {
          name: 'N/A',
          phone: '25765796835',
          ref_code: '23040840177304',
          amount: '10000',
          made_by:'system',
          created_at:'2023-04-08 08:22:54'
        },
        {
          name: 'N/A',
          phone: '25765796835',
          ref_code: '23040840177304',
          amount: '10000',
          made_by:'system',
          created_at:'2023-04-08 08:22:54'
        },
        {
          name: 'N/A',
          phone: '25765796835',
          ref_code: '23040840177304',
          amount: '10000',
          made_by:'system',
          created_at:'2023-04-08 08:22:54'
        },
        {
          name: 'N/A',
          phone: '25765796835',
          ref_code: '23040840177304',
          amount: '10000',
          made_by:'system',
          created_at:'2023-04-08 08:22:54'
        },
        {
          name: 'N/A',
          phone: '25765796835',
          ref_code: '23040840177304',
          amount: '10000',
          made_by:'system',
          created_at:'2023-04-08 08:22:54'
        },
        {
          name: 'N/A',
          phone: '25765796835',
          ref_code: '23040840177304',
          amount: '10000',
          made_by:'system',
          created_at:'2023-04-08 08:22:54'
        },
      ],
      stats: [
        {
          actionIcon: 'mdi-alert',
          actionText: 'All Time Clients',
          color: 'primary',
          icon: 'mdi-account-group-outline',
          title: 'Clients',
          value: '382901',
        },
        {
          actionIcon: 'mdi-tag',
          actionText: 'All Bets',
          color: 'primary',
          icon: 'mdi-cloud-arrow-down-outline',
          title: 'Bets',
          value: '2361597',
        },
        {
          actionIcon: 'mdi-calendar-range',
          actionText: 'Active Bets',
          color: 'success',
          icon: 'mdi-database',
          title: 'Active Bets',
          value: '16515',
        },
        {
          actionIcon: 'mdi-history',
          actionText: 'Risky Bet',
          color: 'light-blue darken-4',
          icon: 'mdi-minus-circle',
          title: 'Risky Bet',
          value: 'BIF 2000000',
        },
      ],
      stats1: [
        {
          // actionIcon: 'mdi-alert',
          // actionText: 'All Time Clients',
          color: 'primary',
          icon: 'mdi-curling',
          title: 'Deposits',
          value: '1554',
        },
        {
          // actionIcon: 'mdi-tag',
          // actionText: 'Deposited Amount',
          color: 'primary',
          icon: 'mdi-currency-usd',
          title: 'Deposited Amount',
          value: 2182398.00,
        },
        {
          // actionIcon: 'mdi-calendar-range',
          // actionText: 'Withdrawals',
          color: 'success',
          icon: 'mdi-alert',
          title: 'Withdrawals',
          value: 10,
        },
      ],
      stats2: [
        {
          // actionIcon: 'mdi-alert',
          // actionText: 'All Time Clients',
          color: 'primary',
          icon: 'mdi-account-group',
          title: 'Signups',
          value: '95',
        },
        {
          // actionIcon: 'mdi-tag',
          // actionText: 'Deposited Amount',
          color: 'primary',
          icon: 'mdi-cloud-arrow-down-outline',
          title: 'Todays Bets',
          value: 5070,
        },
        {
          // actionIcon: 'mdi-calendar-range',
          // actionText: 'Withdrawals',
          color: 'success',
          icon: 'mdi-tag',
          title: 'Bets Won',
          value: 465,
        },
      ],
    }),
    methods: {
      
    },
    computed: {
      sales: get('sales/sales'),
      totalSales () {
        return this.sales.reduce((acc, val) => acc + val.salesInM, 0)
      },
    },
  }
</script>

