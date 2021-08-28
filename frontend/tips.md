## Create leafet layer from geoJSON

``` javascript
// Map.vue
loadTrack(track) {
      this.layer = new L.geoJSON(track, {});

      if (this.fit_bounds) {
        vm.map.fitBounds(this.layer.getBounds());
      }
      this.layer.addTo(this.map);

```