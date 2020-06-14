<template>
  <div id="app">
  <v-app style="background: rgba(0,0,0,0);">
  

  <!-- <v-img :src="require('@/assets/images/bg.svg' )"></v-img> -->
  <div id="larpTitle" class="white--text mt-6 text-center display-3">Cosmic Class Reunion</div>
    <div class="white--text mt-6 text-center body-1">Cosmic Class Reunion</div>


  <div class="mx-auto">
 <v-btn dark x-large text  router to="/">
Home
 </v-btn>

  <v-btn dark x-large text router to="/gameplay">
Gameplay
 </v-btn>

   <v-btn dark x-large text router to="/contact">
Contact
 </v-btn>
  </div>


    <!-- <v-app-bar
      app
      color="transparent"
      dark
      flat
    >
    </v-app-bar> -->

       <v-container class="px-0 px-sm-2">
        <v-main fluid fill-height>
          <v-slide-y-transition :hide-on-leave="true">    
         <router-view></router-view>
          </v-slide-y-transition>
        </v-main>
       </v-container>
  </v-app>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {

  },

  data: () => ({
    bgImage: "https://sjferret.com/wp-content/uploads/Thinking-of-getting-a-cat.png"
  }),
};
</script>

<style>

#larpTitle{
    font-family: "Audiowide", sans-serif !important;
}

#app { 
  background: linear-gradient(180deg, rgba(7,7,41,0.8) 0%, rgba(39,76,133,0.16336974242822133) 100%),url('~@/assets/images/bg.svg') no-repeat center bottom fixed ; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

</style>
