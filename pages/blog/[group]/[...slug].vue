<template>
  <div class="prose">
    <ContentDoc />
    <p>Published at: {{ blog.publishedAt }}</p>
    <NuxtLink :to="'/blog/' +group + '/' + nextId">Next post</NuxtLink>
    <NuxtLink :to="'/blog/' +group + '/' + prevId">Previous post</NuxtLink>
  </div>
</template>

<script setup>
const route = useRoute()
const { path } = useRoute()
// NOTE: slug returns route back to us
// we can use that for the async fetch
const slug = route.params.slug

// NOTE: next and previous Id for navigation
// TODO: next causes overflow, needs fix
    let nextId, prevId
    if (!slug) {
        nextId = 1
        prevId = 1
    } else {
        nextId = parseInt(slug) + 1 <= 0 ? 1 : parseInt(slug) + 1
        prevId = parseInt(slug) - 1 <= 0 ? 1 : parseInt(slug) - 1
    }

const group = route.params.group
// NOTE: debug consoles, these should
// print out the current id, group name and route path correctly
console.log(`slug output: ${slug}`)
// console.log(`group output: ${group}`)
// console.log(`route output: ${route.params}`)
// TODO: make this points to the latest post (aka highest_number.md)
const { data: blog } = await useAsyncData(`${route.params.group}-${route.params.slug}`, () => {
    return queryContent(`${path}`).findOne()
})
useHead({
    titleTemplate: (titleChunk) => {
            return titleChunk ? `${titleChunk} - Othi's blog` : `Othi's blog`
    }
})
</script>
