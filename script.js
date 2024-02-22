Please add the ability to play a sound effect (label it MySound.wav) in this website's code for the "const btn"= section of script.js

Here's the code
script.js
"console.log("Hello 🌎");

const btn = document.querySelector("button"); // Get the button from the page
if (btn) { // Detect clicks on the button
  btn.onclick = function () {
    // The 'dipped' class in style.css changes the appearance on click
    btn.classList.toggle("dipped");
    
  };
}

// Open file when the link in the preview is clicked
let goto = (file, line) => {
  window.parent.postMessage(
    { type: "glitch/go-to-line", payload: { filePath: file, line: line } }, "*"
  );
};
// Get the file opening button from its class name
const filer = document.querySelectorAll(".fileopener");
filer.forEach((f) => {
  f.onclick = () => { goto(f.dataset.file, f.dataset.line); };
});
"
index.html
"<!DOCTYPE html>

<!-- Webpage Designer: Robert Laggan -->

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="https://glitch.com/favicon.ico" />

    <title>The Penguin Gallery!</title>

    <!-- Accessing the stylesheet -->
    <link rel="stylesheet" href="/style.css" />

    <!-- Accessing the JavaScript file -->
    <script src="/script.js" defer></script>
  </head>
  <body>
    <header>
      <h1 class="title" style="color: #ea7d23;">The Penguin Gallery!</h1>
    </header>

    <!-- Code for the Navigation Panel for the 3 pages of the website -->
    <table class="ShownBorder" style="color: #ffffff;">
      <tr>
        <th><a href="https://welcome-rml-html-assignment-webpage.glitch.me" style="color: #ea2337;">Welcome Page</a></th>
        <th><a href="https://thepenguingallery-rml-html-assignment-webpage.glitch.me" style="color: #ea7d23;">The Penguin Gallery</a></th>
        <th><a href="https://contactus-rml-html-assignment-webpage.glitch.me" style="color: #ea2337;">Contact Us</a></th>
      </tr>      
    </table>
    
    <!-- Code for the invisible table used to help display the gallery images and the facts about the penguins -->
      <table class="BlankBorder" style="color: rgba(0,0,0,0);">
        <tr>
          <th>
            <div class="wrapper">
              <div class="content" role="main">
                <!-- Two of four Pictures -->  
                <img
                  src="https://cdn.glitch.global/4bd1f48f-3d5a-4137-8e9c-19367b57f5b2/EmperorPenguin.jpg?v=1708563775915"
                  class="illustration"
                  alt="An Emperor Penguin father with his Penguin chick."
                  title="An Emperor Penguin father with his Penguin chick."
                />
              </div>
            </div>
          </th>
          <th>
            <div class="wrapper">
              <div class="content" role="main">
                <div class="text">
                  <h1 style="color: #ea2337;"><u>The emperor penguin</u></h1>
                    <!-- Unordered and ordered lists -->
                    <ul>
                      <li><u style="color: #ea2337;"><b>Habitat:</b></u> Antarctica</li>
                      <li><u style="color: #ea2337;"><b>Height:</b></u> Up to 4.3 ft as an Adult</li>
                      <li><u style="color: #ea2337;"><b>Scientific name:</b></u> Aptenodytes forsteri</li>
                    </ul> 
                  <h3 style="color: #ea2337;"><u><b>Fun Facts:</b></u></h3> 
                    <ol>
                      <li>They are the tallest of all 18 species of penguins.</li>
                      <li>They are able to survive temperatures as low as -50°C (-58°F).</li>
                      <li>They are the only penguin species known to breed during winter in Antartica.</li>
                    </ol> 
                </div>
              </div>
            </div>
          </th>
        </tr>
        <tr>
          <th>
            <div class="wrapper">
              <div class="content" role="main">
                <!-- Three of four Pictures -->  
                <img
                  src="https://cdn.glitch.global/4bd1f48f-3d5a-4137-8e9c-19367b57f5b2/RockhopperPenguin.jpg?v=1708612332693"
                  class="illustration"
                  alt="A Rockhopper Penguin just standing around."
                  title="A Rockhopper Penguin just standing around."
                />
              </div>
            </div>
          </th>
          <th>
            <div class="wrapper">
              <div class="content" role="main">
                <div class="text">
                  <h1 style="color: #ea2337;"><u>The northern rockhopper penguin</u></h1>
                    <!-- Unordered and ordered lists -->
                    <ul>
                      <li><u style="color: #ea2337;"><b>Habitat:</b></u> Islands in the temperatre Indian and South Atlantic oceans, like the Tristan da Cunha archipelago</li>
                      <li><u style="color: #ea2337;"><b>Height:</b></u> Up to 18 inches as an Adult</li>
                      <li><u style="color: #ea2337;"><b>Scientific name:</b></u> Eudyptes moseleyi</li>
                    </ul> 
                  <h3><u style="color: #ea2337;"><b>Fun Facts:</b></u></h3> 
                    <ol>
                      <li>They can sleep while floating in the sea.</li>
                      <li>Their beaks start out black but slowly turn orange as they grow older.</li>
                      <li>They have superciliums, the yellow crest of feathers, to help attract mates. The healthier and better condition of the supercilium, the better.</li>
                    </ol> 
                </div>
              </div>
            </div>
          </th>
        </tr>
        <tr>
          <th>
            <div class="wrapper">
              <div class="content" role="main">
                <!-- Four of four Pictures -->  
                <img
                  src="https://cdn.glitch.global/4bd1f48f-3d5a-4137-8e9c-19367b57f5b2/BluePenguin.jpg?v=1708563781925"
                  class="illustration"
                  alt="A little penguin being confused at the existence of the ground."
                  title="A little penguin being confused at the existence of the ground."
                />
              </div>
            </div>
          </th>
          <th>
            <div class="wrapper">
              <div class="content" role="main">
                <div class="text">
                  <h1 style="color: #ea2337;"><u>The little penguin</u></h1>
                    <!-- Unordered and ordered lists -->
                    <ul>
                      <li><u style="color: #ea2337;"><b>Habitat:</b></u> Australia and New Zealand</li>
                      <li><u style="color: #ea2337;"><b>Height:</b></u> Up to 16 inches as an Adult</li>
                      <li><u style="color: #ea2337;"><b>Scientific name:</b></u> Eudyptula minor</li>
                    </ul> 
                  <h3><u style="color: #ea2337;"><b>Fun Facts:</b></u></h3>  
                    <ol>
                      <li>They are commonly known by many other names too including fairy penguins, little blue penguins, and just blue penguins.</li>
                      <li>They are the slowest swimming penguin, only going up to 1.6 mph as they swim. Keep in mind the fastest swimming speed for a penguin, which belongs to gentoo penguins, is 22 mph. </li>
                      <li>They have blue feathers to better camoflauge in the waters of their habitat compared to the habitats of other penguins. </li>
                    </ol> 
                </div>
              </div>
            </div>
          </th>
        </tr>
      </table>
    
    <!-- Code for the footer of the webpage -->
    <footer class="footer">
      <h3><p>The exotic world of Penguins is supported by page readers like you, thank you! After the incident in 2018, it is required that you can guarantee that the fact you're providing is true. We can not have anymore false facts about Rockhopper penguins slide on this page anymore.</p></h3>
      <!-- Contact Info in Footer -->
      <h3><p style="color: #ea2337;"><u>Contact Information:</u> Email: rml87@uakron.edu </p></h3>
    </footer>
  </body>
