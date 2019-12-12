<template>
  <div id="app">
      <h1>Scissoroo</h1>
  <div id="test">
    <img src="https://raw.githubusercontent.com/xnngyn/Scissoroo/master/public/images/Scissoroo_Logo.jpg" width="100" height="100" alt="">
</div> 
  <body> 
    <hr>
    <router-link to="/">Home</router-link>
    <router-link to="/signin">Einloggen</router-link>
    <router-link to="/posts">Post</router-link>
    <router-link to="/results">Ergebnisse</router-link>
    <hr>
    <h1>{{ msg }}</h1>
    </body>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Aller Adrian Anfang ist sau schwer :('
    }
  }
}
</script>

<style>


#test {
  background-color: aliceblue;
  height: 100%;
  
}



body {
	height: 100%;
  background-color: grey;
  background-image: url(https://raw.githubusercontent.com/xnngyn/Scissoroo/master/public/images/Home_Hintergrund.jpg);
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
}

</style>
