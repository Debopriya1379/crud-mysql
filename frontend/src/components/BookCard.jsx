import React from 'react'
import '../styles/BookCard.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const BookCard = ({data}) => {

    const handleDelete = async(bookId)=>{
        try{
            await axios.delete(`http://localhost:8800/books/${bookId}`)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className='book_card_container'>
            <div className="book_card_up">
                {data.cover ? <img src={data.cover} alt="book cover" /> :""}
            </div>
            <div className="book_card_down">
                <h3>{data.title}</h3>
                <p>$ {data.price}</p>
            </div>
            <div className="options">
                <button>
                    <Link
                        to={`/update/${data.id}`}
                    >
                        Update
                    </Link>
                </button>
                <button onClick={()=>{handleDelete(data.id)}}>Remove</button>
            </div>
        </div>
    )
}
