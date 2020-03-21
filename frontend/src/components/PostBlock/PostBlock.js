import React from 'react';
import moment from 'moment';
import {Link} from "react-router-dom";

import './PostBlock.css';

const PostBlock = props => {
  return (
    <div className="PostBlock">
      <img src={"http://localhost:8080/uploads/" + props.image} alt="postImg"/>
      <div>
        <p>{'By ' + props.author + ' on ' + moment(props.datetime).format('MMMM Do YYYY, h:mm:ss a')}</p>
        <Link to={'/posts/' + props.id}>{props.title}</Link>
      </div>
    </div>
  );
};

export default PostBlock;