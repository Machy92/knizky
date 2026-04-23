import React from 'react';
import './Controls.css';

interface ControlsProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedPeriod: string;
  setSelectedPeriod: (period: string) => void;
  periods: string[];
}

export const Controls: React.FC<ControlsProps> = ({ 
  searchQuery, 
  setSearchQuery, 
  selectedPeriod, 
  setSelectedPeriod, 
  periods 
}) => {
  return (
    <div className="controls-container">
      <input 
        type="text" 
        className="search-input" 
        placeholder="🔍 Hledat knihu, autora nebo téma..." 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <select 
        className="filter-select"
        value={selectedPeriod}
        onChange={(e) => setSelectedPeriod(e.target.value)}
      >
        <option value="">Všechna období</option>
        {periods.map(period => (
          <option key={period} value={period}>{period}</option>
        ))}
      </select>
    </div>
  );
};
