let app = Vue.createApp({
    data() {
      return {
        counter: 10,
        name: "",
      };
    },
    watch: {
      counter(value) {
        console.log("value", value);
        if (value > 50) {
          setTimeout(() => {
            this.counter = 0;
          }, 2000);
        }
      },
    },
    computed: {
      fullname() {
        console.log(" Fullname executed");
        if (this.name === "") {
          return "";
        }
        return this.name + " " + "Rastogi";
      },
      doubleCounter() {
        console.log("doubleCounter executed");
        return this.counter * 2;
      },
    },
  
    methods: {
      increment() {
        this.counter += 5;
      },
      decrement() {
        this.counter -= 5;
      },
      // outputFullname() {
      //   console.log(" outputFullname executed");
      //   if (this.name === "") {
      //     return "";
      //   }
      //   return this.name + " " + "Rastogi";
      // },
    },
  });
  app.mount("#dataBinding");