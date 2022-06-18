<template>
  <div>
    Counter: {{ counter }}
    <button @click="counter++">
      +
    </button>
    <button @click="counter--">
      -
    </button>
    <p>{{ message }}</p>
    <input v-model="message" placeholder="enter your text here" />
  </div>
</template>

<script setup>
const counter = useState('counter', () => Math.round(Math.random() * 1000))
const message = useState('message')
</script>