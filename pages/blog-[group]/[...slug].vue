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
const group = route.params.group
// NOTE: debug consoles, these should
// print out the current id, group name and route path correctly
// console.log(`slug output: ${slug}`)
// console.log(`group output: ${group}`)
// console.log(`route output: ${route.params}`)
// TODO: make this points to the latest post (aka highest_number.md)
const { data: blog } = await useAsyncData(`/blog-${group}`, () =>
        queryContent(`/blog-${group}/${slug}`).findOne())
</script>
