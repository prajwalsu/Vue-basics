let app = Vue.createApp({
    data() {
        return {
            message: "hey how r u?",
        };
    },
    methods: {
        setText() {
            //getting the value of the input
            //field by using ref
            console.log(this.$refs.userText.value);
            this.message = this.$refs.userText.value;
        },
        setFocus() {
            //   this.$refs.email.focus();
        },
    },
    //mounting Phase
    beforeCreate() {
        console.log("beforeCreate executed");
    },
    created() {
        console.log("created executed");
    },
    beforeMount() {
        console.log("beforeMount executed");
    },
    mounted() {
        console.log("mounted exceuted");
        this.$refs.email.focus();
    },
    //Updating Phase
    beforeUpdate() {
        console.log("beforeUpdate executed");
    },
    updated() {
        console.log("updated executed");
    },
    //Unmounting phase
    beforeUnmount() {
        console.log("beforeUnmount executed");
    },
    unmounted() {
        console.log("unmounted executed");
    },
});
app.mount("#lifecycle");


// for unmounting
setTimeout(() => {
    app.unmount();
}, 8000);