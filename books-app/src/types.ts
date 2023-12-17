
export interface BookRoot {
  items: Book[]
}

export interface Book {
  id: string;
  volumeInfo: BookDetail;
}

export interface BookDetail {
  title: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  industryIdentifiers: ISBN[];
  pageCount: number;
  categories: string[];
  imageLinks: {
    thumbnail: string;
    small: string;
  }
}

export interface ISBN {
  type: string;
  identifier: string;
}