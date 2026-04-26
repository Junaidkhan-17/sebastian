import PgdmHero from "../components/PgdmPage/PgdmHero";
import AdmissionDetail from "../components/PgdmPage/AdmissionDetail";
import FeaturesSection from "../components/PgdmPage/FeaturesSection";
import FaqSupport from "../components/PgdmPage/FaqSupport";
import AppDownloadSection from "../components/PgdmPage/AppDownloadSection";

function PgdmPage() {
  return (
    <>
    <PgdmHero />
    <AdmissionDetail />
    <FeaturesSection />
    <FaqSupport />
    <AppDownloadSection />
    </>
  );
}

export default PgdmPage;
