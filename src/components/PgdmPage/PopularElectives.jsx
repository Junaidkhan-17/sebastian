import "./PopularElectives.css";

const electives = [
  "Data Mining",
  "Machine Learning",
  "Cyber Security",
  "IoT",
  "Mobile App Dev",
  "Cloud & DevOps",
];

export default function PopularElectives() {
  return (
    <div className="electives-wrapper">
      <h5 className="electives-title">Popular Electives:</h5>

      <div className="electives-list">
        {electives.map((item, index) => (
          <span key={index} className="elective-pill">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}