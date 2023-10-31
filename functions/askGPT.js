const OPENAI_API_URL = "https://api.openai.com/v1/engines/text-davinci-003/completions";
const API_KEY = "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"; // Replace with your OpenAI API key.

async function askGPT(question) {
    const headers = new Headers({
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
    });

    const body = JSON.stringify({
        prompt: question,
        max_tokens: 150
    });

    const requestOptions = {
        method: "POST",
        headers: headers,
        body: body
    };

    const response = await fetch(OPENAI_API_URL, requestOptions);
    const data = await response.json();

    return data.choices[0].text.trim();
}

export default askGPT;
