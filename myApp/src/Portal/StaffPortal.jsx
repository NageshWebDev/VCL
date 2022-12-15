import style from "./StaffPortal.module.css"
import { useState } from "react"
import StudentRecord from '../record/StudentRecord'
import Nav from "../header/NavHeader"

export default function StaffPortal() {

    const [showingRecord, setShowingRecord] = useState(false)

    async function onSubmitHandler(event) {
        event.preventDefault();
        setShowingRecord(true)
    }

    return (
        <main className={style.staPortalmain}>
            <Nav text="Staff Portal" flag={"staff"} />
            <form onSubmit={onSubmitHandler}>
                <input
                    type='submit'
                    className={showingRecord ? `${style.staPortalbtn} ${style.staPortalbtnBlack}` : `${style.staPortalbtn}`}
                    value={showingRecord ? "Showing Student Record" : "Show Student Record"}
                />
            </form>
            {showingRecord && <StudentRecord />}
        </main>
    )
}