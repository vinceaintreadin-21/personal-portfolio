import React, { useEffect, useState } from "react";

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [typedText, setTypedText] = useState("");

  // Simple typed effect (no external libs)
  useEffect(() => {
    const items = ["Aspiring Software Engineer", "Web Developer", "Machine Learning Enthusiast", "BS Information Systems Student"];
    let itemIndex = 0;
    let charIndex = 0;
    let adding = true;

    const tick = () => {
      const current = items[itemIndex];
      if (adding) {
        charIndex++;
        setTypedText(current.slice(0, charIndex));
        if (charIndex === current.length) {
          adding = false;
          setTimeout(tick, 900);
          return;
        }
      } else {
        charIndex--;
        setTypedText(current.slice(0, charIndex));
        if (charIndex === 0) {
          adding = true;
          itemIndex = (itemIndex + 1) % items.length;
        }
      }
      setTimeout(tick, adding ? 120 : 60);
    };

    const timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, []);

  // Scroll spy for active nav (simple)
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const onScroll = () => {
      let best = activeSection;
      let bestDistance = Infinity;
      sections.forEach((s) => {
        const rect = s.getBoundingClientRect();
        const dist = Math.abs(rect.top - 120);
        if (dist < bestDistance) {
          bestDistance = dist;
          best = s.id;
        }
      });
      setActiveSection(best);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setNavOpen(false);
    }
  };

  return (
    <div className="index-page">
      <header id="header" className={`header dark-background d-flex flex-column ${navOpen ? "open" : ""}`}>
        <i
          className="header-toggle d-xl-none bi bi-list"
          onClick={() => setNavOpen((v) => !v)}
          aria-hidden
        ></i>

        <div className="profile-img">
          <img src="./assets/img/vince.jpg" alt="profile" className="img-fluid rounded-circle" />
        </div>

        <a href="#hero" className="logo d-flex align-items-center justify-content-center" onClick={scrollTo("hero")}>
          <h1 className="sitename">Vincent Lee Duriga</h1>
        </a>

        <div className="social-links text-center">
          <a href="https://www.facebook.com/duriga.vince123" aria-label="facebook"><i className="bi bi-facebook"></i></a>
          <a href="https://www.instagram.com/goofball_prodigy" aria-label="instagram"><i className="bi bi-instagram"></i></a>
          <a href="https://github.com/vinceaintreadin-21" aria-label="github"><i className="bi bi-github"></i></a>
        </div>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="#hero" className={activeSection === "hero" ? "active" : ""} onClick={scrollTo("hero")}>
                <i className="bi bi-house navicon"></i>Home
              </a>
            </li>
            <li>
              <a href="#about" className={activeSection === "about" ? "active" : ""} onClick={scrollTo("about")}>
                <i className="bi bi-person navicon"></i> About
              </a>
            </li>
            <li>
              <a href="#resume" className={activeSection === "resume" ? "active" : ""} onClick={scrollTo("resume")}>
                <i className="bi bi-file-earmark-text navicon"></i> Resume
              </a>
            </li>
            <li>
              <a href="#portfolio" className={activeSection === "portfolio" ? "active" : ""} onClick={scrollTo("portfolio")}>
                <i className="bi bi-images navicon"></i> Portfolio
              </a>
            </li>
            <li>
              <a href="#services" className={activeSection === "services" ? "active" : ""} onClick={scrollTo("services")}>
                <i className="bi bi-hdd-stack navicon"></i> Frameworks
              </a>
            </li>
            <li>
              <a href="#contact" className={activeSection === "contact" ? "active" : ""} onClick={scrollTo("contact")}>
                <i className="bi bi-envelope navicon"></i> Contact
              </a>
            </li>
            <li>
              <a href="./assets/DURIGA.pdf" download className="download-cv">
                <i className="bi bi-download navicon"></i> Download CV
              </a>
            </li>
          </ul>
        </nav>
        
      </header>

      <main className="main">
        <section id="hero" className="hero section dark-background">
          <img src="./assets/img/sample.jpg" alt="hero-bg" className="hero-bg" />

          <div className="container">
            <h2>Vincent Lee Duriga</h2>
            <p>
              I'm a/an <span className="typed">{typedText}</span>
              <span className="typed-cursor">|</span>
            </p>
          </div>
        </section>

        

        <section id="about" className="about section">
          <div className="container section-title">
            <h2>About</h2>
            <p>
              I'm a 3rd year BS Information Systems student and an aspiring software engineer. I'm eager to learn and grow in the field of software development by improving my skills in both frontend and backend development. My goal is to become a versitle developer capable of building efficient and scalable applications.
            </p>
          </div>

          <div className="container">
            <div className="row gy-4 justify-content-center">
              <div className="col-lg-4">
                <img src="./assets/img/pogipic.jpg" className="img-fluid" alt="profile" />
              </div>
              <div className="col-lg-8 content">
                <h2>My Biography</h2>
                <p className="fst-italic py-3">
                  This is my bioraphy (It's minimal so bear with me)
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li><i className="bi bi-chevron-right"></i> <strong>Birthdate:</strong> <span>March 12, 2005</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>20</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Year and Course:</strong> <span>3rd Year BS Information Systems</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Quezon City</span></li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li><i className="bi bi-chevron-right"></i> <strong>Hobbies:</strong> <span>Strolling, Watching, Sports, Gaming</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Interests:</strong> <span>Full-stack development</span></li>
                    </ul>
                  </div>
                </div>
                <p className="py-3">
                  <em>Motto: "Less is More"</em>
                </p>
              </div>
            </div>
          </div>
        </section>


        <section id="skills" className="skills section light-background">
          <div className="container section-title">
            <h2>Skills/Programming Languages used</h2>
            <p>These are the languages i use for backend logics</p>
          </div>

          <div className="container">
            <div className="row skills-content">
              <div className="col-lg-6">
                <div className="progress">
                  <span className="skill"><span>PHP</span> <i className="val">100%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" style={{ width: "100%" }} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="progress">
                  <span className="skill"><span>C#</span> <i className="val">40%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" style={{ width: "40%" }} role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="progress">
                  <span className="skill"><span>JavaScript</span> <i className="val">55%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" style={{ width: "55%" }} role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="progress">
                  <span className="skill"><span>Python</span> <i className="val">60%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" style={{ width: "60%" }} role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="progress">
                  <span className="skill"><span>Rust</span> <i className="val">10%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" style={{ width: "10%" }} role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="progress">
                  <span className="skill"><span>Java</span> <i className="val">5%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" style={{ width: "5%" }} role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="resume" className="resume section">
          <div className="container section-title">
            <h2>Resume</h2>
            <p>These are my backgrounds in education and experience that's related to my course</p>
          </div>

          <div className="container resume-container">
            <div className="row">
              <div className="col-lg-6">
                <h3 className="resume-title">Education</h3>
                <div className="resume-item">
                  <h4>Information &amp; Communication Technology</h4>
                  <h5>2021 - 2023</h5>
                  <p><em>Arellano University Juan Sumulong Campus</em></p>
                </div>

                <div className="resume-item">
                  <h4>BS in Information Systems</h4>
                  <h5>2023 - present</h5>
                  <p><em>La Verdad Christian College, Apalit Pampanga</em></p>
                </div>
              </div>

              <div className="col-lg-6">
                <h3 className="resume-title">Experience</h3>
                <div className="resume-item">
                  <h4>Backend Developer in E-Learning app</h4>
                  <h5><em>Nov. 2024 - Jan. 2025</em></h5>
                  <p><em>Features that were implemented are chapter-based content delivery, quizzes and score tracking</em></p>
                </div>

                <div className="resume-item">
                  <h4>Backend Developer in E-commerce app</h4>
                  <h5><em>May 2025 - June 2025</em></h5>
                  <p><em>Features that were implemented were product-listing, carts, &amp; order processing</em></p>
                </div>

                <div className="resume-item">
                  <h4>Full-Stack Developer in Real-Time Book Recognition App</h4>
                  <h5><em>May 2025 - present</em></h5>
                  <p><em>Implemented live camera feed processing, object detection, &amp; data retrieval to the database</em></p>
                  <p><em>Haulted due to hardware performance issues (requires more processing power)</em></p>
                </div>

                <div className="resume-item">
                  <h4>Full-Stack Developer in Ticketing System</h4>
                  <h5><em>Aug. 2025 - discontinued</em></h5>
                  <p><em>Implemented ticket creation, assigning staffs &amp; admin dashboard</em></p>
                  <p><em>Discontinued due to internal conflicts</em></p>
                </div>

                <div className="resume-item">
                  <h4>Backend Developer in An Appointment App</h4>
                  <h5><em>Sept. 2025 - present</em></h5>
                  <p><em>Implemented appointment booking, calender view, &amp; assigning staffs</em></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="portfolio section light-background">
          <div className="container section-title">
            <h2>Portfolio</h2>
            <p>These are the projects i made <em>(there are other projects that i also made but i forgot to document it)</em></p>
          </div>

          <div className="container">
            <div className="portfolio-grid">
              {Array.from({ length: 3 }).map((_, i) => (
                <div className="portfolio-item" key={i}>
                  <div className="portfolio-content">
                    <img src={`./assets/img/portfolio/${["computervision", "ticketing", "ecommerce"][i]}.jpg`} className="img-fluid" alt={`item-${i}`} />
                    <div className="portfolio-info">
    
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="services section">
          <div className="container section-title">
            <h2>Frameworks used</h2>
            <p>These are the frameworks i typically use when developing applications</p>
          </div>

          <div className="container">
            <div className="row gy-4">
              {[
                { title: "Laravel", desc: "a framework i commonly use for web app and APIs" },
                { title: "React", desc: "for frontend development and SPAs"},
                { title: "Flask", desc: "a lightweight framework that i sometimes use for web app" },
                { title: "Tenserflow", desc: "a machine-learning framework i use for pattern recognition" },
                { title: "OpenCV", desc: "a library i use for computer-vision and object-recognition" },
                { title: "Godot", desc: "a game engine that i used for making 2D games (discontinued)" },
              ].map((s, idx) => (
                <div className="col-lg-4 col-md-6 service-item d-flex" key={idx}>
                  <div className="icon flex-shrink-0"><i className="bi bi-briefcase"></i></div>
                  <div>
                    <h4 className="title">{s.title}</h4>
                    <p className="description">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact section">
          <div className="container section-title">
            <h2>Contact</h2>
            <p>You can contact me on Github, Facebook, &amp; Instagram <em>(just click the icons on the sidebar)</em> or via Email for inquiries <em>(hoping)</em></p>
          </div>

          <div className="container contact-container">
            <div className="row gy-4">
              <div className="col-lg-5">
                <div className="info-wrap">

                  <div className="info-item d-flex">
                    <i className="bi bi-envelope flex-shrink-0"></i>
                    <div>
                      <h3>Email Me</h3>
                      <p>aujscdurigavincentlee@gmail.com</p>
                    </div>
                  </div>   
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer id="footer" className="footer position-relative light-background">
        <div className="container">
          <div className="copyright text-center ">
            <p>© <span>Copyright</span> <strong className="px-1 sitename">iPortfolio</strong> <span>All Rights Reserved</span></p>
          </div>
          <div className="credits">Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a></div>
        </div>
      </footer>

      <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center" onClick={(e)=>{e.preventDefault(); window.scrollTo({top:0, behavior:'smooth'})}}><i className="bi bi-arrow-up-short"></i></a>

      {/* Minimal component-scoped CSS for layout & appearance */}
      <style>{`
        /* Reset-ish */
        .index-page { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color: #222; }
        a { color: inherit; text-decoration: none; }
        img { max-width: 100%; display: block; }

        /* Header (sidebar) */
        .header { width: 260px; position: fixed; top: 0; left: 0; bottom: 0; padding: 30px 20px; background: #0f1724; color: #fff; overflow-y: auto; }
        .header .header-toggle { display: none; cursor: pointer; }
        .profile-img img { width: 120px; height: 120px; object-fit: cover; }
        .logo { margin: 18px 0; }
        .sitename { font-size: 20px; margin: 0; }
        .social-links a { margin: 0 6px; color: #9aa7b2; }
        .navmenu ul { list-style: none; padding: 0; margin: 20px 0; }
        .navmenu li { margin-bottom: 8px; }
        .navmenu a { display: flex; align-items: center; gap: 8px; padding: 8px 10px; border-radius: 6px; color: #cbd5e1; }
        .navmenu a.active { background: rgba(255,255,255,0.06); color: #fff; }

        /* Main area */
        .main { margin-left: 300px; padding: 40px; }
        .section { padding: 60px 0; }
        .dark-background { background: #0b1220; color: #fff; }
        .light-background { background: #f7fafc; }
        .hero { position: relative; min-height: 360px; display: flex; align-items: center; }
        .hero .hero-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.12; }
        .hero .container { position: relative; z-index: 2; }
        .typed { font-weight: 700; }
        .typed-cursor { margin-left: 6px; opacity: 0.9; }

        /* About / Resume / Portfolio */
        .section-title h2 { margin: 0 0 10px; }
        .img-fluid { border-radius: 8px; }

        .stats-row .stats-item { text-align: center; padding: 20px; background: rgba(0,0,0,0.04); border-radius: 8px; }
        .skills .progress { margin-bottom: 16px; }
        .progress-bar-wrap { background: rgba(0,0,0,0.06); border-radius: 6px; height: 12px; overflow: hidden; }
        .progress-bar { height: 12px; }

        .portfolio-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .portfolio-item { background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 6px 18px rgba(0,0,0,0.06); }
        .portfolio-info { padding: 12px; }

        .testimonials-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; }
        .testimonial-item { padding: 18px; background: #fff; border-radius: 8px; text-align: center; }
        .testimonial-img { width: 80px; height: 80px; border-radius: 50%; margin: 12px auto; object-fit: cover; }

        .contact-container .info-wrap { background: #fff; padding: 18px; border-radius: 8px; }
        .map-placeholder { height: 160px; background: #e2e8f0; display:flex; align-items:center; justify-content:center; border-radius:6px; margin-top:12px; }

        footer.footer { margin-top: 40px; padding: 24px 0; }

        /* Responsive tweaks */
        @media (max-width: 1100px) {
          .header { position: relative; width: 100%; height: auto; display: flex; flex-direction: row; gap: 12px; align-items: center; padding: 12px; }
          .header .header-toggle { display: inline-block; }
          .main { margin-left: 0; padding: 20px; }
          .portfolio-grid, .testimonials-grid { grid-template-columns: repeat(2,1fr); }
        }

        @media (max-width: 700px) {
          .portfolio-grid, .testimonials-grid { grid-template-columns: 1fr; }
          .profile-img img { width: 64px; height:64px; }
        }
      `}</style>
    </div>
  );
}
