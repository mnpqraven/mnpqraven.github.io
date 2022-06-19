<script setup>
//vanilla api
const { data: hello } = await useFetch("/api/hello")
const { data: number } = await useAsyncData('counter', () => $fetch('/api/count'))
</script>

<template>
  <div>
    <h1>test api page</h1>
    <p>{{ hello }}</p>
    <p> page visit {{ number }}</p>
  </div>
</template>
