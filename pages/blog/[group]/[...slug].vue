<template>
    <div class="prose">
        <ContentDoc />
        <p>Published at: {{ blog.publishedAt }}</p>
        <div>
            <NuxtLink v-if="prev" :to="prev['_path']">| Previous post |</NuxtLink>
            <NuxtLink v-if="next" :to="next['_path']">| Next post |</NuxtLink>
        </div>
    </div>
</template>

<script setup>
useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} - Othi's blog` : `Othi's blog`
    }
})
const route = useRoute()
const { path } = route

// NOTE: slug returns route back to us
// we can use that for the async fetch
const slug = route.params.slug
const group = route.params.group


// NOTE: debug consoles, these should
// print out the current id, group name and route path correctly
console.log(`slug output: ${slug}`)
// console.log(`group output: ${group}`)
// console.log(`route output: ${route.params}`)


// TODO: make this points to the latest post (aka highest_number.md).
// NOTE: Needs a middleware
const { data: blog } = await useAsyncData(`${route.params.group}-${route.params.slug}`, () => {
    return queryContent(path).findOne()
})
// NOTE: next and previous Id for navigation
const [prev, next] = await queryContent(`blog/${group}`)
    .findSurround({_path: path})
    .then((result) => { return result })
</script>
