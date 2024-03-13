// import React, { useState } from 'react';
// import './QuestionForm.css';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

// const QuestionSection = ({ onQuestionPost, onDeleteQuestion }) => {
//   const [questionData, setQuestionData] = useState({
//     title: '',
//     description: '',
//     tags: '',
//     date: new Date().toLocaleDateString(),
//   });
//   const [code, setCode] = useState(''); // Add code state

//   const handleTitleChange = (e) => {
//     setQuestionData({ ...questionData, title: e.target.value });
//   };

//   const handleDescriptionChange = (e) => {
//     setQuestionData({ ...questionData, description: e.target.value });
//   };

//   const handleTagsChange = (e) => {
//     setQuestionData({ ...questionData, tags: e.target.value });
//   };

//   const handleCodeChange = (e) => {         
//     setCode(e.target.value);
//   };

//   const handlePostClick = () => {
//     const questionWithCode = {
//       title: questionData.title,
//       description: questionData.description,
//       tags: questionData.tags,
//       code: `\`\`\`${code}\`\`\``,
//       date: new Date().toLocaleDateString(),
//     };

//     onQuestionPost(questionWithCode);

//     // Reset the form
//     setQuestionData({
//       title: '',
//       description: '',
//       tags: '',
//       date: new Date().toLocaleDateString(),
//     });
//     setCode('');
//   };

//   return (
//     <div className="question-section">
//       <h2>What do you want to ask or share</h2>
//       <label className="Q1">Title</label>
//       <input
//         className="Int1"
//         type="text"
//         placeholder="Start your question with how, what, why, etc."
//         onChange={handleTitleChange}
//         value={questionData.title}
//       />

//       <label className="Q1">Describe your problem:</label>
//       <textarea
//         className="Int2"
//         placeholder="Describe your problem..."
//         onChange={handleDescriptionChange}
//         value={questionData.description}
//       />

//       <label className="Q2">Tags</label>
//       <input
//         className="Int3"
//         type="text"
//         placeholder="Please add up to three tags to describe what your question is about, e.g., Java"
//         onChange={handleTagsChange}
//         value={questionData.tags}
//       />

//       <label className="Q1">Code</label>
//       <textarea
//         className="Int4"
//         placeholder="Enter your code here..."
//         onChange={handleCodeChange}
//         value={code}
//       />
//       {code && (
//         <SyntaxHighlighter language="javascript" style={solarizedlight}>
//           {code}
//         </SyntaxHighlighter>
//       )}

//       <label className="Q1">Date: {JSON.stringify(questionData.date)}</label>

//       <button className="post" onClick={handlePostClick}>
//         Post
//       </button>

      
//     </div>
//   );
// };

// export default QuestionSection;


import React, { useState } from 'react';
import './QuestionForm.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { addCollectionandDocuments } from './utils/firebase'; // Import Firestore function

const QuestionSection = ({ onQuestionPost, onDeleteQuestion }) => {
  const [questionData, setQuestionData] = useState({
    title: '',
    description: '',
    tags: '',
    date: new Date().toLocaleDateString(),
  });
  const [code, setCode] = useState(''); // Add code state

  const handleTitleChange = (e) => {
    setQuestionData({ ...questionData, title: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    setQuestionData({ ...questionData, description: e.target.value });
  };

  const handleTagsChange = (e) => {
    setQuestionData({ ...questionData, tags: e.target.value });
  };

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handlePostClick = async () => {
    const questionWithCode = {
      title: questionData.title,
      description: questionData.description,
      tags: questionData.tags,
      code: `\`\`\`${code}\`\`\``,
      date: new Date().toLocaleDateString(),
    };

    // Save the question data to Firestore
    await addCollectionandDocuments('questions', [questionWithCode]);
    onQuestionPost(questionWithCode);
    // Reset the form
    setQuestionData({
      title: '',
      description: '',
      tags: '',
      date: new Date().toLocaleDateString(),
    });
    setCode('');
  };

  return (
    <div className="question-section">
      <h2>What do you want to ask or share</h2>
      <label className="Q1">Title</label>
      <input
        className="Int1"
        type="text"
        placeholder="Start your question with how, what, why, etc."
        onChange={handleTitleChange}
        value={questionData.title}
      />

      <label className="Q1">Describe your problem:</label>
      <textarea
        className="Int2"
        placeholder="Describe your problem..."
        onChange={handleDescriptionChange}
        value={questionData.description}
      />

      <label className="Q2">Tags</label>
      <input
        className="Int3"
        type="text"
        placeholder="Please add up to three tags to describe what your question is about, e.g., Java"
        onChange={handleTagsChange}
        value={questionData.tags}
      />

      <label className="Q1">Code</label>
      <textarea
        className="Int4"
        placeholder="Enter your code here..."
        onChange={handleCodeChange}
        value={code}
      />
      {code && (
        <SyntaxHighlighter language="javascript" style={vs}>
          {code}
        </SyntaxHighlighter>
      )}

      <label className="Q1">Date: {JSON.stringify(questionData.date)}</label>

      <button className="post" onClick={handlePostClick}>
        Post
      </button>
    </div>
  );
};

export default QuestionSection;

