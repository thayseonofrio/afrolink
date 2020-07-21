import React from "react"
import "./menu.css"

const menu = ({setToggle, toggle}) => {
    const setToggleRegisterHandler = () => {
        setToggle(!toggle)
    }
    return (
        <div className="menu"role="navigation">
            <span> AFROLINK</span>
            <button onClick={setToggleRegisterHandler}> Cadastrar Perfil </button>
        </div>
    )
}

export default menu