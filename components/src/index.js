import React from 'react';
import ReactDOM from 'react-dom/client';
import CommentDetail from './components/CommentDetail';

const App = () => {
  return (
    <div className='ui container comments'>
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//  http://semantic-ui.com
