import React from 'react';
import type { Book } from '../data/books';
import './BookCard.css';

interface BookCardProps {
  book: Book;
  onClick: (book: Book) => void;
  isLearned?: boolean;
  onToggleLearned?: () => void;
  showLearnedToggle?: boolean;
}

export const BookCard: React.FC<BookCardProps> = ({ book, onClick, isLearned, onToggleLearned, showLearnedToggle }) => {
  return (
    <div className={`book-card ${isLearned ? 'learned' : ''}`} onClick={() => onClick(book)}>
      {showLearnedToggle && (
        <button 
          className={`learned-toggle ${isLearned ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleLearned?.();
          }}
          title={isLearned ? "Umím!" : "Ještě neumím"}
        >
          {isLearned ? '✅' : '⬜'}
        </button>
      )}
      <div className="book-card-content">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">{book.author}</p>
        <div className="book-tags">
          {book.period && <span className="tag">{book.period}</span>}
          {book.typeAndGenre && book.typeAndGenre.split(',').map((tag, index) => (
            <span key={index} className="tag">{tag.trim()}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
