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
        <v-col cols="3">
          <ListComponent :expanded="listExpanded" @toggle-expand="toggleList"></ListComponent>
        </v-col>
        <v-col :cols="listExpanded ? 9 : 12">
          <v-row justify="space-between">
            <v-col cols="auto">
              <v-icon @click="toggleExpand">{{ listExpanded ? 'mdi-close' : 'mdi-menu' }}</v-icon>
            </v-col>
            <v-col cols="auto">
              <v-switch label="Fit bounds track" color="secondary" v-model="fitBounds"></v-switch>
            </v-col>
          </v-row>
          <MapComponent />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue';
import ListComponent from '../components/ListComponent.vue';
import MapComponent from '../components/MapComponent.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    ListComponent,
    MapComponent,
  },
  setup() {
    const fitBounds = ref(false);
    const searchInput = ref('');
    const listExpanded = ref(true);

    const toggleList = () => {
      listExpanded.value = !listExpanded.value;
    };

    const toggleExpand = () => {
      listExpanded.value = !listExpanded.value;
    };

    return {
      fitBounds,
      searchInput,
      listExpanded,
      toggleList,
      toggleExpand
    };
  },
  methods: {
    onUpload() {
      console.log('Upload clicked!');
    },
    onLogin() {
      console.log('Login clicked!');
    },
  },
});
</script>
