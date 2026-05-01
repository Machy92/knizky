import React from 'react';
import type { Book } from '../data/books';
import './BookDetail.css';

interface BookDetailProps {
  book: Book;
  onBack: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  isLearned?: boolean;
  onToggleLearned?: () => void;
  showLearnedToggle?: boolean;
}

export const BookDetail: React.FC<BookDetailProps> = ({ book, onBack, onPrev, onNext, isLearned, onToggleLearned, showLearnedToggle }) => {
  return (
    <div className="book-detail-container">
      <div className="detail-navigation">
        <button className="back-button" onClick={onBack}>
          ← Zpět na přehled
        </button>
        <div className="next-prev-buttons">
          {onPrev && (
            <button className="nav-button prev-button" onClick={onPrev}>
              ← Předchozí
            </button>
          )}
          {onNext && (
            <button className="nav-button next-button" onClick={onNext}>
              Další →
            </button>
          )}
        </div>
      </div>
      
      <div className="detail-header">
        <div className="title-section">
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {book.title}
            {showLearnedToggle && (
              <button 
                className={`learned-toggle-detail ${isLearned ? 'active' : ''}`}
                onClick={onToggleLearned}
                title={isLearned ? "Umím!" : "Ještě neumím"}
              >
                {isLearned ? '✅' : '⬜'}
              </button>
            )}
          </h2>
          <h3>{book.author}</h3>
        </div>
        <div className="tags-section">
          {book.period && <span className="tag detail-tag">{book.period}</span>}
          {book.typeAndGenre && <span className="tag detail-tag">{book.typeAndGenre}</span>}
        </div>
      </div>

      <div className="detail-content">
        <section className="info-card">
          <h4>Základní info</h4>
          {book.form && <p className="info-item"><strong>Literární forma:</strong> {book.form}</p>}
          {book.period && <p className="info-item"><strong>Literární období:</strong> {book.period}</p>}
          {book.typeAndGenre && <p className="info-item"><strong>Druh a žánr:</strong> {book.typeAndGenre}</p>}
          {book.theme && <p className="info-item"><strong>Téma a motiv:</strong> {book.theme}</p>}
          {book.timeAndSpace && <p className="info-item"><strong>Časoprostor:</strong> {book.timeAndSpace}</p>}
          {book.composition && <p className="info-item"><strong>Kompozice:</strong> {book.composition}</p>}
        </section>

        {(book.authorInfo || book.authorBio) && (
          <section className="author-section">
            <h4>O autorovi</h4>
            <div className="author-card">
              {book.authorInfo && <p className="author-info-short">{book.authorInfo}</p>}
              {book.authorBio && <p className="author-bio">{book.authorBio}</p>}
            </div>
          </section>
        )}

        {book.characters && book.characters.length > 0 && (
          <section className="content-section">
            <h4>Hlavní postavy</h4>
            <ul className="character-list">
              {book.characters.map((char, index) => (
                <li key={index} className="character-item">
                  <span className="char-name">{char.name}</span>
                  <span className="char-desc">{char.description}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {book.plotSummary && book.plotSummary.length > 0 && (
          <section className="content-section">
            <h4>Stručný děj</h4>
            <div className="plot-container">
              {book.plotSummary.map((point, index) => (
                <div key={index} className="plot-step">
                  <span className="step-number">{index + 1}</span>
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {(book.languageAndStyle?.length > 0 || book.context?.length > 0) && (
          <div className="two-column-grid">
            {book.languageAndStyle && book.languageAndStyle.length > 0 && (
              <section className="content-section">
                <h4>Jazyk a styl</h4>
                <ul className="bullet-list">
                  {book.languageAndStyle.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </section>
            )}

            {book.context && book.context.length > 0 && (
              <section className="content-section">
                <h4>Kontext</h4>
                <ul className="bullet-list">
                  {book.context.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
