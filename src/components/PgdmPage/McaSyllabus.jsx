import { useState } from "react";
import "./McaSyllabus.css";
import { FaChevronDown, FaChevronUp, FaCode } from "react-icons/fa";
import { CornerDownLeftIcon } from "@animateicons/react/lucide";
import { CornerRightUpIcon } from "@animateicons/react/lucide";
import PopularElectives from "./PopularElectives";


const syllabusData = [
  {
    title: "Semester 1",
    open: true,
    subjects: [
      "Discrete Mathematics",
      "Computer Fundamentals & Programming in C",
      "Web Technologies",
      "Computer Organization & Architecture",
      "Operating Systems",
      "Practical Lab – C & Web",
    ],
  },
  { title: "Semester 2", 
    open:true,
    subjects: [
    "Data Structures",
      "Object Oriented Programming (Java/C++)",
      "Database Management Systems",
      "Software Engineering",
      "Computer Networks",
      "Practical Lab – DS & DBMS",
  ] },
  { title: "Semester 3",
    open:true, 
    subjects: [
    "Design & Analysis of Algorithms",
      "Advanced Java / .NET",
      "Artificial Intelligence",
      "Cloud Computing",
      "Elective – I",
      "Practical Lab – Algorithms & Advanced Programming",
  ] },
  { title: "Semester 4", 
    oepn:true,
    subjects: [
    "Machine Learning",
      "Mobile Application Development",
      "Cyber Security & Ethics",
      "Elective – II",
      "Project Work / Dissertation",
      "Seminar & Viva",
  ] },
];

export default function MCASyllabus() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="mca-section">
      <div className="container">

        {/* Heading */}
        <h2 className="mca-title">
          MCA — <span>Semester-wise Subjects</span>
        </h2>

        {/* Accordion */}
        <div className="mca-accordion">

          {syllabusData.map((item, index) => (
            <div
              key={index}
              className={`mca-card ${
                activeIndex === index ? "active" : ""
              }`}
            >

              {/* Header */}
              <div
                className="mca-header"
                onClick={() => toggle(index)}
              >
                <div className="mca-left">
                  <div className="mca-icon">
                    <FaCode />
                  </div>
                  <h5>{item.title}</h5>
                </div>

                <div className="mca-arrow">
                  {activeIndex === index ? (
                    <CornerRightUpIcon size={24} color="#f45b48" />
                  ) : (
                    <CornerDownLeftIcon size={24} color="#f45b48" />
                  )}
                </div>
              </div>

              {/* Body */}
              <div
                className={`mca-body ${
                  activeIndex === index ? "show" : ""
                }`}
              >
                {item.subjects.map((sub, i) => (
                  <div key={i} className="mca-subject">
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    {sub}
                  </div>
                ))}
              </div>

            </div>
          ))}

        </div>
      </div>
      <PopularElectives />
    </section>

  );
}