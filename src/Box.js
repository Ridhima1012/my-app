import React from 'react';
import './Box.css';

const Box = () => {
  return (
    <div className="footer-box">
      <div className="column">
        <div className="title">Explore</div>
        <ul>
          <li>Home</li>
          <li>Questions</li>
          <li>Articles</li>
          <li>Tutorials</li>
        </ul>
      </div>
      <div className="column">
        <div className="title">Support</div>
        <ul>
          <li>FAQs</li>
          <li>Help</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div className="column">
        <div className="title">Stay Connected</div>
        <ul>
        <img src="https://th.bing.com/th?id=ODLS.811c55ff-001a-4532-baae-450eeda18ae8&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2"/>
        <img src="https://th.bing.com/th?id=ODLS.7d3063c3-cd17-4792-8d4f-4e98c892a389&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2"/>
        <img src="https://th.bing.com/th?id=ODLS.622ceebf-d807-45da-bb82-707dd9e5c357&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2"/>
        </ul>
      </div>
      <div className="Content">
        <div className="title">DEV@Deakin 2022</div>
        <ul>
          <li>Privacy policy</li>
          <li>Terms</li>
          <li>Code of Conduct</li>
        </ul>
      </div>
    </div>
  );
};

export default Box;
