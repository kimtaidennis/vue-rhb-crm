<template>
  <v-list-group
    :color="gradient !== 1 ? 'white' : undefined"
    :group="group"
    :prepend-icon="item.icon"
    v-model="item.active"
    no-action
    v-bind="$attrs"
  >
    <template v-slot:activator>
      <v-list-item-icon
        v-if="!item.icon && !item.avatar"
        class="text-caption text-uppercase text-center my-2 align-self-center"
        style="margin-top: 14px"
      >
        {{ title }}
      </v-list-item-icon>

      <v-list-item-avatar v-if="item.avatar">
        <v-img :src="item.avatar" />
      </v-list-item-avatar>

      <v-list-item-content v-if="item.title">
        <v-list-item-title v-text="item.title" />
      </v-list-item-content>
    </template>

    <template v-for="(child, i) in item.items">
      <default-list-group
        v-if="child.items"
        :key="`sub-group-${i}`"
        :item="child"
      />

      <default-list-item
        v-if="!child.items"
        :key="`child-${i}`"
        :item="child"
      />
    </template>
  </v-list-group>
</template>

<script>
// Utilities
  import { get } from 'vuex-pathify'

  export default {
    name: 'DefaultListGroup',

    components: {
      DefaultListItem: () => import('./ListItem'),
    },

    props: {
      item: {
        type: Object,
        default: () => ({}),
      },
    },

    computed: {
      gradient: get('user/drawer@gradient'),
      group () {
        return this.genGroup(this.item.items)
      },
      title () {
        const matches = this.item.title.match(/\b(\w)/g)

        return matches.join('')
      },
    },

    methods: {
      genGroup (items) {
        return items
          .reduce((acc, cur) => {
            if (!cur.to) return acc

            acc.push(cur.items ? this.genGroup(cur.items) : cur.to.slice(1, -1))

            return acc
          }, [])
          .join('|')
      },
    },
  }
</script>
