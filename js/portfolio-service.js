'use strict'

var gProjects = [
    {
        id: 'mineswiper',
        name: 'Mineswiper',
        title: 'Mineswaper Game',
        desc: 'Mineswaper - browser game using Vanila JS with some cool features, and more...',
        imgUrl: 'img/portfolio/1-full.jpg',
        url: 'https://arthurvolkov.github.io/Mine-Sweeper/',
        publishedAt: 'Januar 2021',
        labels: ['JS', 'CSS', 'HTML'],
        category: 'game'
    },
    {
        id: 'bookshop',
        name: 'Bookshop',
        title: 'Bookshop WEB-site',
        desc: 'Bookshop demo web-site using Vanila JS, and more...',
        imgUrl: 'img/portfolio/2-full.jpg',
        url: 'https://arthurvolkov.github.io/Bookshop/',
        publishedAt: 'Januar 2021',
        labels: ['JS', 'CSS', 'HTML'],
        category: 'web-site'
    },
    {
        id: 'packman',
        name: 'Packman',
        title: 'Packman game',
        desc: 'Packman - browser game using Vanila JS.',
        imgUrl: 'img/portfolio/3-full.jpg',
        url: 'https://arthurvolkov.github.io/packman/',
        publishedAt: 'Januar 2021',
        labels: ['JS', 'CSS', 'HTML'],
        category: 'game'
    },
    {
        id: 'guessMe',
        name: 'Guess Me',
        title: 'Guess me" - selflearning game',
        desc: '"Guess me" - selflearning browser game using JS, JQuery and Bootstrap',
        imgUrl: 'img/portfolio/4-full.jpg',
        url: 'https://arthurvolkov.github.io/guess-me/',
        publishedAt: 'Januar 2021',
        labels: ['JS', 'CSS', 'HTML', 'Bootstrap', 'JQuery'],
        category: 'game'
    },
    {
        id: 'ballGame',
        name: 'Ball Game',
        title: 'Simple ball-catch game',
        desc: 'Simple ball-catch browser game using Vanila JS, on second week of learing JS',
        imgUrl: 'img/portfolio/5-full.jpg',
        url: 'https://arthurvolkov.github.io/ball-game/',
        publishedAt: 'Januar 2021',
        labels: ['JS', 'CSS', 'HTML'],
        category: 'game'
    },
    {
        id: 'tuchNumbers',
        name: 'Numbers',
        title: 'Touch The Numbers game',
        desc: 'Touch The Numbers - simple browser game using Vanila JS',
        imgUrl: 'img/portfolio/6-full.jpg',
        url: 'https://arthurvolkov.github.io/touch-numbers/',
        publishedAt: 'Januar 2021',
        labels: ['JS', 'CSS', 'HTML'],
        category: 'game'
    },
]



function getProjects() {
    return gProjects.slice();
}