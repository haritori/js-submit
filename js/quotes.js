const quotes = [
  {
    quote:
      "As you grow older, you'll find the only things you regret are the things you didn't do.",
    author: "Zachary Scott",
  },
  {
    quote:
      "If you want the present to be different from the past, study the past.",
    author: "Baruch Spinoza",
  },
  {
    quote:
      "Study without desire spoils the memory, and it retains nothing that it takes in.",
    author: "Leonardo da Vinci",
  },
  {
    quote:
      "Man is distinguished from all other creatures by the faculty of laughter.",
    author: "Joseph Addison",
  },
  {
    quote:
      "If at first you don't succeed, find out if the loser gets anything.",
    author: "Bill Lyon",
  },
  {
    quote:
      "Life is like riding a bicycle. To keep your balance you must keep moving.",
    author: "Albert Einstein",
  },
  {
    quote:
      "We all have big changes in our lives that are more or less a second chance.",
    author: "Harrison Ford",
  },
  {
    quote: "We make a living by what we get, we make a life by what we give.",
    author: "Sir Winston Churchill",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
