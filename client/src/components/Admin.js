import React, { useState } from "react"
import "../css/Admin.css"
import ProjectCard from "./ProjectCard"

function Admin({pictures, handleDeleteProject, addNewProject}) {
    const password = "123"
    const [logged, setLogged] = useState(false)
    const [creating, setCreating] = useState(false)
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');
    const [nameHolder, setName] = useState("")

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

    function handleCancelCreate() {
        setCreating(false)
    }

    const displayPictures = pictures.map(picture => {
        return <ProjectCard
                key={picture.name}
                image={picture.image_url}
                name={picture.name}
                handleDeleteProject={handleDeleteProject}
                createdAt={picture.createdAt}
                />
    })

    function handleCreateSubmit(e) {
        e.preventDefault();
        console.log(e);
    
        if (selectedFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result;
                setPreviewUrl(base64String);
    
                fetch("/images", {
                    method: "POST",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify({ image_url: base64String, name: nameHolder })
                })
                .then(response => response.json())
                .then(data => {
                    addNewProject(data)
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            };
            reader.readAsDataURL(selectedFile);
        } else {
            console.error('No file selected');
        }
    }
    

    function handleFileChange(e) {
        setSelectedFile(e.target.files[0]);
    };
    
    function handleNameChange(e) {
        setName(e.target.value)
        console.log(e.target.value)
    }

    return <>
        {logged ? <div id="logged-in-container">
            <div id="create-project-container">
                <button onClick={handleClick}>Create Project</button>
            </div>
            {creating ? <div id="new-project-container">
                
                <form onSubmit={(e) => handleCreateSubmit(e)} id="new-project-form">
                    <button onClick={handleCancelCreate}>Cancel</button>
                    <input value={nameHolder} onChange={(e) => handleNameChange(e)} type="text" required placeholder="Project Name"></input>
                    <label>Select a picture for your project</label>
                    <input type="file" onChange={handleFileChange} required></input>
                    <button type="submit">Create</button>
                </form>
            </div> : ""}
            <div id="search-container">
                <div id="search">
                    <span class="material-symbols-outlined">search</span>
                    <input type="search" placeholder="Search"></input>
                </div>
            </div>
            
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