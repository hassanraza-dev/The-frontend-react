import React, {useEffect, useState} from "react";
import axios from 'axios';
import { useParams} from "react-router-dom";

const PostDetail =  () => {

let  { id } = useParams();
const [post, setPost] = useState()
const [comment, setComment] = useState()

useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
        const postDetail = res.data;
        setPost(postDetail);
        })

        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res => {
        const comments = res.data;
        setComment(comments);
        })
}, [])
;

    return(
        <div style={{display: 'flex', alignItems: "center", flexDirection: "column"}}>
        <div className="post-detail">
            <p style={{fontSize:'24px', textAlign: 'center'}}>{post && post.body}</p>
        </div>
        {comment && comment.map(value => {
            return(
                <div className="post-detail" style={{height: 'auto', margin: '2px', padding: '15px', background: "gray"}}>
            <p style={{fontSize:'20px', color: 'maroon'}}>{value.name}</p>
            <p style={{fontSize:'20px', color: 'darkgray'}}>{value.email}</p>
            <p style={{fontSize:'17px'}}>{value.body}</p>
        </div>
            )
        })}
        </div>
    )
}

export default PostDetail;