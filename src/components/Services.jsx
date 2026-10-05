//Services section highlights the technical areas and skills I offer but will add or update later to include future skills.
function Services() {
    const services = [
        {
            title: "Web Development",
            description:
                "Creating responsive and user-friendly websites using HTML, CSS, JavaScript, React, and modern web development practices."
        },
        {
            title: "Software Development",
            description:
                "Developing software applications using object-oriented programming and structured software development practices."
        },
        {
            title: "Database Development",
            description:
                "Designing databases, writing SQL queries, and creating structured data systems for applications."
        }
    ];

    return (
        <section className="page">
            <h1>Services</h1>
            <p className="page-intro">
                These are some of the technical services and areas that I am developing skills in through my education and projects in school and in my personal time. 
                As well, in my personal time I explore new knowledge to expand my skills.
            </p>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div className="service-card" key={index}>
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Services;