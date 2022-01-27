import React, {useEffect, useState} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const PostList =  () => {

const navigate = useNavigate();
const [data, setData] = useState()
useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => {
        const posts = res.data;
        setData(posts);
        })
}, [])

    return(
        
        <table style={{color: 'white', margin: "70px"}}>
            <thead>
                <tr>
                    <th>#</th>
                    <th>User Id</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Action</th>
                </tr>
            </thead>
            {data && data.map(data => {
                return(
                    <tbody>
                    <tr>
                        <td style={{cursor: 'pointer'}} onClick={() => { navigate({
                                pathname: `/postdetail/${data.id}`,
                           })}}>{data.id}</td>
                        <td>{data.userId}</td>
                        <td>{data.title}</td>
                        <td>{(data.body).slice(0, 150)+'...'}</td>
                        <td><button>Delete</button></td>
                    </tr>
                </tbody>

                )
            })} 
        </table>
    )
}

export default PostList;