<template>
  <div>
    <!-- <v-row v-for="i in 100" :key="i" no-gutters style="height: 150px;"> -->
    <v-row
      v-for="item in items"
      :key="item.name"
      style="height: 9em; width:100%"
    >
      <v-col>
        <v-hover v-slot="{ hover }">
          <v-card
            :elevation="hover ? 12 : 2"
            :class="{ 'on-hover': hover }"
            class="pa-15"
            @mouseover="loadTrack(item)"
            tile
            >Row {{ item.name }}</v-card
          >
        </v-hover>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      items: [],
      hover: false
    };
  },
  mounted() {
    this.getTracks();
  },
  methods: {
    getTracks: function() {
      axios
        .get(process.env.VUE_APP_API_URL_BASE.concat("/tracks"))
        .then(res => {
          res.data.forEach(element => {
            this.items.push(element);
          });
        });
    },

    loadTrack: function(track) {
      console.dir("loadTrack: " + track, { depth: null });
      this.$emit("hover", track);
    }
  }
};
</script>

<style scoped>
.v-card {
  transition: opacity 0.1s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.5;
}
</style>
