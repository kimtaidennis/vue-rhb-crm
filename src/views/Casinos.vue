<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <material-card
                    icon="mdi-clipboard-text"
                    icon-small
                    title="Casinos Bets"
                    color="accent"
                >
                    <v-card-text>
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
                    </v-card-text>
                </material-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import { bets,bet_items} from '@/util/fake.js';

export default {
    name: 'Casinos',
    data: () => ({

    }),
    computed: {
        headers() {
            return bets;
        },
        items() {
            return bet_items
        },
    },
}
</script>
<style scoped>

</style>