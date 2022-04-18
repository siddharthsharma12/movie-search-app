import React, { useEffect } from 'react'
import {useState} from "react";
import axios from "axios";
import Genres from '../../components/Genres';
import SingleContent from "../../SingleContent";
import CustomPagination from "../../pagination/CustomPagination";
import useGenre from '../../hooks/useGenres';

const Movies = () => {
  const [page,setPage] =useState(1);
  const [selectedGenres,setSelectedGenres] = useState([]);
  const [genres ,setGenres] = useState([]);
  const [content,setContent] =useState([]);
  const [numOfPages,setNumOfPages] =useState();
  const genreforURL = useGenre(selectedGenres);
   const fetchMovies = async() => {
  const{data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=12e046b5f02174a66a98dfaec37a279e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`);
  // console.log(data);
  setContent(data.results);
  setNumOfPages(data.total_pages);
};
  useEffect(() => {
     fetchMovies()
       // eslint-disable-next-line

  }, [page,genreforURL]);
    return (
        <>
        <div>
        <Genres type = "movie" selectedGenres = {selectedGenres} setSelectedGenres = {setSelectedGenres} genres = {genres} setGenres = {setGenres} setPage = {setPage}/>
        <div className = "trending ">
       {content && content.map((c) => (<SingleContent 
       key = {c.id}
        id = {c.id}
         poster = {c.poster_path}
         title = {c.title || c.name} 
         date = {c.first_air_date || c.release_date}
         media_type = "movie"
         vote_average = {c.vote_average} 
         />
       ))}
       {/* {c.media_type} */}
       </div>
       {numOfPages > 1 &&(
       <CustomPagination setPage = {setPage} numofPages= {numOfPages}/>
       )}
        </div>
   
     </>
    )
}

export default Movies
