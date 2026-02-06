import React from "react";

export const MapDemo5=()=>{

    var students =[

        {id:1,name:"ayush",age:23,marks:78,city:"ahmedabad",gender:"male"},
        {id:2,name:"ayushi",age:22,marks:75,city:"ahmedabad",gender:"female"},
        {id:3,name:"varj",age:28,marks:78,city:"ahmedabad",gender:"male"},
        {id:4,name:"rekha",age:26,marks:98,city:"ahmedabad",gender:"female"},

    ]

        return(

            <div style={{textAlign:"center"}}>

                <h1>Map Demo5</h1>
                <table align="center">
                    <thead className="table" >
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
                            students.map((st)=>{

                                return <tr style={{backgroundColor:st.gender =="female" && "pink"}}>

                                    <td>{st.id}</td>
                                    <td>{st.name}</td>
                                    <td style={{color: st.age>24? "red" : "black"}}>{st.age}</td>
                                    <td style={{backgroundColor:st.marks>80 && "yellow"}}>{st.marks}</td>
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