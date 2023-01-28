import React, { Fragment, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';
import '../Styles/TrailerMovie.css'

function TrailerTvShows({tvShowsTitle, toggle}) {
    const [video, setVideo] = useState("");
    const [videoURL, setVideoURL] =	useState("");

    function handleSearch() {
        setVideo(tvShowsTitle)
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
                <h1 id= {toggle ? 'TrailerMovie-name-dark' : 'TrailerMovie-name-light' }>{tvShowsTitle}</h1>
                <ReactPlayer url={videoURL} controls={true} width={'1000px'} height={'700px'} muted={false} />
            </div>
        </Fragment>
     );
}

export default TrailerTvShows;