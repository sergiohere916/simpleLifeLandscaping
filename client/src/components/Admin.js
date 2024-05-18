import React, { useState } from "react"
import "../css/Admin.css"
import ProjectCard from "./ProjectCard"

function Admin({pictures, handleDeleteProject}) {
    const password = "123"
    const [logged, setLogged] = useState(false)
    const [creating, setCreating] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        const passwordInput = e.target[0].value
        if (passwordInput === password) {
            setLogged(true)
        }
    }

    function handleClick() {
        setCreating(!creating)
    }

    const displayPictures = pictures.map(picture => {
        return <ProjectCard
                key={picture.name}
                image={picture.image_url}
                name={picture.name}
                handleDeleteProject={handleDeleteProject}
                />
    })

    return <>
        {logged ? <div id="logged-in-container">
            <div id="create-project-container">
                <button onClick={handleClick}>Create Project</button>
            </div>
            {creating ? <div>bruh</div> : ""}
            <div id="pictures-projects-container">
                {displayPictures}
            </div>
        </div> :
        <div id="logged-out-container">
            <div id="admin-form-container">
                <form id="admin-form" onSubmit={(e) => handleSubmit(e)}>
                    <label>Please enter a password</label>
                    <input type="password" required></input>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>}
    </>
}

export default Admin