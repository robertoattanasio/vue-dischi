var app = new Vue({
    el: '#app',
    data: {
        albumList: [],
        albumYears: ['All'],
        albumGenres: ['All'],
        albumGenresFiltered: [],
        selectedGenre: 'All'
    },

    methods: {
        selectGenre: function(selectedGenre) {
            this.albumGenresFiltered = [];
            this.albumList.forEach(element => {
                if (element.genre == selectedGenre) {
                    this.albumGenresFiltered.push(element);
                }
            });
        }
    },

    mounted() {
        axios
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((element) => {
                this.albumList = element.data.response;
                this.albumList.forEach(album => {
                    if (!this.albumYears.includes(album.year)) {
                        this.albumYears.push(album.year);
                    }

                    if (!this.albumGenres.includes(album.genre)) {
                        this.albumGenres.push(album.genre);
                    }
                });
            })
    },
});