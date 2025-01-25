import "./Home.css";
import Hero from "../../components/hero/Hero";
import Statistics from "../../components/stats/Statistics";

import ServingYou from "../../components/servingyou/ServingYou";
import Testimonials from "../../components/testimonials/Testimonials";

import DistinguishedAttorney from "../../components/distinguishedattorney/DistinguishedAttorney";
import WhyKaruiru from "../../components/whykaruiru/WhyKaruiru";
import ServicesSummary from "../../components/servicessummary/ServicesSummary";


import ForJustice from "../../components/forjustice/ForJustice";
import SeekJustice from "../../components/seekjustice/SeekJustice";
const Home = () => {
  return (
    <div>
      <Hero /> 
      <Statistics />
      
      <ServingYou />

      <Testimonials />

      <ForJustice />

      <DistinguishedAttorney />

      <WhyKaruiru />

      <ServicesSummary />

      <SeekJustice />      
       
    </div>
  );
};

export default Home;
