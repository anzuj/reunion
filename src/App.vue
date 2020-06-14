<template>
  <div id="app">
    <v-app style="background: rgba(0,0,0,0);">
      <!-- <v-img :src="require('@/assets/images/bg.svg' )"></v-img> -->
      <h2
        id="larpsubTitle"
        class="white--text my-6 text-center font-weight-regular"
      >Cosmic Class Reunion</h2>

      <v-container class="px-0">

<nav>
        <v-row justify="center">
     
      <v-btn active-class="activeBtn" v-for="(item, i) in menuItems" :key="i" class="mx-2" dark x-large color="orange darken-2" router :to="item.href">
        <span class="btn-text">{{item.text}}</span></v-btn>
            <!-- <v-img v-if="i<menuItems.length-1" :src="require('@/assets/images/planet.png' )" width="30" contain id="label"></v-img> -->
        </v-row>
 </nav>
        <v-main fluid fill-height class="mt-5">
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
  name: "App",

  components: {},

  data: () => ({
    menuItems: [
      { text: "Home", href: "/" },
      { text: "Gameplay", href: "/gameplay" },
      { text: "Tickets", href: "/tickets" },
      { text: "Contact", href: "/contact" }
    ]
  })
};
</script>

<style>
/* .v-btn .v-btn--active, .router-link-active {
  background-color: white !important;
  background: white !important;
} */
.activeBtn {
  margin-left: -4px !important;
 margin-top: 5px !important;
transform: scale(1.1) skewX(-15deg) !important;
z-index: 9000;
}

/* .v-btn--router--active:before {
 background-color: rgb(96, 103, 186) !important;
} */

nav .v-btn{
  transform: skewX(-15deg);
}

nav .btn-text{
  transform: skewX(15deg);
}

#larpsubTitle,
#larpTitle {
  font-family: "Audiowide", sans-serif !important;
  text-shadow: 0 0 25px rgb(15, 8, 41);

}

#app {
  background: #110f42;
  /* linear-gradient(180deg, rgba(7,7,41,0.8) 0%, rgba(39,76,133,0.16336974242822133) 100%) */
  background: url("~@/assets/images/bg.svg") no-repeat center bottom fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  font-family: "Raleway", sans-serif;
  animation: myfirst 1s;
  transition: background 1s ease-in;
}

@keyframes myfirst {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.mainCard{
  background-color: rgba(255, 255, 255, 0.85) !important;
}

</style>
