<template>
  <div class="home">
    <div id="middle">
      <div id="filter-layout">
        <FilterSearch />
      </div>
      <div id="middle-offset">
        <div id="left-side">
          <List @hover="onHoverItem" />
        </div>
        <div id="right-side">
          <!-- <Map :track_to_render="track" :key="track" /> -->
          <Map :track_to_render="track" />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Map from "../components/Map";
import FilterSearch from "../components/FilterSearch";
import List from "../components/List";

export default {
  name: "App",

  components: {
    Map,
    FilterSearch,
    List
  },
  methods: {
    onHoverItem(track) {
      this.track = track;
    }
  },

  data: () => ({
    drawer: null,
    track: "test"
  })
};
</script>

<style>
#middle {
  top: 0;
  bottom: 0px;
  margin: 0 auto;
  position: absolute;
  height: 85%;
  width: 100%;
}

#filter-layout {
  position: relative;
  height: 15%;
}
#middle-offset {
  position: relative;
  height: 100%;
  margin-left: 1em;
  margin-right: 1em;
}
#left-side {
  overflow-y: scroll;
}

#left-side {
  width: 40%;
  height: 100%;
}

#right-side {
  background: #999;
  position: absolute;
  right: 0;
  top: 0;
  width: 60%;
  bottom: 0;
}
</style>