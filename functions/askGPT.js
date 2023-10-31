const { Configuration, OpenAIApi } = require("openai");

exports.handler = async function(event, context) {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    const { question } = JSON.parse(event.body);
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    try {
        const response = await openai.createCompletion({
            engine: "davinci",
            prompt: question,
            max_tokens: 150
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ answer: response.data.choices[0].text.trim() })
        };
    } catch (error) {
        console.error("Error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};
