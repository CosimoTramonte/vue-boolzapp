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

            setTimeout(() =>{
                const divChat = document.querySelector(".chatDiv")
                divChat.scrollTop = divChat.scrollHeight
            },1)
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

                setTimeout(() =>{
                    const divChat = document.querySelector(".chatDiv")
                    divChat.scrollTop = divChat.scrollHeight
                },1)

            }, 1000)
            
        },

        getLastMessage(contact){
            if(contact.messages.length > 0){
                return contact.messages.at(-1).message
            } else{
                return "nessun messaggio"
            }
        },

        getLastDate(contact){
            if(contact.messages.length > 0){
                return contact.messages.at(-1).date
            } else{
                return null
            }
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