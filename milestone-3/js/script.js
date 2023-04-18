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

            this.printClock()

            const newMessage = {
                date: this.clock,
                message: this.newMessageToSent,
                status: 'sent'
            }

            
            this.contacts[this.counter].messages.push(newMessage);
            this.autoMessage()
            this.newMessageToSent=""  
        },

        autoMessage(){

            setTimeout(() =>{

                this.printClock()

                const newAutoMessage = {
                    date: this.clock,
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