import React, {useEffect, useState} from "react";
import MainRouter from '../src/Routes/Router.js'

function App() {
  const [login, setLogon] = useState()
  useEffect(() => {
    setLogon(JSON.parse(localStorage.getItem("login")))
  }, [login])
  
  return (
    <div className="App">
      <MainRouter isLoggedIn={login} />
    </div>
  );
}

export default App;
