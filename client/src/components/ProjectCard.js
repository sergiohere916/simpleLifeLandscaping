import React from "react"

function ProjectCard({ createdAt, image, name, handleDeleteProject }) {

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
        <div className="project-picture-container">
            <button onClick={handleDelete}>REMOVE</button>
            <img style={{width: "300px", height : "300px"}} src={image} alt="Project" />
            <span>{name}</span>
            <span>{createdAt}</span>

        </div>
    )
}

export default ProjectCard