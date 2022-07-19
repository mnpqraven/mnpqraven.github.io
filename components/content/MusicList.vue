<template>
  <div>
    <div class="flex">
      <input
        v-model="search"
        @keyup.enter="filtertext(search)"
        @input="filtertext(search)"
      />
      <button @click="filtertext(search)">Search</button>
    </div>
    <ul class="grid grid-cols-4 gap-x-8 gap-y-4 border justify-evenly">
      <li class="border" v-for="item in filteredDataRef" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
//grabbing json from /content
useHead({
  title: "Music",
});
const { data } = await useAsyncData("musicdir", () =>
  queryContent("/musicdir").findOne()
);
//search bar query
const search = useState("search", () => "");
//result array, use ref or useState to make it reactive (!)
const filteredDataRef = useState("filteredDataRef", () => data.value.body);
// console.log(data.value.body) // debug
function filtertext(query) {
  filteredDataRef.value = data.value.body.filter((item) =>
    String(item.name).toLowerCase().match(query)
  );
  //console.log(filteredDataRef.value); // debug
}
</script>
