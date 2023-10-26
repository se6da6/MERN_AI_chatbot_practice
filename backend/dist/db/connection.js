import { connect, disconnect } from 'mongoose';
async function connectToDatabase() {
    try {
        await connect(process.env.MONGO_URI);
    }
    catch (error) {
        console.log(error);
        throw new Error('Can not connect to MongoDB');
    }
}
async function disconnectFromDatabase() {
    try {
        await disconnect();
    }
    catch (error) {
        console.log(error);
        throw new Error('Can not disconnect from MongoDB');
    }
}
export { connectToDatabase, disconnectFromDatabase };
//# sourceMappingURL=connection.js.map