// 'useState' value ko update krny k liya use hota ha ↓ 
import React, { useState, useRef } from "react";


export default function TextForm(props) {
    // text k ander "Type your text" value aa jay gi or is value ko update krny k liya textState use kre gy ↓
    const [text, setText] = useState("This is example text.");

    const upperCaseClick = () => {
        
            let newText = text.toUpperCase();
            setText(newText);
            // console.log("Text is convert into Uppercase successfully")
            props.showAlert("success", "Text is converted into Uppercase successfully")
    }

    const lowerCaseClick = () => {
        
            let newText = text.toLocaleLowerCase();
            setText(newText);
            // console.log("Text is convert into Lowercase successfully")
            props.showAlert("success", "Text is converted into Lowercase successfully")
    }

    const capitalizeSentence = () => {
            let newText = text.split(/[.?]/);
            for (var i = 0; i < newText.length; i++) {
                newText[i] = newText[i].toLowerCase();
                newText[i] = newText[i].trim(); // Remove leading and trailing spaces
                if (newText[i].length > 0) {
                    newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
                }
            }
            let outputText = newText.join('. ');
            setText(outputText);
            // console.log("Text is convert into capitalize sentence successfully")
            props.showAlert("success", "Text is converted into capitalize sentence successfully")
    }

    const capitalizeWord = () => {
        
            let newText = text.split(" ");

            for (var i = 0; i < newText.length; i++) {
                newText[i] = newText[i].toLowerCase();
                if (newText[i].length > 0) {
                    newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
                }
            }
            let outputText = newText.join(' ');
            setText(outputText);
            // console.log("Text is convert into capitalize words successfully")
            props.showAlert("success", "Text is converted into capitalize words successfully")
    }

    const removeExtraSpaces = () => {
            let newText = removeSpaces(text)
            setText(newText);
            // console.log("Text extra spaces removed successfully")
            props.showAlert("success", "Text extra spaces removed successfully")
    }

    function removeSpaces(userText) {
        // Use a regular expression to replace multiple spaces with a single space ↓ 
        return userText.replace(/\s+/g, ' ');
    }

    const [className, newClassName] = useState("bi bi-clipboard-check");
    const [btnName, newBtnName] = useState("Copy");
    function copyText() {
        navigator.clipboard.writeText(text)
        newClassName("bi bi-clipboard-check-fill")
        newBtnName("Copied!")
    }

    const textareaRef = useRef(null);
    const resetBtn = () => {
        setText("");
        textareaRef.current.focus();
    }

    const changing = (event) => {
        // textArea ki value update krny k liya ↓
        setText(event.target.value)
        newClassName("bi bi-clipboard-check")
        newBtnName("Copy")
        // console.log("Changed")
        // console.log(text.length)
    }

    return (
        <>
            <div className="my-3">
                <h1 className="d-inline">{props.heading}</h1>
                <button type="button" disabled={text.length === 0} onClick={resetBtn} className="rounded-pill btn btn-outline-secondary py-1 mx-3 resetBtn">Reset <i className="bi bi-x-lg"></i></button>
            </div>
            <div className="form-floating"> {/* Buttons */}
                <textarea className="form-control userTextarea" ref={textareaRef} value={text} onChange={changing} placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '150px', borderWidth: '2px', backgroundColor: props.theme === "info" ? 'white' : '#c8c8c8' }}></textarea>
                <label htmlFor="floatingTextarea2" style={{ color: 'gray', }}>Type here</label>
                <button type="submit" disabled={text.length === 0} onClick={upperCaseClick} className="btn btn-primary rounded-pill m-2">Upercase All</button>
                <button type="submit" disabled={text.length === 0} onClick={lowerCaseClick} className="btn btn-secondary rounded-pill m-2">Lowercase All</button>
                <button type="submit" disabled={text.length === 0} onClick={capitalizeSentence} className="btn btn-success rounded-pill m-2">Capitalize Sentence</button>
                <button type="submit" disabled={text.length === 0} onClick={capitalizeWord} className="btn btn-warning rounded-pill m-2">Capitalize Words</button>
                <button type="submit" disabled={text.length === 0} onClick={removeExtraSpaces} className="btn btn-danger rounded-pill m-2">Remove Extra Spaces</button>
            </div>

            <h2 className="my-3">Text Summary</h2>
            <label htmlFor="wordCounter"><b>Words: </b></label>
            <div id="wordCounter" className="counter">
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}</p>
            </div>

            <label htmlFor="characterCounter"><b>Characters: </b></label>
            <div id="characterCounter" className="counter my-2">
                <p>{text.length}</p>
            </div>

            <p>{0.004 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes to read</p>

            <div className="my-4">
                <h2 className="d-inline">Preview</h2>
                <button type="button" disabled={text.length === 0} onClick={copyText} className="rounded-pill py-1 mx-3 copy-btn">{btnName} <i className={className}></i></button>
            </div>
            <pre>{text.length > 0 ? text : "Enter something to preview here"}</p>

        </>
    )
}
