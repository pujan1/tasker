import mongoose from 'mongoose'


const URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PWD}@${process.env.MONGO_HOST}/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`;

const connectDB = async () => {
  await mongoose.connect(
    URI,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true
    }
  );
  console.log('database connected...');
}


export default connectDB;
