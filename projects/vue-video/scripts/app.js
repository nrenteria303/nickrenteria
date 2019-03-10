const navDrop = document.getElementById('nav_drop_cont');
const header = document.getElementById('header_wrap');
const fav = document.getElementById('favs');
const menu = document.getElementById('menu_bars');
const nav = document.getElementById('nav');
const main = document.getElementById('main');

function favShow() {
    navDrop.classList.remove('nav_drop_cont_hide');
}

function favHide() {
    navDrop.classList.add('nav_drop_cont_hide');
}

function menuHide() {
    nav.classList.remove('nav_show');
    if (!navDrop.classList.contains('nav_drop_cont_hide')) {
        navDrop.classList.add('nav_drop_cont_hide');
    }
}

function menuToggle() {
    if (nav.classList.contains('nav_show')) {
        nav.classList.remove('nav_show');
        if (!navDrop.classList.contains('nav_drop_cont_hide')) {
            navDrop.classList.add('nav_drop_cont_hide');
        }
    } else {
        nav.classList.add('nav_show');
    }
}

menu.addEventListener('click', menuToggle);
main.addEventListener('click', menuHide);
main.addEventListener("click", favHide);

var movieLineList = {
    line1: {
        lineTitle: 'Comedies',
        carouselIndex: 0,
        movieCarouselFaces: {
            carouselFace1: [
                {
                    title: 'When Harry Got Hairy',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 1,
                },
                {
                    title: 'Plum and Plumber',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 1,
                },
                {
                    title: "National Lampoon's Sex Raft",
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 1,
                },
                {
                    title: "Weekend at Bernie Sanders'",
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 1,
                }
            ],
            carouselFace2: [
                {
                    title: 'Comedy 5',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 2,
                },
                {
                    title: 'Comedy 6',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 2,
                },
                {
                    title: 'Comedy 7',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 2,
                },
                {
                    title: 'Comedy 8',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 2,
                }
            ],
            carouselFace3: [
                {
                    title: 'Comedy 9',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 3,
                },
                {
                    title: 'Comedy 10',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 3,
                },
                {
                    title: 'Comedy 11',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 3,
                },
                {
                    title: 'Comedy 12',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 3,
                }
            ],
            carouselFace4: [
                {
                    title: 'Comedy 13',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 4,
                },
                {
                    title: 'Comedy 14',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 4,
                },
                {
                    title: 'Comedy 15',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 4,
                },
                {
                    title: 'Comedy 16',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 4,
                }
            ],
            carouselFace5: [
                {
                    title: 'Comedy 17',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 5,
                },
                {
                    title: 'Comedy 18',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 5,
                },
                {
                    title: 'Comedy 19',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 5,
                },
                {
                    title: 'Comedy 20',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 5,
                }
            ],
            carouselFace6: [
                {
                    title: 'Comedy 21',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 6,
                },
                {
                    title: 'Comedy 22',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 6,
                },
                {
                    title: 'Comedy 23',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 6,
                },
                {
                    title: 'Comedy 24',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 6,
                }
            ]
        }
    },
    line2: {
        lineTitle: 'Dramas',
        carouselIndex: 0,
        movieCarouselFaces: {
            carouselFace1: [
                {
                    title: 'The Hunt for Bedrock Sober',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 1,
                },
                {
                    title: 'The Pianist 2: Fingerblast',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 1,
                },
                {
                    title: 'Goodwill Hunting',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 1,
                },
                {
                    title: 'Eternal Lunch Line of the Thoughtless Mind',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 1,
                }
            ],
            carouselFace2: [
                {
                    title: 'Drama 5',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 2,
                },
                {
                    title: 'Drama 6',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 2,
                },
                {
                    title: 'Drama 7',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 2,
                },
                {
                    title: 'Drama 8',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 2,
                }
            ],
            carouselFace3: [
                {
                    title: 'Drama 9',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 3,
                },
                {
                    title: 'Drama 10',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 3,
                },
                {
                    title: 'Drama 11',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 3,
                },
                {
                    title: 'Drama 12',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 3,
                }
            ],
            carouselFace4: [
                {
                    title: 'Drama 13',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 4,
                },
                {
                    title: 'Drama 14',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 4,
                },
                {
                    title: 'Drama 15',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 4,
                },
                {
                    title: 'Drama 16',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 4,
                }
            ],
            carouselFace5: [
                {
                    title: 'Drama 17',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 5,
                },
                {
                    title: 'Drama 18',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 5,
                },
                {
                    title: 'Drama 19',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 5,
                },
                {
                    title: 'Drama 20',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 5,
                }
            ],
            carouselFace6: [
                {
                    title: 'Drama 21',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 6,
                },
                {
                    title: 'Drama 22',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 6,
                },
                {
                    title: 'Drama 23',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 6,
                },
                {
                    title: 'Drama 24',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 6,
                }
            ]
        }
    },
    line3: {
        lineTitle: 'Dramedies',
        carouselIndex: 0,
        movieCarouselFaces: {
            carouselFace1: [
                {
                    title: 'Lunch Drunk Pub',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 1,
                },
                {
                    title: 'Little Miss Sunset',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 1,
                },
                {
                    title: 'Meet, Slay, Shove',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 1,
                },
                {
                    title: 'The Juice is Loose',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 1,
                }
            ],
            carouselFace2: [
                {
                    title: 'Dramedy 5',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 2,
                },
                {
                    title: 'Dramedy 6',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 2,
                },
                {
                    title: 'Dramedy 7',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 2,
                },
                {
                    title: 'Dramedy 8',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 2,
                }
            ],
            carouselFace3: [
                {
                    title: 'Dramedy 9',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 3,
                },
                {
                    title: 'Dramedy 10',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 3,
                },
                {
                    title: 'Dramedy 11',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 3,
                },
                {
                    title: 'Dramedy 12',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 3,
                }
            ],
            carouselFace4: [
                {
                    title: 'Dramedy 13',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 4,
                },
                {
                    title: 'Dramedy 14',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 4,
                },
                {
                    title: 'Dramedy 15',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 4,
                },
                {
                    title: 'Dramedy 16',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 4,
                }
            ],
            carouselFace5: [
                {
                    title: 'Dramedy 17',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 5,
                },
                {
                    title: 'Dramedy 18',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 5,
                },
                {
                    title: 'Dramedy 19',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 5,
                },
                {
                    title: 'Dramedy 20',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 5,
                }
            ],
            carouselFace6: [
                {
                    title: 'Dramedy 21',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 6,
                },
                {
                    title: 'Dramedy 22',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 6,
                },
                {
                    title: 'Dramedy 23',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 6,
                },
                {
                    title: 'Dramedy 24',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 6,
                }
            ]
        }
    },
    line4: {
        lineTitle: 'Fast and the Furious Movies',
        carouselIndex: 0,
        movieCarouselFaces: {
            carouselFace1: [
                {
                    title: 'Fast and the Furious',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 1,
                },
                {
                    title: 'More Fast, More Furious',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 1,
                },
                {
                    title: '3 Fast, 3 Furious',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 1,
                },
                {
                    title: 'Fast 4: Siberian Snow Drift',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 1,
                }
            ],
            carouselFace2: [
                {
                    title: 'Fast and the Furious 5',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 2,
                },
                {
                    title: 'Fast and the Furious 6',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 2,
                },
                {
                    title: 'Fast and the Furious 7',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 2,
                },
                {
                    title: 'Fast and the Furious 8',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 2,
                }
            ],
            carouselFace3: [
                {
                    title: 'Fast and the Furious 9',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 3,
                },
                {
                    title: 'Fast and the Furious 10',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 3,
                },
                {
                    title: 'Fast and the Furious 11',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 3,
                },
                {
                    title: 'Fast and the Furious 12',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 3,
                }
            ],
            carouselFace4: [
                {
                    title: 'Fast and the Furious 13',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 4,
                },
                {
                    title: 'Fast and the Furious 14',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 4,
                },
                {
                    title: 'Fast and the Furious 15',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 4,
                },
                {
                    title: 'Fast and the Furious 16',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 4,
                }
            ],
            carouselFace5: [
                {
                    title: 'Fast and the Furious 17',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 5,
                },
                {
                    title: 'Fast and the Furious 18',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 5,
                },
                {
                    title: 'Fast and the Furious 19',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 5,
                },
                {
                    title: 'Fast and the Furious 20',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 5,
                }
            ],
            carouselFace6: [
                {
                    title: 'Fast and the Furious 21',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 6,
                },
                {
                    title: 'Fast and the Furious 22',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 6,
                },
                {
                    title: 'Fast and the Furious 23',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 6,
                },
                {
                    title: 'Fast and the Furious 24',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 6,
                }
            ]
        }
    },
    line5: {
        lineTitle: 'Spooky Scary',
        carouselIndex: 0,
        movieCarouselFaces: {
            carouselFace1: [
                {
                    title: 'Werewolf Bar Mitzvah',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 1,
                },
                {
                    title: 'An American Werewolf in North Korea',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 1,
                },
                {
                    title: "National Lampoon's Stab Raft",
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 1,
                },
                {
                    title: 'Devil II: Evil Escalator',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 1,
                }
            ],
            carouselFace2: [
                {
                    title: 'Horror Movie 5',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 2,
                },
                {
                    title: 'Horror Movie 6',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 2,
                },
                {
                    title: 'Horror Movie 7',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 2,
                },
                {
                    title: 'Horror Movie 8',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 2,
                }
            ],
            carouselFace3: [
                {
                    title: 'Horror Movie 9',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 3,
                },
                {
                    title: 'Horror Movie 10',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 3,
                },
                {
                    title: 'Horror Movie 11',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 3,
                },
                {
                    title: 'Horror Movie 12',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 3,
                }
            ],
            carouselFace4: [
                {
                    title: 'Horror Movie 13',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 4,
                },
                {
                    title: 'Horror Movie 14',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 4,
                },
                {
                    title: 'Horror Movie 15',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 4,
                },
                {
                    title: 'Horror Movie 16',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 4,
                }
            ],
            carouselFace5: [
                {
                    title: 'Horror Movie 17',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 5,
                },
                {
                    title: 'Horror Movie 18',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 5,
                },
                {
                    title: 'Horror Movie 19',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 5,
                },
                {
                    title: 'Horror Movie 20',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 5,
                }
            ],
            carouselFace6: [
                {
                    title: 'Horror Movie 21',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 6,
                },
                {
                    title: 'Horror Movie 22',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 6,
                },
                {
                    title: 'Horror Movie 23',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 6,
                },
                {
                    title: 'Horror Movie 24',
                    imgSrc: 'images/PH_344x215.jpg',
                    description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                    subset: 'Line Title 1',
                    carouselFace: 6,
                }
            ]
        }
    }
}

var app = new Vue({
    el: '#app',
    data: {
        movieLines: movieLineList,
        carouselIndex1: 0,
    },
    methods: {
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
        }
    },
})
