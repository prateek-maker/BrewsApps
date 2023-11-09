const BookModel = require('./bookModel')

class BookController {

    async saveBookDetails(req,res) {
        try {
        //    await BookModel.updateOne({_id : req.body._id},{$set :req.body},{ upsert: true })
        await BookModel(req.body).save();
           return res.status(200).send({'Message' : 'Book details save successfully'})
            
        } catch (error) {
            console.log(error)
        }
    }

    async viewAllBookDetails(req,res) {
        try {
           let booksList =  await BookModel.find();
           return res.status(200).send({'bookList' : booksList})
        } catch (error) {
            console.log(error);
        }

    }

    async viewSpecificBookDetail(req,res) {
        try {
            let specificBookDetail = await BookModel.findOne({_id : req.params.bookId})
            return res.status(200).send({'specificBookDetail' : specificBookDetail})
        } catch (error) {
            console.log(error);
        }
    }

    async updateBookDetails(req,res) {
        try {
             await BookModel.updateOne({_id : req.params.bookId},{$set : req.body})
             return res.status(200).send({'Message' : 'Book detail update sucessfully'})
        } catch (error) {
            console.log(error);
        }
    }

    async deleteBookDetails(req,res) {
        try {
            await BookModel.deleteOne({_id : req.params._id})
            return res.status(200).send({'Message' : 'Book detail delete sucessfully'})
        } catch (error) {
            console.log(error);
        }
    }



}
module.exports = new BookController()