</html>
"

style.css
"/* Our default values set as CSS variables */
:root {

/* Colored like a rockhopper penguin */
background-image: linear-gradient(to right, #ffffff 1%, #f9e94e 4%, #f9e94e 8%, #000000 10%, #000000 90%, #f9e94e 92%, #f9e94e 96%, #ffffff 99%); 
  --color-text-main: #577bfb;
  --color-primary: #577bfb;
  --wrapper-height: 87vh;
  --image-max-width: 300px;
  --image-margin: 3rem;
  --font-family: "HK Grotesk";
  --font-family-header: "HK Grotesk";
}

/* Basic page style resets */
* {
  box-sizing: border-box;
}
[hidden] {
  display: none !important;
}

/* Import fonts */
@font-face {
  color: #577bfb;
  font-family: Arial, Helvetica, sans-serif;
  src: url("https://cdn.glitch.me/605e2a51-d45f-4d87-a285-9410ad350515%2FHKGrotesk-Regular.otf?v=1603136326027")
    format("opentype");
}
@font-face {
  color: #577bfb;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  src: url("https://cdn.glitch.me/605e2a51-d45f-4d87-a285-9410ad350515%2FHKGrotesk-Bold.otf?v=1603136323437")
    format("opentype");
}

/* Footer */
.footer {
  color: #ea7d23;
  display: flex;
  justify-content: space-between;
  margin: 1rem auto 0;
  padding: 1rem 0 0.75rem 0;
  width: 80%;
  flex-wrap: wrap;
  /* A divider dividing the main section from the footer */
  border-top: 4px solid #ffffff;
}

.divider {
  padding: 0 1rem;
}

header 
{
  margin-left: 10em;
  margin-right: 10em;
  text-align: center;
  padding: 2em;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: var(--color-bg);
}

/* Page structure */
.wrapper {
  min-height: var(--wrapper-height);
  display: grid;
  place-items: left;
  margin: 0 auto;
  width: 70%;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  text-align: left;
}

.title {
  color: #577bfb;
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 100px;
  line-height: 105%;
  margin: 0px 0px 0px 0px;
}

/* Very light scaling for our illustration */
.illustration {
  display: block;
  max-width: 500px;
  max-height: 500px;
  width: auto;
  height: auto;
  margin: 0px 0px 0px 0px;
  box-shadow: -5px 5px 10px white;
}

/* Text formatting */
.text {
  color: #ea7d23;
  margin: 1rem auto 0;
  text-align: left;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  text-shadow: -3px 3px 5px black;
}

.list {
  color: white
}

/* Interactive image */
.illustration:active {
  transform: translateY(5px);
}

/* Button dip */
.dipped {
  transform: translateY(5px);
}

/* Table Formatting */
table.ShownBorder, td.ShownBorder{
  height: 50px;
  width: 80%;
  border-collapse: collapse;
  border: 0.3em solid;
  th{
    border: 0.3em solid;
  }
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding: 1em;
  tr > td + td {
    border-left-width: 10px;
  }
  tr + tr > td {
    border-top-width: 10px;
  }
}

table.BlankBorder, td.BlankBorder{
  height: auto;
  max-width: 100%;
  width: 80%;
  border-collapse: collapse;
  border: 0.3em solid;
  th{
    border: 0.3em solid;
  }
  text-align: center;
  vertical-align: top;
  margin-left: auto;
  margin-right: auto;
  padding: 1em;
  tr > td + td {
    border-left-width: 10px;
  }
  tr + tr > td {
    border-top-width: 10px;
  }
}"