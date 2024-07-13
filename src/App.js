import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { tabs } from './tabs';

function App() {
  let [todolist,setTodoList]=useState([])
  
  let [activeTabs,setactiveTabs]=useState(0)
  let[activeContent,setactiveContent]=useState(tabs[0])
  
  let changeData=(index)=>{
      setactiveTabs(index)
      setactiveContent(tabs[index])
  }

  let saveToDoList=(event)=>{

    let toname=event.target.toname.value;
     if(!todolist.includes(toname)){
      let finalDolist=[...todolist,toname]
      setTodoList(finalDolist)
}
    else{
       alert("ToDo Name Already Exists....");
}
    event.preventDefault();
  }

  let list=todolist.map((value,index)=>{
     return(
      <ToDoListItems value={value} key={index} indexNumber={index}
      todolist={todolist}
      setTodoList={setTodoList}
/>
     )
  })
  return (
    <div className="App">


      <div className='tabsOuter'>
      <h1 style={{textAlign:'left' }}>
        Law Prep Vision Mission and Values
      </h1>

      <ul>
        {tabs.map((tabsItems,index)=>{
          return(
           <li>
            <button onClick ={()=>changeData(index)}className={activeTabs==index ?'activeButton':''}>{tabsItems.title}</button>
            </li>
          )
        })}

      </ul>
      
     { 
      activeContent!==undefined ?
      <p>
          {activeContent.description}
      </p>
      :
      ''
}
      </div>


      <h1>ToDo List</h1>
      <form onSubmit={saveToDoList}>
        <input type='text' name='toname'/> <button>Save</button>
      </form>
     
     <div className='outerDiv'>
      <ul>
         {list}
      </ul>
      </div>
    </div>
  );
}

export default App;

function ToDoListItems({value,indexNumber,todolist,setTodoList}){

  let [status,setStatus]=useState(false);
  let deleteRow=()=>{
     let finalData=todolist.filter((v,i)=>i!=indexNumber)
     setTodoList(finalData);
  }
     let checkStatus=()=>{
           setStatus(!status);
     }
  
return(
  <li className={(status)?'completetodo':''} onClick={checkStatus}> {indexNumber+1} {value} <span onClick={deleteRow}>&times;</span></li>
)
}
