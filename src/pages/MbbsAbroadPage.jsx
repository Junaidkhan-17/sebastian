import MbbsDestination from "../components/MbbsInAbroadPage/MbbsDestination";
import MbbsAbroadSection from "../components/MbbsInAbroadPage/MbbsAbroadSection";
import CareerCounselling from "../components/MbbsInAbroadPage/CareerCounselling";
import UniversitySelection from "../components/MbbsInAbroadPage/UniversitySelection";
import MbbsProcedure from "../components/MbbsInAbroadPage/MbbsProcedure";
import MbbsScholarships from "../components/MbbsInAbroadPage/MbbsScholarships";
import MbbsFactors from "../components/MbbsInAbroadPage/MbbsFactors";
import MbbsAdvantages from "../components/MbbsInAbroadPage/MbbsAdvantages";
import MbbsConclusion from "../components/MbbsInAbroadPage/MbbsConclusion";



function MbbsAbroadPage() {
  return (
    <>
    <MbbsDestination />
    <MbbsAbroadSection />
    <CareerCounselling />
    <UniversitySelection />
    <MbbsProcedure />
    <MbbsScholarships />
    <MbbsFactors />
    <MbbsAdvantages />
    <MbbsConclusion />
    <MbbsDestination />
    </>
  );
}

export default MbbsAbroadPage;
