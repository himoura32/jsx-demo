import React from 'react';
import { faker } from '@faker-js/faker';

const CommentDetail = () => {
  
  return (
    <div className='comment'>
      <a href='/' className='avatar'>
        <img alt='avatar' src={faker.image.avatar()} />
      </a>
      <div className='content'>
        <a href='/' className='author'>
          Jeff
        </a>
        <div className='metadata'>
          <span className='data'>Today at 6:10PM</span>
        </div>
        <div className='text'>Not so bad dude!</div>
      </div>
    </div>
  );
};

export default CommentDetail;
