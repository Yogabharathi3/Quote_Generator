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
