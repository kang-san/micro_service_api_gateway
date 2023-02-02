import mongoose from 'mongoose';

export default async function dbConnect(uri, callback) {
  await mongoose.connect(process.env.MONGODB_URL, {
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(()=> console.log("Db is Connected Successfully"))
  .catch((error)=> console.log(`Error ${error.message}`));
}

