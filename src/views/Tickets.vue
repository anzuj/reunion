<template>
  <div>
    <v-card min-height="600" class="pa-10 mainCard text-center">

      <!-- <v-toolbar dark color="blue darken-4" class="text-center">
 Tickets info
      </v-toolbar> -->
      <div class="myTitle">
      Ticket info
      </div>
      <v-divider></v-divider>

      <v-card-text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt in quaerat aperiam ea hic voluptatum, eaque placeat. <br> Voluptates dicta mollitia unde dolorum ab fugiat delectus ipsam possimus rem facere molestias?
      </v-card-text>

<v-row justify="center" >
  <v-col align="center">
  <div class="price">£50</div>
<v-img :src="require('@/assets/images/ticket.png' )" max-width="300" contain></v-img>
  </v-col>

</v-row>


    </v-card>
  </div>
</template>

<style>
.price{
  color: rgb(85, 33, 85);
  position: relative;
  font-family: "Patua One", sans-serif;
  font-weight: bold;
  font-size: 30px;
  top: 120px;
  z-index: 9000;
  right: 95px;
}
.myTitle{
  font-family: "Patua One", sans-serif;
  font-size: 25px;
  padding-bottom: 8px;
}

.v-card__text{
  color: black !important;
}
</style>
