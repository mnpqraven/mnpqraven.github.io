<template>
  <div class="justify-center flex flex-row">
    <select class="my-8 mx-4" v-model="$colorMode.preference">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="sepia">Sepia</option>
    </select>
    <div class="my-8 mx-4">
      <p>footer component.<br>othi @2022</p>
    </div>
  </div>
</template>