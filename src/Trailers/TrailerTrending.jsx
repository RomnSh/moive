import React, { Fragment, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';
import '../Styles/TrailerMovie.css'

function TrailerTrend({trendingTitle, toggle}) {
    const [video, setVideo] = useState("");
    const [videoURL, setVideoURL] =	useState("");

    function handleSearch() {
        setVideo(trendingTitle)
        movieTrailer(video).then((res) => {
        setVideoURL(res);
        });
    }
    useEffect(() => {
        handleSearch()
    }, [videoURL])
    return ( 
        <Fragment>
            <div className="Container">
	        </div>
            <div className='player'>
            <h1 id= {toggle ? 'TrailerMovie-name-dark' : 'TrailerMovie-name-light' }>{trendingTitle}</h1>
                <ReactPlayer url={videoURL} controls={true} width={'1000px'} height={'700px'} muted={false} />
            </div>
        </Fragment>
     );
}

export default TrailerTrend;