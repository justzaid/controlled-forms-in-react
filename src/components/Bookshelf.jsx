import { useState } from 'react';
import '../App.css'

const Bookshelf = () => {

    const [books, setBooks] = useState([])
    const [currentBooks, setCurrentBooks] = useState([{
        title: '',
        author: '',
    }])

    const handleInputChange = (event) => {
        setCurrentBooks({...currentBooks, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setBooks([...books, currentBooks])
        setCurrentBooks({title: '', author: '',})
    }

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit} className="form">
                    <label htmlFor="title">Book Title: </label>
                    <input
                    id="title"
                    name="title"
                    value={currentBooks.title}
                    onChange={handleInputChange}
                    />

                    <label htmlFor="author">Author Name: </label>
                    <input class="input"
                    id="author"
                    name="author"
                    value={currentBooks.author}
                    onChange={handleInputChange}
                    />
                    <button class="button" type="submit">Add new Book</button>
                </form>
            </div>
            <div className="bookCardsDiv">
                {books.map((book) => (
                    <div class="bookCard">
                        <h4>{book.title}</h4>
                        <p>{book.author}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Bookshelf