//In this page i have the function that add how to contact me by getting them to add their name and other information with the message they would like to add.
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: ""
    });
    function handleChange(event) {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }
    // Prevents the default form submission and redirects the user to the home page
    function handleSubmit(event) {
        event.preventDefault();

        alert("Thank you for contacting me!");

        navigate("/");
    }
    
    return (
        <section className="page">
            <h1>Get In Contact With Me</h1>
            <div className="contact-container">
                <div className="contact-info">
                    <h2>Contact Me</h2>
                    <p>
                        If you would like to get in touch with me or talk about anything even just more software chat, please use
                        the contact form and I will reach out as soon as I can.
                    </p>
                    <p>
                        <strong>Email:</strong> esanita1@my.centennialcollege.ca
                    </p>
                    <p>
                        <strong>Phone:</strong> +1 5195887071
                    </p>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label>First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                    <label>Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                    <label>Contact Number</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <label>Message</label>
                    <textarea
                        name="message"
                        rows="6"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button type="submit" className="button">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}
export default Contact;