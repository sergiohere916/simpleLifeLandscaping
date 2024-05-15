import React, {useRef, useState} from "react";
import "../css/Contact.css"
import emailjs from "@emailjs/browser"

function Contact() {
    const [condition, setCondition] = useState(true)
    const form = useRef()
    const sendEmail = () => {
    
        emailjs
          .sendForm('service_hwv5dtc', 'template_vrb8i3r', form.current, {
            publicKey: 'AjBG6cgx8EMDYspUg',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

    function handleSubmit(e) {
        e.preventDefault()
        sendEmail()
        setCondition(false)
        setTimeout(() => {
            setCondition(true)
        }, 2000);
    }

    return <div id="contact-container">
        <div id="image-section">
            <span>CONTACT US</span>
        </div>

        <div id="contacts-section">
            <div id="contact-information">
                <span id="contact-info-header">Contact us</span>
                <span>Need to get in touch with us? Fill out this form and we'll be sure to get back to you very soon! </span>
            </div>
            <div id="contact-form-container">
                <form ref={form} onSubmit={(e) => handleSubmit(e)}>

                    <div className="first-last">
                        <div className="input-container">
                            <label>First Name</label>
                            <input type="text" name="first-name" required></input>
                        </div>
                        <div className="input-container">
                            <label>Last name</label>
                            <input type="text" name="last-name" required></input>
                        </div>
                    </div>
                    <div className="input-container">
                        <label>Email</label>
                        <input type="email" name="user_email" required></input>
                    </div>
                    <div className="input-container">
                        <label>Message</label>
                        <textarea name="message" id="message" cols="30" rows="10" autoComplete="off" required></textarea>
                    </div>
                    <button type="submit">{condition ? "Submit" : "Success"}</button>
                </form>
            </div>
        </div>
    </div>
}

export default Contact