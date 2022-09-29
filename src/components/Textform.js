import React, { useState } from 'react'

export default function Textform(props) {
      const [text, setText] = useState("Enter text here....");
      const handleUpClick = () => {
            console.log("uppercase  was clicked");
            let newtext = text.toUpperCase();
            setText(newtext);
            props.showAlert("converted to uppercase", "Success");
      }
      const handleLowerClick = () => {
            console.log("lowercase  was clicked");
            let newtext = text.toLowerCase();
            setText(newtext);
            props.showAlert("converted to lowercase", "Success");

      }
      const handleClearClick = () => {
            let newtext = "";
            setText(newtext);
            props.showAlert("text has been copied", "Success");

      }
      const handleOnChange = (event) => {
            console.log("on change");
            setText(event.target.value);
      }
      const handleCopy = () => {
            console.log("copy is clicked");
            let text = document.getElementById("myBox");
            text.select();
            text.setSelectionRange(0, 9999);
            navigator.clipboard.writeText(text.value);
            props.showAlert("text has been copied", "Success");
      }
      const handleExtraSpace = () => {
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "));
            props.showAlert("text has been copied", "Success");

      }

      const replaceWord = () => {
            let searchWord = document.getElementById("text_to_replace").value;
            let newWord = document.getElementById("text_to_add").value;
            const regexp = new RegExp(searchWord, 'ig')
            let pos = text.search(regexp)
            if (pos === -1) {
                  props.showAlert("Word is not found in text", "Failure");
                  return;
            }
            const result = text.replaceAll(regexp, newWord);
            setText(result);
            props.showAlert("word is replaced successfully", "Success");

      }
      const bg1 = {
            backgroundColor: props.mode === 'dark' ? '#134737' : '#0d6efd',
            color: 'white'
      }
      const bg2 = {
            backgroundColor: props.mode === 'dark' ? '#410F44' : 'white',
            color: props.mode === 'dark' ? 'white' : 'black'
      }
      const bg3 = {
            backgroundColor: props.mode === 'dark' ? '#410F44' : 'white',
            color: 'white'
      }

      return (
            <>
                  <div className='container my-4' style={{ color: props.mode === 'dark' ? 'white' : 'black', caret_color: props.mode === 'dark' ? 'white' : 'dark' }}>
                        <h2>Enter the text to analysis</h2>

                        <div className="mb-3 mt-1">
                              {/* <label htmlFor="myBox" className="form-label">TextArea</label> */}
                              <textarea className="form-control" value={text} onChange={handleOnChange} style={bg2} id="myBox" rows="9"></textarea>
                        </div>
                        {/* <button type="button" className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert to lowercase</button>
                        <button type="button" className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
                        <button type="button" className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
                        <button type="button" className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove extra space</button> */}
                        <button class="btn mx-1 dropdown-toggle" style={bg1} type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                              Take Action
                        </button>
                        <ul className="dropdown-menu " style={bg3} aria-labelledby="dropdownMenuButton2">

                              <button type="button" className="btn btn-primary btn-sm mx-1" style={bg1} onClick={handleUpClick}>Convert to uppercase</button>
                              <button type="button" className="btn btn-primary btn-sm mx-1" style={bg1} onClick={handleLowerClick}>Convert to lowercase</button>
                              <button type="button" className="btn btn-primary btn-sm mx-1 my-1" style={bg1} onClick={handleClearClick}>Clear text</button>
                              <button type="button" className="btn btn-primary btn-sm mx-1 my-1" style={bg1} onClick={handleCopy}>Copy text</button>
                              <button type="button" className="btn btn-primary btn-sm mx-1 my-1" style={bg1} onClick={handleExtraSpace}>Remove extra space</button>
                        </ul>
                        {/* <div class="dropdown"> */}
                        <button className="btn mx-1 dropdown-toggle" style={bg1} type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                              Replace Word
                        </button>
                        <ul class="dropdown-menu" style={bg1} aria-labelledby="dropdownMenuButton2">

                              <li><label className="text-light" htmlFor="text_to_search">Existing Word</label></li>
                              <li><input type="text" id="text_to_replace"></input></li>

                              <li><label className="text-light" htmlFor="text_to_search">New Word</label></li>

                              <li><input type="text" id="text_to_add"></input></li>
                              <li className='text-center'><button type="button" className="btn btn-sm mt-1" style={{ backgroundColor: '#FF7F50', color: 'white', width: '100px' }} onClick={replaceWord}>Replace</button></li>
                        </ul>
                        {/* </div> */}
                  </div>
                  <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                        <h1>Your Text Summary here</h1>
                        <p>{(text.split(" ")[0] !== "") ? text.split(" ").length : 0} words and {text.length} characters</p>
                        <p>{0.008 * ((text.split(" ")[0] !== "") ? text.split(" ").length : 0)} minutes to read this paragaraph</p>
                        <h2>Preview</h2>
                        <p>{text}</p>
                  </div>
            </>
      )
}



