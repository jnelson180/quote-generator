var quotes = ['"If you want to achieve greatness stop asking for permission." --Anonymous',

  '"Flying might not be all plain sailing, but the fun of it is worth the price." - Amelia Earhart',

  '"Success is going from failure to failure without losing your enthusiasm." – Winston Churchill',

  '"When everything seems to be going against you, remember that the airplane takes off against the wind, not with it." – Henry Ford',

  '"It does not matter how slowly you go as long as you do not stop." – Confucius',

  '"If the wind will not serve, take to the oars." – Latin Proverb',

  '"The journey of a thousand miles begins with one step." – Lao Tzu',

  '"To live is the rarest thing in the world. Most people exist, that is all." – Oscar Wilde',

  '“Do one thing every day that scares you."― Eleanor Roosevelt',

  '"Things work out best for those who make the best of how things work out." --John Wooden',

  '"To live a creative life, we must lose our fear of being wrong." -Anonymous'
]

function randomquote() {

  return quotes[Math.floor(Math.random() * quotes.length)];
    var rq = quotes[Math.floor(Math.random() * quotes.length)]
  $("#tws").attr(href,"https://twitter.com/intent/tweet?text=" + randomquote);
}