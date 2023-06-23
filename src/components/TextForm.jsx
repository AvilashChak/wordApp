import React, { useState } from "react";

function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('success', 'Converted to uppercase');
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('success', 'Converted to lowercase');
  };

  const handleCapClick = () => {
    let newText = text
      .split(" ")
      .map((words) => words.charAt(0).toUpperCase() + words.slice(1))
      .join(" ");
    setText(newText);
    props.showAlert('success', 'Converted to capitalize');
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert('success', 'Text cleared');
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleFindChange = (event) => {
    findWord(event.target.value);
  };

  const handleReplaceChange = (event) => {
    console.log(replaceWord(event.target.value));
  };

  const handleReplaceClick = () => {
    let newText = text.replaceAll(fWord, rWord);
    setText(newText);
    props.showAlert('success', 'Text replaced');
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('success', 'Text copied');
  };

  const handleRemoveSpaceClick = () => {
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
    props.showAlert('success', 'Extra spaces removed');
  };

  const [text, setText] = useState("");

  const [fWord, findWord] = useState("");
  const [rWord, replaceWord] = useState("");

  return (
    <>
      <div
        className="container my-5 py-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>{props.heading}</h2>
        <div className="my-3">
          <div>
            <textarea
              className="form-control"
              value={text}
              placeholder="Enter your text here.."
              onChange={handleOnChange}
              rows="6"
            ></textarea>
          </div>
          <div className="d-flex mt-3">
            <textarea
              className="form-control w-50 me-3"
              value={fWord}
              placeholder="Find word and paste here.."
              onChange={handleFindChange}
              rows="2"
            ></textarea>
            <textarea
              className="form-control w-50"
              value={rWord}
              placeholder="Replace the word with the found one.."
              onChange={handleReplaceChange}
              rows="2"
            ></textarea>
          </div>
          <div className="d-flex justify-content-center disCol">
            <button
              disabled={text.length === 0}
              className={`btn btn-${props.mode === 'dark' ? 'dark' : 'primary'} mt-3 mx-3`}
              onClick={handleUpClick}
            >
              Turn text into Uppercase
            </button>
            <button
              disabled={text.length === 0}
              className={`btn btn-${props.mode === 'dark' ? 'dark' : 'primary'} mt-3`}
              onClick={handleLoClick}
            >
              Turn text into Lowercase
            </button>
            <button
              disabled={text.length === 0}
              className={`btn btn-${props.mode === 'dark' ? 'dark' : 'primary'} mt-3 mx-3`}
              onClick={handleCapClick}
            >
              Turn text into Capitalize
            </button>
            <button
              disabled={text.length === 0}
              className={`btn btn-${props.mode === 'dark' ? 'dark' : 'primary'} mt-3`}
              onClick={handleClearClick}
            >
              Clear Text
            </button>
            <button
              disabled={text.length === 0}
              className={`btn btn-${props.mode === 'dark' ? 'dark' : 'primary'} mt-3 mx-3`}
              onClick={handleCopyClick}
            >
              Copy Text
            </button>
            <button
              disabled={text.length === 0}
              className={`btn btn-${props.mode === 'dark' ? 'dark' : 'primary'} mt-3`}
              onClick={handleReplaceClick}
            >
              Replace Text
            </button>
            <button
              disabled={text.length === 0}
              className={`btn btn-${props.mode === 'dark' ? 'dark' : 'primary'} mt-3 mx-3`}
              onClick={handleRemoveSpaceClick}
            >
              Remove extra spaces
            </button>
          </div>
        </div>
        <div className="my-3">
          <h2>Your text summary</h2>
          <p>
            {
              text
                .trim()
                .split(/\s+/)
                .filter((element) => element.length !== 0).length
            }{" "}
            words and {text.replace(/\s/g, "").length} characters
          </p>
          <p>
            {0.008 *
              text.split(" ").filter((element) => element.length !== 0)
                .length}{" "}
            minutes to read
          </p>
        </div>
        <div>
          <h4>Preview your text</h4>
          <p>{text.length > 0 ? text : "Enter something to preview here.."}</p>
        </div>
      </div>
    </>
  );
}

export default TextForm;
