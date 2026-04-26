import React from "react";
import "./MbaJourneySection.css";
import seriousteacher from "../../assets/seriousteacher.jpg";
import journeycardbg from "../../assets/journeycardbg.png";

function MbaJourneySection() {
  const steps = [
    {
      num: "1",
      title: "Diagnostic Test & Goal Mapping",
      desc: "Start with a baseline test and personalized roadmap aligned to your target B-schools.",
      img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f"
    },
    {
      num: "2",
      title: "Daily Classes & Guided Practice",
      desc: "Attend concept sessions, solve topic-wise drills and clear doubts with faculty support.",
      img: seriousteacher,
    },
    {
      num: "3",
      title: "Mocks, Analysis & Strategy Upgrade",
      desc: "Take sectional and full mocks, then improve speed and accuracy with detailed analytics.",
      img: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d"
    },
    {
      num: "4",
      title: "GD-PI-WAT and Admission Support",
      desc: "Prepare for interviews, group discussions and writing rounds with complete mentorship.",
      img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df"
    }
  ];

  return (
    <section className="mba-journey"
    style={{
            backgroundImage: `url(${journeycardbg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}>
      <div className="container">

        <div className="text-center">
          <span className="journey-tag">PREPARATION JOURNEY</span>
          <h2 className="journey-title">
            How We Train You For Top MBA Admissions
          </h2>
        </div>

        {/* HORIZONTAL SCROLL */}
        <div className="journey-scroll">

          {steps.map((item, i) => (
            <div className="journey-card" key={i}>

              <div className="card-img">
                <img src={`${item.img}?auto=format&fit=crop&w=800&q=80`} alt="" />
                <span className="step-badge">{item.num}</span>
              </div>

              <div className="card-content">
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default MbaJourneySection;