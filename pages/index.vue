<template>
  <div>
    <h1>index folder</h1>
    <HoverImage></HoverImage>
    <NuxtLink to="/lorem">go to lorem</NuxtLink>
  </div>
</template>

<script setup>
useHead({
  title: 'Othi DB'
})
</script>
<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>