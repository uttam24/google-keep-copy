import React from 'react';

const Notes =(props)=>{
	const deleteNote =()=>{
		props.deleteItem(props.id);
	}
	return (
		<div className="note">
				<h1>{props.title}</h1>
				<p>{props.content}</p>
				<div className="deleteicon" onClick={deleteNote}>&#x2702;</div>
		</div>
	)
}

export default Notes