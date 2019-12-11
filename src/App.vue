<template>
  <div id="app">
    
  <div id="test">
    <img src="https://raw.githubusercontent.com/xnngyn/Scissoroo/master/public/images/Scissoroo_Logo.jpg" width="100" height="100" alt="">
</div> 
  <body> 
    <h1>{{ msg }}</h1>
    </body>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Aller Anfang ist schwer :('
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
