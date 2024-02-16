
import { useState } from 'react';
import './App.css';



const FaqItem=({question, answer})=>{
  const[show,setShow] = useState(false)

  const toggleShow=()=>{
    setShow(!show)
  }
   return(
    <div className={`faq-item ${show ? "active" : ""} `}>
       <div className='faq-item-header' onClick={toggleShow}>
          {question}
       </div>
       <div className='faq-item-body'>
          <div className='faq-item-body-content'>
              {answer}
          </div>
       </div>
      </div>
         )
}


const FaqAccordian=({data})=>{
    return(
      <div className='faq-accordian'>
        <h2>FAQs</h2>
        {
          data.map((item)=>{
            return (
              <FaqItem key={item.id} question = {item.question} answer = {item.answer}/>
            )
          })
        }
        </div>
    )
}

const data = [{
  id:1,
  question:"What is React?",
  answer:"React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript."
},
{
  id:2,
  question:"What is React Context?",
  answer:"Context, in React, is a way to pass data down through a component tree without having to pass props down through every level. This can be very helpful since this allows us to share data between components that are not directly related to each other"
},{
  id:3,
  question:"What is React Redux?",
  answer:"Redux is a pattern and library for managing and updating application state, using events called  It serves as a centralized store for state that needs to be used across your entire application"
},
]; 


function App() {
  return (
    <div> 
        <FaqAccordian data={data}/>
      
    </div>
  );
}

export default App;
