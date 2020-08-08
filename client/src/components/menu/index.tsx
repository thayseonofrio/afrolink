import React from "react"
import "./menu.css"

type MenuProps = {
    setToggle: Function,
    toggle: boolean
}

const menu = ({setToggle, toggle}: MenuProps) => {
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