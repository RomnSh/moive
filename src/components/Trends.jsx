import axios from "axios";
import { Fragment, useEffect, useState, useContext } from "react";
import { Container } from "./NavBar";
import { AiOutlineClose, AiFillPlayCircle } from 'react-icons/ai';
import NoImage from "./No_Image.jpg"
import "../Styles/Vidios.css"
import TrailerTrend from "../Trailers/TrailerTrending";


function Trends () {
    const Api = 'https://api.themoviedb.org/3'
    const [trendsArray, setTrendsArray] = useState([])
    const {toggle} = useContext(Container)
    const [trailer, setTrailer] = useState(true)
    const [trendTitle, setTrendTitle] = useState('')
    const TrendsShow = '/trending/all/week'
    const Images = 'https://image.tmdb.org/t/p/w500'
    
    const Trands = async() => {
        const data = await axios.get(`${Api}${TrendsShow}`, {
            params:{
                api_key: '8b65d2c0d6bd80d7754f350e9aae0f5a',  
            }
        })
        const results = data.data.results;
        setTrendsArray(results)
    }
useEffect( () => {
    setInterval (()=> {
        Trands()
    }, 100)
}, [])
console.log(trendsArray[0]);

const TrendTitle = (trend) => {
    setTrendTitle(trend.name ? trend.name : trend.title)
    setTrailer(!trailer)

}


    return ( 
        <Fragment>
            <div className={toggle ? "mainBgColor" : 'seconddaryBgColor' }>
                <div className="movies-container">
                    {trendsArray.map((trend) => {
                       return (
                        <Fragment key={trend.id}>
                        <div id={trailer ? "container" : "NoContainer"}>
                            <AiFillPlayCircle color="#fff" fontSize={40} id={trailer ? 'playIcon' : 'hide'} onClick={() => TrendTitle(trend)}/>    
                            <img src = {trend.poster_path ? `${Images}${trend.poster_path}`: NoImage} alt = "" onClick={() => TrendTitle(trend)}/>
                            <h3 className={toggle ? "mainColor" : "secondaryColor"} id={trend.name ? (trend.name.length> 28 ? "smaller-Text" : '') : (trend.title.length > 28 ? "smaller-Text" : '')}>{trend.title ? trend.title :trend.name}</h3>

                        </div>
                        </Fragment>
                       ) 
                    })}
                    {trailer ? console.log() : <TrailerTrend trendingTitle = {trendTitle} toggle = {toggle} />}
                    <AiOutlineClose id={trailer ? 'Nothing' : "Exit1"} className={toggle ? "DarkTheme" : "LightThemeClose"} fontSize={55} cursor='pointer' onClick={() => setTrailer(true)}/>
                </div>
            </div>
        </Fragment>
        
     );
}

export default Trends ;

