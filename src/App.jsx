import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Header from './components/UI/Header'
import Champions from "./components/pages/champions/Champions";
import Footer from "./components/UI/Footer";
import News from './components/pages/news/News'
import {useAuth0} from "@auth0/auth0-react";
import TrailerPage from "./components/pages/game/TrailerPage";

function App() {

    const {isAuthenticated} = useAuth0();

  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            { isAuthenticated ?
                <Routes>
                    <Route path='/champions' element={<Champions/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/' element={<TrailerPage/>}/>
                    <Route path="*" element={<Navigate to="/news"/>}/>
                </Routes> :
                <Routes>
                    <Route path='/' element = {<TrailerPage/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
            }
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
