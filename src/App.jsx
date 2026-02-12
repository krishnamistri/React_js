import { Component, useState } from "react";
//import Login from "./Component/fristcomponent";
//import { Name } from "./Component/fristcomponent";
//import ContentComponent from "./Component/Contectcomponent";
import HeaderComponent from "./Component/HeaderComponent";
import { FooterComponent } from "./Component/FooterComponent";
import { MapDemo1 } from "./Component/MapDemo1";
import { MapDemo2 } from "./Component/MapDemo2";
import { MapDemo3 } from "./Component/MapDemo3";
import { MapDemo4 } from "./Component/MapDemo4";
import { MapDemo5 } from "./Component/MapDemo5";
import { Route, Routes } from "react-router-dom";
//import {HeaderComponent} from "./Component/HeaderComponent";
import { HomeComponent } from "./Component/HomeComponent";
import { NetflixHome } from "./Component/NetflixHome";
import { Navbar } from "./Component/Navbar"; 
import { NetflixMovies } from "./Component/NetflixMovie";
import { ErrorNotFound } from "./Component/ErrorNotFound";
import { Watch } from "./Component/Watch";
import { FunctionDemo1 } from "./Component/FunctonDemo";
import { UseStateDemo1 } from "./Component/UseStateDemo1";
import { UseStateDemo2 } from "./Component/UseStateDemo2";
import { UseStateDemo3 } from "./Component/UseStateDemo3";
function App() {

  return (
    <div>



      <Navbar/>

      <Routes>
        <Route path="/"element= {<HomeComponent/>}></Route>
         <Route path="/netflixhome" element={<NetflixHome />}></Route>
         <Route path="/netflixmovie" element={<NetflixMovies />}></Route>
            <Route path="*" element = {<ErrorNotFound/>}></Route>
            <Route path="/*" element = {<Watch/>}></Route>
            <Route path="/functiodemo1" element = {<FunctionDemo1/>}></Route>
            <Route path="/UseState1" element = {<UseStateDemo1/>}></Route>
            <Route path="/UseState2" element = {<UseStateDemo2/>}></Route>
            <Route path="/UseState3" element = {<UseStateDemo3/>}></Route>
            
      </Routes>






      {/* <h1>This is React App Runing....🚀 </h1>
      
     <Login></Login>
     <Name></Name> 
      <ContentComponent></ContentComponent>
    <HeaderComponent></HeaderComponent>
    <FooterComponent></FooterComponent>
    <MapDemo1></MapDemo1>
    <MapDemo2/>
    <MapDemo3/>
    <MapDemo4/>
    <MapDemo5/>
    <HomeComponent/>
    <NetfilxHome/> */}
    </div>
  );
}


export default App;