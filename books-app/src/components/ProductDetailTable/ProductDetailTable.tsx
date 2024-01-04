import { Book } from "../../types";
import styles from "./ProductDetailTable.module.css";

interface ProductDetailTableProps {
  book: Book
}

const ProductDetailTable = ({book} : ProductDetailTableProps) => {

  return (
    <table className={styles.productDetailTable}>
          <tbody>
            <tr>
              <th>ISBN-10:</th>
              <td>{book.volumeInfo.industryIdentifiers[0]?.identifier ?? "N/A"}</td>
            </tr>
            <tr>
              <th>ISBN-13:</th>
              <td>{book.volumeInfo.industryIdentifiers[1]?.identifier ?? "N/A"}</td>
            </tr>
            <tr>
              <th>Publisher:</th>
              <td>{book.volumeInfo.publisher ?? "N/A"}</td>
            </tr>
            <tr>
              <th>Publication date:</th>
              <td>{book.volumeInfo.publishedDate ?? "N/A"}</td>
            </tr>
            <tr>
              <th>Pages:</th>
              <td>{book.volumeInfo.pageCount ?? "N/A"}</td>
            </tr>
            <tr>
              <th>Category:</th>
              <td>{book.volumeInfo.categories ?? "N/A"}</td>
            </tr>
            <tr>
              <th>Avg rating:</th>
              <td>{book.volumeInfo.averageRating ?? "N/A"}</td>
            </tr>
          </tbody>
        </table>
  )
}

export default ProductDetailTable;