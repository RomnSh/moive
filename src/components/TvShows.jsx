import axios from "axios";
import { Fragment, useEffect, useState, useContext } from "react";
import { AiFillPlayCircle } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import NoImage from "./No_Image.jpg"
import { Container } from "./NavBar";
import "../Styles/Vidios.css"
import TrailerTvShows from "../Trailers/TrailerTvShows";

function TvShows() {
    const {toggle, inputValue} = useContext(Container)
    const input = inputValue
    const Show = input ? "search" : "discover"
    const [showData, setShowData] = useState([])
    const [trailer, setTrailer] = useState(true)
    const [title, setTitle] = useState('')
    const Api = `https://api.themoviedb.org/3/${Show}/tv`
    const Images = 'https://image.tmdb.org/t/p/w500'

    const TvShows = async () => {
        const data = await axios.get(Api,{
            params: {
                api_key: '8b65d2c0d6bd80d7754f350e9aae0f5a',
                query: input
            }
        })
        const results = (data.data.results);
        setShowData (results)
    }
    useEffect(() => {
        setTimeout(() => {
            TvShows()
        }, 200)
       }, [input])
    const TvShowTitle = (shows) => {
            setTitle(shows.name)
            setTrailer(!trailer)
    }

    return ( 
        <Fragment >
            <div className={toggle ? "mainBgColor" : 'seconddaryBgColor' }>
                <div className="movies-container">
                    {showData.map((shows) => {
                        return(
                            <Fragment key={shows.id}>
                                <div id={trailer ? "container" : "NoContainer"}>
                                    <AiFillPlayCircle color="#fff" fontSize={40} id={trailer ? 'playIcon' : 'hide'} onClick={() => TvShowTitle(shows)} />
                                    <img src = {shows.poster_path ? `${Images}${shows.poster_path}`: NoImage} alt = "" onClick={() => TvShowTitle(shows)} />
                                    <h3 className={toggle ? "mainColor" : "secondaryColor"} id={shows.name.length > 28 ? "smaller-Text" : ''}>{shows.name}</h3>
                                </div>
                            </Fragment>
                        )
                    })}
                    {trailer ? console.log : <TrailerTvShows tvShowsTitle = {title} toggle = {toggle} />}
                    <AiOutlineClose id={trailer ? 'Nothing' : "Exit1"} className={toggle ? "DarkTheme" : "LightThemeClose"} fontSize={55} cursor='pointer' onClick={() => setTrailer(true)}/>
                </div>
            </div>
        </Fragment>
       
     );
}

export default TvShows;