import { useEffect, useState } from "react";
import "./App.css";

import logo from "./assets/logo.png";

/* Home hero slider photos */
import hero1 from "./assets/hero1.jpg";
import hero2 from "./assets/hero2.jpg";
import hero3 from "./assets/hero3.jpg";

/* Program section photos */
import program1 from "./assets/program1.jpg";
import program2 from "./assets/program2.jpg";
import program3 from "./assets/program3.jpg";
import program4 from "./assets/program4.jpg";

/* Staff photos */
import staff1 from "./assets/staff1.jpg";
import staff2 from "./assets/staff2.jpg";
import staff3 from "./assets/staff3.jpg";
import staff4 from "./assets/staff4.jpg";

/* School activities photos */
import activity1 from "./assets/activity1.jpg";
import activity2 from "./assets/activity2.jpg";
import activity3 from "./assets/activity3.jpg";
import activity4 from "./assets/activity4.jpg";

const mainPhone = "0999743710";
const hostelPhone = "0888532878";
const whatsappNumber = "265999743710";

const heroSlides = [
  {
    title: "Learn. Grow. Shine.",
    text: "Nurturing young minds, building character, and brightening every child's way to the future.",
    badge: "Admissions Open",
    image: hero1,
  },
  {
    title: "Confidence. Discipline. Excellence.",
    text: "A caring school environment where every learner is encouraged to dream big and achieve more.",
    badge: "Little Stars Academy",
    image: hero2,
  },
  {
    title: "Your Place of a Difference",
    text: "From nursery to Grade 7, with boarding available for both boys and girls.",
    badge: "Zomba, Malawi",
    image: hero3,
  },
];

const programs = [
  {
    title: "Nursery School",
    icon: "🧸",
    image: program1,
    text: "A caring early learning environment where children begin their education journey with confidence.",
  },
  {
    title: "Primary School Grade 1 - 7",
    icon: "📘",
    image: program2,
    text: "Primary education from Grade 1 to Grade 7 with strong academics, discipline, and character building.",
  },
  {
    title: "Boys & Girls Boarding",
    icon: "🏠",
    image: program3,
    text: "Boarding is available for both boys and girls. Girls hostel is in Chinamwali and boys hostel is in Matawale.",
  },
  {
    title: "Character & Values Development",
    icon: "🤝",
    image: program4,
    text: "Helping learners grow with respect, confidence, discipline, creativity, and responsibility.",
  },
];

const campuses = [
  {
    name: "Matiti Campus",
    detail: "Primary school campus offering learning from nursery to Grade 7.",
    icon: "🏫",
  },
  {
    name: "Chinamwali Campus",
    detail: "Girls hostel and boarding support in a safe and caring environment.",
    icon: "🏠",
  },
  {
    name: "Skinner Campus",
    detail: "Little Stars Academy campus serving learners with excellence.",
    icon: "🌟",
  },
  {
    name: "Matawale Hostel",
    detail: "Boys hostel for boarding learners. Hostel phone: 0888532878.",
    icon: "🛏️",
  },
];

const facilities = [
  {
    title: "Modern Classrooms",
    text: "Comfortable learning spaces designed to support active learning.",
    icon: "🏫",
  },
  {
    title: "Nursery Section",
    text: "A friendly and safe environment for early childhood learning.",
    icon: "🧸",
  },
  {
    title: "Boarding Facilities",
    text: "Separate boarding support for boys and girls in caring environments.",
    icon: "🛏️",
  },
  {
    title: "School Activities",
    text: "Activities that build confidence, teamwork, discipline, and creativity.",
    icon: "🎭",
  },
];

const staff = [
  {
    name: "Esnarth Mahowe",
    title: "Director",
    image: staff1,
  },
  {
    name: "Davie Lusaka",
    title: "Head Master",
    image: staff2,
  },
  {
    name: "Mr. Ernest",
    title: "Boarding Master",
    image: staff3,
  },
  {
    name: "Nursery Teacher",
    title: "Nursery Section",
    image: staff4,
  },
];

