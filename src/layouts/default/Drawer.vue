<template>
  <v-navigation-drawer
    id="default-drawer"
    v-model="drawer"
    :dark="dark"
    :right="$vuetify.rtl"
    :src="drawerImage ? image : ''"
    :mini-variant.sync="mini"
    mini-variant-width="80"
    app
    width="260"
  >
    <template
      v-if="drawerImage"
      #img="props"
    >
      <v-img
        :key="image"
        :gradient="gradient"
        v-bind="props"
      />
    </template>

    <div class="px-2">
      <default-drawer-header />
      <v-divider class="mx-3 mb-2" />
      <default-list :items="items" />
    </div>
  </v-navigation-drawer>
</template>

<script>
// Utilities
  import { get, sync } from 'vuex-pathify'

  export default {
    name: 'DefaultDrawer',

    components: {
      DefaultDrawerHeader: () =>
      import(
        /* webpackChunkName: "default-drawer-header" */
        './widgets/DrawerHeader'
      ),
      DefaultList: () =>
      import(
        /* webpackChunkName: "default-list" */
        './List'
      ),
    },

    computed: {
      ...get('user', ['dark', 'gradient', 'image']),
      ...get('app', ['items', 'version']),
      ...sync('app', ['drawer', 'drawerImage', 'mini']),
    },
  }
</script>

<style lang="sass">
#default-drawer
  .v-list-item
    margin-bottom: 8px

  .v-list-item::before,
  .v-list-item::after
    display: none

  .v-list-group__header__prepend-icon,
  .v-list-item__icon
    margin-top: 12px
    margin-bottom: 12px
    margin-left: 4px

  &.v-navigation-drawer--mini-variant
    .v-list-item
      justify-content: flex-start !important
</style>
