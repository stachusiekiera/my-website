import { Configuration, OpenAIApi } from "openai";

console.log("Function initiated"); // This log will confirm that your function has started execution.
const { Configuration, OpenAIApi } = require("openai");

console.log("Setting up OpenAI configuration...");


const configuration = new Configuration({
    organization: "org-qAT6EmKDcaenk0AQ7eGk6b7m",
    apiKey: process.env.OPENAI_API_KEY,
});

if (configuration) {
    console.log("OpenAI configuration set up successfully");
} else {
    console.log("Error setting up OpenAI configuration");
}


console.log("Initializing OpenAI API...");

const openai = new OpenAIApi(configuration);

if (openai) {
    console.log("OpenAI API initialized successfully");
} else {
    console.log("Error initializing OpenAI API");
}

console.log("Fetching engines...");

try {
    const response = await openai.listEngines();
    console.log("Engines fetched:", response);
} catch (error) {
    console.log("Error fetching engines:", error.message);
}

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
console.log("Function execution completed"); // This log will indicate that your function has completed execution.