const activitySlides = [
  {
    title: "School Activities",
    text: "Learners participate in activities that build confidence, discipline, teamwork, and creativity.",
    image: activity1,
  },
  {
    title: "Creative Learning",
    text: "We encourage children to learn through exploration, events, and practical engagement.",
    image: activity2,
  },
  {
    title: "Character Building",
    text: "Our activities help learners develop leadership, respect, and responsibility.",
    image: activity3,
  },
  {
    title: "Every Child Shines",
    text: "At Little Stars Academy, every learner gets a chance to grow and shine.",
    image: activity4,
  },
];

function App() {
  const [page, setPage] = useState("home");
  const [slide, setSlide] = useState(0);
  const [activitySlide, setActivitySlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActivitySlide((current) => (current + 1) % activitySlides.length);
    }, 4200);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.15 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [page]);

  function goTo(selectedPage) {
    setPage(selectedPage);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="site">
      <Header goTo={goTo} page={page} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {page === "home" && (
        <Home
          slide={slide}
          setSlide={setSlide}
          activitySlide={activitySlide}
          setActivitySlide={setActivitySlide}
          goTo={goTo}
        />
      )}
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
        ✆
      </a>
    </div>
  );
}

function Header({ goTo, page, menuOpen, setMenuOpen }) {
  const navItems = [
    ["home", "Home"],
    ["about", "About Us"],
    ["programs", "Programs"],
    ["admissions", "Admissions"],
    ["campuses", "Campuses"],
    ["contact", "Contact"],
  ];

  return (
    <header className="header">
      <div className="brand" onClick={() => goTo("home")}>
        <img src={logo} alt="Little Stars Academy Logo" />
        <div>
          <h2>Little Stars Academy</h2>
          <p>Your Place of a Difference</p>
        </div>
      </div>

      <button className="menuBtn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <nav className={menuOpen ? "open" : ""}>
        {navItems.map(([key, label]) => (
          <button
            key={key}
            className={page === key ? "activeNav" : ""}
            onClick={() => goTo(key)}
          >
            {label}
          </button>
        ))}
      </nav>

      <button className="enrollBtn" onClick={() => goTo("admissions")}>
        Enroll Now
      </button>
    </header>
  );
}

