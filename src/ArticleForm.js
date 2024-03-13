import React, { useState } from 'react';
import { db, addCollectionandDocuments, createUserDocfromAuth } from './utils/firebase';
import ImageUpload from './ImageUpload'; 

import './ArticleForm.css';

const ArticleSection = () => {
  const [title, setTitle] = useState('');
  const [abstract, setAbstract] = useState('');
  const [problemDescription, setProblemDescription] = useState('');
  const [tags, setTags] = useState('');
  const handlePost = async () => {
    if (!title || !abstract || !problemDescription || !tags) {
      alert('Please fill in all fields before posting.');
      return;
    }
  
    const articleData = {
      title,
      abstract,
      problemDescription,
      tags: tags.split(',').map(tag => tag.trim()), 
      
    };
    console.log(articleData);

    try {
      
      console.log("START");
      await addCollectionandDocuments('articles', [articleData]);
      setTitle('');
      setAbstract('');
      setProblemDescription('');
      setTags('');

      
      alert( 'Article posted successfully!');
    } catch (error) {
      console.error('Error posting article:', error);
    }
  };

  return (
    <div className="Article-section">
      <h2>What do you want to ask or share</h2>

      <p>
        This section is designed based on the type of the post. It could be developed by conditional rendering.
        <a className='color'> For posting an article, the following section would be displayed.</a>
      </p>

      <label className='A1'>Title</label>
      <textarea
        placeholder="start your question with how, what, why, etc."
        value={title} 
        onChange={(e) => setTitle(e.target.value)}
      />
       <ImageUpload />

      <label> Abstract</label>
      <textarea
        placeholder='Enter a 1-paragraph Abstract'
        value={abstract}
        onChange={(e) => setAbstract(e.target.value)}
      />

      <label>Describe your problem:</label>
      <textarea
        placeholder="Describe your problem..."
        value={problemDescription}
        onChange={(e) => setProblemDescription(e.target.value)}
      />

      <label>Tags</label>
      <textarea
        placeholder="please add up to three tags to describe what your question is about, e.g., Java"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />

      <button className="post" onClick={handlePost}>Post</button>
    </div>
  );
};

export default ArticleSection;

