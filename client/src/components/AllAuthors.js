import React, {useState, useEffect} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';
import Header from './Header';

const AllAuthors = (props) => {

    const [authorList, setAuthorList] = useState([]);
    
    useEffect (()=>{
        axios.get('http://localhost:8000/api/authors')
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setAuthorList(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
        .then((res) => {
            console.log(res.data)
            setAuthorList(authorList.filter((author)=>author._id !== id))
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return(
        <div>
            <Header link={'/new'} linkText="Add an Author" subText="We have quotes by" />
            <table style={{margin:'auto', border:"1px solid black"}}>
                <thead style={{backgroundColor: "lightgray", color: "blue"}}>
                    <tr>
                        <th>Author</th>
                        <th>Action Available</th>
                    </tr>
                </thead>
                <tbody style={{color: "black"}}>
                    {
                        authorList?
                        
                        authorList.map((author, index) => (
                            <tr key={index}>
                                <td>{author.authorName}</td>
                                <td>
                                    <button style={{backgroundImage:"linear-gradient(yellow, gray)", padding:"5px", fontWeight:"bold", margin:"5px", border: "none", borderRadius: "5px"}} onClick = {()=> {navigate(`/edit/${author._id}`)}}>Edit</button>
                                    <button style={{backgroundImage:"linear-gradient(red, gray)", padding:"5px", fontWeight:"bold", margin:"5px", border: "none", borderRadius: "5px"}} onClick = {(e) => deleteHandler(author._id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                        :null
                    }
                </tbody>
            </table>
        </div>
    )

}

export default AllAuthors;