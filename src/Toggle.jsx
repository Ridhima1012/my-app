
import React, { useState, useEffect } from 'react';
import PostTypeSelector from './PostTypeSelector';
import QuestionSection from './QuestionForm'; // Update the import path
import ArticleSection from './ArticleForm';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Toggle() {
  const [selectedPostType, setSelectedPostType] = useState('question');
  const [userQuestions, setUserQuestions] = useState([]);
  const [QuestionData, setQuestionData] = useState(false);
  const [filter, setfilter] = useState('');
  const [QuestionFilter, setQuestionFilter] = useState([]);
  const [SelectSearch, setSelectSearch] = useState(true);
  const [elargeQuestion, setelargeQuestion] = useState({});
  const [saveFilter, setsaveFilter] = useState([]);

  useEffect(() => {
    if (!QuestionData) {
      setsaveFilter(QuestionFilter);
    }
  }, [QuestionData, QuestionFilter]);

  const handlePostTypeChange = (type) => {
    setSelectedPostType(type);
  };

  const handleQuestionPost = (questionData) => {
    setUserQuestions([...userQuestions, questionData]);
    setQuestionFilter([...QuestionFilter, questionData]);
    setsaveFilter([...saveFilter, questionData]);
  };
  

  const handleHomeClick = () => {
    setQuestionData(false);
    setSelectSearch(true);
    setelargeQuestion({});
    setQuestionFilter(saveFilter);
  };

  const handleFindQuestionClick = () => {
    setQuestionData(!QuestionData);
    setSelectSearch(false);
    setelargeQuestion({});
  };

  const handleFilterChange = (event) => {
    setfilter(event.target.value);
  };

  const handleFilterClick = () => {
    const filtered = userQuestions.filter(
      (question) =>
        question.title.includes(filter) ||
        question.description.includes(filter) ||
        question.tags.includes(filter)
    );
    setQuestionFilter(filtered);
  };

  

  // const handleDeleteQuestion = (index) => {
  //   const updatedQuestions = [...userQuestions];
  //   updatedQuestions.splice(index, 1);
  //   setUserQuestions(updatedQuestions);
  //   setQuestionFilter(updatedQuestions);
  //   const newelargeQuestion = { ...elargeQuestion };
  //   delete newelargeQuestion[index];
  //   setelargeQuestion(newelargeQuestion);
  // };

  // const handleDeleteQuestion = (index) => {
  //   const updatedQuestions = userQuestions.map((question, i) => {
  //     if (i === index) {
  //       return { ...question, deleted: true };
  //     }
  //     return question;
  //   });
    
  //   setUserQuestions(updatedQuestions);
  //   const newelargeQuestion = { ...elargeQuestion };
  //   delete newelargeQuestion[index];
  //   setelargeQuestion(newelargeQuestion);
  // };

  const handleDeleteQuestion = (index) => {
    const updatedQuestions = userQuestions.filter((question, i) => i !== index);
    
    setUserQuestions(updatedQuestions);
    const newelargeQuestion = { ...elargeQuestion };
    delete newelargeQuestion[index];
    setelargeQuestion(newelargeQuestion);
  };
  


  const toggleExpandQuestion = (index) => {
    setelargeQuestion({
      ...elargeQuestion,
      [index]: !elargeQuestion[index],
    });
  };

  return (
    
      <div className="App">
        <div className="button-container">
          <button onClick={handleHomeClick}>Home</button>
          <button onClick={handleFindQuestionClick}>
            {QuestionData ? 'Find Questions' : 'Find Question'}
          </button>
        </div>

        {SelectSearch && (
          <div>
            {/* <SearchBar /> */}
            <PostTypeSelector onSelect={handlePostTypeChange} />
          </div>
        )}



        {QuestionData && (
          <div className="filter-container">
            <input
              type="text"
              placeholder="Filter by date, tag, or question title"
              value={filter}
              onChange={handleFilterChange}
            />
            <button onClick={handleFilterClick}>Apply Filter</button>
          </div>
        )}

        {QuestionData && (
          <div className="question-data">
            <h2>Question Details</h2>
            {QuestionFilter.map((question, index) => (
              <div className="question-box" key={index}>
                <p>Title: {question.title}</p>
                {elargeQuestion[index] ? (
                  <p>Description: {question.description}</p>
                ) : (
                  <div>
                    
                    <p>Description: {question.description.slice(0, 100)}</p>
                    <button onClick={() => toggleExpandQuestion(index)}>
                      Show More
                    </button>
                  </div>
                )}
                {elargeQuestion[index] ? (
                  <p>Tags: {question.tags}</p>
                ) : null}
                {elargeQuestion[index] ? (
                  <p>Date: {question.date}</p>
                ) : null}
                {elargeQuestion[index] ? (
                  <p>Code: {question.code}</p>
                ) : null}
                <button onClick={() => handleDeleteQuestion(index)}>Delete</button>
              </div>
            ))}
          </div>
        )}

{!QuestionData && selectedPostType === 'question' ? (
  <QuestionSection onQuestionPost={handleQuestionPost} />
) : null}
        {selectedPostType === 'article' && !QuestionData ? (
          <ArticleSection />
        ) : null}
      </div>
    
  );
}

export default Toggle;
