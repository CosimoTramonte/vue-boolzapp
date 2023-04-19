const { createApp } = Vue;

const dt = luxon.DateTime

createApp({

    data(){

        return{
            contacts,
            counter: 0,
            newMessageToSent: "",
            clock: null,
            filterChat: "",
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

        deleteMessage(i){
            this.contacts[this.counter].messages.splice(i,1)
        }

    },

    computed: {

        listFilter(){

            this.contacts.forEach((contact) => { 
                contact.visible = contact.name.toLowerCase().includes(this.filterChat.toLowerCase())
            });

            return this.contacts.visible
        }
    }


}).mount('#app');