var authorName = document.getElementById("authorOutput");
var quoteP = document.getElementById("quoteOutput");
var quoteArray = [`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    `“If you tell the truth, you don't have to remember anything.”`,
    `"You miss 100% of the shots you don't take."`,
    `“Without music, life would be a mistake.”`
]
var randomNum = Math.floor(Math.random() * quoteArray.length);
var authorArray= [`--Albert Einstein`,
    `--Mark Twain`,
`--Wayne Gretzky`,
`--Friedrich Nietzsche`
]
function getQuote(){
    do{
        var randomIndex = Math.floor(Math.random() * quoteArray.length)
    }
    while(randomIndex === randomNum)
    randomNum = randomIndex;
    quoteP.innerHTML = quoteArray[randomIndex];
    authorName.innerHTML = authorArray[randomIndex]
}