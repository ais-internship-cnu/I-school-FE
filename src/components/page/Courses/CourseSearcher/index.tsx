import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'styles/course-search-style.css';

interface CoarseSearcherProps {
  placeholder: string;
  onChange: (value: string) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const CoarseSearcher: React.FC<CoarseSearcherProps> = ({ placeholder, onChange, onKeyDown}) => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <input
      type="text"
      maxLength={10}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      onKeyDown={onKeyDown}
      className="search-bar"
    />
    
  );
};

CoarseSearcher.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CoarseSearcher;
