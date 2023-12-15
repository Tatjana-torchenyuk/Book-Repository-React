import { Book } from "../../types";
import styles from "./BookListPage.module.css";

interface BooksListPageProps {
    books: Book[]
}

const BookListPage = ({ books }: BooksListPageProps) => {

    return (
        <main>
            <h1>Books</h1>
            <section className="bookFilter">
                <h2>Filter</h2>
            </section>
            <section>
                {books.map(book => {
                    return <figure>
                        <img src={book.volumeInfo?.imageLinks.thumbnail}></img>
                    </figure>
                })}
            </section>
        </main>
    )
}

export default BookListPage;