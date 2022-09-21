let app = Vue.createApp({
    // All data prsent here
    data() {
        return {
            greeting:"Hello World", //like use state
            // person: {
            //     name:"Ajay",
            //     age: 18
            // },
            learn: "<h1>Learn VUE</h1>",
            code: "code VUE"
        }
    },

// inside methods option , create all the methods
methods: {
    randomOutput() {
        let randomNum = Math.random()
        console.log("randomNum", randomNum);
        if (randomNum < 0.5) {
            // return "Learn VUE"
            return this.learn

        } else {
            // return "code VUE"
            return this.code //use this when u use data in create app
        }
    }
}
})

app.mount('#first')