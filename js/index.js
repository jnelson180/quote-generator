var curQuote = "";

function printQuote(data) {
  console.log(data);
  document.getElementById('quote').innerHTML = data.quote;
  document.getElementById('author').innerHTML = "&nbsp; &nbsp; &nbsp; - " + data.author;
  document.getElementById('link').innerHTML = data.permalink;
  curQuote = quote + " -  " + author;
}

function getQuote() {
var script = document.createElement('script');
script.src='//quotes.stormconsultancy.co.uk/quotes/random.json?callback=printQuote';
document.head.appendChild(script);
  document.head.removeChild(script);
}

getQuote();
/*
  $("#tws").attr(href,"https://twitter.com/intent/tweet?text=" + randomquote);
}

*/