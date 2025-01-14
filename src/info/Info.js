import self from "../img/self.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(255,171,110)", "rgb(155,94,229)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Gabriel",
    lastName: "L. Manor",
    initials: "gemanor", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Fullstack Technical Leader",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '✈️',
            text: 'Restless traveler'
        }, {
            emoji: "💼",
            text: "Director of DevRel @ Permit.io"
        }, {
            emoji: "📧",
            text: "gemanor@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/gemanor",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/gmanor",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/gemanor",
            icon: "fa fa-twitter",
            label: 'twitter'
        },
        {
            link: "https://unsplash.com/@gmanor",
            icon: "fa fa-camera",
        }
    ],
    // bio: "Hello! I'm John. I'm a systems engineer for Google. I studied CompSci at Harvard, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
    // skills: {
    //     proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
    //     exposedTo: ['nodejs', 'python', 'adobe illustrator']
    // },
    // hobbies: [
    //     {
    //         label: 'reading',
    //         emoji: '📖'
    //     },
    //     {
    //         label: 'theater',
    //         emoji: '🎭'
    //     },
    //     {
    //         label: 'movies',
    //         emoji: '🎥'
    //     },
    //     {
    //         label: 'cooking',
    //         emoji: '🌶'
    //     }
        // Same as above, change the emojis to match / relate to your hobbies or interests.
        // You can also remove the emojis if you'd like, I just think they look cute :P
    // ]
}