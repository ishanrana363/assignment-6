const app = require("./App")
require("dotenv").config()
const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`Server run successfully at http://localhost:${port}`);
})