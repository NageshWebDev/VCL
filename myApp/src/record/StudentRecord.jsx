import React from "react";
import Table from "./Table";
import { useEffect, useState } from "react"
import NoRecordFound from './NoRecordFound'

export default function StudentRecord() {

    const [fetchedStuRec, setFetchedStuRec] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("/getMeStudentRecord")
            const responseJSON = await response.json()
            const responseJSONpayload = responseJSON.payload
            console.log(responseJSONpayload)
            setFetchedStuRec(responseJSONpayload)
        }
        fetchData()
    }, [])

    return (
        <React.Fragment>
            {fetchedStuRec.length && <Table stuRec={fetchedStuRec} />}
            {!fetchedStuRec.length && <NoRecordFound />}
        </React.Fragment>
    )
}