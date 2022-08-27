/* eslint-disable */

import './Css/App.css';
import './Css/Reset.css';
import {useState} from "react";

function App() {
    let [title, setTitle] = useState(['Y Main Title', 'D Main Title', 'W Main Title']);
    let [like, setLike] = useState([0,0,0]);
    let [modal, setModal] = useState(false);
    let [clickTit, setClickTit] = useState(0);
    let [addTit, setAddTit] = useState('');

    const changeTitle = () => {
        let copyTitle = [... title];
        copyTitle[0] = 'R Main Title';
        setTitle(copyTitle);
    };

    return (
        <div className="App">
            <h1 className="logo">React Blog</h1>
            {/*게시글 정렬 */}
            <button type="button" className="alphabet" onClick={() => {
                let copyTitle = [... title];
                copyTitle.sort();
                setTitle(copyTitle);
            }}>게시글 정렬</button>
            {/*글 입력*/}
            <input
                type="text"
                className="input-typing"
                placeholder="글을 입력해주세요"
                onChange={(e) => {
                    setAddTit(e.target.value);
                }}
            />
            <button type="submit" onClick={() => {
                let copyTit = [... title];
                copyTit.unshift(addTit);
                setTitle(copyTit);
            }}>입력</button>
            {
                title.map((title, i) => {
                    return (
                        <div className="list">
                            <h4 className="title" onClick={() => {
                                setModal(!modal); setClickTit(i);
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
                            <button type="button" className="del-btn" onClick={() => {

                            }}>삭제</button>
                        </div>
                    );
                })
            }


            {
                modal === true ? <Modal title={title} clickTit={clickTit} changeTitle={changeTitle}/> : null
            }
        </div>
    );
}

const Modal = (props) => {
    return(
        <div className="modal">
            <h4 className="title">{props.title[props.clickTit]}</h4>
            <span className="text">날짜</span>
            <p className="content">내용</p>
            <button onClick={props.changeTitle}>Change Title</button>
        </div>
    );
};

export default App;
