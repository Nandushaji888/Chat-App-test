import mongoose from 'mongoose'

const connectMongoDB = async()=> {
    try {
        // console.log(process.env.MONGO_DB_URI);
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log('CONNECTED TO MONGODB');
    } catch (error) {
        console.log('Error in connecting to MongoDB',error.message);
    }

}
export default connectMongoDB