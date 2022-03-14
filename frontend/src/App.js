import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import UploadSong from "./components/UploadSongPage"
import SongList from "./components/AllSongs"
import SpecificSong from './components/SpecificSong'
import SplashPage from './components/SplashPage'
import * as sessionActions from "./store/session";
import * as songActions from './store/song';
import Navigation from "./components/Navigation";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector((state) => state.session.user)

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            {sessionUser ?
             <SongList/> :
             <SplashPage/>  }
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/songs/upload">
            <UploadSong />
          </Route>
          <Route path="/songs/:songId/:commentId">
            <SpecificSong/>
          </Route>
          <Route path="/songs/:songId">
            <SpecificSong />
          </Route>
          <Route exact path="/songs">
            <SongList/>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;