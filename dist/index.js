import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
//GET - we want to get some dtata from the server
//PUT - we want to update some existing data
//POST - we want to add some data to the server
//DELETE - we want to delete some data from the server
//connectiions and listeners
const PORT = process.env.PORT || 5000;
connectToDatabase()
    .then(() => {
    app.listen(PORT, () => console.log('Server Running'));
})
    .catch((err) => console.log(err));
//# sourceMappingURL=index.js.map