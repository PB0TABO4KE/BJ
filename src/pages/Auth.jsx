import { useState } from "react";
import {
    Input,
    Select,
    Textarea,
    Search
} from "../components/Form"

import Layout from "../components/Layout";

//<form onSubmit={sendForm}>//
//<input type="text" value={name} onChange={(e) => setName(e.target.value)} />//
function Auth() {
    const [name, setName] = useState("");
    const [token, setToken] = useState(localStorage.getItem("rockToken"));

    return <>
        <h1>Авторизация</h1>

        <div style={{ width: "400px" }}>
            <Input />
            <hr />
            <Select values={[1, 2, 3, 4]} />
            <hr />
            <Textarea />
            <hr />
            <Search />
        </div>
    </>
}

export { Auth };