import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_LOCAL_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(
      `MongoDB connected: ${connection.connection.host}`
    );
    
  } catch (error) {
    console.error(`Error is ${error.message}`);
    process.exit(1);
  }
}

export default connectDB