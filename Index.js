const app = require("./App");
const conncetdb = require("./src/config/database");
conncetdb
const port = process.env.PORT || 3000
app.listen(port,async()=>{
    console.log(`Server run successfully at http://localhost:${port}`);
    await conncetdb()
})