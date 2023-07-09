import axios from 'axios'
import '../styles/Add.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Add = () => {
    const [newBook, setNewBook] = useState({
        title: "",
        desc: "",
        price: null,
        cover: "",
    })
    const[error, setError]=useState(false)

    const navigate = useNavigate();

    const handleChange = (e) => {
        setNewBook((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleClick = async(e)=>{
        e.preventDefault();
        try {
            if(!newBook.title || !newBook.desc || !newBook.price || !newBook.cover){
                alert("please fill required fields")
            }else{
                axios.post("http://localhost:8800/books", newBook);
                navigate("/");
            }
        }catch(err){
            console.log(err)
            setError(true)
        }
    }

    return (
        <div className='add_new_container'>
            <h2>Add New Book</h2>
            <input
                type="text"
                required
                placeholder="Book title"
                name="title"
                onChange={handleChange}
            />
            <textarea
                rows={5}
                type="text"
                required
                placeholder="Book desc"
                name="desc"
                onChange={handleChange}
            />
            <input
                type="number"
                required
                placeholder="Book price"
                name="price"
                onChange={handleChange}
            />
            <input
                type="text"
                required
                placeholder="Book cover"
                name="cover"
                onChange={handleChange}
            />
            <button onClick={handleClick}>Add</button>
            {error && "Something went wrong!"}
        </div>
    )
}
