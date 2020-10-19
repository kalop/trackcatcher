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
      data: null
    };
  },
  mounted() {
    var map = L.map("map").setView([10, 0], 2);
    L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        'Map data &copy; <a href="http://www.osm.org">OpenStreetMap</a>'
    }).addTo(map);

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
        console.log("HERE");

        map.fitBounds(e.target.getBounds());
        console.log(e.target.get_name());
      })
      .addTo(map);

    map.on("zoomend", function() {});
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