import React, {useState} from 'react'




export default function TextForm(props) {
    const handleUpClick = ()=>{
         let newText = text.toUpperCase();
         setText(newText)
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
    setText(newText)
    }
    const handleClearClick = ()=>{
        let newText = '';
    setText(newText)
    }
    const handleOnChange = (event)=>{
        //console.log("On Change");
        setText(event.target.value);
        
    }
    const handleCopy = ()=>{
        var text=document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
   }
    const [text, setText] = useState('');
  return (
<>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}} > 
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange}style={{backgroundColor:props.mode==='white'?'grey':'dark'}} id="exampleFormControlTextarea1" rows="8"></textarea>
    </div>
   <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
   <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCaseCase</button>
   <button className="btn btn-primary mx-2" onClick={handleClearClick}> Clear Text</button>
   <button className="btn btn-primary mx-2" onClick={handleCopy}> Copy Text</button>
  
   
 </div>
 <div className="container my-3"style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>Your Text Summary</h1>
    <p>{text.split(" ").length}words and {text.length}characters</p>
    <h2>Preview</h2>
    <p>{text}</p>
 </div>
    </>
   ) 
  }

