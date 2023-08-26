const Footer = require("./components/footer")
const NavBar = require("./components/navbar")

const About = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About | HotLine Miami Quote</title>
  
  <link rel="stylesheet" href="/css/main.css">
</head>
<body>
  ${NavBar}
  <div class="main-container">
    <div class="quote-container">
      <h1 style="text-decoration: underline;">
        About
      </h1>
      <p style="text-align: center;">
        A repository that I make this up because of i just hear many quotes from a game name "Hotline Miami".
      </p>
      <p style="text-align: center;">
        If you love this site don't forgot to leave me some stars on my repository
      </p>
      <p style="text-align: center;">
        and if you want to contributed somethings just feel free to send me a pull request :)
      </p>
      <div>
        - <a href="https://github.com/dethMastery/random-hotline-miami-quote" target="_blank">Repository</a> <br>
        - <a href="https://suphakit.net/contact" target="_blank">My contacts</a>
      </div>
    </div>
  </div>
  ${Footer}
</body>
</html>`

module.exports = About