import { createContext, useState } from "react";

export const stuRollContext = createContext()

export default function Provider(props) {
    const [stuRoll, setStuRoll] = useState('')

    return (
        <stuRollContext.Provider value={[stuRoll, setStuRoll]}>
            {props.children}
        </stuRollContext.Provider>
    )
}