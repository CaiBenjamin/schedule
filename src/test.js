const accountSid = "ACacd6c9ea687b0dd8356de6e9378d06e6";
const authToken = "dc7659184e99b660cd13d2be6a726b31";
const client = require('twilio')(accountSid, authToken);

client.messages
.create({
	body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
	from: '+13477589104',
	to: '+13016488214'
})
.then(message => console.log(message.sid));