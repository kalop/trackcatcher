<template>
  <v-app>
    <v-app-bar app color="grey" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Trackcatcher"
          class="shrink mt-1 hidden-sm-and-down"
          min-width="100"
          src="./assets/logo.png"
          width="500"
        />
      </div>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
