import contacts from "./db.js";
const { createApp } = Vue;

const dt = luxon.DateTime

createApp({

    data(){

        return{
            contacts,
            counter: 0,
            newMessageToSent: "",
            clock: null,
        }
    },

    methods:{
        changeProfile(index){
            this.counter = index
        },

        addMessage(){

            const newMessage = {
                date: this.printClock(),
                message: this.newMessageToSent,
                status: 'sent'
            }

            
            this.contacts[this.counter].messages.push(newMessage);
            this.autoMessage()
            this.newMessageToSent=""  
        },

        autoMessage(){

            setTimeout(() =>{
                const newAutoMessage = {
                    date: this.printClock(),
                    message: "ok",
                    status: 'received'
                }
                this.contacts[this.counter].messages.push(newAutoMessage);

            }, 1000)
            
        },

        printClock(){
            this.clock = dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS);
            console.log(this.clock);
        },

    }

}).mount('#app');