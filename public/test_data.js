const nav = {
    title: "Living the simple life",
    subtitle: "A BLOG EXPLORING MINIMALISM IN LIFE",
    items: ['HOME', 'ABOUT ME', 'RECENT POSTS']
}

const cards = [
	{
		classes: {
			is_header: true,
            img_figure: 'img_figure',
			img: "img",
			figcaption: "White Desk by 'Bench Accounting' from Unsplash"
		}, 
		img: {
			src: "\\imgs\\bench-accounting-nvzvOPQW0gc-unsplash.jpg", 
			alt: "Time Passing", 
			cmmt_num: "3", 
			date: "July 19, 2019"
		},
		txt: { 
			title: "Finding simplicity in life", 
			starting_clause: "Life can get complicated really quickly", 
			body: "Finding simplicity in life Life can get complicated really quickly, but it doesn't have to be! There are many ways to simplify your life, a few of which we've explored in the past. This week we're taking a bit of a approach though, in how you can find simplicity in the life you already living."
        }
	},
	{
		classes: {
            img_figure: 'img_figure',
			img: "img",
			figcaption: "Organized Room by 'Kari Shea' on Unsplash"
		}, 
		img: {
			src: ".\\imgs\\kari-shea-tOVmshavtoo-unsplash.jpg", 
			alt: "Keeping cooking simple", 
			cmmt_num: "4", 
			date: "July 19, 2019"
		},
		txt: { 
			title: "Keeping cooking simple Food is a very important part of everyone's life.", 
			starting_clause: "", 
			body: "If you want to be healthy, you have to eat healthy. One of the easiest ways to do that is to keep your cooking nice and simple. continue reading"
        }
	},
	{
		classes: {
            img_figure: 'img_figure',
			img: "img",
			figcaption: "Mac Laptop by 'Rachel Moenning' on Unsplash"
		}, 
		img: {
			src: "imgs\\rachel-moenning-zjxYwd4HOu0-unsplash.jpg", 
			alt: "Time Passing", 
			cmmt_num: "3", 
			date: "July 19, 2019"
		},
		txt: { 
			title: "Simple decorations", 
			starting_clause: "Simplicity and work Work is often a major source of stress.", 
			body: "Simplicity and work Work is often a major source of stress. People get frustrated, it ruins their relationship with others and it leads to burnout. By keeping your work life as simple as possible, it will help balance everything out."
        }
	},
	{
		classes: {
            img_figure: 'img_figure',
			img: "img",
			figcaption: "Mac Laptop by 'Rachel Moenning' on Unsplash"
		}, 
		img: {
			src: "imgs\\rachel-moenning-zjxYwd4HOu0-unsplash.jpg", 
			alt: "Time Passing", 
			cmmt_num: "3", 
			date: "July 19, 2019"
		},
		txt: { 
			title: "Finding simplicity in life", 
			starting_clause: "Life can get complicated really quickly", 
			body: "Finding simplicity in life Life can get complicated really quickly, but it doesn't have to be! There are many ways to simplify your life, a few of which we've explored in the past. This week we're taking a bit of a approach though, in how you can find simplicity in the life you already living. continue reading"
        }
	}
]

const aside_about = {
	img: {src: "imgs\\stephanie-cook-NDCy2-9JhUs-unsplash.jpg",alt: ""},
	txt:{title: "ABOUT ME",body: "After quitting corporate America to find happiness, I found it in simplicity"}
}

const aside_articles = [
	{
		img: {
			src: "imgs\\rachel-moenning-zjxYwd4HOu0-unsplash.jpg", 
			alt: "Time Passing",
        }, 
		txt:{
			title: "Keeping cooking simple"
        }
    },
	{
		img: {
			src: "\\imgs\\kari-shea-tOVmshavtoo-unsplash.jpg", 
			alt: "Time Passing",
        }, 
		txt:{
			title: "Keeping cooking simple"
        }
    },
	{
		img: {
			src: "imgs\\rachel-moenning-zjxYwd4HOu0-unsplash.jpg", 
			alt: "Time Passing",
        }, 
		txt:{
			title: "Keeping cooking simple"
        }
    },
]

module.exports = {nav, cards, aside_about, aside_articles}