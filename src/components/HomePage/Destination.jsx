import React from "react";
import "./Destination.css";
import russiaflag from "../../assets/russiaflag.png";
import Kazakhstanflag from "../../assets/Kazakhstanflag.png";
import philippineflag from "../../assets/philippineflag.png";
import germanyflag from "../../assets/germanyflag.png";
import nepalflag from "../../assets/nepalflag.png";
import kyrgyzstanflag from "../../assets/kyrgyzstanflag.png";
import belarusflag from "../../assets/belarusflag.png";
import armeniaflag from "../../assets/armeniaflag.png";
import uzbekistanflag from "../../assets/uzbekistanflag.png";
import georgiaflag from "../../assets/georgiaflag.png";
import ukflag from "../../assets/ukflag.png";
import bangladeshflag from "../../assets/bangladeshflag.png";
import southamericaflag from "../../assets/southamericaflag.png";
import australiaflag from "../../assets/australiaflag.png";

const countries = [
  { name: "Russia", img: russiaflag }, // now normal
  { name: "Kazakhstan", img: Kazakhstanflag },
  { name: "Philippines", img: philippineflag},
  { name: "Germany", img: germanyflag },
  { name: "Nepal", img: nepalflag },
  { name: "Kyrgyzstan", img: kyrgyzstanflag },
  { name: "Belarus", img: belarusflag },
  { name: "Armenia", img: armeniaflag },
  { name: "Uzbekistan", img: uzbekistanflag },
  { name: "Georgia", img: georgiaflag }, // now normal
  { name: "UK", img: ukflag },
  { name: "Bangladesh", img: bangladeshflag },
  { name: "South America", img: southamericaflag },
  { name: "Australia", img: australiaflag }
];

function Destination() {
  const marqueeCountries = [...countries, ...countries];

  return (
    <section className="dest-section">
      <div className="container text-center">
        <h2 className="dest-title">Top Study Destinations</h2>
        <p className="dest-sub">Trusted guidance for students and parents</p>

        <div className="divider"></div>
          <div className="flag-track">
            {marqueeCountries.map((item, i) => (
              <div className="flag-item" key={`${item.name}-${i}`}>
                <div className="circle-img">
                  <img src={item.img} alt={item.name} loading="lazy" />
                </div>
                <h6 className="flag-name">{item.name}</h6>
              </div>
            ))}
          </div>
        
      </div>
    </section>
  );
}

export default Destination;
