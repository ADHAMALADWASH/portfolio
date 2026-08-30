import React from 'react';

const experience = [
  {
    title: 'Summer Intern',
    org: 'GB Academy',
    period: 'Jun 2026 – Jul 2026 · 2 mos',
    location: 'Cairo, Egypt · On-site',
    bullets: [
      'Supported diagnostic and inspection procedures on hybrid and electric vehicle systems including high-voltage battery packs, BMS (Battery Management Systems), and EV powertrain components.',
      'Assisted in electrical fault diagnosis using professional automotive diagnostic tools and OBD systems across multiple vehicle platforms.',
      'Gained practical exposure to EV charging system architecture including AC/DC charging protocols and onboard charging unit inspection.',
      'Worked alongside senior engineers on electrical wiring harness inspection, connector integrity checks, and circuit continuity testing.',
      'Developed understanding of regenerative braking systems, electric motor operation, and inverter functionality in hybrid/EV drivetrains.',
    ],
    tags: ['Electric Vehicles', 'Battery Management Systems', 'EV Powertrain', 'OBC', 'Vehicle Diagnostics'],
  },
  {
    title: 'Intern — Data Scientist & AI Developer',
    org: 'Digital Egypt Pioneers Initiative (DEPI)',
    period: 'Jun 2025 – Jan 2026 · 8 mos',
    location: 'Egypt · Remote · Part-time',
    bullets: [
      'Trained on the IBM Data Scientist Track, covering the full data science pipeline from preprocessing to deployment.',
      'Built SalesScope, a 6-month team capstone project analyzing 83K+ rows of sales data with ML forecasting, an interactive dashboard, and a support chatbot (see Projects).',
      'Worked with Python, SQL, and relational databases for data logging, cleaning, and analysis.',
      'Applied machine learning models for prediction and forecasting tasks on real-world-style datasets.',
    ],
    tags: ['Python', 'Machine Learning', 'SQL', 'Databases', 'Data Science'],
  },
  {
    title: 'Intern — Mechatronic Engineer',
    org: 'GB Academy',
    period: 'Jul 2025 – Sep 2025 · 3 mos',
    location: 'Cairo, Egypt · On-site',
    bullets: [
      'Worked across the automotive field on electrical systems in cars, building foundational experience ahead of the 2026 EV-focused internship.',
      'Gained hands-on exposure to automotive electrical/mechanical troubleshooting and vehicle systems.',
    ],
    tags: ['Automotive', 'Electric Cars', 'Mechanical Engineering'],
  },
];

const certifications = [
  {
    name: 'Practical Training Program — Classic Control, Electric Motor & Drive Programming, PLC Programming',
    org: 'HA Consulting Group',
    period: 'Jun 12 – Aug 21, 2026 · Overall Grade: Excellent',
    description:
      'Hands-on training across contactors, timers, relays, and interlocking circuits; ladder logic and I/O configuration on Siemens (S7), Schneider Electric (Modicon/Zelio), WECON, and Kinco PLCs; VFD parameter setup on Yaskawa J1000 and Delta drives (DOL/star-delta vs. drive-based soft starting); PLC sensors, limit switches, proximity and temperature sensors; virtual commissioning via CADe SIMU and Factory IO; and systematic electrical fault-finding and troubleshooting.',
  },
  {
    name: 'CS50: Introduction to Computer Science',
    org: 'Harvard University / edX',
    period: 'Aug – Oct 2022',
    description: 'C, algorithms, data structures, and software design fundamentals.',
  },
  {
    name: 'C Programming: Language Foundations',
    org: 'Dartmouth College / edX',
    period: 'Aug – Sep 2023',
    description: 'Systems-level C programming and low-level memory management.',
  },
  {
    name: 'Embedded C: Hardware Essentials and Device Driver Development',
    org: '',
    period: '',
    description: 'Embedded C fundamentals and device driver development for microcontroller hardware.',
  },
  {
    name: 'Motorsport Engineer – Introductory Course',
    org: '',
    period: '',
    description: 'Introductory coverage of race car engineering and preparation.',
  },
  {
    name: 'Car Repair and Electrician Training Certificate (CRETC+)',
    org: '',
    period: '',
    description: 'Automotive repair and vehicle electrical systems training.',
  },
  {
    name: 'Data Analysis, Deep Learning & Soft Skills Program',
    org: 'MCIT',
    period: '',
    description: 'Applied data analysis and deep learning fundamentals alongside professional soft-skills training.',
  },
];

