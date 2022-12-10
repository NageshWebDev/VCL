import React from "react";
import studentImg from '../img/student.png'
import style from './Student.module.css'
import { useNavigate } from "react-router-dom";

export default function Student() {

    const navigate = useNavigate()

    function onClickHandler(){
        navigate('/loginStudent')
    }

    return (
        <div onClick={onClickHandler} className={style.stuDiv}>
            <img className={style.stuImg} src={studentImg} alt="Student_Photo" />
            <h1 className={style.stuH1}>Student</h1>
        </div>
    )
}