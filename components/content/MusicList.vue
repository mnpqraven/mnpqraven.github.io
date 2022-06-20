<template>
  <div class="flex">
    <input
      v-model="search"
      @keyup.enter="filtertext(search)"
      @input="filtertext(search)"
    />
    <button class="border" @click="filtertext(search)">Search</button>
  </div>
  <ul>
    <li v-for="item in filteredDataRef" :key="item.id">
      {{ item.id }} - {{ item.name }}
    </li>
  </ul>
</template>

<script setup>
//grabbing json from /content
const { data } = await useAsyncData("musicdir", () =>
  queryContent("/musicdir").findOne()
);
//search bar query
const search = useState("search", () => "");
//result array, use ref or useState to make it reactive (!)
const filteredDataRef = useState("filteredDataRef", () => data.value.body);
//console.log(res) // debug
function filtertext(query) {
  filteredDataRef.value = data.value.body.filter((item) =>
    item.name.match(query)
  );
  //console.log(filteredDataRef.value); // debug
}
</script>
