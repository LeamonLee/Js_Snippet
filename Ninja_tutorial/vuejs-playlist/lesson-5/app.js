new Vue({
    el: '#vue-app',
    data: {
        age: 25,
        x: 0,
        y: 0
    },
    methods: {
        add: function(inc){
            this.age += inc;
        },
        subtract: function(dec){
            this.age -= dec;
        },
        /*  We don't need to explicitly specify the "event" object on the calling side, 
            we get it automatically when we use event like click event, mosue event. */
        updateXY: function(event){
            this.x = event.offsetX;     /* The coordinate to the top left corner of canvas. */
            this.y = event.offsetY;
        }
    }
});
