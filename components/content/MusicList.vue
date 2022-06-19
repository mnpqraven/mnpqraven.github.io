<template>
  <div class="flex">
    <input v-model="search" />
    <button class="border" @click="filtertext(search)">Search</button>
  </div>
  <ul>
    <li v-for="item in filteredData" :key="item.id">
      {{ item.id }} - {{ item.name }}
    </li>
  </ul>
</template>

<script setup>
//todo: fix reactivity when filtering
//grabbing json from /content
const { data } = await useAsyncData('musicdir', () => queryContent('/musicdir').findOne())
//search bar query
const search = useState('search', () => '')
//result array
let filteredData = data.value.body.filter((item) => item.name.match(search.value));
//console.log(res) // debug
function filtertext(query) {
  filteredData=data.value.body.filter((item) => item.name.match(query));
  console.log(filteredData) // debug
}
</script>