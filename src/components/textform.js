
import React, {useState} from 'react'




export default function Textform(props) {
    const handelonclick = () => {
        let newtext = text.toUpperCase()
        setText(newtext)
        props.showAlert('converted to uppercase','success')
    }
    const handelonchange = (event) => {
        setText(event.target.value)
        
    }
    const lowercase = () => {
      let newtext =text.toLowerCase()
      setText(newtext)
      props.showAlert('coverted to lowercase','success')
    }

   const [text,setText] = useState("")


  const clearonClick = () => {
   setText("")
   props.showAlert('cleared','success')
  }
  
    
  return (
    <>
      <div className='container'style={{color:props.mode === 'dark'?'white':'#042743' }} >
        <h1>{props.heading}</h1>
     <div className="mb-3">
     <label htmlFor="mybox" className="form-label">Enter The Text Below</label>
     <textarea className="form-control" style={{backgroundColor:props.mode === 'dark'?'grey':'white',color:props.mode === 'dark'?'white':'#042743' }} value={text} onChange={handelonchange} id="mybox" rows="8"></textarea>
</div>  
<button className="btn btn-primary" onClick={handelonclick} >Convert to uppercase</button>  
<button className="btn btn-primary mx-3" onClick={lowercase}> convert to uppercase</button>
<button className="btn btn-primary" onClick={clearonClick}>clear all</button>
    </div>
    <div className="conatiner"style={{color:props.mode === 'dark'?'white':'#042743' }}>
        <p>{text.split(" ").length} words {text.length}characters</p>
        <p>{0.008 * text.length}minuts takes to read</p>
        <h4>preview</h4>
        <p>{text.length>0?text:"enter text in textbox to preview here"}</p>
    </div>
    </>
  )
}

Textform.defaultProps = {
    heading : "Enter the text to anylize"
}
