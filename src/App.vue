<template>
  <div id="app">
    <h1>{{ msg }}</h1>
  	<firstcomponent></firstcomponent>
  	<ul>
  		<li><router-link to="/first">first page</router-link></li>
  		<li><router-link to="/second">second page</router-link></li>
  	</ul>
  	<router-view></router-view>
  </div>

</template>

<script>
import firstcomponent from './components/firstcomponent.vue'
export default {
  data () {
  	return {
  		msg: 'Hello Vue!'
  	}
  },
  components: { firstcomponent }
}
</script>

<style>

</style>
