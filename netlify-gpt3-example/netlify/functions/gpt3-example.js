const { Configuration, OpenAIAPI } = require("openai");

exports.handler = async function(event, context) {
  const openai = new OpenAIAPI(new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  }));

  const prompt = event.queryStringParameters.prompt || "Hello, how can I assist you today?";

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 150,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: response.data.choices[0].text.trim() }),
    };
  } catch (error) {
    console.error("Error calling OpenAI API:", error.response ? error.response.data : error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};