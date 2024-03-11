//It defines a constant reference to an array
const quotes = [];

function loadJson()
{
  fetch('./quotes.json')
    .then((response) => response.json())
    .then((data) => replaceQuote(data));
}


//replaces html text with a random quote
function replaceQuote() 
{
    loadJson();
    document.getElementById("quotes").innerHTML = "test";
    document.getElementById("name").innerHTML = "Name changed.";
}

//Grabs a random object from the array
function randomQuote()
{
  

}

//Object for each quote
class Quote
{
  constructor(quote, name)
  {
    this.quote = quote;
    this.name = name;
  }
}

//reads text file and saves them as objects into a vector
function readFile(file)
{

}


