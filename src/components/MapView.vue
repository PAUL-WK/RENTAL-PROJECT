<script setup>
import { onMounted, ref, defineExpose } from 'vue'
import 'ol/ol.css'
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'

const mapTarget = ref(null)
let map

onMounted(() => {
  map = new Map({
    target: mapTarget.value,
    layers: [new TileLayer({ source: new OSM() })],
    view: new View({
      center: [36.8219, -1.2921], // Default Nairobi coords in lon/lat
      zoom: 10,
      projection: 'EPSG:4326'
    })
  })
})

// Expose a function to zoom from parent
function zoomTo(lat, lon) {
  if (map) {
    map.getView().setCenter([lon, lat])
    map.getView().setZoom(14)
  }
}

defineExpose({ zoomTo })
</script>

<template>
  <div ref="mapTarget" style="width: 100%; height: 400px; border-radius: 8px;" />
</template>
