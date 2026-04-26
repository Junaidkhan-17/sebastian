import React from "react";
import "./MbbsDestination.css";

import russiaflag from "../../assets/russiaflag.png";
import kazakhstanflag from "../../assets/kazakhstanflag.png";
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
  { name: "Russia", img: russiaflag },
  { name: "Kazakhstan", img: kazakhstanflag },
  { name: "Philippines", img: philippineflag },
  { name: "Germany", img: germanyflag },
  { name: "Nepal", img: nepalflag },
  { name: "Kyrgyzstan", img: kyrgyzstanflag },
  { name: "Belarus", img: belarusflag },
  { name: "Armenia", img: armeniaflag },
  { name: "Uzbekistan", img: uzbekistanflag },
  { name: "Georgia", img: georgiaflag },
  { name: "UK", img: ukflag },
  { name: "Bangladesh", img: bangladeshflag },
  { name: "South America", img: southamericaflag },
  { name: "Australia", img: australiaflag }
];

function MbbsDestination() {
  const marqueeCountries = [...countries, ...countries];

  return (
    <section className="dest2-section">
      <div className="container text-center">
        <h2 className="dest2-title">Top Study Destinations</h2>
        <p className="dest2-sub">Trusted guidance for students and parents</p>

        <div className="dest2-divider"></div>

        <div className="dest2-flag-track">
          {marqueeCountries.map((item, i) => (
            <div className="dest2-flag-item" key={`${item.name}-${i}`}>
              <div className="dest2-circle-img">
                <img src={item.img} alt={item.name} loading="lazy" />
              </div>
              <h6 className="dest2-flag-name">{item.name}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MbbsDestination;