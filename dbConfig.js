const MongoClient = require('mongoose')

const url = process.env.DBURL + process.env.DBNAME 

MongoClient.connect(url).then(() => {
    console.log('Books database connected');
}).catch((err) => {
    console.log(err);
})