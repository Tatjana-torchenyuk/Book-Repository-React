
export interface BookRoot {
    items: Book[]
}

export interface Book {
    id: string;
    selflink?: string;
    volumeInfo?: BookDetail;
}

export interface BookDetail {
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: Date;
    description: string;
    industryIdentifiers: ISBN[];
    pageCount: number;
    categories: string[];
    imageLinks: {
        thumbnail: string
    }
}

export interface ISBN {
    type: string;
    identifier: string;
}