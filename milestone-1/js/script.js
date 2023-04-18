import contacts from "./db.js";
const { createApp } = Vue;

console.log(contacts);


createApp({

    data(){

        return{
            contacts,
            counter: 0,
            newMessageToSent: "",
        }
    },

    methods:{
        changeProfile(index){
            this.counter = index
        },

    }

}).mount('#app');