import React from "react"

function Form({ className, inputClassName }) {
    return(
        <form className={className}>
            <input
                type="search"
                className={inputClassName}
                placeholder="Nome ou número"
                required
                />
        </form>
    )
}

export default Form