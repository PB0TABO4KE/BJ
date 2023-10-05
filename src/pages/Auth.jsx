import { useState } from "react";
//<form onSubmit={sendForm}>//
//<input type="text" value={name} onChange={(e) => setName(e.target.value)} />//
function Auth() {
    const [name, setName] = useState("");
    const [token, setToken] = useState(localStorage.getItem("rockToken"));

    return <>
        <h1>Авторизация</h1>

        <form>

            <label>
                Имя пользователя
                <input type="text"/>

            </label>

        </form>
    </>
}

export { Auth };