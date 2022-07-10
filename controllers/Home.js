const express = require("express");
const router = express.Router();
const Downloader = require("../middleware/Downloader")

//Root Endpoint
router.post("/", Downloader.downloadAllVideos(), async (req,res)=>{
    res.json({message: "Videos starting to download, please wait"});
})
module.exports = router;