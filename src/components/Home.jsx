//This page is a simple welcome page where it can click to my work and the contact so it can be a quick one click.
import { Link } from "react-router-dom";
function Home() {
    return (
        <section className="page home-page">
            <div className="hero">
                <p className="welcome">SOFTWARE ENGINEERING TECHNOLOGY</p>
                <h1>Hi, I'm Emy.</h1>
                <h2>I am a Software Engineerer and welcome to my portfolio.</h2>
                <p>
                    I'm a Software Engineering Technology student passionate about technology, problem solving, and building fun applications.
                </p>
                <div className="button-group">
                    <Link to="/projects" className="button">
                        View My Work
                    </Link>
                    <Link to="/contact" className="button secondary-button">
                        Contact Me
                    </Link>
                </div>
            </div>
        </section>
    );
}
export default Home;