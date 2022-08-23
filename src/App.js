/* eslint-disable */

import './Css/App.css';
import './Css/Reset.css';
import {useState} from "react";

function App() {
    let [mainTitle, setMainTitle] = useState(['Q Blog Title 1', 'F Blog Title 2', 'K Blog Title 3']);
    let [like, setLike] = useState(0);

    return (
        <div className="App">
            <h1 className="logo">ReactBlog</h1>
            <button type="button" onClick={() => {
                let sortCopy = [... mainTitle];
                sortCopy.sort();
                setMainTitle(sortCopy);
            }}>Alphabet Sort()</button>
            <div className="list">
                <p className="title">{ mainTitle[0] } <span className="like-btn" onClick={() => {setLike(like+1)}}>👍</span> { like }</p>
                <span className="text">2월 17일 발행</span>
                <button type="button" onClick={() => {
                    let copy = [... mainTitle];
                    copy[0] = 'T Change Title 1';
                    setMainTitle(copy);
                }}>Change Title</button>
            </div>
            <div className="list">
                <p className="title">{ mainTitle[1] }</p>
                <span className="text">2월 17일 발행</span>
            </div>
            <div className="list">
                <p className="title">{ mainTitle[2] }</p>
                <span className="text">2월 17일 발행</span>
            </div>
        </div>
    );
}

export default App;
