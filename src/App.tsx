import { useState, useEffect, useMemo } from 'react';
import './App.css';
import { books, type Book } from './data/books';
import { BookCard } from './components/BookCard';
import { Controls } from './components/Controls';
import { BookDetail } from './components/BookDetail';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [activeName, setActiveName] = useState<'matej' | 'andrej'>(() => {
    const saved = localStorage.getItem('activeName');
    return (saved === 'matej' || saved === 'andrej') ? saved : 'matej';
  });

  useEffect(() => {
    localStorage.setItem('activeName', activeName);
  }, [activeName]);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState('');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDark) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const periods = useMemo(() => Array.from(new Set(books.map(b => b.period))), []);

  const filteredBooks = useMemo(() => {
    return books.filter(book => {
      if (activeName === 'matej' && book.id === 'alchymista') return false;
      if (activeName === 'andrej' && book.id === 'fetak') return false;

      const matchesSearch = 
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.theme.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPeriod = selectedPeriod ? book.period === selectedPeriod : true;
      return matchesSearch && matchesPeriod;
    });
  }, [searchQuery, selectedPeriod, activeName]);

  // Scroll to top when a book is selected or unselected
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedBook]);

  const selectedIndex = selectedBook ? filteredBooks.findIndex(b => b.id === selectedBook.id) : -1;
  const handlePrev = selectedIndex > 0 ? () => setSelectedBook(filteredBooks[selectedIndex - 1]) : undefined;
  const handleNext = selectedIndex >= 0 && selectedIndex < filteredBooks.length - 1 ? () => setSelectedBook(filteredBooks[selectedIndex + 1]) : undefined;

  return (
    <div className="app-container">
      <header>
        <h1>Maturitní Četba - {activeName === 'matej' ? 'Matěj' : 'Andrej'}</h1>
        <div className="header-controls" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <button onClick={() => setActiveName(prev => prev === 'matej' ? 'andrej' : 'matej')} className="name-toggle" aria-label="Toggle name">
            👤 {activeName === 'matej' ? 'Přepnout na Andrej' : 'Přepnout na Matěj'}
          </button>
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
            {theme === 'light' ? '🌙 Tmavý režim' : '☀️ Světlý režim'}
          </button>
        </div>
      </header>
      
      <main>
        {selectedBook ? (
          <BookDetail 
            book={selectedBook} 
            onBack={() => setSelectedBook(null)}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        ) : (
          <div className="dashboard">
            <Controls 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedPeriod={selectedPeriod}
              setSelectedPeriod={setSelectedPeriod}
              periods={periods}
            />
            {filteredBooks.length > 0 ? (
              <div className="books-grid">
                {filteredBooks.map(book => (
                  <BookCard 
                    key={book.id} 
                    book={book} 
                    onClick={setSelectedBook} 
                  />
                ))}
              </div>
            ) : (
              <div className="no-results">
                <p>Žádné knihy neodpovídají hledání.</p>
                <button className="reset-button" onClick={() => { setSearchQuery(''); setSelectedPeriod(''); }}>
                  Zrušit filtry
                </button>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
