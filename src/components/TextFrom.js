import React,{useState} from 'react'

export default function TextFrom(props) {
  const handleOnClick = (event)=>{
    //  console.log("On change");
      setText(event.target.value);
  }
    const handleUpClick= ()=>{
       // console.log("UpperCase was clicked");
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","success");
    }
    const handleLoClick= ()=>{
      // console.log("UpperCase was clicked");
       let newText=text.toLowerCase();
       setText(newText)
       props.showAlert("Converted to lowercase","success");
   }
   const handleClClick=()=>{
    // console.log("UpperCase was clicked");
     let newText='';
     setText(newText)
     props.showAlert("Text Cleared","success");
 }
    const [text,setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnClick} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handleClClick}>Clear Text</button>
   </div>
   <div className="container my-3" style={{color: props.mode=='dark'?'white':'black'}}>
    <h1>Your Text Summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008* text.split(" ").length} Minute Read</p>
    <h2>Preview</h2>
    <p>{text}</p>
   </div>
   </>
  )
}
