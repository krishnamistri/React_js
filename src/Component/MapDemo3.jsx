import React from "react";

export const MapDemo3=()=>{


    var student =[

        {id:1,name:"pooja",age:21,marks:80,city:"ahmedabad",gender:"female"},
        {id:1,name:"rekha",age:24,marks:90,city:"ahmedabad",gender:"female"},
        {id:1,name:"surti",age:26,marks:70,city:"ahmedabad",gender:"female"},
        {id:1,name:"amit",age:25,marks:72,city:"ahmedabad",gender:"male"},



    ]

    return(

        <div style={{textAlign:"center"}}>

            <h1>Map Demo3</h1>

            <table border="2" align="center">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>MARKS</th>
                        <th>CITY</th>
                        <th>GENDER</th>

                    </tr>
                </thead>
                <tbody>
                    {

                    student.map((st)=>{
                        return <tr>

                            <td>{st.id}</td>
                            <td>{st.name}</td>
                            <td>{st.age}</td>
                            <td>{st.marks}</td>
                            <td>{st.city}</td>
                            <td>{st.gender}</td>


                        </tr>

                    })
                }
                </tbody>
            </table>

        </div>


    )



}