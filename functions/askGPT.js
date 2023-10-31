const axios = require('axios');

exports.handler = async function(event, context) {
    try {
        const response = await axios.post("https://api.openai.com/v1/engines/text-davinci-003/completions", {
            // ... your request body here ...
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        return {
            statusCode: 200,
            body: JSON.stringify(response.data)
        };
    } catch (error) {
        return {
            statusCode: error.response ? error.response.status : 500,
            body: JSON.stringify(error.message)
        };
    }
};
