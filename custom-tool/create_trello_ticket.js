const fetch = require('node-fetch');
const apiKey = "API_KEY";
const token = "TOKEN_KEY";


const listId = "6a0ac9015d15c8a8eb0a5b72";
let cardName = $input || $flow.input || "New Ticket";



const url =
    "https://api.trello.com/1/cards" +
    "?idList=" + listId +
    "&key=" + apiKey +
    "&token=" + token +
    "&name=" + encodeURIComponent(cardName);

const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
};

try {

   

    const response = await fetch(url, options);

    const text = await response.text();

   

    if (!response.ok) {

        return (
            "ERROR: Trello API failed.\n" +
            "Status: " + response.status + "\n" +
            "Details: " + text
        );
    }

  

    const data = JSON.parse(text);

  
    if (!data.shortUrl) {

        return (
            "ERROR: Trello returned unexpected response.\n" +
            text
        );
    }

    return data.shortUrl;

} catch (error) {

    return (
        "ERROR: Failed to create Trello ticket.\n" +
        error.message
    );
}
 
