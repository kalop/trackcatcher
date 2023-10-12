<template>
  <div ref='map' :style='{ height: "500px", width: "100%" }'></div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, ref } from 'vue'
import L from 'leaflet'

export default defineComponent({
  name: 'MapComponent',
  setup() {
    const map = ref<HTMLElement | null>(null)

    onMounted(() => {
      const leafletMap = L.map(map.value as HTMLElement).setView([41.56, 2.00], 13)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(leafletMap);
    })

    return {
      map
    }
  }
})
</script>
