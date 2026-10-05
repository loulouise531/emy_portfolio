//This is the about me page where i added the profile image, and a bit of information on about who i am and also at the end of the code i added the resume PDF.
import profileImage from "../assets/profile.jpeg";
function About() {
    return (
        <section className="page">
            <h1>About Me</h1>
            <div className="about-content">
                <div className="profile-image">
                    <img src={profileImage} alt="Emy Sanita" />
                </div>
                <div>
                    <h2>Emy Sanita</h2>
                    <p>
                        I am a Software Engineering Technology student interested in software development, web development, and technology. 
                        I have a passion to constantly learn new skills when it comes to technology overall. 
                    </p>
                    <p>
                        Throughout my studies, I have been developing experience with programming, databases, software design, and web application development.
                    </p>
                    <p>
                        My goal is to continue developing my technical skills while building practical applications and even just testing new techniques and gaining
                        professional experience in the technology industry.
                    </p>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="button"
                    >
                        View My Resume
                    </a>
                </div>
            </div>
        </section>
    );
}
export default About;