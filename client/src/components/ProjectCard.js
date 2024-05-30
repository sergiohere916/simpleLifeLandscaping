import React from "react"

function ProjectCard({ image, name, handleDeleteProject }) {

    function handleDelete() {
        fetch(`/delete_project?name=${name}`, {
            method: "DELETE",
        })
        .then(response => response.json())
        .then(() => {
            console.log("Deletion complete")
            handleDeleteProject(name)
        })
    }

    return (
        <div>
            <button onClick={handleDelete}>Delete</button>
            <img style={{width: "300px", height : "300px"}} src={image} alt="Project" />
        </div>
    )
}

export default ProjectCard