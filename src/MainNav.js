import React ,{useEffect}  from "react";
// import Box from '@material-ui/core/Box';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SearchIcon from '@material-ui/icons/Search';
import MovieIcon from "@material-ui/icons/Movie";
import TvIcon from "@material-ui/icons/Tv";
import WhatshotIcon from '@material-ui/icons/Whatshot';
import "./MainNav.css";
import {useHistory} from 'react-router-dom';
import { makeStyles } from "@material-ui/core";
 const useStyles = makeStyles ({
  //  root :{
  //    width :" 100%",
  //    position :"fixed",
  //  }
 });

export default function SimpleBottomNavigation() {
  // const classes = useStyles();
  const [value, setValue] = React.useState(0);
 const history = useHistory();

  useEffect(() => {
      if (value === 0)  history.push("/");
      else if (value === 1)  history.push("/movies");
      else if (value === 2)  history.push("/series");
      else if (value === 3)  history.push("/search");
     
  }, [value,history]);

  return (
   
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        // showLabels
        // className = {classes.root}
      >
           <BottomNavigationAction  style = {{ color : "orange"}} label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction  style = {{ color : "blue"}} label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction  style = {{ color : "green"}} label="Tv Series" icon={<TvIcon />} />
        <BottomNavigationAction style = {{ color : "black"}} label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
    
  );
}