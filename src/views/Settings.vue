<template>
    <v-container>
        <v-row>
            <v-col md="6">
                <v-card>
                    <v-card-title>
                        <span class="display-1">Manage Settings</span>
                    </v-card-title>
                    <v-card-text>
                        <v-select
                            :items="items"
                            item-text="text"
                            item-value="value"
                            outlined
                            dense
                        >

                        </v-select>
                        <v-btn 
                            class="primary"
                            block
                        >
                            Submit
                        </v-btn>
                        
                        <v-textarea
                            class="mt-3"
                            outlined
                            name="input-7-4"
                            label="Message"
                        ></v-textarea>
                        <v-btn 
                            class="primary"
                            block
                        >
                            Dispatch
                        </v-btn>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col md="6">
                <v-card>
                    <v-card-title>
                        <span class="display-1">SMS Statistics</span>
                    </v-card-title>
                    <v-card-text>
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-left">
                                            Country
                                        </th>
                                        <th class="text-left">
                                            All SMS
                                        </th>
                                        <th>
                                            Premium
                                        </th>
                                        <th>
                                            App Count
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(arg,i) in sms" :key="`pt${i}`">
                                        <td>{{ arg.name }}</td>
                                        <td>{{ arg.total }}</td>
                                        <td>{{ arg.premium }}</td>
                                        <td>{{ arg.count }}</td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-card-text>
                </v-card>
            </v-col>    
        </v-row>
    </v-container>
</template>
<script>
export default {
    name:'Settings',
    data: () =>({
        items:[
            { text:'Activate',value:1 },
            { text:'Deactivate',value:0 }
        ],
        sms:[
            { name:'Burundi', total: 142656, premium: 0, count: 40520}
        ]
    })
}
</script>