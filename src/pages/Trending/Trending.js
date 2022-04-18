// import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import SingleContent from "../../SingleContent";
import "../../SingleContent.css";
import "../../Trending.css";
// import {CustomPagination} from '@material-ui/core';
import CustomPagination from "../../pagination/CustomPagination";

const Trending = () => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const fetchTrending = async() => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=12e046b5f02174a66a98dfaec37a279e&page=${page}`);
        console.log(data.results);
        setContent(data.results);
    };
    useEffect(() => {
        fetchTrending();
        // eslint-disable-next-line
    }, [page]);

    return (
         <>
        <div>
        <span className = "pageTitle" > </span>
       <div className = "trending ">
       {content && content.map((c) => (<SingleContent 
       key = {c.id}
        id = {c.id}
         poster = {c.poster_path}
         title = {c.title || c.name} 
         date = {c.first_air_date || c.release_date}
         media_type = {c.media_type}
         vote_average = {c.vote_average} 
         />
       ))}

       </div>
       <CustomPagination setPage = {setPage}/>
        </div>
        </>
    );
};

export default Trending;
