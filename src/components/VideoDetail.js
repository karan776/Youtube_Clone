import React from "react";

const VideoDetail = ({video}) => {
   if(!video){
       return <div>Loding..</div> 
   }
    const videosrc = `https://www.youtube.com/embed/${video.id.videoId}`

 
     return (<div>
         <div className = "ui embed">
             <iframe title = "video player" src = {videosrc} />
         </div>
          <div className = "ui segment">
         <h3 className = "ui header">{video.snippet.title}</h3>
         <p>{video.snippet.description}</p>
         </div>
         </div>);
}

export default VideoDetail;