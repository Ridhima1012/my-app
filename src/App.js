// import { Routes, Route } from 'react-router-dom';
// import './App.css';
// import NavFooter from './NavFooter';
// import Login from './Login';
// import Signup from './Signup';

// function App() {
//   return (

//     <Routes>
//       <Route path='/' element={<NavFooter />} >
//       <Route path='/login' element={<Login />} />
//       <Route path='/signup' element={<Signup />} />
//       </Route>
//     </Routes>

//   );
// }

// export default App;


// import { Routes, Route } from 'react-router-dom';
// import './App.css';
// import NavFooter from './NavFooter';
// import Login from './Login';
// import Signup from './Signup';
// import PlansPage from './PlansPage';
// import PostTypeSelector from './PostTypeSelector'; // Import the new PostTypeSelector component

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<NavFooter />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<Signup />} />
//       <Route path="/plans" element={<PlansPage />} />
//       <Route path="/welcome" element={<PostTypeSelector />} /> {/* Add the route for PostTypeSelector */}
//     </Routes>
//   );
// }

// export default App;


import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavFooter from './NavFooter';
import Login from './Login';
import Signup from './Signup';
import PlansPage from './PlansPage';
import PostTypeSelector from './PostTypeSelector';
import QuestionSection from './QuestionForm'; // Import the QuestionSection component
import ArticleSection from './ArticleForm'; // Import the ArticleSection component
import Toggle from './Toggle';

function App() {
  const [selectedType, setSelectedType] = useState('question');

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  return (

    <div>
    <h1> HELLO RIDHIMA </h1>
    </div>
    // <Routes>
    //   <Route path="/" element={<NavFooter />} />
    //   <Route path="/login" element={<Login />} />
    //   <Route path="/signup" element={<Signup />} />
    //   <Route path="/plans" element={<PlansPage />} />
    //   <Route path="/toggle" element={<Toggle />} />
      


      /* <Route path="/welcome" element={<PostTypeSelector onSelect={handleTypeChange} />} />
      <Route
        path="/welcome/question"
        element={<QuestionSection />} // Render the QuestionSection when "Question" is selected
      />
      <Route
        path="/welcome/article"
        element={<ArticleSection />} // Render the ArticleSection when "Article" is selected
      /> */
    // </Routes>
    
  );
}

export default App;
