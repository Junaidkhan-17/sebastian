import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import EngineeringHeroSection from "../components/EngineeringPage/EngineeringHeroSection";
import EnggFeatures from "../components/EngineeringPage/EnggFeatures";
import SignupSection from "../components/EngineeringPage/SignupSection";
import ProFeaturesRow from "../components/EngineeringPage/ProFeaturesRow";
import EngSupportFAQ from "../components/EngineeringPage/EngSupportFAQ";
import EngAppDownload from "../components/EngineeringPage/EngAppDownload";

function EngineeringPage() {
  return (
    <>
    <EngineeringHeroSection />
    <EnggFeatures />
    <SignupSection />
    <ProFeaturesRow />
    <EngSupportFAQ />
    <EngAppDownload />
    </>
  );
}

export default EngineeringPage;
