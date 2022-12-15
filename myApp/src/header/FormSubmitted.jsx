import style from './FormSubmitted.module.css'

export default function FormSubmitted() {
    return (
        <main className={style.fsMain}>
            <div className={style.fsDiv}>
                <span></span>
                <h2 className={style.fsH2}> <i className="fa-solid fa-thumbs-up thumbsUp"></i> Form Submitted</h2>
                <span></span>
            </div>
        </main>
    )
}