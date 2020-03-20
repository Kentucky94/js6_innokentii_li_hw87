import React from 'react';
import moment from 'moment';
import {Link} from "react-router-dom";

import './PostBlock.css';

const PostBlock = props => {
  return (
    <div className="PostBlock">
      <img src={"http://localhost:8080/uploads/" + props.image} alt="postImg"/>
      <Link to={'/posts/' + props.id}>{props.title}</Link>
      <p>{moment(props.datetime).format('MMMM Do YYYY, h:mm:ss a')}</p>
      <p>{props.author}</p>
    </div>
  );
};

export default PostBlock;