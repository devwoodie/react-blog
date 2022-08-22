import './Css/App.css';
import './Css/Reset.css';
import {useState} from "react";

function App() {
    let [title, setTitle] = useState(['Title1', 'Title2', 'Title3'])
    return (
        <div className="App">
            <h1 className="logo">ReactBlog</h1>
            <div className="list">
                <p className="title">{ title[0] }</p>
                <span className="text">2월 17일 발행</span>
            </div>
            <div className="list">
                <p className="title">{ title[1] }</p>
                <span className="text">2월 17일 발행</span>
            </div>
            <div className="list">
                <p className="title">{ title[2] }</p>
                <span className="text">2월 17일 발행</span>
            </div>
        </div>
    );
}

export default App;
