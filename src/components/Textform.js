import React ,{useState} from 'react'

export default function Textform(props) {
    const handleUpClick=()=>{
       let newText=text.toUpperCase();
       setText(newText);
       props.showAlert('Converted to UpperCase!',"success");
    }
    const handleLowClick=()=>{
       let newText=text.toLowerCase();
       setText(newText);
       props.showAlert('Converted to LowerCase!',"success");
    }
    const handleExtraSpaces=()=>{
      let newText= text.split(/[ ]+/); 
      setText(newText.join(" "));
      props.showAlert('Extra Spaces removed',"success");
    }
    const handleCopy=()=>{
      // console.log('I am copy');
      var text= document.getElementById('myBox');
      text.select();
      // text.setSelectionRange(0,9999) is used when {text.focus()} is used
      window.navigator.clipboard.writeText(text.value);
      props.showAlert('Copied to Clipboard',"success");
    }
    const handleDelete=()=>{
       setText('');
       props.showAlert('Text is removed',"success");
    }
    const handleChange=(event)=>{
       setText(event.target.value);
    }
    const [text, setText]= useState('');
    
  return (
 <>
   <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}> 
<div className="mb-3">
    <h1>{props.heading}</h1>
  <textarea className="form-control" value={text} onChange={handleChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
</div>
<button onClick={handleUpClick} className="btn btn-primary mx-1 my-1">Convert to UpperCase</button>
<button onClick={handleLowClick} className="btn btn-primary mx-1 my-1">Convert to LowerCase</button>
<button onClick={handleDelete} className="btn btn-primary mx-1 my-1">Remove text</button>
<button onClick={handleCopy} className="btn btn-primary mx-1 my-1">Copy text</button>
<button onClick={handleExtraSpaces} className="btn btn-primary mx-1 my-1">Remove Extra Spaces</button>
</div> 
<div className="container my-3">
    <h2>Your text summary</h2>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").length} minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textBox to preview it here"}</p>
</div>
    </>
  )
}
