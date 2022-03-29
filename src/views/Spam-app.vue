<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="title"
            label="Regular"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="description"
            label="Limit exceeded"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="lastname"
            label="Custom counter from prop"
            
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="name"
            label="Custom counter from slot"
          >

          </v-text-field>
          <v-btn color="red" @click="addData">click to post !!!</v-btn>
        </v-col>
      </v-row>

    </v-container>
  </v-form>
</template>
<script>
  export default {
    data () {
      return {

            title: '',
            description: '',
            name: '',
            lastname: ''
      }
    },
    methods:{
      addData(){
    const requestOptions = {
    method: 'POST',
    headers: { 

    },
    body: JSON.stringify(this.obj)
  };

  fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
    .then(response => response.json())
    

      }
    }
  }
</script>