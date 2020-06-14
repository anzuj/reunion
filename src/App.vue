<template>
  <div id="app">
    <v-app>
      <!-- <v-row align="center" class="mb-6" no-gutters>
        <v-col style="max-width:40px" v-show="$vuetify.breakpoint.xs">
          <v-app-bar-nav-icon dark color="secondary lighten-2" @click="drawer = true"></v-app-bar-nav-icon>
        </v-col>
        <v-col>
          <h1
            id="larpsubTitle"
            class="white--text text-center font-weight-regular"
          >Cosmic Class Reunion</h1>
        </v-col>
      </v-row>-->

<div>
  <v-app-bar-nav-icon v-show="$vuetify.breakpoint.xs" dark color="secondary lighten-2" @click="drawer = !drawer"></v-app-bar-nav-icon>

    <v-navigation-drawer v-model="drawer" absolute dark temporary color="primary" style="z-index: 9000;">
        <v-list nav dense>
          <v-list-item-group active-class="purple--text text--lighten-3">
            <v-list-item :href="`/#${item.href}`" v-for="(item, i) in menuItems" :key="i">
              <v-list-item-title
                class="my-3 text-center text-h5"
                style="line-height: 30px"
              >{{item.text}}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

 <h1 id="larpsubTitle" class="white--text text-center font-weight-regular">Cosmic Class Reunion</h1>
</div>
     
      <v-container class="px-0">
        <nav v-show="$vuetify.breakpoint.smAndUp">
          <v-row justify="center" class="mx-0">
            <v-btn
              active-class="activeBtn"
              v-for="(item, i) in menuItems"
              :key="i"
              class="mx-2"
              dark
              x-large
              color="orange darken-2"
              router
              :to="item.href"
            >
              <span class="btn-text">{{item.text}}</span>
            </v-btn>
          </v-row>
        </nav>
        <!-- class="mt-5" -->
        <v-main class="mt-6">
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
    drawer: false,
    menuItems: [
      { text: "Home", href: "/" },
      { text: "Gameplay", href: "/gameplay" },
      { text: "Sign up", href: "/signup" },
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
  margin-top: 5px !important;
  transform: scale(1.15) skewX(-15deg) !important;
  z-index: 9000;
}

/* .v-btn--router--active:before {
 background-color: rgb(96, 103, 186) !important;
} */

nav .v-btn {
  transform: skewX(-15deg);
}

nav .btn-text {
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
  height: 100% !important;
}

@keyframes myfirst {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.mainCard {
  background-color: rgba(255, 255, 255, 0.85) !important;
}

.quick-fade-in {
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.25s;
}

.fade-in {
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.5s;
}

@keyframes fadeInOpacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
