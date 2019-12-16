<template>
  <div id="app">

  <body> 
    

    <nav class="navbar navbar-light bg-light">
		  <a class="navbar-brand"><div @click="setHomeText"><img src="https://raw.githubusercontent.com/xnngyn/Scissoroo/master/public/images/Scissoroo_Logo.jpg" width="100" height="100" alt=""> </div></a> <!--../Bilder/Scissoroo_Logo.jpg-->
			<form class="form-inline">
			</form>
      <HomeNichtEingeloggt v-if="!eingeloggt"></HomeNichtEingeloggt>
      <HomeEingeloggt v-else-if="eingeloggt"></HomeEingeloggt>
      </nav>	

    </body>
  </div>
</template>

<script>
import HomeNichtEingeloggt from '@/components/HomeNichtEingeloggt';
import HomeEingeloggt from '@/components/HomeEingeloggt';


export default {
  components: {
'HomeNichtEingeloggt': HomeNichtEingeloggt,
'HomeEingeloggt': HomeEingeloggt


  },
  name: 'app',
  data () {
    return {

      eingeloggt:false
      
    }
  },

  methods: {
    
    setHomeText: function() {

      this.$store.state.componentState = 'HomeText';
    }
    
      
    }
  }

</script>

<style>


#Test {
  background-color: white;
  height: 100%;
  
}

html{
	height: 120%;
  background-color: grey;
	background-image: url(https://raw.githubusercontent.com/xnngyn/Scissoroo/master/public/images/Home_Hintergrund.jpg);
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
}

body {
  background-color: white;


}

nav{

  background-color: white;
}

</style>
