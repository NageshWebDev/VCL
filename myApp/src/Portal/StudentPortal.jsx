import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./StudentPortal.module.css"
import Nav from "../header/NavHeader";
import { stuRollContext } from '../contextAndProvider'
import FormSubmitted from "../header/FormSubmitted";
import axios from 'axios'

export default function StudentPortal() {

    const navigate = useNavigate()
    const [stuRoll] = useContext(stuRollContext)

    const [error, setError] = useState(false)
    const [inFocus, setInFocus] = useState(false)

    const [rightInp, setRightInp] = useState(true)
    const [stuName, setStuName] = useState("")
    const [stuEmail, setStuEmail] = useState("")
    const [stuContact, setStuContact] = useState("")
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [fileName, setFileName] = useState('')
    const [filePath, setFilePath] = useState('')

    const [errorMsg, setErrorMsg] = useState('')
    const [checkExt, setCheckExt] = useState(false)




    function onChangeHandlerStuName(event) {
        let value = event.target.value;
        setStuName(value);
    }

    function onChangeHandlerStuEmail(event) {
        let value = event.target.value;
        setStuEmail(value)
    }

    function onChangeHandlerStuContact(event) {
        let value = event.target.value;
        setStuContact(value)
        setInFocus(true)
    }

    useEffect(() => {
        if (inFocus) {
            if (stuContact.toString().length !== 10) {
                setRightInp(false)
                setError(true)
            } else {
                setRightInp(true)
                setError(false)
            }
        }
    }, [stuContact, inFocus])

    async function onSubmitHandler(event) {
        event.preventDefault();
        console.log('Sending form data . . .')
        if (!error) {
            await fetch('/studentRecord', {
                method: "post",
                body: JSON.stringify({
                    fileName,
                    filePath,
                    stuRoll,
                    stuName,
                    stuEmail,
                    stuContact
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            console.log('Form data Send . . .')
            setTimeout(() => {
                navigate('/')
            }, 1500)
            setFormSubmitted(true);
        }
    }

    async function onUploadFileHandler(event) {
        try {
            const myFile = event.target.files[0];
            console.log(myFile)
            const formData = new FormData()
            formData.append('myFile', myFile)
            const response = await axios.post('/uploadFile', formData)
            const responseJSON = await response.data
            setFileName(responseJSON.fileName)
            setFilePath(responseJSON.filePath)
            setCheckExt(false)
        } catch (err) {
            if(err.response.status === 400){
                const axiosError = err.response.data.error
                setErrorMsg(axiosError)
                setCheckExt(true);
            }
        }
    }

    return (
        <main className={style.stuPortalmain}>
            <Nav text="Student Portal" flag={"student"} />
            {
                !formSubmitted &&
                <form onSubmit={onSubmitHandler} className={style.stuPortalform}>
                    <div className={style.stuPortaldiv}>
                        <label>Student Name</label>
                        <input className={style.stuPortalinput} type="text" onChange={onChangeHandlerStuName} value={stuName} required />
                    </div>
                    <div className={style.stuPortaldiv}>
                        <label>Student Email</label>
                        <input className={style.stuPortalinput} type="email" onChange={onChangeHandlerStuEmail} value={stuEmail} required />
                    </div>
                    <div className={style.stuPortaldiv}>
                        <label>Contact Number</label>
                        <input className={rightInp ? style.stuPortalinput : `${style.stuPortalinput} ${style.stuPortalinputFalse}`} type="number" onChange={onChangeHandlerStuContact} value={stuContact} required />
                    </div>
                    <div className={style.stuPortaldiv}>
                        <label>Upload-Resume</label>
                        <input onChange={onUploadFileHandler} className={style.stuPortalinput} type="file" />
                    </div>
                    {error && <p>**Contact number must be 10 digit</p>}
                    {checkExt && <p>{errorMsg}</p>}
                    <div>
                        <input
                            disabled={formSubmitted ? true : false}
                            className={formSubmitted ? `${style.stuPortalinputBlock}` : `${style.stuPortalinput}`}
                            type="submit"
                            value={formSubmitted ? 'Submitted' : 'Submit'}
                        />
                    </div>
                </form>
            }
            {
                formSubmitted && <FormSubmitted />
            }
        </main>
    )
}