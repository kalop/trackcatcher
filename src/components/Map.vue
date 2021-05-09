<template>
  <div id="map"></div>
</template>

<script>
// import * as LE from "leaflet";
import L from "leaflet-gpx";
import togpx from "togpx";

export default {
  props: ["trackToRender", "optionsChecked"],
  data() {
    return {
      data: null,
      map: null,
      track: null,
      layer: null,
      fit_bounds: false
    };
  },
  mounted() {
    this.loadMap();
    let track = this.getTrack();
    this.loadTrack(track);

    this.map.on("zoomend", function() {});
  },
  watch: {
    trackToRender() {
      if (this.layer) {
        this.layer.remove();
      }
      let track = this.getTrack();
      console.log(track);

      this.loadTrack(track);
    },
    optionsChecked(newVal) {
      if (newVal.includes("fit_bounds_selected")) {
        this.fit_bounds = true;
      } else {
        this.fit_bounds = false;
      }
    }
  },
  methods: {
    loadMap(lat = 10, lng = 0, zoom = 2) {
      console.log("loadMap");
      this.map = L.map("map").setView([lat, lng], zoom);
      L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          'Map data &copy; <a href="http://www.osm.org">OpenStreetMap</a>'
      }).addTo(this.map);
      return this.map;
    },
    getTrack() {
      console.log("track to render:" + this.trackToRender.name);
      return this.trackToRender.track;
    },
    loadTrack(track) {
      let vm = this;

      let gpx_track = togpx(track);
      this.layer = new L.GPX(gpx_track, {
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
        //   wptIcons: {
        //     "Coffee shop": new L.AwesomeMarkers.icon({
        //       icon: "coffee",
        //       prefix: "fa",
        //       markerColor: "blue",
        //       iconColor: "white"
        //     })
        //   }
        //   // startIconUrl: "images/start.png",
        //   // endIconUrl: "images/finish.png",
        //   // shadowUrl: "images/pin-shadow.png"
        // }
      });

      if (this.fit_bounds) {
        this.layer.on("loaded", function(e) {
          vm.map.fitBounds(e.target.getBounds());
        });
      }

      this.layer.addTo(this.map);
    },
    start() {}
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
