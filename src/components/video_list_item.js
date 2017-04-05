import React from 'react'

const VideoListItem = ({video}) => { //Identical to const video.
    //const video = props.video; since we created in videolist item a prop of video={video}
    console.log(video)
    return <li>Video</li>
}

export default VideoListItem