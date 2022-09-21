let app = Vue.createApp({
    data() {
        return {
            counter: 40
        }
    },
    methods: {
        increment(num){
            console.log("increment exceuted");
            this.counter+=num
        },
        decrement(num){
            console.log("decrement exceuted");
            this.counter-=num
        },
        handleSubmit(){
            alert("form submitted succesfully")
        }

    }
})

app.mount('#events')