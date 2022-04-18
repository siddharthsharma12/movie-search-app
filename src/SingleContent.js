import React from 'react';
import { img_300 ,unavailable} from './config/config';
import "./SingleContent.css"
import { Badge } from '@material-ui/core';

const SingleContent = ({id,poster,title,date,media_type,vote_average}) => {
    return (
        <div className = "media">
        <Badge badgeContent = {vote_average} color = {vote_average > 6 ? "primary" : "secondary"} />
        <img className = "poster" src={poster ? `${img_300}/${poster}` : unavailable} alt = "" />
        <b className = "title"> {title} </b>
        <span className = "sub">{media_type === "tv" ? "Tv Series" : "Movie" }
        <span className = "sub"> {date}</span>
        </span>
        </div>
    )
}

export default SingleContent

