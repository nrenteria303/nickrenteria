import movieLineList from './videos.js';

var app = new Vue({
    el: '#app',
    data: {
        movieLines: movieLineList,
        popupShowing: false,
        mobileMenuShowing: true,
        favs: [],
        favTagClicked: false,
        clickedTag: null,
        clickedFavMovieArray: []
    },
    mounted: function() {
        if (window.innerWidth < 628) {
            this.mobileMenuShowing = false;
        }
    },
    methods: {
        toggleMobileMenu: function() {
            this.mobileMenuShowing = !this.mobileMenuShowing;
        },
        decrementIndex: function(index) {
            this.movieLines[index].carouselIndex--;
            while (this.movieLines[index].carouselIndex < 0) {
                this.movieLines[index].carouselIndex += 6;
            }
        },
        incrementIndex: function(index) {
            this.movieLines[index].carouselIndex++;
            while (this.movieLines[index].carouselIndex > 5) {
                this.movieLines[index].carouselIndex -= 6;
            }
        },
        setAngle: function(index) {
            var angle = this.movieLines[index].carouselIndex / 6 * -360;
            return angle;
        },
        setScrollPct: function(index) {
            var pct = (5 - this.movieLines[index].carouselIndex) / 5 * 100;
            return pct;
        },
        showFavs: function() {
            this.popupShowing = true;
            this.favs = getLastFavMovies();
        },
        hideFavs: function() {
            this.favTagClicked = false;
            this.popupShowing = false;
            this.clickedFavMovieArray = [];
        },
        addFav: function(favedMovie, favedMovieTags) {
            function MovieObj(title, tags) {
                this.title = title;
                this.tags = tags;
            }
            var newMovieObj = new MovieObj(favedMovie, favedMovieTags);
            this.favs.push(newMovieObj);
            localStorage.setItem('lastFavMovies', JSON.stringify(this.favs));
        },
        removeFav: function(title) {
            this.favs = this.favs.filter(function(movieObj) {return movieObj.title !== title});
            localStorage.setItem('lastFavMovies', JSON.stringify(this.favs));
            return this.favs;
        },
        filterGenre: function(tag) {
            this.favTagClicked = true;
            this.clickedTag = tag;
            this.favs = getLastFavMovies();
            var filteredFavs = this.favs.filter(function(movieObj) {
                return movieObj.tags.includes(tag);
            });
            this.clickedFavMovieArray.push(filteredFavs);
            this.popupShowing = true;
        }
    },
});

function getLastFavMovies() {
    var favMovies = localStorage.getItem('lastFavMovies');
     if (favMovies) {
        let newFavMovieArray = JSON.parse(favMovies);
        return newFavMovieArray;
    } else {
        return [];
    }
}



