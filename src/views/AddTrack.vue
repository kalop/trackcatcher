<template>
  <div class="about">
    <h1>This is an about page</h1>
    <v-file-input
      chips
      show-size
      small-chips
      truncate-length="26"
      @change="onFileSelected"
      ref="fileInput"
    ></v-file-input>
    <v-alert v-if="show_alert" dense outlined text type="success" ref="success_alert">Uploaded</v-alert>
    <v-btn color="primary" elevation="2" outlined @click="onUpload">Upload</v-btn>
  </div>
</template>

<script>
import axios from "axios";
// import togeojson from "togeojson";
// import jsdom from "jsdom";
let gpxParser = require("gpxparser");
// let fs = require("fs");

export default {
  name: "TestFile",
  data: () => ({
    selectedFile: null,
    show_alert: false
  }),
  methods: {
    onFileSelected(event) {
      console.log(event);
      this.selectedFile = event;
    },
    onUpload() {
      console.log("READ FILE");

      this.uploadTrack(function(err, content) {
        if (err) throw err;
        console.log(content);
      });
    },
    readContent(callback) {
      console.log(this.selectedFile);

      let reader = new FileReader();
      reader.readAsText(this.selectedFile, "UTF-8");
      reader.onload = evt => {
        callback(null, evt.target.result);
      };
    },
    parseGPX(callback) {
      this.readContent(function(err, content) {
        let gpx = new gpxParser();
        gpx.parse(content);
        let geoJSON = gpx.toGeoJSON();
        callback(null, geoJSON);
      });
    },
    uploadTrack(callback) {
      let self = this;
      this.parseGPX(function(err, jsonGPX) {
        if (err) throw err;
        let querystring = require("querystring");
        let url = process.env.VUE_APP_API_URL_BASE.concat("/tracks");
        // let url = "https://enx1stb75vfxdtc.m.pipedream.net";

        let aux = { name: self.selectedFile.name, track: jsonGPX };
        console.log(aux);
        console.log(querystring.stringify(aux));
        axios
          .post(url, aux, {
            onUploadProgress: uploadEvent => {
              console.log(
                "Upload Progress: " +
                  Math.round((uploadEvent.loaded / uploadEvent.total) * 100) +
                  "%"
              );
            }
          })
          .then(res => {
            self.$refs.fileInput.reset();
            self.show_alert = true;
            callback(null, res);
          });
      });
    }
  }
};
</script>