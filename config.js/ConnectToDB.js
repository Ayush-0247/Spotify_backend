import mongoose from "mongoose";

const ConnectToDB = async () => {
     try {
         const conn = await mongoose.connect(process.env.MONGO_URL)
         console.log(`MongoDB Connected: ${conn.connection.host}`)
     } catch (error) {
         console.log(error)
         process.exit(1)
     }
};

export default ConnectToDB;