import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { BookCard } from '../components/BookCard'
import '../styles/Home.css'

export const Home = () => {
    const[allBooks,setAllBooks]=useState([])

    useEffect(()=>{
        const getAllBooks = async ()=>{
            try{
                const res = await axios.get("http://localhost:8800/books")
                setAllBooks(res.data)
            }catch(err){
                console.log(err)
            }
        }
        getAllBooks()
    },[])
    return (
        <div className='home_container'>
            <h2>all books</h2>
            <div className="all_books_container">
                {allBooks.map((book,id)=>{
                    return(
                        <BookCard key={id} data={book}/>
                    )
                })}
            </div>
            <div className="links">
                <p><Link to='/add'>Add New Book</Link></p>
            </div>
        </div>
    )
}
