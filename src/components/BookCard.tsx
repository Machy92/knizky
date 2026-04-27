import React from 'react';
import type { Book } from '../data/books';
import './BookCard.css';

interface BookCardProps {
  book: Book;
  onClick: (book: Book) => void;
}

export const BookCard: React.FC<BookCardProps> = ({ book, onClick }) => {
  return (
    <div className="book-card" onClick={() => onClick(book)}>
      <div className="book-card-content">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">{book.author}</p>
        <div className="book-tags">
          {book.period && <span className="tag">{book.period}</span>}
        </div>
      </div>
    </div>
  );
};
