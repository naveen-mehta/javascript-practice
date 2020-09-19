// ## The Reading List

// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).

// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

    var books = [
        {
            title: "Blink",
            author: "Malcolm Gladwell",
            alreadyRead: true  
        },
        {
            title: "No friend but the mountains",
            author: "Behrouz Boochani",
            alreadyRead: true    
        },
        {
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            alreadyRead: false 
        }
    ]

    for (var i = 0; i < books.length; i++) {
        if (books[i].alreadyRead) {
            console.log(`You already read "${books[i].title}" by ${books[i].author}`)
        } else {
            console.log(`You still need to read "${books[i].title}" by ${books[i].author}`)
        }
    }

// ## The Movie Database

// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).

// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

    var movie = {
        title: "Superman",
        duration: 2,
        stars: "Puff, Jackie, Living Sneezes"  
    }

    function movieInfo(userMovie) {
        console.log(`"${userMovie.title} lasts for ${userMovie.duration} hours. Stars: ${userMovie.stars}."`);
    }

    movieInfo(movie);

// # Which number's bigger?

// Write a function named greaterNum that:
// - takes 2 arguments, both numbers.
// - returns whichever number is the greater (higher) number.
// - Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

    function greaterNum(num1, num2) {
        if (num1 > num2) {
            return console.log(`"The greater number of ${num1} and ${num2} is ${num1}"`)
        } else {
            return console.log(`"The greater number of ${num1} and ${num2} is ${num2}"`)
        }
    }

    greaterNum(5, 10);
    greaterNum(21, 8);

// # The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// - takes 2 arguments: birth year, current year.
// - calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either 17 or 18"
// - Call the function three times with different sets of values.

    function calculateAge(birthYear, currentYear) {
        var age = currentYear - birthYear;
        console.log(`"You are either ${age} or ${age - 1}"`);
    }

    calculateAge(1985, 2020);
    calculateAge(1990, 2030);
    calculateAge(1995, 2040);

// # The World Translator

// Write a function named helloWorld that:
// - takes 1 argument, a language code (e.g. "es", "de", "en")
// - returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// - Call that function for each of the supported languages and log the result to make sure it works.

    function helloWorld(langCode) {
        if (langCode == "es") {
            return "Hola, Mundo"
        } else if (langCode == "de") {
            return "Hallo, Welt"
        } else {
            return "Hello, World"
        }
    }

    console.log(helloWorld());
    console.log(helloWorld("de"));
    console.log(helloWorld("es"));
    console.log(helloWorld("en"));

// # The Grade Assigner

// Write a function named assignGrade that:
// - takes 1 argument, a number score.
// - returns a grade for the score, either "A", "B", "C", "D", or "F".
// - Call that function for a few different scores and log the result to make sure it works.

    function assignGrade(score) {
        if (score > 80) {
            return "Grade A"
        } else if (score > 70) {
            return "Grade B"
        } else if (score > 50) {
            return "Grade C"
        } else {
            return "Grade D"
        }
    }

    console.log(assignGrade(85));
    console.log(assignGrade(75));
    console.log(assignGrade(55));
    console.log(assignGrade(35));

// # The Pluralizer

// Write a function named pluralize that:
// - takes 2 arguments, a noun and a number.
// - returns the number and pluralized form, like "5 cats" or "1 dog".
// - Call that function for a few different scores and log the result to make sure it works.
// - Bonus: Make it handle a few collective nouns like "sheep" and "geese".

    function pluralize(noun, num) {
        if (noun == "goose") {        
            if (num > 1) {
                console.log(`${num} geese`)
            } else {
                console.log(`${num} ${noun}`)
            }
        } else {
            if (num > 1) {
                console.log(`${num} ${noun}s`)
            } else {
                console.log(`${num} ${noun}`)
            }
        } 
    }

    pluralize("goose", 70);
    pluralize("dog", 1);
    pluralize("cat", 10);
    pluralize("dinosaur", 1);



 