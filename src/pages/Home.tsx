import React from "react";
import Hero from "../sections/Hero";
import Courseslideshow from "../sections/CoursesSlideShow";
import HowItWorks from "../sections/HowItWorks";
import StickyNotificationBanner from "../components/StickyNotificationBanner";
import Footer from "../sections/Footer";

export default function Home() {
  return (
    <div>
      <StickyNotificationBanner
        text={`
				Congrats South Africans! Get 95% off ALL courses thanks to the new
			Commonwealth initative!
			`}
        notification
      />
      <Hero />
      <Courseslideshow />
      <HowItWorks />
      <Footer />
    </div>
  );
}
