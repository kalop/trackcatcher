<template>
  <div ref='map' :style='{ height: "700px" }'></div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, ref } from 'vue'
import L from 'leaflet'

export default defineComponent({
  name: 'MapComponent',
  props: {
    setMapComponentInstance: Function
  },
  setup(props) {
    const map = ref<HTMLElement | null>(null)
    let leafletMap: L.Map | null = null;

    onMounted(() => {
      leafletMap = L.map(map.value as HTMLElement).setView([41.56, 2.00], 13)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(leafletMap);
      if (props.setMapComponentInstance) {
        props.setMapComponentInstance({
          resizeMap: () => {
            if (leafletMap !== null) {
              setTimeout(() => {
                if (leafletMap !== null) {
                  leafletMap.invalidateSize();
                }
              }, 100);
            }
          }
        });
      }
    });

    return {
      map
    }
  }
})
</script>
