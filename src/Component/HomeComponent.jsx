import React from "react";
import { Link } from "react-router-dom";


export const HomeComponent=()=>{

    return(

       <div style={styles.bar}>
            <h1> Tv shows</h1>

            <ul>
                <li>
                   <Link to="/watch/moneyhesit" style={styles.shows}> Mony Heist</Link> 
                </li>
                <li>

                     <Link to="/watch/lupin"> Lupin</Link> 
                </li>
                <li>
                     <Link to="/watch/avngers">Avanger </Link> 
                </li>



            </ul>
        </div>
    )


}

const styles = {
  bar: {
    backgroundColor: "#141414",
    minHeight: "100vh",
    padding: "40px",
    color: "white"
  },

    
    
    

    
  }
   

