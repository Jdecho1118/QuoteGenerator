const api_url = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getQuote(url) {
    const response = await fetch(url);
    const data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

function copyToClipboard() {
    const textToCopy = quote.textContent + " - " + author.textContent;
    
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    
    document.body.appendChild(textArea);
    textArea.select();
    
    document.execCommand("copy");
    
    document.body.removeChild(textArea);
    
    alert("Quote copied to clipboard!");
}

getQuote(api_url);


