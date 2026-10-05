//This page has all the project where i added an quick image of the overall projects including this one since its one of my major ones but later will update to something else.
import techgearImage from "../assets/techgear.png";
import javaImage from "../assets/java.png";
import portfolioImage from "../assets/portfolio.png";

function Projects() {
    const projects = [
        {
            title: "TechGear E-Commerce System",
            image: techgearImage,
            description:
                "A web-based e-commerce system designed to allow customers to browse technology products, manage shopping carts, place orders, and track purchases.",
            role: "Software Engineering Student / Group Member",
            outcome:
                "Developed system requirements, functional requirements, use cases, and database design concepts."
        },
        {
            title: "Java Programming Projects",
            image: javaImage,
            description:
                "A collection of Java programming assignments focused on object-oriented programming, classes, methods, data handling, and application development.",
            role: "Java Developer / Student",
            outcome:
                "Built and tested Java applications using Eclipse and object-oriented programming concepts."
        },
        {
            title: "Personal Portfolio Website",
            image: portfolioImage,
            description:
                "A responsive React portfolio website created to showcase my education, projects, technical skills, and professional interests.",
            role: "Developer / Designer",
            outcome:
                "Developed a multi-page React application using React Router, reusable components, JavaScript, and responsive CSS."
        }
    ];

    return (
        <section className="page">
            <h1>My Projects</h1>
            <p className="page-intro">
                Here are some of the projects and coursework I have worked on throughout my software engineering studies and my future projects will be added.
            </p>
            <div className="project-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <h3>My Role</h3>
                        <p>{project.role}</p>
                        <h3>Outcome</h3>
                        <p>{project.outcome}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Projects;