function Home({ slide, setSlide, activitySlide, setActivitySlide, goTo }) {
  return (
    <>
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(rgba(38, 19, 7, 0.38), rgba(38, 19, 7, 0.62)), url(${heroSlides[slide].image})`,
        }}
      >
        <div className="heroGlass reveal show">
          <p className="smallTitle">{heroSlides[slide].badge}</p>
          <h1>{heroSlides[slide].title}</h1>
          <p>{heroSlides[slide].text}</p>

          <div className="heroBtns">
            <button onClick={() => goTo("admissions")}>Apply / Enquire Now</button>
            <button className="outline" onClick={() => goTo("about")}>
              Learn More
            </button>
          </div>

          <div className="dots">
            {heroSlides.map((_, index) => (
              <span
                key={index}
                className={slide === index ? "active" : ""}
                onClick={() => setSlide(index)}
              ></span>
            ))}
          </div>
        </div>

        <div className="heroStats reveal show">
          <div>
            <strong>4</strong>
            <span>Learning & Boarding Centres</span>
          </div>
          <div>
            <strong>N-G7</strong>
            <span>Nursery to Grade 7</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>Child Focused</span>
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
          <p>
            Little Stars Academy provides a safe, inclusive, and engaging learning
            environment where every child is encouraged to learn, grow, and shine.
          </p>
          <p>
            The school offers nursery education, primary school from Grade 1 to
            Grade 7, and boarding facilities for both boys and girls.
          </p>

          <button className="sectionBtn" onClick={() => goTo("programs")}>
            View Programs
          </button>
        </div>

        <div className="premiumCard">
          <img src={logo} alt="Little Stars Academy" />
          <h3>Little Stars Academy</h3>
          <p>Nurturing Minds. Building Character. Creating a Better Future.</p>
        </div>
      </section>

      <section className="section compactSection reveal">
        <p className="label center">Our Programs</p>
        <h2 className="centerTitle">Learning Designed for Young Stars</h2>

        <div className="programPreview compactCards">
          {programs.map((program) => (
            <ProgramCard key={program.title} {...program} />
          ))}
        </div>
      </section>

      <section className="section activitySection reveal">
        <div className="activitySlider">
          <div className="activityPhoto">
            <img src={activitySlides[activitySlide].image} alt={activitySlides[activitySlide].title} />
          </div>

          <div className="activityContent">
            <p className="label">School Activities</p>
            <h2>{activitySlides[activitySlide].title}</h2>
            <p>{activitySlides[activitySlide].text}</p>

            <div className="dots">
              {activitySlides.map((_, index) => (
                <span
                  key={index}
                  className={activitySlide === index ? "active" : ""}
                  onClick={() => setActivitySlide(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section darkStrip reveal">
        <div>
          <p className="label">Admissions Open</p>
          <h2>Give Your Child a Strong Start</h2>
          <p>Contact Little Stars Academy today for nursery, primary, and boarding enquiries.</p>
        </div>
        <button onClick={() => goTo("admissions")}>Start Admission Enquiry</button>
      </section>

      <section className="section compactSection reveal">
        <p className="label center">Our Staff</p>
        <h2 className="centerTitle">Meet Our Dedicated Team</h2>

        <div className="staffGrid compactCards">
          {staff.map((person) => (
            <Staff key={person.name} {...person} />
          ))}
        </div>
      </section>

      <section className="section light compactSection reveal">
        <p className="label center">Facilities</p>
        <h2 className="centerTitle">Our Learning Environment</h2>

        <div className="facilityGrid compactCards iconFacilityGrid">
          {facilities.map((facility) => (
            <Facility key={facility.title} {...facility} />
          ))}
        </div>
      </section>
    </>
  );
}

function About() {
  return (
    <section className="page">
      <PageHero title="About Little Stars Academy" image={hero1} />

      <div className="contentBox reveal">
        <p className="label">Who We Are</p>
        <h2>Your Place of a Difference</h2>
        <p>
          Little Stars Academy is committed to nurturing young minds, building
          character, and creating a better future. The school focuses on academic
          excellence, discipline, confidence, creativity, and moral values.
        </p>
        <p>
          Every child is given an opportunity to grow in a caring environment
          where learning is exciting and personal development is encouraged.
        </p>

        <div className="valueGrid">
          <div><h3>Our Vision</h3><p>To raise confident learners prepared for tomorrow.</p></div>
          <div><h3>Our Mission</h3><p>To provide quality education in a safe and caring environment.</p></div>
          <div><h3>Our Values</h3><p>Discipline, respect, excellence, confidence, and creativity.</p></div>
        </div>
      </div>
    </section>
  );
}

function Programs() {
  return (
    <section className="page">
      <PageHero title="Our Programs" image={program1} />

      <div className="programGrid reveal compactCards">
        {programs.map((item) => (
          <ProgramCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}

function Admissions() {
  return (
    <section className="page">
      <PageHero title="Admissions" image={hero1} />

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
  const [form, setForm] = useState({
    parentName: "",
    childName: "",
    phone: "",
    program: "",
    campus: "",
    message: "",
  });

  function updateForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function submitToWhatsApp(e) {
    e.preventDefault();

    const message = `Hello Little Stars Academy.%0A%0AI would like to enquire about admissions.%0A%0AParent/Guardian: ${form.parentName}%0AChild Name: ${form.childName}%0APhone: ${form.phone}%0AProgram: ${form.program}%0ACampus/Hostel: ${form.campus}%0AMessage: ${form.message || "No extra message"}%0A%0AThank you.`;

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  }

  return (
    <div className="applicationSection reveal">
      <h2>Online Admission Enquiry Form</h2>
      <p>Fill in the details below. When submitted, it opens WhatsApp with the completed enquiry.</p>

      <form className="applicationForm" onSubmit={submitToWhatsApp}>
        <input name="parentName" placeholder="Parent / Guardian Name *" value={form.parentName} onChange={updateForm} required />
        <input name="childName" placeholder="Child Name *" value={form.childName} onChange={updateForm} required />
        <input name="phone" placeholder="Phone Number *" value={form.phone} onChange={updateForm} required />

        <select name="program" value={form.program} onChange={updateForm} required>
          <option value="">Select Program *</option>
          <option value="Nursery School">Nursery School</option>
          <option value="Primary Grade 1 - 7">Primary Grade 1 - 7</option>
          <option value="Girls Boarding - Chinamwali">Girls Boarding - Chinamwali</option>
          <option value="Boys Boarding - Matawale">Boys Boarding - Matawale</option>
        </select>

        <select name="campus" value={form.campus} onChange={updateForm} required>
          <option value="">Select Campus / Hostel *</option>
          <option value="Matiti Campus">Matiti Campus</option>
          <option value="Chinamwali Girls Hostel">Chinamwali Girls Hostel</option>
          <option value="Skinner Campus">Skinner Campus</option>
          <option value="Matawale Boys Hostel">Matawale Boys Hostel</option>
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
      <PageHero title="Our Campuses & Hostels" image={hero2} />

      <div className="programGrid reveal compactCards iconFacilityGrid">
        {campuses.map((campus) => (
          <CampusCard key={campus.name} {...campus} />
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="page">
      <PageHero title="Contact Us" image={hero3} />

      <div className="contactGrid reveal">
        <div className="contactCard">
          <h2>Contact Information</h2>
          <p><b>Main Phone:</b> {mainPhone}</p>
          <p><b>Hostels Phone:</b> {hostelPhone}</p>
          <p><b>Email:</b> littlestarsacademy26@gmail.com</p>
          <p><b>Location:</b> Zomba, Malawi</p>
          <p><b>Campuses:</b> Matiti, Skinner, Chinamwali and Matawale Hostels</p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Little%20Stars%20Academy%20Zomba%20Malawi"
            target="_blank"
            rel="noreferrer"
          >
            Get Google Map Directions
          </a>
        </div>

        <iframe
          title="Little Stars Academy Map"
          src="https://www.google.com/maps?q=Little%20Stars%20Academy%20Zomba%20Malawi&output=embed"
        ></iframe>
      </div>
    </section>
  );
}

function PageHero({ title, image }) {
  return (
    <div
      className="pageHero"
      style={{
        backgroundImage: `linear-gradient(rgba(38, 19, 7, 0.55), rgba(38, 19, 7, 0.7)), url(${image})`,
      }}
    >
      <div>
        <h1>{title}</h1>
        <p>Little Stars Academy — Learn. Grow. Shine.</p>
      </div>
    </div>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div>
      <span>{icon}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function ProgramCard({ title, text, icon, image }) {
  return (
    <div className="programCard imageCard">
      <img src={image} alt={title} />
      <div className="cardIcon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function CampusCard({ name, detail, icon }) {
  return (
    <div className="programCard iconOnlyCard">
      <div className="bigCardIcon">{icon}</div>
      <h3>{name}</h3>
      <p>{detail}</p>
    </div>
  );
}

function Staff({ name, title, image }) {
  return (
    <div className="staffCard">
      <img className="staffPhoto" src={image} alt={name} />
      <h3>{name}</h3>
      <p>{title}</p>
    </div>
  );
}

function Facility({ title, text, icon }) {
  return (
    <div className="facilityCard iconOnlyCard">
      <div className="bigCardIcon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function Footer({ goTo }) {
  return (
    <footer>
      <div>
        <h2>Little Stars Academy</h2>
        <p>Nurturing Minds. Building Character. Creating a Better Future.</p>
        <small>Designed by BlueBite Tech Innovations</small>
      </div>

      <div>
        <h3>Quick Links</h3>
        <button onClick={() => goTo("home")}>Home</button>
        <button onClick={() => goTo("about")}>About Us</button>
        <button onClick={() => goTo("programs")}>Programs</button>
        <button onClick={() => goTo("admissions")}>Admissions</button>
        <button onClick={() => goTo("contact")}>Contact</button>
      </div>

      <div>
        <h3>Contact Info</h3>
        <p>📞 {mainPhone}</p>
        <p>🏠 Hostels: {hostelPhone}</p>
        <p>📧 littlestarsacademy26@gmail.com</p>
        <p>📍 Zomba, Malawi</p>
      </div>
    </footer>
  );
}

export default App;
