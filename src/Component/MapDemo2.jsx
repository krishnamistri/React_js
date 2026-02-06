import React from "react";

export const MapDemo2 =() =>{


    var users =[

        {id:1,name:'raj',age:25,gender:"male"},
        {id:1,name:'parth',age:22,gender:"male"},
        {id:1,name:'mayur',age:26,gender:"male"},
        {id:1,name:'jaya',age:21,gender:"female"},


    ]

    return(

        <div>


            <h1>Map Demo2</h1>
            {

                users.map((user)=>{

                    return<li>{user.id} -{user.name} -{user.age} -{user.gender}</li>

                })
            }
        </div>
    )


}