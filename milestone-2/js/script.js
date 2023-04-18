import contacts from "./db.js";
const { createApp } = Vue;

console.log(contacts);


createApp({

    data(){

        return{
            contacts,
        }
    }

}).mount('#app');