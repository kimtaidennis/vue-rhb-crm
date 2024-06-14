<template>
  <material-card-custom
    class="v-card--material-stats"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template #subtitle>
      <div
        class="text-left text-h3 v-card__subtitle--material-stats"
        v-text="value"
      />
    </template>

    <template #actions>
      <slot name="actions" />
    </template>

    <slot />
  </material-card-custom>
</template>

<script>
  export default {
    name: 'MaterialStatCard',

    props: { value: String },
  }
</script>

<style lang="sass">
.v-card--material-stats.v-card--material
  margin-top:5px !important
.v-card--material-stats.v-card--material .v-card--material__title
  color: #999999
  font-size: .875rem !important
  margin-left: auto
  text-align: left
  padding-left: 0px !important

.v-card__subtitle--material-stats
  color: #3C4858

</style>
