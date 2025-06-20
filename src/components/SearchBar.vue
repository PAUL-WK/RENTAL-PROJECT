<!-- <template>
    <div class="filters">
      <input type="text" v-model="query" placeholder="Search location..." />
      <select v-model="selectedBedrooms">
        <option value="">Any Bedrooms</option>
        <option value="1">1 Bedroom</option>
        <option value="2">2 Bedrooms</option>
        <option value="3">3+ Bedrooms</option>
      </select>
      <select v-model="selectedPrice">
        <option value="">Any Price</option>
        <option value="<5000">Below 5000</option>
        <option value="5000-10000">5000 - 10000</option>
        <option value=">10000">Above 10000</option>
      </select>
      <button @click="search">Search</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const query = ref('')
  const selectedBedrooms = ref('')
  const selectedPrice = ref('')
  
  function search() {
    console.log('Searching with:', {
      location: query.value,
      bedrooms: selectedBedrooms.value,
      price: selectedPrice.value
    })
    // Here, trigger map update or API call
  }
  </script>
  
  <style scoped>
  .filters {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-bottom: 1rem;
  }
  input, select, button {
    padding: 0.5rem;
    font-size: 1rem;
  }
  </style>
   -->

   <!-- components/SearchBar.vue -->
<template>
    <div class="search-bar">
      <input v-model="location" placeholder="Enter location..." />
      <button @click="searchLocation">Search</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const emit = defineEmits(['location-selected'])
  const location = ref('')
  
  async function searchLocation() {
    // Use OpenStreetMap Nominatim API to geocode
    const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location.value)}`)
    const data = await res.json()
    if (data.length > 0) {
      const coords = {
        lat: parseFloat(data[0].lat),
        lon: parseFloat(data[0].lon),
        name: location.value
      }
      emit('location-selected', coords)
    } else {
      alert('Location not found.')
    }
  }
  </script>
  
  <style scoped>
  .search-bar {
    display: flex;
    gap: 0.5rem;
  }
  .search-bar input {
    padding: 0.5rem;
    width: 250px;
  }
  .search-bar button {
    padding: 0.5rem 1rem;
    background-color: #0071c2;
    color: white;
    border: none;
    border-radius: 4px;
  }
  </style>
  