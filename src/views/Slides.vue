<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <material-card
                    icon="mdi-clipboard-text"
                    icon-small
                    title="Slides"
                    color="accent"
                >      
                    <v-card-text>
                        <v-data-table
                            :headers="headers"
                            :items="items"
                            :items-per-page="5"
                        >
                            <template v-slot:top>
                                <v-toolbar flat>
                                    <v-spacer></v-spacer>
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
                                                Add Slide
                                            </v-btn>
                                        </template>
                                        <v-card>
                                            <v-card-title>
                                                <span class="text-h5"> Add Slide</span>
                                            </v-card-title>
                                            <v-card-text> 
                                                <v-row>
                                                    <v-col>
                                                        <v-menu
                                                            ref="menu"
                                                            v-model="menu"
                                                            :close-on-content-click="false"
                                                            :return-value.sync="item.date"
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
                                                                v-model="item.date"
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
                                                                    @click="$refs.menu.save(item.date)"
                                                                >
                                                                    OK
                                                                </v-btn>
                                                            </v-date-picker>
                                                        </v-menu>
                                                    </v-col>
                                                    <v-col md="12">
                                                        <v-file-input
                                                            accept="image/*"
                                                            label="File input"
                                                            v-model="item.file"
                                                        ></v-file-input>
                                                        <v-radio-group
                                                            v-model="item.lang"
                                                            column
                                                        >
                                                            <v-radio
                                                                label="English"
                                                                value="En"
                                                            ></v-radio>
                                                            <v-radio
                                                                label="French"
                                                                value="Fr"
                                                            ></v-radio>
                                                        </v-radio-group>
                                                    </v-col>
                                                </v-row>
                                                <v-row>
                                                    <v-col md="4">
                                                        <v-checkbox
                                                            v-model="item.virtuals"
                                                            label="Virtuals"
                                                        ></v-checkbox>
                                                    </v-col>
                                                    <v-col md="4">
                                                        <v-checkbox
                                                            v-model="item.casino"
                                                            label="Casino"
                                                        ></v-checkbox>
                                                    </v-col>
                                                    <v-col md="4">
                                                        <v-checkbox
                                                            v-model="item.general"
                                                            label="general"
                                                        ></v-checkbox>
                                                    </v-col>
                                                </v-row>
                                            </v-card-text>
                                            <v-card-actions>
                                                <v-spacer></v-spacer>
                                                <v-btn
                                                    color="purple"
                                                    @click="close"
                                                >
                                                    Cancel
                                                </v-btn>
                                                <v-btn
                                                    color="primary"
                                                    @click="save"
                                                >
                                                    Save
                                                </v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-dialog>
                                </v-toolbar>
                            </template>
                            <template v-slot:[`item.date`]="{ item }">
                                {{ item.date | moment('DD-MM-YY HH:mm') }}
                            </template>
                            <template v-slot:[`item.created_at`]="{ item }">
                                {{ item.created_at | moment('DD-MM-YY HH:mm') }}
                            </template>
                            <template v-slot:[`item.status`]="{ item }">
                                <span class="label" v-if="item.status">Active</span>
                                <span class="label red" v-if="!item.status">InActive</span>
                            </template>
                            <template v-slot:[`item.actions`] ="{item}">
                                <v-icon
                                    small
                                    class="mr-2"
                                    @click="editItem(item)"
                                >
                                    mdi-pencil
                                </v-icon>
                            </template>
                        </v-data-table>
                    </v-card-text>
                </material-card>
                <v-dialog      
                    v-model="dialog1"
                    persistent
                    max-width="300px"
                >
                <v-card>
                    <v-card-title>
                        <span class="display-1">Activate Slide</span> 
                    </v-card-title>
                    <v-card-text>
                        <v-radio-group
                            v-model="status"
                            row
                        >
                            <v-radio
                                label="Active"
                                :value=true
                            ></v-radio>
                            <v-radio
                                label="Inactive"
                                :value=false
                            ></v-radio>
                        </v-radio-group>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="red"
                            @click="close1"
                            dark
                        >
                            Cancel
                        </v-btn>
                        <v-btn
                            color="green"
                            @click="save1"
                            dark
                        >
                            Submit
                        </v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import { slides,slides_item} from '@/util/fake.js';
export default {
    name: 'Slides',
    data: () =>({
        dialog: false,
        dialog1: false,
        menu: false,
        item: {
            date: [],
            file: null,
            lang: null,
            virtuals: null,
            jackpot: null,
            casino: null,
            general: null
        },
        status: null
    }),
    computed: {
        headers() {
            return slides;
        },
        items() {
            return slides_item
        },
        dateRangeText () {
            return this.item.date.join(' - ')
        },
    },
    methods: {
        editItem: function(item) {
            this.dialog1 = true;
            this.status = item.status
        },
        close: function () {
            this.dialog = false
        },
        save: function () {
            console.log(this.item);
            this.close();
        },
        close1: function () {
            this.dialog1 = false
        },
        save1: function () {
            this.dialog1 = false
        }
    }
}
</script>
<style scoped>
   
</style>