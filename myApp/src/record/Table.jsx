import TableRow from "./TableRow";
import style from "./Table.module.css"

export default function Table(props) {

    return (
        <main className={style.tableMain}>
            <ul className={style.tableUl}>
                <li className={style.tableLi}>
                    <span>Roll No</span>
                    <span>Name</span>
                    <span>Email</span>
                    <span>Contact</span>
                    <span>UpdatedAt</span>
                    <span>View Resume</span>
                </li>
                {
                    props.stuRec.map((item) => {
                        return (<TableRow
                            key={new Date().getUTCMilliseconds + Math.random()}
                            stuRoll={item.stuRoll}
                            stuName={item.stuName}
                            stuEmail={item.stuEmail}
                            stuContact={item.stuContact}
                            updatedAt={item.updatedAt}
                        />)
                    })
                }
            </ul>
        </main>
    )
}