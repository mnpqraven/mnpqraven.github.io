<template>
  <div class="prose">
    <ContentDoc />
    <p>Published at: {{ blog.publishedAt }}</p>
  </div>
</template>

<script setup>
const route = useRoute()
// NOTE: slug returns route back to us
// we can use that for the async fetch
const slug = route.params.slug
// NOTE: should print out current route id
console.log(slug)
const { data: blog } = await useAsyncData("/blog", () => queryContent(`/blog/${slug}`).findOne())
// TODO: this is supposed to print the correct value according to the route
console.log(blog.value.publishedAt)
</script>
