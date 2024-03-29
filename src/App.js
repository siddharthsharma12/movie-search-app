import Header from "./components/Header";
import "./App.css";
import SimpleBottomNavigation from "./MainNav";
import { Container  } from "@material-ui/core";
import {BrowserRouter ,Route ,Switch} from "react-router-dom"
import Trending from "./pages/Trending/Trending";
import Movies from "./pages/Movies/Movies";
import Series from "./pages/Series/Series";
import Search from "./pages/Search/Search";


function App  ()  {
  return (
    <>
  
  
  <BrowserRouter>
   <Header/>
  <div className="app">
    <Container> 
    <Switch>
    <Route exact path='/' component={Trending}/>
    <Route path='/movies' component={Movies} />
    <Route path='/series' component={Series} />
    <Route path='/search' component={Search} />
    </Switch>
     </Container>
  </div>
  <SimpleBottomNavigation/>
  </BrowserRouter>
  </>

  );
}

export default App;
