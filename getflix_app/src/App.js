import { Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import UserContext from "./Store/UserContext";

import HomePage from "./Pages/Homepage";
import FavoritesPage from "./Pages/Favourites";
import RegisterPage from "./Pages/Register";
import LogInPage from "./Pages/LogIn";
import { NavbarBootstrap } from "./Components/NavbarBS";

import axios from "axios";

function App(props) {

  const [user, setUser] = useState({
    username: null,
    sessionId: null,
  });

  useEffect(() => {

    // If the context has an SID, great!
    // The conditional will short-circuit and we'll carry on.
    // Otherwise, it'll check local storage because perhaps a refresh of the
    // site -- and therefore UserContext -- happened.
    // If even that is undefined, then we'll be left with a falsy value.

    const potentialSessionId = user.sessionId || localStorage['sessionId'];

    if (potentialSessionId) {
        axios.post("http://localhost/first_year_group_project_y8/getflix_app/src/php/get_username_from_session.php", {
            session_id: potentialSessionId,
        })
            .then(result => {
                const response = result.data;
                console.log("Session Check: ")
                console.log(result);

                if (response.status === "valid") {
                    setUser({
                        username: response.username,
                        sessionId: response.session_id
                    });
                }
            })
    }
}, []);


  useEffect(() => {
    axios
      .post(
        "http://localhost/first_year_group_project_y8/getflix_app/src/php/dbinit.php"
      )
      .then((result) => {
        let response = result.data.data;
      })
      .catch(console.error);
  });

  const value = React.useMemo(
    () => ({
      user,
      setUser,
    }),
    [user.sessionId]
  );

  if(user.sessionId) {
    return (
        <div>
          <UserContext.Provider value={value}>
            <NavbarBootstrap />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/favourites" element={<FavoritesPage />} />
            </Routes>
          </UserContext.Provider>
        </div>
      );
  }

  return (
    <div>
      <UserContext.Provider value={value}>
        <NavbarBootstrap />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LogInPage />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}
export default App;
