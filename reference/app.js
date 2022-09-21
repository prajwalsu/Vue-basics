let app = Vue.createApp({
    data(){
        return{
            message:"hey how ru?"
        }
    },
    methods:{
        setText(){
            console.log(this.$refs.userText.value);
            this.message=this.$refs.userText.value
        },
        focusInput(){
            this.$refs.email.focus()
        }
    }
})
app.mount('#ref')