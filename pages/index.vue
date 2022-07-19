<template>
    <div>
        <h1>index folder</h1>
        <HoverImage></HoverImage>
        <NuxtLink to="/about">go to about</NuxtLink>
        <p>This page was loaded: {{ data }} {{ data <= 1 ? "time" : "times"}}</p>
    </div>
</template>

<script setup>
useHead({
    title: 'Othi DB'
})
// can access data's `counter` params with the first
// arg in useAsyncData
const { data } = await useAsyncData('counter', () => $fetch('/api/count'))
</script>
