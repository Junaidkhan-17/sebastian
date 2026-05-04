import PgdmHero from "../components/PgdmPage/PgdmHero";
import AdmissionDetail from "../components/PgdmPage/AdmissionDetail";
import FeaturesSection from "../components/PgdmPage/FeaturesSection";
import FaqSupport from "../components/PgdmPage/FaqSupport";
import AppDownloadSection from "../components/PgdmPage/AppDownloadSection";
import MCASyllabus from "../components/PgdmPage/McaSyllabus";

function PgdmPage() {
  return (
    <>
    <PgdmHero />
    <AdmissionDetail />
    <FeaturesSection />
    <MCASyllabus />
    <FaqSupport />
    <AppDownloadSection />
    </>
  );
}

export default PgdmPage;
