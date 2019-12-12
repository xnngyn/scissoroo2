<template>
  <div id="app">
      <h1>Scissoroo</h1>
  
		

  <body> 
    

    <nav class="navbar navbar-light bg-light">
		  <a class="navbar-brand" href="/users/loggedIn"><img src="https://raw.githubusercontent.com/xnngyn/Scissoroo/master/public/images/Scissoroo_Logo.jpg" width="100" height="100" alt=""></a> <!--../Bilder/Scissoroo_Logo.jpg-->
			<form class="form-inline">
				<a class="btn btn-secondary mr-sm-2" href="/users/profile" role="button">Mein Profil</a>
				<a class="btn btn-secondary"  href="/users/logout" role="button">Ausloggen</a>
			</form>
      </nav>	
		 
      
    <hr>
    <router-link to="/">Home</router-link>
    <router-link to="/signin">Einloggen</router-link>
    <router-link to="/posts">Post</router-link>
    <router-link to="/results">Ergebnisse</router-link>
    <router-link to="/HomeButton">Buttons anzeigen</router-link>
    <router-link to="/HomeText">HomeText anzeigen</router-link>
    <hr>
    <router-view></router-view>
    <h1>{{ msg }}</h1>
    </body>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Aller Xuan-Anh Penis ist sau leicht :('
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
	background-color: gray;
	background-image: url(https://raw.githubusercontent.com/xnngyn/Scissoroo/master/public/images/Home_Hintergrund.jpg);
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
}

</style>