const projects = [
  {
    title: '3-DOF Robotic Arm — ESP32 Wireless Control',
    period: 'Mar 2026 – May 2026',
    description:
      'A 3-DOF robotic arm controllable in real time via a custom web app and voice commands, with no internet connection required thanks to Wi-Fi Access Point mode. The ESP32 hosts a WebSocket server driving three servo motors (base, shoulder, elbow), with a home positioning system for a safe reset state.',
    tags: ['ESP32', 'C++', 'WebSocket', 'IoT', 'Servo Control', 'Embedded Systems'],
    link: 'https://github.com/ADHAMALADWASH',
  },
  {
    title: 'Automated Pneumatic Garbage Sorting System',
    period: 'Mar 2026 – May 2026',
    description:
      'A working prototype for MEC 363 (Hydraulic and Pneumatic Systems) that separates recyclables with zero manual intervention. An inductive proximity sensor and a TCS3200 color sensor feed an Arduino, which fires 5/2-way solenoid valves and double-acting pneumatic cylinders to sort materials in milliseconds. Built from scratch: full SolidWorks CAD model, FluidSIM-simulated pneumatic circuit, a MIG/TIG-welded steel chassis, and CNC-machined pulleys.',
    results: '3× faster sorting than manual labor · 40% lower estimated operating cost · millisecond-level response',
    tags: ['SolidWorks', 'FluidSIM', 'Arduino', 'Pneumatic Systems', 'Sensor Integration', 'CAD', 'Automation'],
    link: 'https://github.com/ADHAMALADWASH/Sorting_Automated',
  },
  {
    title: 'Real-Time Smart City Monitoring Ecosystem',
    period: 'Feb 2026 – May 2026',
    description:
      'An end-to-end smart city monitoring system streaming live sensor data from ESP32 nodes via WebSockets into a Python/Flask backend, where ML models (Isolation Forest, classification and regression) run real-time inference for anomaly detection, traffic analysis, and environmental forecasting. Visualized on a live Chart.js dashboard, powered by a solar array with MPPT controller and battery storage, with a hardware-agnostic simulation fallback for demos.',
    tags: ['ESP32', 'Flask-SocketIO', 'WebSocket', 'Scikit-Learn', 'Pandas', 'NumPy', 'Machine Learning'],
    link: 'https://github.com/ADHAMALADWASH',
  },
  {
    title: 'Split Bearing Housing — CAD to 3D Print',
    period: 'Apr 2026 – May 2026',
    description:
      'A split bearing housing bracket designed from mechanical constraints to physical prototype in SolidWorks — bore tolerances, split-clamp geometry, and hardware details (socket head screws, grease fitting) validated by high-fidelity rendering before printing a functional red PLA prototype.',
    tags: ['SolidWorks', '3D Printing', 'Design for Manufacturing', 'Prototyping'],
  },
  {
    title: 'SalesScope — End-to-End Sales Analytics & Forecasting System',
    period: 'Jun 2025 – Dec 2025',
    description:
      'A 6-month team capstone for the IBM Data Scientist Track (DEPI), built on a subset of the Microsoft AdventureWorks Sales Dataset (83K+ rows, 21 features). Combines data preprocessing, ML forecasting models, an interactive dashboard, and a support chatbot into a single deployed pipeline, with file upload for instant prediction and manual input for on-demand forecasting.',
    tags: ['Python', 'Machine Learning', 'Data Processing', 'Dashboards', 'Chatbot Development'],
    link: 'https://github.com/HanenEl/SalesScope',
  },
  {
    title: '4-Cylinder Engine Model',
    period: 'Jan 2024 – Feb 2024',
    description:
      'A fully assembled 4-cylinder internal combustion engine modeled in SolidWorks — crankshaft, pistons, connecting rods, and cylinder block — with realistic motion simulation, parametric tolerances, and exploded-view technical documentation.',
    tags: ['SolidWorks', 'Mechanical Engineering'],
  },
  {
    title: 'Car Obstacle Avoider',
    period: 'Jan 2024 – Feb 2024',
    description:
      'A dual-mode robotic car that switches between manual RC control and autonomous obstacle avoidance. A servo-mounted HC-SR04 ultrasonic sensor sweeps for obstacles and steers around them in Auto Mode; a custom RemoteXY Bluetooth interface drives it in Manual Mode via a four-motor direct-drive system.',
    tags: ['Arduino', 'Embedded Systems', 'RemoteXY', 'Ultrasonic Sensing', 'Motor Control'],
    link: 'https://github.com/ADHAMALADWASH/CarObstacleAvoider',
  },
  {
    title: 'Mechanical Mixer',
    period: 'Jan 2024 – Feb 2024',
    description:
      'A sheet-metal mixer enclosure and frame designed for manufacturability — bends, flanges, edge flanges, and forming tools, with flat patterns generated for laser cutting and bending.',
    tags: ['SolidWorks', 'Sheet Metal', 'Process Simulation'],
  },
  {
    title: 'Line Follower Car',
    period: 'Apr 2023',
    description:
      'An autonomous line-following robot using two IR sensors and on/off control logic to track a path and adjust motor direction in real time.',
    tags: ['Arduino', 'IR Sensors', 'Embedded Systems'],
  },
  {
    title: '7-Segment Logic Gate Display',
    period: '',
    description:
      'A 7-segment display driver built entirely from basic logic gates (AND, OR, NOT, XOR) — no microcontroller. Decodes 4-bit binary input (0–9) via truth tables and Karnaugh map simplification, implemented on breadboard with digital ICs.',
    tags: ['Logic Gates', 'Control Logic', 'Design Thinking'],
  },
  {
    title: 'Motorcycle Shock Absorber',
    period: '',
    description:
      'A detailed motorcycle shock absorber modeled in SolidWorks, including the helical coil spring, damper piston/cylinder assembly, and mounting eyelets and bushings — built to explore suspension dynamics and ride-comfort mechanics.',
    tags: ['SolidWorks', 'Motorcycle Industry'],
    link: 'https://grabcad.com/adham.aladwash-2',
  },
];

