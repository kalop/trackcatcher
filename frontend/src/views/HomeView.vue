<template>
  <v-app>
    <v-container fluid>
      <v-row justify='space-between'>
        <v-col cols='4'>
          <v-img :src='require("../assets/logo.png")' max-height='50' alt='Logo'></v-img>
        </v-col>
        <v-col cols='2' align-self='center'>
          <v-btn @click='onUpload' variant='outlined' class='mr-3'>Upload</v-btn>
          <v-btn @click='onLogin' color='primary'>Login</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-row>
        <v-col cols="2">
          <v-switch label="Fit bounds track" color='secondary' v-model="fitBounds"></v-switch>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-row>
        <v-col cols="3">
          <ListComponent />
        </v-col>
        <v-col cols="9">
          <MapComponent />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import ListComponent from '../components/ListComponent.vue';
import MapComponent from '../components/MapComponent.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    ListComponent,
    MapComponent
  },
  setup() {
    const fitBounds = ref(false)
    const searchInput = ref('')

    return {
      fitBounds,
      searchInput
    }
  },
  methods: {
    onUpload() {
      console.log('Upload clicked!')
    },
    onLogin() {
      console.log('Login clicked!')
    }
  }
})
</script>
