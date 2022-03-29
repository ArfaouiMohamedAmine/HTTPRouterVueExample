<template>
  <v-data-table
    :headers="headers"
    :items="data"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>
<script>
  export default {
    data () {
      return {
        data: [],
        headers:[
          {
            text:'user id',
            value : 'id'
          },
          {
            text:'title',
            value : 'title'
          },
          {
            text:'body',
            value : 'body'
          },
        ]

      }
    },
    created() {
  // Simple GET request using fetch
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(res => (this.data = res));
}
  }
</script>