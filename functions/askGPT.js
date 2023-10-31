const axios = require('axios');

exports.handler = async function(event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { question } = JSON.parse(event.body);

  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: "gpt-3.5-turbo",
      messages: [
        {role: "user", content: question}
      ]
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    // Assuming the response structure is as per the provided documentation:
    const answer = response.data.choices[0].message.content.trim();

    return {
      statusCode: 200,
      body: JSON.stringify({ answer: answer })
    };

  } catch (error) {
    console.error("Error:", error);
    
    // Log detailed error message if it's from axios
    if (error.response) {
      console.error("Detailed Error:", error.response.data);
    }

    return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message })
    };
  }
};
