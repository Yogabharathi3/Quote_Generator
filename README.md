# Quote_Generator
## Date:10.07.2025
## Objective:
To create a simple quote generator using HTML, CSS, and JavaScript that displays a new random motivational quote each time a button is clicked — similar to daily quote sections on blogs or productivity apps.

## Tasks:

#### 1. Create the HTML Structure:
Add a heading like ```<h1>InspireMe</h1>```

Use a ```<div> or <p>``` to display the quote text.

Use another ```<p> or <span>``` to display the author’s name.

Add a button labeled “Get Quote”.

#### 2. Style the Layout Using CSS:
Center everything on the page using flexbox.

Style the quote box with padding, background color, and rounded borders.

Use a clean font (like Roboto or Open Sans).

Add hover effects for the button.

#### 3. Add JavaScript Functionality:
Store an array of quotes (objects with text and author).

On button click, generate a random index using Math.random().

Display the selected quote and author in the HTML.

Ensure each click updates the quote dynamically using innerText.

#### 4. Enhancements:
Animate the quote change using fade effects.

Add a “Tweet this” button with a share link.
## HTML Code:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>InspireMe</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>InspireMe</h1>
  <div id="quote-box">
    <p id="quote">Click "Get Quote" to start!</p>
    <p id="author">-</p>
  </div>
  <button id="new-quote">Get Quote</button>
  <button id="tweet-quote">Tweet this</button>

  <script src="script.js"></script>
</body>
</html>
```
## CSS Code:
```
body {
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f0f4f8;
}

h1 {
  margin-bottom: 20px;
  color: #333;
}

#quote-box {
  background: #fff;
  padding: 20px 30px;
  border-radius: 12px;
  text-align: center;
  max-width: 400px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  margin-bottom: 20px;
}

#quote {
  font-size: 1.2em;
  margin-bottom: 10px;
}

#author {
  font-style: italic;
  color: #555;
}

button {
  padding: 10px 20px;
  margin: 5px;
  border: none;
  border-radius: 8px;
  background-color: #4a90e2;
  color: white;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #357ab7;
}
```
## Javascript Code:
```
const quotes = [
  { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Keep going. Everything you need will come to you.", author: "Unknown" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { text: "Do what you can, with what you have.", author: "Theodore Roosevelt" }
];
const quote = document.getElementById('quote');
const author = document.getElementById('author');

document.getElementById('new-quote').onclick = () => {
  const q = quotes[Math.floor(Math.random() * quotes.length)];
  quote.textContent = `"${q.text}"`;
  author.textContent = `- ${q.author}`;
};
```
## Output:
![image](https://github.com/user-attachments/assets/5e127b7c-f5c7-4e12-8479-a76b60da7b0c)

## Result:
A simple quote generator using HTML, CSS, and JavaScript that displays a new random motivational quote each time a button is clicked — similar to daily quote sections on blogs or productivity apps is created successfully.
