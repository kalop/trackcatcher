<template>
  <div id="map"></div>
</template>

<script>
// import * as LE from "leaflet";
import L from "leaflet-gpx";
import contrabandistes from "@/assets/tracks/tor.gpx";
import terrassa_calella from "@/assets/tracks/terrassa_calella.gpx";
import Eurotrail_spain from "@/assets/tracks/Eurotrail_spain.gpx";
import Motobits from "@/assets/tracks/Motobits-Cervera.gpx";
import terrassa_rellinars from "@/assets/tracks/terrassa_rellinars.gpx";
import matadepera from "@/assets/tracks/matadepera.gpx";

export default {
  props: ["track_to_render"],
  data() {
    return {
      data: null,
      map: null,
      track: null,
      layer: null
    };
  },
  mounted() {
    this.load_map();
    let track = this.get_track();
    this.load_track(track);

    // let vm = this;
    this.map.on("zoomend", function() {
      // console.log(vm.track);
      // console.log(vm.track_to_render);
    });
  },
  watch: {
    track_to_render(newVal, oldVal) {
      console.log("watcher track_to_render:", newVal, oldVal);
      this.layer.remove();
      let track = this.get_track();
      this.load_track(track);
    }
  },
  methods: {
    load_map(lat = 10, lng = 0, zoom = 2) {
      console.log("load_map");
      this.map = L.map("map").setView([lat, lng], zoom);
      L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          'Map data &copy; <a href="http://www.osm.org">OpenStreetMap</a>'
      }).addTo(this.map);
      return this.map;
    },
    get_track() {
      console.log("track to render:" + this.track_to_render);

      switch (this.track_to_render) {
        case "contrabandistes":
          return contrabandistes;
        case "terrassa_calella":
          return terrassa_calella;
        case "Eurotrail_spain":
          return Eurotrail_spain;
        case "Motobits":
          return Motobits;
        case "Rellinars":
          return terrassa_rellinars;
        case "Matadepera":
          return matadepera;
        default:
      }
    },
    load_track(track) {
      // let vm = this;
      this.layer = new L.GPX(track, {
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
      })
        // .on("loaded", function(e) {
        //   console.log("LAYER: ", vm.layer);
        //   vm.map.fitBounds(e.target.getBounds());
        // })
        .addTo(this.map);
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