const skillGroups = [
  {
    label: 'Programming',
    skills: ['Python', 'C', 'C++', 'SQL', 'Embedded C'],
  },
  {
    label: 'Data Science & AI',
    skills: ['Machine Learning', 'Deep Learning', 'Data Analysis', 'Data Visualization', 'Pandas', 'NumPy', 'Scikit-Learn', 'Databases'],
  },
  {
    label: 'CAD & Mechanical',
    skills: ['SolidWorks', 'AutoCAD', '3D Modeling', '3D Printing', 'FluidSIM', 'Mechanical/Electrical Simulation', 'Design for Manufacturing'],
  },
  {
    label: 'Industrial Automation',
    skills: ['PLC Programming', 'Ladder Logic', 'Siemens TIA Portal', 'Schneider Electric', 'WECON', 'Kinco', 'Factory IO', 'CADe SIMU', 'VFD / Motor Drives'],
  },
  {
    label: 'Embedded & IoT',
    skills: ['ESP32', 'Arduino', 'WebSocket', 'Internet of Things', 'Servo Control', 'Sensor Integration'],
  },
  {
    label: 'Automotive & EV',
    skills: ['Electric Vehicles', 'Battery Management Systems', 'EV Powertrain', 'OBD Diagnostics', 'AC/DC Charging', 'Regenerative Braking', 'Inverter Systems'],
  },
  {
    label: 'Interpersonal',
    skills: ['Time Management', 'Team Leading', 'Negotiation'],
  },
];

function SectionHeading({ children }) {
  return <h2 className="text-3xl font-bold text-blue-400 mb-6">{children}</h2>;
}

