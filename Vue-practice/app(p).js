let app=Vue.createApp({
    data(){
        return{
                name:"",
                lastname:"a"
        }
    },
    methods:{
        yourName(){
        this.name= name+lastname
        }

    }
})