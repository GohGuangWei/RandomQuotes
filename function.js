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

      //Saves to a Quote object
      const object = contents[x].split("|"); //Separates array object with comma
      object[0] = '"' + object[0] + '"';
      object[1] = '-' + object[1];
      const quote = new Quote(object[0],object[1]); //Creates a new Quote object and saves the split strings to be sent
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