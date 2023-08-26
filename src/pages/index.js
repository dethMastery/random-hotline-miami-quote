const Footer = require("./components/footer")
const NavBar = require("./components/navbar")

function Index(Quote) {
  const data = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HotLine Miami Quote</title>
    
    <link rel="stylesheet" href="/css/main.css">
  </head>
  <body>
    ${NavBar}
    <div class="main-container">
      <div class="quote-container">
        <h1>
          ${Quote.quote}
        </h1>
        <p>
          － ${Quote.by}
        </p>
        <button onclick="location.reload()">
          🎲 ReRoll
        </button>
      </div>
    </div>
    ${Footer}
  </body>
</html>`

  return data
}

module.exports = Index
