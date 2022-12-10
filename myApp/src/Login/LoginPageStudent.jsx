import React, { useContext, useState } from "react";
import style from "./LoginPage.module.css"
import studentImg from '../img/student.png'
import { useNavigate } from "react-router-dom";
import Nav from "../header/NavHeader";
import { stuRollContext } from '../contextAndProvider'

export default function StudentLogin() {

    const [rollNo, setRollNum] = useState('')
    const [message, setMessage] = useState('')
    const [mainClicked, setMainClicked] = useState(false)

    const [, setStuRoll] = useContext(stuRollContext)
    const navigate = useNavigate()

    async function onSubmitHandler(event) {
        event.preventDefault()
        setStuRoll(rollNo)
        navigate('/loginStudent/studentPortalPage')
    }

    function onChangeHandler(event) {
        let value = event.target.value;
        setRollNum(value)
    }

    function onFocusHandler() {
        setMessage('**Roll Number Should be between 100 - 499')
    }

    function onClickHandler() {
        if (mainClicked === false)
            setMainClicked(true)
    }

    return (
        <main onClick={onClickHandler} className={style.stuLoginmain}>
            <Nav text="Student Login" flag={"student"} />
            <form className={mainClicked ? style.stuLoginformAnimation : style.stuLoginform} onSubmit={onSubmitHandler}>
                <img className={ mainClicked ? style.stuLoginImgBB : style.stuLoginImg} src={studentImg} alt="Student_Photo" />
                <div className={style.stuLogindiv}>
                    <label className={style.stuLoginlabel}>Enter Roll-Number</label>
                    <input className={style.stuLoginInput} onFocus={onFocusHandler} onChange={onChangeHandler} type="number" min="100" max="499" value={rollNo} required />
                </div>
                {message && <p>{message}</p>}
                <input className={style.stuLoginInput} type='submit' value='Login' />
            </form>
        </main>
    )
}