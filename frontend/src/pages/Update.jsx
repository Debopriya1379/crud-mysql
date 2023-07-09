import axios from 'axios';
import React,{useState} from 'react'
import '../styles/Update.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Update = () => {

    const [book, setBook] = useState({
        title: "",
        desc: "",
        price: null,
        cover: "",
    });

    const [error,setError] = useState(false)

    const location = useLocation();
    const navigate = useNavigate();

    const bookId = location.pathname.split("/")[2];

    const handleChange = (e)=>{
        setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleUpdate = async (e) => {
        e.preventDefault()

        try{
            await axios.put(`http://localhost:8800/books/${bookId}`,book)
            navigate('/')
        }catch(err){
            console.log(err)
            setError(true)
        }
    }

    return (
        <div className='update_container'>
            <h2>Update Book</h2>
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
            <button onClick={handleUpdate}>Save</button>
            {error && "Something went wrong!"}
        </div>
    )
}
