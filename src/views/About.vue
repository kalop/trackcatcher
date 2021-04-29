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
      const fd = new FormData();
      // fd.append("image", this.selectedFile, this.selectedFile.name);
      fd.append("name", "track_01");
      // fd.append("track", '{"test":"test"}');
      var querystring = require("querystring");

      // axios
      // .post(
      //   "http://localhost:1337/tracks", fd,...

      axios
        .post(
          "http://localhost:1337/tracks",
          querystring.stringify({ name: "track01" }),
          {
            onUploadProgress: uploadEvent => {
              console.log(
                "Upload Progress: " +
                  Math.round((uploadEvent.loaded / uploadEvent.total) * 100) +
                  "%"
              );
            }
          }
        )
        .then(res => {
          console.log(res);
          this.$refs.fileInput.reset();
          this.show_alert = true;
        });
    }
  }
};
</script>