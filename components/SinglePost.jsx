import Image from 'next/image';
import React from 'react';
import { img_300, unavailable } from '../src/config/config';

const SinglePost = ({ id,title, poster }) =>{

  return (
    <div className="morphic-card-flat p-2 my-2 w-auto block" id={id}>
      <Image src={poster? `${ img_300 }${ poster }` : unavailable} alt={title} width={300} height={400}/> 
      <h2>{ title }</h2>
    </div>
  );
};

export default SinglePost;
