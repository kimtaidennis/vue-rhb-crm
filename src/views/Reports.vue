<template>
	<v-container>
		<v-row>
			<v-col md="8" class="align-center">
				{{ dateRangeText }}
			</v-col>
			<v-col class="justify-end align-center" md="4">
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
		</v-row>
		<v-row>
			<v-col
		        v-for="({ ...attrs }, i) in stats2"
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
			<v-col md="9">
				<v-card>
                    <v-card-title>
                    	<span class="display-1">Top 5 Deposits</span> 
                    </v-card-title>
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
                </v-card>
			</v-col>
			<v-col md="3">
				<material-stat-card v-bind="deposit">
		        </material-stat-card>
			</v-col>
		</v-row>
		<v-row>
			<v-col md="9">
				<v-card>
                    <v-card-title>
                    	<span class="display-1">Top 5 Withdrawals</span>
                    </v-card-title>
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
                </v-card>
			</v-col>
			<v-col md="3">
				<material-stat-card v-bind="withdrawal">
		        </material-stat-card>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
import { deposits,deposits_items} from '@/util/fake.js';
export default {
    name: 'ReportsView',
    data: () => ({
    	date:[],
    	stats1: [
	        {
				color: 'primary',
				icon: 'mdi-curling',
				title: 'All Bets',
				value: '1554',
	        },
	        {
				color: 'primary',
				icon: 'mdi-curling',
				title: 'Active Bets',
				value: '1554',
	        },
	        {
				color: 'primary',
				icon: 'mdi-currency-usd',
				title: 'Lost Bets',
				value: 2182398.00,
	        },
	        {
				color: 'success',
				icon: 'mdi-alert',
				title: 'Won Bets',
				value: 10,
	        },
  		],
  		stats2: [
	        {
				color: 'primary',
				icon: 'mdi-curling',
				title: 'Amount Staked',
				value: '1554',
	        },
	        {
				color: 'primary',
				icon: 'mdi-curling',
				title: 'Amount Payable',
				value: '1554',
	        },
	        {
				color: 'primary',
				icon: 'mdi-currency-usd',
				title: 'Total Won',
				value: 2182398.00,
	        },
	        {
				color: 'success',
				icon: 'mdi-alert',
				title: 'Total Lost',
				value: 10,
	        },
  		],
  		deposit:{
			color: 'primary',
			icon: 'mdi-currency-eur',
			title: 'Deposits',
			value: 'BIF 1554',
        },
        withdrawal:{
			color: 'primary',
			icon: 'mdi-currency-eur',
			title: 'Withdrawals',
			value: 'BIF 1554',
        },
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