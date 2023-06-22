import React,{useState} from "react";       //useState is a hook

export default function Textform(props) {
  const handleUpClick = () =>{
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert('Converted to uppercase!','success')
  }
  const handleLowClick = () =>{
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert('Converted to lowercase!','success')
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert('Pronouncing the text...','success')
  }
  const clearText = () => {
    setText('')
    props.showAlert('Text cleared!','success')
  }
  const handleOnChange = (event) =>{        //needed bcz text is state & whenever textarea changes text needs to change
    setText(event.target.value)         //event.target.value changes the text state to new state
  }
  const [text,setText]=useState('')      //syntax for setting state where var is text & setText is function to update var
  return (
    <>
    <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}} placeholder="Enter text here" className="form-control" id="myBox" rows={8} />
      </div>
      <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleLowClick}>Convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary m-1" onClick={speak}>Pronounce</button>
      <button disabled={text.length===0} className="btn btn-primary m-1" onClick={clearText}>Clear</button>
    </div>
    <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
        <h2>Summary of your text</h2>
        <p>{text.split(/\s+/).filter((a)=>{return a.length!==0}).length} word and {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter((a)=>{return a.length!==0}).length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Please enter your text to get preview'}</p>
    </div>
    </>
  );
}

Textform.defaultProps={
  heading: "Heading"
}