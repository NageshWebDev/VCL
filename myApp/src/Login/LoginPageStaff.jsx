import React, {useState} from "react";
import style from "./LoginPage.module.css"
import studentImg from '../img/professor.png'
import { useNavigate } from "react-router-dom";
import Nav from "../header/NavHeader"

export default function StaffLogin() {

    const navigate = useNavigate()
    const [staffID, setStaffID] = useState()
    const [message, setMessage] = useState('')
    const [mainClicked, setMainClicked] = useState(false)

    async function onSubmitHandler(event) {
        event.preventDefault()
        navigate('/loginStaff/stafftPortalPage')
    }

    function onChangeHandler(event){
        let value = event.target.value;
        setStaffID(value)
    }

    function onFocusHandler() {
        setMessage('** Staff-ID should be between 500 - 600')
    }

    function onClickHandler() {
        if (mainClicked === false)
            setMainClicked(true)
    }

    return (
        <main onClick={onClickHandler} className={style.stuLoginmain}>
            <Nav text="Staff Login" flag={"staff"} />
            <form className={mainClicked ? style.stuLoginformAnimation : style.stuLoginform} onSubmit={onSubmitHandler}>
                <img className={ mainClicked ? style.stuLoginImgBB : style.stuLoginImg} src={studentImg} alt="Student_Photo" />
                <div className={style.stuLogindiv}>
                    <label className={style.stuLoginlabel}>Enter Staff-Id</label>
                    <input className={style.stuLoginInput} onFocus={onFocusHandler} onChangeHandler={onChangeHandler} type="number" min="500" max="600" value={staffID} required />
                </div>
                {message && <p>{message}</p>}
                <input className={style.stuLoginInput} type='submit' value='Login' />
            </form>
        </main>
    )
}