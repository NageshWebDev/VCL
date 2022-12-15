import style from "./TableRow.module.css"
// const pdf = require("../../src/client/uploads/Introduction.pdf")


export default function TableRow(props) {

    const date = new Date(props.updatedAt).toLocaleString()
    const path = props.filePath
    const filePath = `../../${path}`
    console.log(filePath)

    return (
        <li className={style.tableRowLi}>
            <span>{props.stuRoll}</span>
            <span>{props.stuName}</span>
            <span>{props.stuEmail}</span>
            <span>{props.stuContact}</span>
            <span>{date}</span>
            <a href={require(`../../src/client/uploads/${props.fileName}`)} target='_blank' rel='noopener noreferrer'> view resume</a>
        </li>
    )
}