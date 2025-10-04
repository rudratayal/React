import React,{useState,useEffect} from 'react'
import { Container,PostCard } from '../components'
import appwriteservice from "../appwrite/config";

function AllPosts() {
    const[posts, setPosts] = useState([])
    useEffect(()=> {},[])
    appwriteservice.getPosts([]).then((posts) => {
        if(posts){
            setPosts(posts.documents)
        }
    })
  return (
    <div>AllPosts</div>
  )
}

export default AllPosts