// components/PropertyForm.vue
<template>
  <form @submit.prevent="submitProperty">
    <input v-model="property.title" placeholder="Title" required />
    <input v-model="property.price" type="number" placeholder="Price" required />
    <input v-model="property.lat" type="number" placeholder="Latitude" required />
    <input v-model="property.lon" type="number" placeholder="Longitude" required />
    <button type="submit">Add Property</button>
  </form>
</template>

<script setup>
import { reactive } from 'vue'

const property = reactive({ title: '', price: 0, lat: 0, lon: 0 })

function submitProperty() {
  console.log('Property submitted:', property)
  // Post to backend here
}
</script>