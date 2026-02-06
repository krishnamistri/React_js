import React from "react";

 
export const MapDemo4=()=>{

    var cities =[

        {id:1 ,name:"Ahmedabad", pop:80000, AQI:302},
        {id:1 ,name:"Delhi", pop:10000, AQI:400},
        {id:1 ,name:"Dehradun", pop:50000, AQI:150},

    ];

    return(

        <div style={{textAlign:"center"}}>
            <h1>Map Demo4</h1>

            <table className="table table-dark"> 

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>POPULATION</th>
                        <th>IAQI</th>

                    </tr>
                </thead>

                <tbody>
                    {

                        cities.map((city)=>{


                            return <tr>

                                <td>{city.id}</td>
                                <td>{city.name}</td>
                                <td>{city.pop}</td>
                                <td>{city.AQI}</td>
                                

                            </tr>
                        })

                    }
                </tbody>
            </table>
        </div>
    );


}