import React,{useState} from 'react';
import Header from "./components/Header";
import CreateNote from "./components/CreateNote";
import Notes from "./components/Notes";
import Footer from "./components/Footer"

import './App.css';

function App() {
  const[addItem, setAddItem] = useState([]);
  const addNote = (note) =>{
    setAddItem((prevData)=>{
      return [...prevData, note];
    })
  }

  const onDelete =(id)=>{
    setAddItem((ondata)=>
      ondata.filter((currdata, indx)=>{
        return indx !== id;
      })
    )
  }

  return (
    <div className="App">
        <Header/>
        <CreateNote passNote={addNote}/>
        <div className="main">
         {addItem.map((val,index)=>{
          return <Notes
           key={index}
           id={index}
           title={val.title}
           content={val.content}
           deleteItem={onDelete}
          />
        })}
        </div>
        <Footer/>
    </div>
  );
}

export default App;
