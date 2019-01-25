
var app = new Vue({
    el: '#app',
    data: {
        text: 'Hello',
        morning: [
            {text: 'дела1'},
            {text: 'дела11'},
            {text: 'дела111'},
            {text: 'дела1111'},
            {text: 'дела11111'}
        ],
        afternoon: [
            {text: 'дела2'},
            {text: 'дела22'},
            {text: 'дела222'},
            {text: 'дела2222'},
            {text: 'дела22222'}
        ],
        seen: false,
        
        

    },
    methods: {
        downTransition(){

            let i = this.morning.pop();
            this.afternoon.unshift(i);


        },
        upTransition(){
            let i = this.afternoon.pop();
            this.morning.unshift(i);
            

        }
    }
  })

