// //fs = file server
// function readFile()
// {
//   const fs = require("fs")
//   let contents = fs.readFileSync("quotes.txt").toString().split(/\r?\n/)
//   let size = contents.length
//   let x = Math.floor((Math.random() * (size)))
//   return(contents[x])
// }

// //replaces html text with a random quote
// function replaceQuote() 
// {
//   var test = readFile()
//   document.getElementById("quotes").innerHTML = test;
//   document.getElementById("name").innerHTML = "testttt"
// }

function readFile() 
{
  //Requests quotes.txt
  return fetch('quotes.txt')
    //When the request returns a response.
    .then(response => response.text()) //Resolves with a string
    .then(data => {
      const contents = data.split(/\r?\n/); //Splits text and stores into array
      const size = contents.length;  //Determines sizes of array
      const x = Math.floor(Math.random() * size); //Gets random quote based on size

      const object = contents[x].split(",");
      const quote = new Quote(object[0],object[1]);
      return quote;
    });
}

function replaceQuote() 
{
  readFile() 
    .then(quote => {
      document.getElementById('quotes').innerHTML = quote.quote;
      document.getElementById('name').innerHTML = quote.name;
    })
    .catch(error => {
      console.error('Error fetching the quote:', error);
    });
}

//Object for each quote
class Quote
{
  constructor(quote, name)
  {
    this.quote = quote
    this.name = name
  }
}