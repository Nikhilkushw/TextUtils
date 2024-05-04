import React,{useState} from 'react'

export default function TextForm(props) {

    const [Text, setText] = useState("");
    
    const HandleUpClick = ()=>{
        // console.log("Clicked uppercase")
        const newText = Text.toUpperCase()
        // console.log(newText)
        setText(newText)
        props.showAlert("Converted to upperCase","success")
    }

    const HandleLoClick = ()=>{
        // console.log("Clicked lowercase")
        const newText = Text.toLowerCase()
        // console.log(newText)
        setText(newText)
        props.showAlert("Converted to lowerCase","success")
    }

    const HandleclearClick = ()=>{
        // console.log("Clear text")
        const newText = ""
        // console.log(newText)
        setText(newText)
        props.showAlert("Clear text","success")
    }

    const HandleOnChange = (event)=>{
        // console.log("On change")
        setText(event.target.value)
    }

    const HandlecopyClick = ()=>{
        let text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copy text","success")
    }

    const HandleExtraSpaces = ()=>{
        let newtext = Text.split(/[ ]+/)
        setText(newtext.join(" "))
        props.showAlert("Remove extra space","success")
    }

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h3 className = "mb-2">{props.heading}</h3>
        <div className="mb-3">
            <textarea className="form-control" value={Text} onChange={HandleOnChange} style={{backgroundColor:props.mode==='dark'?'#61677A':'#F5F5F5',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={Text.length===0} className="btn btn-secondary mx-1 my-1" onClick={HandleUpClick}>Convert to Uppercase</button>
        <button disabled={Text.length===0} className="btn btn-secondary mx-1 my-1" onClick={HandleLoClick}>Convert to Lowercase</button>
        <button disabled={Text.length===0} className="btn btn-secondary mx-1 my-1" onClick={HandleclearClick}>Clear text</button>
        <button disabled={Text.length===0} className="btn btn-secondary mx-1 my-1" onClick={HandlecopyClick}>Copy text</button>
        <button disabled={Text.length===0} className="btn btn-secondary mx-1 my-1" onClick={HandleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>Your text summary</h3>
        <div className='container my-2'>
            <button type="button" className="btn btn-primary">{Text.split(" ").filter((element)=>{return element.length!==0}).length} Words And {Text.length} Charaters</button>
        </div>
        <div className='container'>
            <button type="button" className="btn btn-primary">{0.008 * (Text.split(" ").length-1)} Minutes read</button>
        </div>
        <h3>Preview</h3>
        <div className="container">
        <button type="button" className="btn btn-dark">{Text.length>0?Text:'Enter something in the textbox above to preview it here'}</button>
            <p></p>
        </div>
    </div>
    </>
  )
}