import './App.css'


function App() {
  return (
    <div className="portfolio">
      <header className="navbar">

        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

      </header>

      <main>
        <section id="about" className="hero">

          <p className="hero-subtitle">
            Computer Science | Software Development | Problem Solving
          </p>

          <h1>Hi, I'm Kien.</h1>

          <p>
            I have completed my Bachelor of Science (Honours)
            in Computer Science coursework, specialising in
            Web and Mobile Development, and am currently
            awaiting my final results.
          </p>

          <p>
            I enjoy developing practical applications,
            exploring different technologies, and solving
            technical problems. My experience includes
            software development, working with web and
            mobile frameworks, and troubleshooting
            Windows-related issues.
          </p>

          <p>
            I'm always interested in learning new technologies
            and finding opportunities to apply my skills
            in real-world environments.
          </p>

          <div className="hero-buttons">
            <a className="button" href="#projects">
              View My Projects
            </a>

            <a className="button-secondary" href="#contact">
              Get in Touch
            </a>
          </div>

        </section>

        <section id="projects">
          <h2>Featured Projects</h2>

          <div className="project-grid">

            <article className="project-card">

              <div className="project-screenshots">
                <a href="/projects/preview1.png"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    src="/projects/preview1.png"
                    alt="TransitMateSG application preview 1"
                    loading="lazy"
                  />
                </a>

                <a href="/projects/preview2.png"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    src="/projects/preview2.png"
                    alt="TransitMateSG application preview 2"
                    loading="lazy"
                  />
                </a>
              </div>

              <div className="project-content">
                <h3>TransitMateSG</h3>

                <p>
                  A mobile application designed to help Singapore
                  commuters access real-time bus arrivals, nearby
                  bus stops, and route information.
                </p>

                <div className="project-tags">
                  <span>React Native</span>
                  <span>Expo</span>
                  <span>LTA DataMall</span>
                  <span>Maps</span>
                </div>

                <div className="project-links">
                  <a
                    href="https://github.com/OkJamesNotOk/TransitMateSG"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub ↗
                  </a>
                </div>
              </div>

            </article>

            <article className="project-card">

              <div className="project-desktop-preview">
                <a
                  href="/projects/preview3.png"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/projects/preview3.png"
                    alt="Personal Audio Player application interface"
                    loading="lazy"
                  />
                </a>
              </div>

              <div className="project-content">
                <h3>Personal Audio Player</h3>

                <p>
                  A desktop audio player developed using C++ and JUCE.
                  Originally an academic project, it was later
                  redesigned and improved for personal use, focusing
                  on music playback, playlist management and stability.
                </p>

                <div className="project-tags">
                  <span>C++</span>
                  <span>JUCE</span>
                  <span>Desktop Application</span>
                </div>

                <div className="project-links">
                  <a
                    href="https://github.com/OkJamesNotOk/AudioPlayer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Profile ↗
                  </a>
                </div>
              </div>

            </article>

            <article className="project-card">

              <div className="project-web-preview">
                <a
                  href="/projects/preview4.png"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/projects/preview4.png"
                    alt="Event Organiser web application interface"
                    loading="lazy"
                  />
                </a>
              </div>

              <div className="project-content">
                <h3>Event Organiser Web App</h3>

                <p>
                  A web-based event management application
                  developed using Node.js, EJS and SQL.
                  Features include event management,
                  user authentication and session handling.
                </p>

                <div className="project-tags">
                  <span>Node.js</span>
                  <span>EJS</span>
                  <span>SQL</span>
                  <span>HTML & CSS</span>
                </div>

                <div className="project-links">
                  <a
                    href="https://github.com/OkJamesNotOk/CM2040-midterm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Profile ↗
                  </a>
                </div>
              </div>

            </article>

          </div>
        </section>

        <section id="experience" className="details-section">
          <h2>Experience</h2>

          <div className="experience-grid">

            <article className="info-card">
              <div className="info-header">
                <h3>Software Developer Intern</h3>
                <span>Sep 2022 – Feb 2023</span>
              </div>

              <h4>LINX Singapore Pte Ltd</h4>

              <p>
                Developed and troubleshot a C# application
                using Visual Studio and HALCON for machine
                vision and image analysis tasks.
              </p>

              <p>
                Gained practical experience in problem-solving,
                debugging, and learning unfamiliar technologies.
              </p>
            </article>

            <article className="info-card">
              <div className="info-header">
                <h3>Personal Technical Experience</h3>
              </div>

              <h4>Windows Troubleshooting</h4>

              <p>
                Hands-on experience maintaining and troubleshooting
                personal Windows laptops, including Windows
                reinstallation, resolving driver errors, and
                diagnosing software-related issues.
              </p>
            </article>

          </div>
        </section>

       <section id="education" className="details-section">
          <h2>Education</h2>

          <div className="education-grid">

            <article className="info-card">
              <div className="info-header">
                <h3>
                  Bachelor of Science (Honours)
                  in Computer Science
                </h3>
                <span>Oct 2023 – Sep 2026</span>
              </div>

              <h4>
                University of London |
                Singapore Institute of Management
              </h4>

              <p>
                Specialisation: Web and Mobile Development
              </p>

              <p>
                Coursework completed, awaiting final results.
              </p>
            </article>

            <article className="info-card">
              <div className="info-header">
                <h3>
                  Diploma in Electronic and
                  Computer Engineering
                </h3>
                <span>Apr 2020 – Mar 2023</span>
              </div>

              <h4>Nanyang Polytechnic</h4>

              <p>
                Director's List, Semester 2,
                Academic Year 2022/2023.
              </p>
            </article>

          </div>
        </section>

        <section id="skills" className="details-section">
          <h2>Technical Skills</h2>

          <div className="skills-grid">

            <div className="skill-category">
              <h3>Programming Languages</h3>
              <div className="skill-list">
                <span>JavaScript</span>
                <span>Python</span>
                <span>C++</span>
                <span>C#</span>
                <span>SQL</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Frameworks & Libraries</h3>
              <div className="skill-list">
                <span>React</span>
                <span>React Native</span>
                <span>Django</span>
                <span>Vue.js</span>
                <span>Bootstrap</span>
                <span>JUCE</span>
                <span>p5.js</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Development Tools & Technologies</h3>
              <div className="skill-list">
                <span>VS Code</span>
                <span>Visual Studio</span>
                <span>Git & GitHub</span>
                <span>Node.js</span>
                <span>Expo</span>
                <span>HALCON</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Databases</h3>
              <div className="skill-list">
                <span>MySQL</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>IT & Troubleshooting</h3>
              <div className="skill-list">
                <span>Windows Installation</span>
                <span>Driver Troubleshooting</span>
                <span>Software Troubleshooting</span>
              </div>
            </div>

          </div>
        </section>

        <section id="contact" className="contact">
          <h2>Let's Connect</h2>

          <p>
            Interested in my work or have an opportunity in mind?
            Feel free to reach out.
          </p>

          <div className="contact-links">
            <a
              href="mailto:phankien555.w@gmail.com"
              className="contact-primary"
            >
              Email Me ↗
            </a>

            <a
              href="https://www.linkedin.com/in/nang-kien-phan-555oj"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/OkJamesNotOk"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </section>

      </main>

      <footer>
        <p>© 2026 Phan Nang Kien</p>
      </footer>
    </div>
  );
}

export default App;
