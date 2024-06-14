<template>
  <v-fade-transition mode="out-in">
    <router-view />
  </v-fade-transition>
</template>

<script>
// Styles
  import '@/styles/overrides.sass'
  import '@/styles/styles.css'

  export default {
    name: 'App',
    metaInfo: {
      title: 'App',
      titleTemplate: 'Rahisibet CRM',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  }
</script>
<style>
    .label {
	    display: inline;
	    padding: .5em .6em .5em;
	    font-size: 75%;
	    font-weight: 700;
	    line-height: 1;
	    color: #fff;
	    text-align: center;
	    white-space: nowrap;
	    vertical-align: baseline;
	    border-radius: .25em;
	    margin-right: 2px;
	    background-color: #37bc9b;
	  }
    .label.red { 
        background-color: #da4453;
    }
</style>
