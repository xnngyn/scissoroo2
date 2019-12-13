<template>
    <div id="buttons">

        <button @click="component='MyProfile'">Mein Profil</button> 

        <component v-bind:is="component"></component>


        
        <Results></Results>

    </div>

</template>

<script>
import HomeText from './HomeText';
import MyProfile from './MyProfile';



export default {

    components: {
        'HomeText': HomeText,
        'MyProfile': MyProfile,
        
    },
    name: 'buttons',
    data () {
        return {

            component:'HomeText'
            
            
   
    }
  }
}
</script>

<style>

 


</style>