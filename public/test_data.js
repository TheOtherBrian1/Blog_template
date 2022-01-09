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
			img: "img"
		}, 
		img: {
			figcaption: "White Desk by 'Bench Accounting' from Unsplash",
			src: "\\imgs\\bench-accounting-nvzvOPQW0gc-unsplash.jpg", 
			alt: "Time Passing", 
			cmmt_num: "3", 
			date: "July 19, 2019"
		},
		txt: { 
			title: "Finding simplicity in life", 
			starting_clause: "Life can get complicated really quickly", 
			body: ", but it doesn't have to be! There are many ways to simplify your life, a few of which we've explored in the past. This week we're taking a bit of a approach though, in how you can find simplicity in the life you already living."
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
			title: "The joys of an un-cluttered desk", 
			starting_clause: "Your ability to focus is directly correlated with your productivity. ", 
			body: "It's time to declutter your desk and reclaim your peace of mind"
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
			starting_clause: "Simplicity and work: Work is often a major source of stress.", 
			body: "People get frustrated, it ruins their relationship with others and it leads to burnout. By keeping your work life as simple as possible, it will help balance everything out."
        }
	},
]

const aside_about = {
	img: {src: "imgs\\stephanie-cook-NDCy2-9JhUs-unsplash.jpg",alt: ""},
	txt:{title: "ABOUT ME",body: "After quitting corporate America to find happiness, I was amazed to found it in simplicity"}
}

const aside_articles = [
	{
		img: {
			src: "imgs\\rachel-moenning-zjxYwd4HOu0-unsplash.jpg", 
			alt: "Time Passing",
        }, 
		txt:{
			title: "Simple decorations"
        }
    },
	{
		img: {
			src: "\\imgs\\good-soul-shop-DlO0yz4U67A-unsplash.jpg", 
			alt: "Time Passing",
        }, 
		txt:{
			title: "Keeping cooking simple"
        }
    },
	{
		img: {
			src: "imgs\\andy-kelly-5APBLfC2hUs-unsplash.jpg", 
			alt: "Time Passing",
        }, 
		txt:{
			title: "How nature revitalized my life"
        }
    },
]

module.exports = {nav, cards, aside_about, aside_articles}