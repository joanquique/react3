import { useState } from 'react';

const useCatImageSearch = (initialValue = '', callback) => {
  const [searchTerm, setSearchTerm] = useState(initialValue);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (callback && typeof callback === 'function') {
      callback(searchTerm);
    }
  };

  return {
    searchTerm,
    handleChange,
    handleSubmit
  };
};

export default useCatImageSearch;
