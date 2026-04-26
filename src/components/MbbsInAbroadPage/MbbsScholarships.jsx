import React from "react";
import "./MbbsScholarships.css";

function MbbsScholarships() {
  const data = [
    {
      region: "United Kingdom",
      items: [
        "QMUL John Abernethy (Barts) Scholarship for Medicine",
        "St Georges Medical Scholarships",
        "University of Cambridge Graduate Course in Medicine Bursary",
        "University of Glasgow Medical, Veterinary and Life Sciences Scholarships",
        "King’s College London Social Science, Health and Medicine Bursaries"
      ]
    },
    {
      region: "Europe",
      items: [
        "Novo Nordisk Foundation Research Scholarships and Grants",
        "Carl Duisberg Scholarships",
        "University of Copenhagen Ph.D. Scholarships",
        "AMC Amsterdam Merit Scholarships",
        "Namaste India Scholarships"
      ]
    },
    {
      region: "North America",
      items: [
        "American College of Surgeons International Guest Scholarships",
        "ASME Grants and Fellowships",
        "AMA Minority Scholars Award",
        "University of Calgary Cumming School of Medicine Awards",
        "Edith SeVille Coale Scholarships"
      ]
    },
    {
      region: "Australia",
      items: [
        "University of Auckland John Hamel MacGregor Award in Medical Science",
        "University of Wollongong Undergraduate Scholarship",
        "AFPHM John Snow Scholarship",
        "University of Melbourne Baillieu Research Scholarship",
        "Kidney Health Australia Research Program"
      ]
    }
  ];

  return (
    <section className="mbbs-scholar-section">
      <div className="container">

        <div className="mbbs-scholar-card">

          <div className="mbbs-scholar-accent"></div>

          <div className="mbbs-scholar-content">

            <h3 className="mbbs-scholar-title">
              <i className="bi bi-award-fill"></i> Scholarships To Study MBBS Abroad
            </h3>

            <p>
              Scholarships are a great way to give financial boosts to students. They help reduce financial burden and support studying abroad.
            </p>

            <p>
              Since MBBS is an expensive course, scholarships help students pursue it without financial stress.
            </p>

            <div className="mbbs-scholar-grid">
              {data.map((region, i) => (
                <div className="mbbs-scholar-box" key={i}>
                  <h5>{region.region}</h5>
                  <ul>
                    {region.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default MbbsScholarships;