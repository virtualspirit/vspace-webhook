const core = require('@actions/core');
const github = require('@actions/github');

// create post request to virtualspace api 
const axios = require('axios');

async function run() {
    try {
        // Get the JSON webhook payload for the event that triggered the workflow
        const http_post_header = {
            'Content-Type': 'application/json',
            'secret-key': core.getInput('secret-key')
        }
        const http_post_body = {
            'text': core.getInput('messages'),
        }
        const http_post_url = core.getInput('webhook-url')
        const http_post_response = await axios.post(http_post_url, http_post_body, { headers: http_post_header })
        
        console.log(http_post_response.data)

    } catch (error) {
        core.setFailed(error.message);
    }
}

run()