import axios from 'axios'
import React, { useEffect } from 'react'
// import Chip from '@mui/material/Chip';
import { Chip } from '@material-ui/core';
const Genres = ({
    selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  
  type,
  setPage,
}) => {
    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
    } ;

    const handleRemove = (genre) => {
        setSelectedGenres(selectedGenres.filter((selected) => selected.id !== genre.id));
        setGenres([...genres, genre]);
   
    setPage(1);
    } ;





    const fetchGenres = async() =>{
      const{data} = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=12e046b5f02174a66a98dfaec37a279e&language=en-US`);
    
    setGenres(data.genres); 
    };
    console.log(genres);

    useEffect(() => {
      fetchGenres();
      return () => {
        setGenres({});  
      }
    //   eslint disable-next-line
    },[]);

    return (
        <div style = {{padding : "6px 0px"}}>
          {selectedGenres && selectedGenres.map((genre) => (
           <Chip label = {genre.name} style = {{margin: 2}} size = "small" color = "primary" key = {genre.id} clickable onDelete= {() => handleRemove(genre)}/>
          ))}
          {genres && genres.map((genre) => (
           <Chip label = {genre.name} style = {{color :"black" ,backgroundColor : "white", margin: "10px"}} size = "small" key = {genre.id} clickable onClick={() => handleAdd(genre)}/>
          ))}
        </div>
    )
}

export default Genres;
