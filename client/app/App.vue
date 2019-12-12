<template>
  <div id="app">

  <body> 
    

    <nav class="navbar navbar-light bg-light">
		  <a class="navbar-brand" href="/users/loggedIn"><img src="https://raw.githubusercontent.com/xnngyn/Scissoroo/master/public/images/Scissoroo_Logo.jpg" width="100" height="100" alt=""></a> <!--../Bilder/Scissoroo_Logo.jpg-->
			<form class="form-inline">
			</form>
      <HomeNichtEingeloggt></HomeNichtEingeloggt>
      </nav>	

    </body>
  </div>
</template>

<script>
import HomeNichtEingeloggt from './component/HomeNichtEingeloggt'


export default {
  components: {
'HomeNichtEingeloggt': HomeNichtEingeloggt


  },
  name: 'app',
  data () {
    return {
      
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
