import React from "react";
import professorImg from '../img/professor.png'
import style from './Staff.module.css'
import { useNavigate } from "react-router-dom";

export default function Staff() {

    const navigate = useNavigate()

    function onClickHandler(){
        navigate('/loginStaff')
    }

    return (
        <div onClick={onClickHandler} className={style.staDiv}>
            <img className={style.staImg} src={professorImg} alt="Staff_Photo" />
            <h1 className={style.staH1}>Staff</h1>
        </div>
    )
}