<template>
  <div id="map"></div>
</template>

<script>
// import L from "leaflet";
import L from "leaflet-gpx";
import track from "./../assets/tracks/tor.gpx";
// import track from "./../assets/tracks/terrassa_calella.gpx";

export default {
  data() {
    return {
      data: null,
      map: null
    };
  },
  mounted() {
    this.load_map();

    this.load_track(track);

    this.map.on("zoomend", function() {});
  },
  methods: {
    load_map() {
      this.map = L.map("map").setView([10, 0], 2);
      L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          'Map data &copy; <a href="http://www.osm.org">OpenStreetMap</a>'
      }).addTo(this.map);
      return this.map;
    },
    load_track(track) {
      let vm = this;
      new L.GPX(track, {
        async: true,
        polyline_options: {
          color: "blue",
          opacity: 0.6,
          weight: 5,
          lineCap: "round"
        },
        gpx_options: {
          parseElements: ["track"],
          joinTrackSegments: false
        }
        // marker_options: {
        //   startIconUrl: "images/start.png",
        //   endIconUrl: "images/finish.png",
        //   shadowUrl: "images/pin-shadow.png"
        // }
      })
        .on("loaded", function(e) {
          vm.map.fitBounds(e.target.getBounds());
        })
        .addTo(this.map);
    }
  }
};
</script>
<style>
#map {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>