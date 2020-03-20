import React from 'react';

import './CommentBlock.css';

const CommentBlock = props => {
  return (
    <div className="CommentBlock">
      <h4>By {props.author}</h4>
      <p>{props.text}</p>
    </div>
  );
};

export default CommentBlock;