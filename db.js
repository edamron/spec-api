const MongoClient = require('mongodb').MongoClient;
const uri =
	'mongodb+srv://edamron:fUR!ebR4VKhJ@earld-deppv.mongodb.net/test?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect((err) => {
	const collection = client.db('sag-app').collection('suspension-specs');
	// perform actions on the collection object
	client.close();
});
