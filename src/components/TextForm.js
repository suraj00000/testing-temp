import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlret("Convertred to Uppercase", "success");

    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlret("Convertred to LowerCase", "success");


    }
    const handleClearClick = ()=>{
        let newText = ''
        setText(newText)
        props.showAlret("Clear Text", "success");


    }
    const handleCopyClick = ()=>{
        let text = document.getElementById("copy");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlret("Copy Text", "success");

        
    }
    const handleExtraSpacesClick = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlret("Remove Extra Spaces", "success");

    }

    const handleOnChange = (event)=>{
        
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <>
        <div className="container">        
            <h2>Your Text Here...</h2>
           <div><textarea className="tare" value={text} id="copy" onChange={handleOnChange} rows="7" cols="142" placeholder='Enter Your Text Here...'></textarea>
           </div> 

            <button disabled={text.length===0} className="bat1" onClick={handleUpClick}>Convert to Uppercase</button>   
            <button disabled={text.length===0} className="bat" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="bat" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="bat" onClick={handleCopyClick}>Copy Text</button>
            <button disabled={text.length===0} className="bat" onClick={handleExtraSpacesClick}>Remove ExtraSpaces</button>
 
        </div>
        <div className="container">
            <h2>Your Text Summry</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length}  Words {text.length} characters</p>
            <p>{0.008*text.split(" ").length-0.008} Minutes to Read</p>
        </div>  
        <div className="container">
        <h2>Preview</h2>
        <span>{text.length>0 ? text:"Nothing To Preview"}</span>
        
        </div>  
           
    </> 
    )
}