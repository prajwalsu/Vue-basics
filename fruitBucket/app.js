

let app=Vue.createApp({
    data() {
        return {
            newFruitValue:"",
            fruits:["apple","mango","Lichi"]

        }
    },
    methods:{
        addFruit(){
            console.log("fruit entered", this.newFruitValue);
            this.fruits.push(this.newFruitValue)
            this.newFruitValue=""
        },
        removeFruit(idx){
            // console.log("selected index", idx);
            this.fruits.splice(idx,1)

        }

    }
})

app.mount("#fruitBucket")