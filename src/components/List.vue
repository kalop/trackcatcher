<template>
  <div>
    <!-- <v-row v-for="i in 100" :key="i" no-gutters style="height: 150px;"> -->
    <v-row v-for="item in items" :key="item.message" style="height: 9em; width:100%">
      <v-col>
        <v-hover v-slot="{ hover }">
          <v-card
            :elevation="hover ? 12 : 2"
            :class="{ 'on-hover': hover }"
            class="pa-15"
            @mouseover="loadTrack(item.message)"
            tile
          >Row {{ item.message }}</v-card>
        </v-hover>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { message: "contrabandistes" },
        { message: "terrassa_calella" },
        { message: "Eurotrail_spain" },
        { message: "Motobits" }
      ],
      hover: false
    };
  },
  methods: {
    loadTrack: function(track) {
      console.log("loadTrack: " + track);
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