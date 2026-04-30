import { useEffect, useState } from "react";
import "./App.css";
import logo from "./assets/logo.jpg";

const phone = "0999743710";
const whatsappNumber = "265999743710";

const slides = [
  { title: "Learn. Grow. Shine.", text: "Nurturing young minds and building bright futures." },
  { title: "Admissions Open", text: "Nursery, full primary school and girls boarding available." },
  { title: "Your Place of a Difference", text: "Quality education, character development and caring support." },
];

const campuses = [
  { name: "Matiti Campus", detail: "Full Primary School from Standard 1 to Standard 8." },
  { name: "Chinamwali Campus", detail: "Girls Boarding School with a caring learning environment." },
  { name: "Skinner Campus", detail: "Little Stars Academy campus serving learners with excellence." },
];

const programs = [
  { title: "Nursery School", text: "A caring early learning environment where children begin their education journey with confidence." },
  { title: "Primary School Standard 1 - 8", text: "Full primary education with strong academics, discipline, creativity and character building." },
  { title: "Girls Boarding School", text: "A safe and supportive boarding environment for girls at the Chinamwali campus." },
  { title: "Character & Values Development", text: "Helping learners grow with respect, confidence, discipline and responsibility." },
];

function App() {
  const [page, setPage] = useState("home");
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setSlide((s) => (s + 1) % slides.length), 4500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("show");
      });
    }, { threshold: 0.15 });

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [page]);

  function goTo(p) {
    setPage(p);
    window.scrollTo(0, 0);
  }

  return (
    <div className="site">
      <Header goTo={goTo} />

      {page === "home" && <Home slide={slide} setSlide={setSlide} goTo={goTo} />}
      {page === "about" && <About />}
      {page === "programs" && <Programs />}
      {page === "admissions" && <Admissions />}
      {page === "campuses" && <Campuses />}
      {page === "contact" && <Contact />}

      <Footer goTo={goTo} />

      <a
        className="whatsappFloat"
        href={`https://wa.me/${whatsappNumber}?text=Hello%20Little%20Stars%20Academy,%20I%20would%20like%20to%20make%20an%20enquiry.`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        ☎
      </a>
    </div>
  );
}

function Header({ goTo }) {
  return (
    <header className="header">
      <div className="brand" onClick={() => goTo("home")}>
        <img src={logo} alt="Little Stars Academy Logo" />
        <div>
          <h2>Little Stars Academy</h2>
          <p>Your Place of a Difference</p>
        </div>
      </div>

      <nav>
        <button onClick={() => goTo("home")}>Home</button>
        <button onClick={() => goTo("about")}>About Us</button>
        <button onClick={() => goTo("programs")}>Programs</button>
        <button onClick={() => goTo("admissions")}>Admissions</button>
        <button onClick={() => goTo("campuses")}>Campuses</button>
        <button onClick={() => goTo("contact")}>Contact</button>
      </nav>

      <button className="loginBtn" onClick={() => goTo("admissions")}>Enroll Now</button>
    </header>
  );
}

function Home({ slide, setSlide, goTo }) {
  return (
    <>
      <section className="hero">
        <div className="heroContent">
          <p className="smallTitle">Admissions Open</p>
          <h1>{slides[slide].title}</h1>
          <p>{slides[slide].text}</p>

          <div className="heroBtns">
            <button onClick={() => goTo("admissions")}>Apply Now</button>
            <button className="outline" onClick={() => goTo("about")}>Learn More</button>
          </div>

          <div className="dots">
            {slides.map((_, index) => (
              <span key={index} className={slide === index ? "active" : ""} onClick={() => setSlide(index)}></span>
            ))}
          </div>
        </div>
      </section>

      <section className="features reveal">
        <Feature icon="📘" title="Quality Education" text="Strong academics for a bright future." />
        <Feature icon="🌟" title="Holistic Development" text="Building confidence and talents." />
        <Feature icon="👩‍🏫" title="Caring Environment" text="Safe, respectful and inclusive." />
        <Feature icon="🎓" title="Prepared for Tomorrow" text="Equipping learners for the future." />
      </section>

      <section className="section two reveal">
        <div>
          <p className="label">About Little Stars</p>
          <h2>Inspiring Excellence. Building Character. Creating Leaders.</h2>
          <p>Little Stars Academy provides a safe, inclusive and engaging environment where every child is encouraged to learn, grow and shine.</p>
          <p>The school offers nursery education, full primary school from Standard 1 to 8, and girls boarding facilities.</p>
        </div>

        <div className="infoCard">
          <h3>Why Choose LSA?</h3>
          <ul>
            <li>Nursery and primary education</li>
            <li>Girls boarding available</li>
            <li>Campuses in Matiti, Skinner and Chinamwali</li>
            <li>Values, discipline and character development</li>
          </ul>
        </div>
      </section>

      <section className="section reveal">
        <p className="label center">Our Staff</p>
        <h2 className="centerTitle">Meet Our Dedicated Team</h2>
        <div className="staffGrid">
          <Staff title="Director" />
          <Staff title="Head Teacher" />
          <Staff title="Nursery Teacher" />
          <Staff title="Boarding Matron" />
        </div>
      </section>

      <section className="section light reveal">
        <p className="label center">Facilities</p>
        <h2 className="centerTitle">Our Learning Environment</h2>
        <div className="facilityGrid">
          <Facility title="Classrooms" />
          <Facility title="Nursery Section" />
          <Facility title="Girls Boarding" />
          <Facility title="Primary School" />
        </div>
      </section>
    </>
  );
}

