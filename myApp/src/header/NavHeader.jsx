import style from "./Nav.module.css"
import { useNavigate } from "react-router-dom";
import React from "react";

export default function Nav(props) {

    const navigate = useNavigate()

    function onClickHandler(event) {
        event.preventDefault()
        navigate(-1)
    }

    return (
        <React.Fragment>
            <div className={style.navDiv}>
                <i onClick={onClickHandler} className="fa-solid fa-arrow-left"></i>
                {props.flag === 'student' && <h1 className={style.navH1}> <i className="fa-solid fa-user"></i> {props.text}</h1>}
                {props.flag === 'staff' && <h1 className={style.navH1}> <i className="fa-solid fa-clipboard-user"></i> {props.text}</h1>}
                <a href="/"><i className="fa-solid fa-circle-xmark"></i></a>
            </div>
        </React.Fragment>
    )
}