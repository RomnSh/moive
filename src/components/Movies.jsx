import axios from "axios";
import { Fragment, useContext, useEffect, useState } from "react";
import { AiFillPlayCircle } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { Container } from "./NavBar";
import TrailerMovies from "../Trailers/TrailerMovies";
import NoImage from "./No_Image.jpg"
import "../Styles/Vidios.css"

function Movies () {
    const {toggle, inputValue} = useContext(Container)
    const input = inputValue
    const [moviesData, setMoviesData] = useState([])
    const Show = input ? "search" : "discover"
    const [trailer, setTrailer] = useState(true)
    const [movieTitle, setMovieTitle] = useState('')
    const Api = `https://api.themoviedb.org/3/${Show}/movie`
    const Images = 'https://image.tmdb.org/t/p/w500'

    const MoviesCal = async() => {
        const data = await axios.get(Api, {
            params:{
                api_key: '8b65d2c0d6bd80d7754f350e9aae0f5a',
                query: input
            }
        })
        const results = data.data.results;
        setMoviesData(results)
    }
    useEffect(() => {
        setTimeout(() => {
            MoviesCal()
        }, 100)
        
    },[input])
    
    const MoviesTitle = (movie) => {
            setMovieTitle(movie.title)
            setTrailer(!trailer)
    }

    return ( 
        <Fragment>
            <div className={toggle ? "mainBgColor" : 'seconddaryBgColor' }>
            <div className="movies-container">
                {moviesData.map((movie) => {
                    return(
                    <div key={movie.id}>
                        <Fragment >
                            <div id={trailer ? "container" : 'NoContainer'}>
                            <AiFillPlayCircle color="#fff" fontSize={40} id={trailer ? 'playIcon' : 'hide'} onClick={() => MoviesTitle(movie)}/>
                            <img src = {movie.poster_path ? `${Images}${movie.poster_path}`: NoImage} alt = "" onClick={() => MoviesTitle(movie)}/>
                            <h3 className={toggle ? "mainColor" : "secondaryColor"} id={movie.title.length > 28 ? "smaller-Text" : ''}>{movie.title}</h3>

                            </div>
                        </Fragment>
                    </div>
                    )
                })}
                {trailer ? console.log() : <TrailerMovies moviesTitle = {movieTitle} toggle = {toggle}/>}
                <AiOutlineClose id={trailer ? 'Nothing' : "Exit1"} className={toggle ? "DarkTheme" : "LightThemeClose"} fontSize={55} cursor='pointer' onClick={() => setTrailer(true)}/>
            </div>
            </div>
           
        </Fragment>
     );
}

export default Movies ;

