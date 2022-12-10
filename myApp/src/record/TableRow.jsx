import style from "./TableRow.module.css"

export default function TableRow(props){
    
    const date = new Date(props.updatedAt).toLocaleString()

    return(
            <li className={style.tableRowLi}>
                <span>{props.stuRoll}</span>
                <span>{props.stuName}</span>
                <span>{props.stuEmail}</span>
                <span>{props.stuContact}</span>
                <span>{date}</span>
                <span>View Resume</span>
            </li>
    )
}