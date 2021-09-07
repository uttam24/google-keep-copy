import React,{useState} from 'react';

const CreateNote =(props)=>{

	const [expand, setExpand] = useState(false);

	const[note, setNote] = useState({
		title:'',
		content:'', 
	})

	const inputEvent =(event)=>{

		const {name, value} = event.target

		setNote((prevData)=>{
			return{
				...prevData,
			[name]:value,
			}
		})
		console.log(note);
	}

	const addEvent = ()=>{
		props.passNote(note);
		setNote({
		title:'',
		content:'', 
		})
	}

	const expandIt =()=>{
		setExpand(true);
	}

	const btoNormal =()=>{
		setExpand(false);
	}
	

	return (
		<div className="createnote" onDoubleClick={btoNormal}>
			<form>
				{expand ? <input type="text" name="title" value={note.title} onChange={inputEvent} placeholder="Title"/> : null}
				<textarea  name="content" value={note.content} onChange={inputEvent} placeholder="write a note" onClick={expandIt} />
				{expand ?<div className="add_icon" onClick={addEvent}>+</div>:null}
			</form>

		</div>
	)
}

export default CreateNote