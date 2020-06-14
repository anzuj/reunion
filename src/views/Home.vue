<template>

    <v-row align="center">

<!-- 
<v-img :src="require('@/assets/images/label.png' )" max-width="200" contain id="label"></v-img> -->

      <v-col align="center">
        <v-card id="intro" tile class="quick-fade-in  py-16">
       <div class="blue--text text--lighten-4 text-button">28th Aug - 30th Aug 2020</div>
 <div id="larpTitle" class="mt-6 text-h4 text-md-h1 orange--text text--lighten-3">Cosmic Class Reunion</div>
 <div id="larp" >LARP</div>
    <p class="mt-6 introText">Enter coordinates to AwesomeLocation and lightjump over to meet your intergalactic classmates!
<br><br>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia nibh non urna placerat, non finibus turpis condimentum. <br> Donec eu dictum justo. Ut hendrerit elementum quam, vitae rutrum leo convallis at. Integer nec urna sed mi imperdiet suscipit. Vivamus pharetra leo eu imperdiet mattis. 
</p>
  
<v-row justify="center">

    <v-btn x-large dark text width="200" class="font-weight-bold" color="secondary lighten-3" router to="/gameplay">learn more...</v-btn>
 
</v-row>
     </v-card>
      </v-col>

    </v-row>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style>
/* div.wrapper .v-btn{
  background: url('~@/assets/images/label.png')  no-repeat center center ; 
  background-size: 100%;
  transition: filter 0.2s linear;
  filter: brightness(160%);
} */



/* div.wrapper .v-btn:hover{
  filter: hue-rotate(150deg) brightness(160%);
} */

/* .v-btn::before{
  background: transparent;
} */
#larp{
  color:rgb(83, 144, 197);
  font-size: 20px;
  letter-spacing: 2px;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.introText{
  color: rgb(210, 210, 238);
  font-weight: 300;
  letter-spacing: 0.6px;
}

#intro {
  color: white !important;
  background: rgba(26, 17, 75, 0.85);
}

</style>
