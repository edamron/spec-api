const mongoose = require('mongoose');
mongoose.connect(
    'mongodb+srv://edamron:fUR!ebR4VKhJ@earld-deppv.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true });

exports getAll(() => {
    mongoose.connection.((err) => {
        const collection = client.db('sag-app').collection('suspension-specs');
        // perform actions on the collection object
        client.close();
    });
});
