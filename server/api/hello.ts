export default defineEventHandler( event => {
  return {
    id: 1,
    name: 'othi',
    age: 26
  }
})
// You can now universally call this API using await $fetch('/api/hello').