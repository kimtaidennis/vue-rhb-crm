<template>
     <v-container>
        <v-row>
            <v-col>
                <material-card
                    icon="mdi-clipboard-text"
                    icon-small
                    title="Payments"
                    color="accent"
                >
                    <v-card-text>
                        <v-data-table
                            :headers="headers"
                            :items="items"
                            :items-per-page="10"
                        >
                            <template v-slot:[`item.amount`]="{ item }">
                                {{ item.amount.toLocaleString() }}
                            </template>
                            <template v-slot:[`item.code`]="{ item }">
                                <span class="label">
                                    {{ item.code }}
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
import { deposits,deposits_items} from '@/util/fake.js';
export default {
    name:'Payments',
    data: () => ({

    }),
    computed: {
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