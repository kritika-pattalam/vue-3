const helloWorld = {
  data() {
    return {
        message: "Hello World - This is Vue 3"
    }
  }
}

Vue.createApp(helloWorld).mount('#hello')