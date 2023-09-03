const express = require("express")
const {create,read, delet, update }= require("../Controller/blogController")
const {create1, read1, delet1,update1} = require ("../Controller/blogDeatilsController.js")
const {create2,read2,delet2,update2} = require("../Controller/commentController")
const {create3,read3,delet3,update3} = require('../Controller/messageController')
const {create4,read4,delet4,update4} = require("../Controller/portfoiloController")
const { create5,read5,delet5,update5 } = require("../Controller/productController")
const { create6,read6,delet6,update6 } = require("../Controller/profitController")
const { create7, read7, delet7, update7 } = require("../Controller/servicController")
const { read8, delet8, update8, create8 } = require("../Controller/projectController")
const { create9, read9, delet9, update9 } = require("../Controller/titleController")
const router = express.Router()

//blogController

router.post("/create",create)
router.get("/read",read)
router.delete("/delete/:id",delet)
router.put("/update/:id",update)

// blogDeatilsController

router.post("/create1",create1)
router.get("/read1",read1)
router.delete("/delete1/:id",delet1)
router.put("/update1/:id",update1)

//commentController

router.post("/create2",create2)
router.get("/read2",read2)
router.delete("/delete2/:id",delet2)
router.put("/update2/:id",update2)


// messageController


router.post("/create3",create3)
router.get("/read3",read3)
router.delete("/delete3/:id",delet3)
router.put("/update3/:id",update3)


//portfoiloController

router.post("/create4",create4)
router.get("/read4",read4)
router.delete("/delete4/:id",delet4)
router.put("/update4/:id",update4)

//productController


router.post("/create5",create5)
router.get("/read5",read5)
router.delete("/delete5/:id",delet5)
router.put("/update5/:id",update5)


// profitController


router.post("/create6",create6)
router.get("/read6",read6)
router.delete("/delete6/:id",delet6)
router.put("/update6/:id",update6)

// servicController

router.post("/create7",create7)
router.get("/read7",read7)
router.delete("/delete7/:id",delet7)
router.put("/update7/:id",update7)


//projectController

router.post("/create8",create8)
router.get("/read8",read8)
router.delete("/delete8/:id",delet8)
router.put("/update8/:id",update8)


//titleController


router.post("/create9",create9)
router.get("/read9",read9)
router.delete("/delete9/:id",delet9)
router.put("/update9/:id",update9)


module.exports = router