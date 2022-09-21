let app=Vue.createApp({
    data(){
        return {
            email:""
        }
    },
    methods:{

        reset(){
            this.email=""
        }
    }
})

app.mount('#dataBinding')