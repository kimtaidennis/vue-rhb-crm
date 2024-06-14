<template>
    <v-container
        id="dashboard-view"
        fluid
        tag="section"
    >
        <v-row>
            <v-col
                cols="12"
                md="12"
            >
                <material-card
                    icon="mdi-account-group-outline"
                    icon-small
                    title="Customers List"
                    color="accent"
                >
                    <v-card-title>
                        <v-spacer></v-spacer>
                        <v-spacer></v-spacer>
                        <v-spacer></v-spacer>
                        <v-spacer></v-spacer>
                        <v-spacer></v-spacer>
                        <v-spacer></v-spacer>
                        <v-text-field
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Enter Phone Number"
                            single-line
                            hide-details
                            class="mb-2"
                        ></v-text-field>
                    </v-card-title>
                    <v-card-text>
                        <v-data-table
                            :headers="headers"
                            :items="items"
                            :items-per-page="8"
                            :loading="loading"
                            class="elevation-1"
                        >
                            <template v-slot:[`item.bonus`]="{ item }">
                                {{ item.bonus.toLocaleString() }}
                            </template>
                            <template v-slot:[`item.actions`]="{ item }">
                                <v-icon
                                    small
                                    class="mr-2"
                                    @click="editItem(item)"
                                >
                                    mdi-pencil
                                </v-icon>
                                <v-icon
                                    small
                                    @click="deleteItem(item)"
                                >
                                    mdi-delete
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
export default {
    name: 'Customers',
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
                text: 'Main',
                value: 'main',
                align: 'center',
            },
            {
                sortable: false,
                text: 'Bonus',
                value: 'bonus',
                align: 'center',
            },
            {
                sortable: false,
                text: 'Created At',
                value: 'created_at',
                align: 'center',
            },
            {
                sortable: false,
                text: 'Actions',
                value: 'actions',
            },
        ],
        items: [
            {
                name: 'Dennis Nest',
                phone: '25765796835',
                main: 0,
                bonus: 1000,
                created_at:'2023-04-08 08:22:54'
            },
            {
                name: 'N/A',
                phone: '25765796835',
                main: 290,
                bonus: 1000,
                created_at:'2023-04-08 08:22:54'
            },
            {
                name: 'N/A',
                phone: '25765796835',
                main: 290,
                bonus: 1000,
                created_at:'2023-04-08 08:22:54'
            },
            {
                name: 'N/A',
                phone: '25765796835',
                main: 290,
                bonus: 1000,
                created_at:'2023-04-08 08:22:54'
            },
            {
                name: 'N/A',
                phone: '25765796835',
                main: 290,
                bonus: 1000,
                created_at:'2023-04-08 08:22:54'
            },
            {
                name: 'N/A',
                phone: '25765796835',
                main: 290,
                bonus: 1000,
                created_at:'2023-04-08 08:22:54'
            },
            {
                name: 'N/A',
                phone: '25765796835',
                main: 290,
                bonus: 1000,
                created_at:'2023-04-08 08:22:54'
            },
            {
                name: 'N/A',
                phone: '25765796835',
                main: 290,
                bonus: 1000,
                created_at:'2023-04-08 08:22:54'
            },
            {
                name: 'N/A',
                phone: '25765796835',
                main: 290,
                bonus: 1000,
                created_at:'2023-04-08 08:22:54'
            },
            {
                name: 'N/A',
                phone: '25765796835',
                main: 290,
                bonus: 1000,
                created_at:'2023-04-08 08:22:54'
            },
            
        ],
        loading:false,
        search:''
    }),
    methods:{
        editItem: function(item) {
            this.$router.push('/customers/details/1');
        },
        deleteItem: function(item) {
            console.log(item);
        }
    }
}
</script>
