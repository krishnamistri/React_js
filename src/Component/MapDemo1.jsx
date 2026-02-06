
import React from "react"

export const MapDemo1 = () =>{


    let cars=["audi","BMW","suzuki","rr"]

    return(
        <div>


            <h1> Map Demo 1</h1>

            {

                cars.map((c) =>{

                    return <h1>{c}</h1>



                })
            }
        </div>



    )
}