function About() {
  return (
    <section className="page">
      <PageHero title="About Little Stars Academy" />
      <div className="contentBox reveal">
        <h2>Your Place of a Difference</h2>
        <p>Little Stars Academy is committed to nurturing young minds, building character and creating a better future. The school focuses on academic excellence, discipline, confidence, creativity and moral values.</p>
        <p>Every child is given an opportunity to grow in a caring environment where learning is exciting and personal development is encouraged.</p>
      </div>
    </section>
  );
}

function Programs() {
  return (
    <section className="page">
      <PageHero title="Our Programs" />
      <div className="programGrid reveal">
        {programs.map((item) => (
          <div className="programCard" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Admissions() {
  return (
    <section className="page">
      <PageHero title="Admissions" />
      <div className="processGrid reveal">
        <div><span>1</span><h3>Submit Enquiry</h3><p>Fill in the admission form and submit directly to WhatsApp.</p></div>
        <div><span>2</span><h3>School Response</h3><p>The school will respond with requirements and admission details.</p></div>
        <div><span>3</span><h3>Enroll</h3><p>Complete registration and allow your child to start learning.</p></div>
      </div>
      <AdmissionForm />
    </section>
  );
}

function AdmissionForm() {
  const [form, setForm] = useState({ parentName: "", childName: "", phone: "", program: "", campus: "", message: "" });

  function updateForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function submitToWhatsApp(e) {
    e.preventDefault();
    const message = `Hello Little Stars Academy.%0A%0AI would like to enquire about admissions.%0A%0AParent/Guardian: ${form.parentName}%0AChild Name: ${form.childName}%0APhone: ${form.phone}%0AProgram: ${form.program}%0ACampus: ${form.campus}%0AMessage: ${form.message || "No extra message"}%0A%0AThank you.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  }

  return (
    <div className="applicationSection reveal">
      <h2>Online Admission Enquiry Form</h2>
      <p>Fill in the details below. When submitted, it will open WhatsApp with the completed message.</p>

      <form className="applicationForm" onSubmit={submitToWhatsApp}>
        <input name="parentName" placeholder="Parent / Guardian Name *" value={form.parentName} onChange={updateForm} required />
        <input name="childName" placeholder="Child Name *" value={form.childName} onChange={updateForm} required />
        <input name="phone" placeholder="Phone Number *" value={form.phone} onChange={updateForm} required />

        <select name="program" value={form.program} onChange={updateForm} required>
          <option value="">Select Program *</option>
          <option value="Nursery School">Nursery School</option>
          <option value="Primary Standard 1 - 8">Primary Standard 1 - 8</option>
          <option value="Girls Boarding School">Girls Boarding School</option>
        </select>

        <select name="campus" value={form.campus} onChange={updateForm} required>
          <option value="">Select Campus *</option>
          <option value="Matiti Campus">Matiti Campus</option>
          <option value="Chinamwali Campus">Chinamwali Campus</option>
          <option value="Skinner Campus">Skinner Campus</option>
        </select>

        <textarea name="message" placeholder="Additional message / child's class / enquiry" value={form.message} onChange={updateForm}></textarea>
        <button type="submit">Send Enquiry on WhatsApp</button>
      </form>
    </div>
  );
}

function Campuses() {
  return (
    <section className="page">
      <PageHero title="Our Campuses" />
      <div className="programGrid reveal">
        {campuses.map((campus) => (
          <div className="programCard" key={campus.name}>
            <h3>{campus.name}</h3>
            <p>{campus.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="page">
      <PageHero title="Contact Us" />
      <div className="contactGrid reveal">
        <div className="contactCard">
          <h2>Contact Information</h2>
          <p><b>Phone:</b> {phone}</p>
          <p><b>Email:</b> littlestarsacademy26@gmail.com</p>
          <p><b>Location:</b> Zomba, Malawi</p>
          <p><b>Campuses:</b> Matiti, Skinner and Chinamwali</p>
          <a href="https://www.google.com/maps/search/?api=1&query=Little%20Stars%20Academy%20Zomba%20Malawi" target="_blank" rel="noreferrer">Get Google Map Directions</a>
        </div>
        <iframe title="Little Stars Academy Map" src="https://www.google.com/maps?q=Little%20Stars%20Academy%20Zomba%20Malawi&output=embed"></iframe>
      </div>
    </section>
  );
}

function PageHero({ title }) {
  return (
    <div className="pageHero">
      <h1>{title}</h1>
      <p>Little Stars Academy — Learn. Grow. Shine.</p>
    </div>
  );
}

function Feature({ icon, title, text }) {
  return <div><span>{icon}</span><h3>{title}</h3><p>{text}</p></div>;
}

function Staff({ title }) {
  return <div className="staffCard"><div className="staffIcon">👤</div><h3>{title}</h3><p>Little Stars Academy</p></div>;
}

function Facility({ title }) {
  return <div className="facilityCard"><div className="photoPlaceholder">School Photo</div><h3>{title}</h3><p>View details</p></div>;
}

function Footer({ goTo }) {
  return (
    <footer>
      <div><h2>Little Stars Academy</h2><p>Nurturing Minds. Building Character. Creating a Better Future.</p></div>
      <div><h3>Quick Links</h3><button onClick={() => goTo("home")}>Home</button><button onClick={() => goTo("about")}>About Us</button><button onClick={() => goTo("admissions")}>Admissions</button><button onClick={() => goTo("contact")}>Contact</button></div>
      <div><h3>Contact Info</h3><p>📞 {phone}</p><p>📧 littlestarsacademy26@gmail.com</p><p>📍 Zomba, Malawi</p></div>
    </footer>
  );
}

export default App;
