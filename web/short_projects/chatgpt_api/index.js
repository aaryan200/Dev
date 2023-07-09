const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function runCompletion() {
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Describe the importance of women in a society.",
        max_tokens: 250
    });
    console.log(completion.data.choices[0].text);
}

runCompletion();