/* eslint-disable */

import './Css/App.css';
import './Css/Reset.css';
import {useState} from "react";

function App() {
    let [title, setTitle] = useState(['Y Main Title', 'D Main Title', 'W Main Title']);
    let [like, setLike] = useState([0,0,0]);
    let [modal, setModal] = useState(false);

    const changeTitle = () => {
        let copyTitle = [... title];
        copyTitle[0] = 'R Main Title';
        setTitle(copyTitle);
    };

    return (
        <div className="App">
            <h1 className="logo">React Blog</h1>
            <button type="button" className="alphabet" onClick={() => {
                let copyTitle = [... title];
                copyTitle.sort();
                setTitle(copyTitle);
            }}>Alphabet Sort()</button>
            {
                title.map((title, i) => {
                    return (
                        <div className="list">
                            <h4 className="title" onClick={() => {
                                setModal(!modal);
                            }}>{ title }</h4>
                            <span className="text">11월 18일 발행</span>
                            <div className="like-wrap">
                                <span className="like-btn" onClick={() => {
                                    let copyLike = [... like];
                                    copyLike[i] = like[i] +1;
                                    setLike(copyLike);
                                }}>👍</span>
                                <span className="like-num">{like[i]}</span>
                            </div>
                        </div>
                    );
                })
            }

            {
                modal === true ? <Modal title={title} changeTitle={changeTitle}/> : null
            }
        </div>
    );
}

const Modal = (props) => {
    return(
        <div className="modal">
            <h4 className="title">{props.title[0]}</h4>
            <span className="text">날짜</span>
            <p className="content">내용</p>
            <button onClick={props.changeTitle}>Change Title</button>
        </div>
    );
};

export default App;
