const axios = require('axios');

exports.handler = async function(event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { question } = JSON.parse(event.body);

  // Here, you'll make the call to the GPT API.
  // For simplicity, let's return a dummy response for now:
  return {
    statusCode: 200,
    body: JSON.stringify({ answer: `Answer to: ${question}` })
  };
};
