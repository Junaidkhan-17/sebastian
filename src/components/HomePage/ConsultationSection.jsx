import "./ConsultationSection.css";
import { FaPhoneAlt, FaVideo, FaMapMarkerAlt } from "react-icons/fa";
import { PhoneForwardedIcon } from "@animateicons/react/lucide";
import { MapPinCheckIcon } from "@animateicons/react/lucide";

const ConsultationSection = () => {
  return (
    <section className="consultation-section">
      <div className="container text-center">
        <h2 className="section-title">
          Consultation <span>Options</span>
        </h2>

        <div className="row mt-5">
          {/* CARD 1 */}
          <div className="col-md-4">
            <div className="consult-card">
              <PhoneForwardedIcon size={34} color="#f45b48" />
              <h5>Call with MBBS Expert</h5>
              <p>
                Short consultation via phone for quick answers on eligibility,
                fees & admission.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="col-md-4">
            <div className="consult-card">
              <FaVideo className="icon" />
              <h5>Video Consultation</h5>
              <p>
                One-to-one detailed guidance session covering universities,
                countries & career path.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="col-md-4">
            <div className="consult-card">
              <MapPinCheckIcon size={34} duration={0.5} color="#f45b48" />
              <h5>Personal Meeting (Nagpur Office)</h5>
              <p>
                Face-to-face counselling at our Nagpur office. Parents are
                welcome to join.
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="package-box mt-5">
          <h3 className="package-head">
            MBBS + PG (MD) <span>Packages</span>
          </h3>

          <p>
            Plan your long-term career pathway — complete your MBBS and
            specialise with an MD/PG degree from top European universities. We
            help you plan from day one.
          </p>

          <button className="cta-btn">Explore Programs →</button>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
