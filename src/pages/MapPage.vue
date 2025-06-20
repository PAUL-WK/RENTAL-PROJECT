// pages/MapPage.vue
<template>
  <div class="map-page">
    <header class="map-header">
      <h2>Map View of Filtered Rentals</h2>
      <router-link to="/" class="back-btn">⬅ Back to Listings</router-link>
    </header>
    <MapView :filtered-properties="filteredProperties" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import MapView from '../components/MapView.vue'

const route = useRoute()
const filters = route.query



const allProperties = [
  {
    title: 'Modern Apartment',
    location: 'South B, Nairobi',
    lat: -1.305, lon: 36.850,
    price: 15000,
    beds: 2,
    baths: 1,
    internet: 'Free Wi-Fi',
    description: 'A cozy and modern apartment ideal for young professionals.',
    image: 'https://images.unsplash.com/photo-1600585153837-59b3c8c8f7e8'
  },
  {
    title: 'Executive Studio',
    location: 'Kilimani, Nairobi',
    lat: -1.292, lon: 36.783,
    price: 20000,
    beds: 1,
    baths: 1,
    internet: 'Unlimited Wi-Fi',
    description: 'Luxury furnished studio with great amenities in Kilimani.',
    image: 'https://images.unsplash.com/photo-1600585154486-5c4f79b12f7a'
  },
  {
    title: 'Furnished Loft',
    location: 'Westlands, Nairobi',
    lat: -1.264, lon: 36.812,
    price: 30000,
    beds: 2,
    baths: 2,
    internet: 'Fiber Internet',
    description: 'A spacious loft apartment with balcony and smart home features.',
    image: 'https://images.unsplash.com/photo-1600585153917-0617d46f15e4'
  },
  {
    title: 'One Bedroom Unit',
    location: 'Embakasi, Nairobi',
    lat: -1.322, lon: 36.925,
    price: 10000,
    beds: 1,
    baths: 1,
    internet: 'Basic Wi-Fi',
    description: 'Affordable one-bedroom home near the airport.',
    image: 'https://images.unsplash.com/photo-1588854337221-4f1e7f1192b6'
  },
  {
    title: 'Three Bedroom House',
    location: 'Runda, Nairobi',
    lat: -1.217, lon: 36.826,
    price: 45000,
    beds: 3,
    baths: 2,
    internet: 'Premium Internet',
    description: 'Family-sized house in a gated estate with private parking.',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914'
  },
  {
    title: 'Serviced Apartment',
    location: 'Lavington, Nairobi',
    lat: -1.293, lon: 36.753,
    price: 35000,
    beds: 2,
    baths: 2,
    internet: 'Wi-Fi + Smart TV',
    description: 'Fully serviced apartment ideal for short- and long-term stays.',
    image: 'https://images.unsplash.com/photo-1560448071-75b81f823b52'
  }
]

const filteredProperties = ref([])

onMounted(() => {
  filteredProperties.value = allProperties.filter(p => {
    const locMatch = !filters.location || p.location.toLowerCase().includes(filters.location.toLowerCase())
    return (
      locMatch &&
      (!filters.minPrice || p.price >= parseInt(filters.minPrice)) &&
      (!filters.maxPrice || p.price <= parseInt(filters.maxPrice)) &&
      (!filters.beds || p.beds >= parseInt(filters.beds)) &&
      (!filters.internet || p.internet === filters.internet)
    )
  })
})
</script>

<style scoped>
.map-page {
  padding: 1rem;
  background: #f7f7f7;
  height: 100vh;
  box-sizing: border-box;
}
.map-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.back-btn {
  text-decoration: none;
  background: #0071c2;
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 4px;
}
</style>
