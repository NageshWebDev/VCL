import React from "react";
import style from "./Portal.module.css"
import Student from './Student'
import Staff from './Staff'

export default function Portal() {
    return (
        <section className={style.gridSection}>
            <Student />
            <Staff />
        </section>
    )
}