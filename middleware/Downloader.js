const Downloader = require('./bin/DownloaderBase');

module.exports ={
    downloadAllVideos: ()=>{
        return async (req,res, next)=>{
            try {
                Downloader.Downloader(req.body.links);
                next(null,req)
            } catch (error) {
                next(error)
            }
        }
    }
}