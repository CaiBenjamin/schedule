const accountSid = "ACacd6c9ea687b0dd8356de6e9378d06e6";
const authToken = "af8e3efd4083f573fcf152fc2bb9f440";
const client = require('twilio')(accountSid, authToken);

client.messages
.create({
	body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
	from: '+13477589104',
	to: '+13016488214'
})
.then(message => console.log(message.sid));