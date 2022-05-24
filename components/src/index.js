import React from 'react';
import './App.css';
import ReactDOM from 'react-dom/client';
import { faker } from '@faker-js/faker';
import ApprovalCard from './components/ApprovalCard';
import CommentDetail from './components/CommentDetail';

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author='Sam'
          time='Today at 6:08PM'
          content='This is fantastic!'
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Jeff'
          time='Today at 6:11PM'
          content='Great job bro!!'
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Dave'
          time='Today at 6:18PM'
          content='I like it!'
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Jayne'
          time='Today at 6:23PM'
          content='meh'
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

//  http://semantic-ui.com
