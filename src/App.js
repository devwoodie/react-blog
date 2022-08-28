/* eslint-disable */

import './Css/App.css';
import './Css/Reset.css';
import {useState} from "react";

function App() {
    let [title, setTitle] = useState(['Y Main Title', 'D Main Title', 'W Main Title']);
    let [like, setLike] = useState([0,0,0]);
    let [unlike, setUnlike] = useState([0,0,0]);
    let [modal, setModal] = useState(false);
    let [clickTit, setClickTit] = useState(0);
    let [addTit, setAddTit] = useState('');

    const writeInput = document.querySelector('.input-typing');
    const date = new Date();
    let nowDateTime = date.toLocaleString('ko-kr');
    let [nowDate, setNowDate] = useState([nowDateTime, nowDateTime, nowDateTime]);


    const addTitle = () => {
        let copyTit = [... title];
        copyTit.unshift(addTit);
        setTitle(copyTit);
        setAddTit('');
        writeInput.value = '';

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
                {
                    addTit === '' ? alert('내용을 입력해주세요') : addTitle();
                }
                let copy1 = [... like];
                copy1.unshift(0);
                setLike(copy1);
                let copy2 = [... unlike];
                copy2.unshift(0);
                setUnlike(copy2);
                let copy3 = [... nowDate];
                copy3.unshift(nowDateTime);
                setNowDate(copy3);
            }}>입력</button>
            {
                title.map((titles, i) => {
                    return (
                        <div className="list" key={i}>
                            <h4 className="title" onClick={() => {
                                setModal(!modal); setClickTit(i);
                            }}>{ titles }</h4>
                            <span className="text">{nowDate[i]}</span>
                            <div className="like-wrap">
                                <span className="like-btn" onClick={() => {
                                    let copyLike = [... like];
                                    copyLike[i] = like[i] +1;
                                    setLike(copyLike);
                                }}>👍</span>
                                <span className="like-num">{like[i]}</span>
                                {/*unlike*/}
                                <span className="like-btn" onClick={() => {
                                    let copyUnlike = [... unlike];
                                    copyUnlike[i] = unlike[i] +1;
                                    setUnlike(copyUnlike);
                                }}>👎</span>
                                <span className="like-num">{unlike[i]}</span>
                            </div>
                            <button type="button" className="del-btn" onClick={() => {
                                let copyTit = [... title];
                                copyTit.splice(i, 1);
                                setTitle(copyTit);
                            }}>삭제</button>
                        </div>
                    );
                })
            }
            {
                modal === true ? <Modal title={title} modal={setModal} nowDate={nowDate} clickTit={clickTit}/> : null
            }
        </div>
    );
}

const Modal = (props) => {
    return(
        <div className="modal">
            <div className="modal-wrap">
                <h4 className="title">{props.title[props.clickTit]}</h4>
                <span className="text">{props.nowDate[props.clickTit]}</span>
                <p className="content">내용</p>
                <span className="cls-btn" onClick={() => {
                    props.modal(false);
                }
                }>X</span>
            </div>
        </div>
    );
};

export default App;