export default function Portfolio() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="fixed w-full bg-gray-800 shadow-md z-50">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between overflow-x-auto">
          <div className="text-xl font-bold text-blue-400 shrink-0">Adham Aladwash</div>
          <div className="space-x-4 text-sm md:text-base whitespace-nowrap">
            <a href="#about" className="hover:text-blue-300">About</a>
            <a href="#experience" className="hover:text-blue-300">Experience</a>
            <a href="#projects" className="hover:text-blue-300">Projects</a>
            <a href="#skills" className="hover:text-blue-300">Skills</a>
            <a href="#certifications" className="hover:text-blue-300">Certifications</a>
            <a href="#contact" className="hover:text-blue-300">Contact</a>
            <a href="/AdhamAladwash_CV.pdf" target="_blank" rel="noopener noreferrer" className="bg-blue-500 px-3 py-1 rounded text-white hover:bg-blue-600">Download CV</a>
          </div>
        </nav>
      </header>

      <main className="pt-28 max-w-6xl mx-auto px-6">

        <section id="about" className="grid md:grid-cols-2 gap-8 items-center py-12">
          <div>
            <h1 className="text-4xl font-bold text-blue-400">Mechatronics Engineer · Data Scientist</h1>
            <p className="mt-4 text-gray-300">
              Undergraduate Mechatronics Engineering student at Delta University for Science and Technology (GPA 3.85), focused on applying mechatronics and data science knowledge to real-life AI-related projects. My work spans embedded systems and IoT, CAD/mechanical design, industrial automation (PLC programming, motor drives), and hybrid/EV diagnostics.
            </p>
            <p className="mt-2 text-gray-300">
              Alongside my engineering background, I train in data science and machine learning — building end-to-end pipelines, dashboards, and predictive models to bridge hardware and data.
            </p>
          </div>
          <div className="flex justify-center">
            <img src="/profile.jpg" alt="Adham Aladwash" className="rounded-xl shadow-lg w-64 h-64 object-cover" />
          </div>
        </section>

        <section id="experience" className="py-12">
          <SectionHeading>Experience</SectionHeading>
          <div className="space-y-6">
            {experience.map((job, idx) => (
              <div key={idx} className="bg-gray-800 p-6 rounded-lg">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-semibold">{job.title} — {job.org}</h3>
                  <span className="text-gray-400 text-sm">{job.period}</span>
                </div>
                <div className="text-gray-500 text-sm mb-3">{job.location}</div>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  {job.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {job.tags.map((t, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-gray-700 rounded text-blue-300">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="py-12">
          <SectionHeading>Projects</SectionHeading>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, idx) => (
              <div key={idx} className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-semibold text-blue-300">{p.title}</h3>
                  {p.period && <span className="text-gray-500 text-xs whitespace-nowrap">{p.period}</span>}
                </div>
                <p className="mt-2 text-gray-300 text-sm flex-1">{p.description}</p>
                {p.results && (
                  <p className="mt-2 text-emerald-400 text-sm font-medium">{p.results}</p>
                )}
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.map((t, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-gray-700 rounded text-blue-300">{t}</span>
                  ))}
                </div>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-blue-400 hover:text-blue-300 text-sm font-medium">
                    View project →
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg mt-6">
            <h3 className="text-xl font-semibold text-blue-300">More on GrabCAD & GitHub</h3>
            <p className="mt-2 text-gray-300 text-sm">
              Browse the full collection of mechanical design work and code repositories.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <a href="https://grabcad.com/adham.aladwash-2" target="_blank" rel="noopener noreferrer" className="inline-block px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm">View on GrabCAD</a>
              <a href="https://github.com/ADHAMALADWASH" target="_blank" rel="noopener noreferrer" className="inline-block px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm">View on GitHub</a>
            </div>
          </div>
        </section>

        <section id="skills" className="py-12">
          <SectionHeading>Skills</SectionHeading>
          <div className="grid sm:grid-cols-2 gap-6">
            {skillGroups.map((group, idx) => (
              <div key={idx}>
                <h3 className="text-sm uppercase tracking-wide text-gray-400 mb-2">{group.label}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((s, i) => (
                    <span key={i} className="px-3 py-1.5 bg-gray-800 rounded-lg text-gray-200 text-sm">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="certifications" className="py-12">
          <SectionHeading>Education & Certifications</SectionHeading>
          <div className="space-y-4">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold">B.Sc. Mechatronics Engineering — Delta University for Science and Technology</h3>
                <span className="text-gray-400 text-sm">Oct 2021 – Jun 2027</span>
              </div>
              <p className="mt-1 text-gray-300 text-sm">GPA: 3.85 / 4.0</p>
            </div>
            {certifications.map((c, idx) => (
              <div key={idx} className="bg-gray-800 p-6 rounded-lg">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold">{c.name}{c.org && <span className="text-gray-400 font-normal"> — {c.org}</span>}</h3>
                  {c.period && <span className="text-gray-400 text-sm whitespace-nowrap">{c.period}</span>}
                </div>
                <p className="mt-2 text-gray-300 text-sm">{c.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-12">
          <SectionHeading>Contact</SectionHeading>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg space-y-4 text-gray-300">
            <p><strong>Email:</strong> adhamaladwash71@gmail.com</p>
            <p><strong>Phone:</strong> +201068228935</p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/adham-aladwash-8b3b8824a/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">adham-aladwash</a></p>
            <p><strong>GitHub:</strong> <a href="https://github.com/ADHAMALADWASH" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">ADHAMALADWASH</a></p>
          </div>
        </section>
      </main>

      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Adham Aladwash
      </footer>
    </div>
  );
}
