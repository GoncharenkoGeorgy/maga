import React from 'react';
import '../Things/Things.css';

function Thing(props) {

  const { thing } = props;

  // function handleDeleteClick() { 
  //   onDeletePost(post); 
  // } 

  return (
    <tr className='posts__row'>
      <td className='posts__content_slot'><img src='https://upload.wikimedia.org/wikipedia/commons/c/c9/Common_kingfisher_in_Suita%2C_Osaka%2C_December_2016_-_898_-_Square.jpg' /></td>
      <td className='posts__content_slot'>{thing.name}</td>
    </tr>
  );
}

export default Thing;