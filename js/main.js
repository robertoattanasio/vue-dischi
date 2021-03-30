var app = new Vue({
    el: '#app',
    data: {
        albumList: [],
    },

    created() {
        axios
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((element) => {
                this.albumList = element.data.response;
            })
    },
});