import React, { useState } from 'react';
import './PostTypeSelector.css'

const PostTypeSelector = ({ onSelect }) => {
  const [selectedType, setSelectedType] = useState('question');
 
  const handleTypeChange = (type) => {
    setSelectedType(type);
    onSelect(type);
  };

  return (
    <div className='Head'>
      <p>Select post type: </p>
      <label className='QA'>
        <input
          type="radio"
          value="question"
          checked={selectedType === 'question'}
          onChange={() => handleTypeChange('question')}
        />
        Question
      </label>
      <label className='QA'>
        <input
          type="radio"
          value="article"
          checked={selectedType === 'article'}
          onChange={() => handleTypeChange('article')}
        />
        Article
      </label>


    </div>
  );
};

export default PostTypeSelector;
