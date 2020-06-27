import React from "react";
import Hero from "../sections/Hero";
import Courseslideshow from "../sections/CoursesSlideShow";
import HowItWorks from "../sections/HowItWorks";
import StickyNotificationBanner from "../components/StickyNotificationBanner";

export default function Home() {
  return (
    <div>
      <StickyNotificationBanner
        text={`
				Congrats South Africans!, You get 95% off ALL courses thanks to the new
				EU initiative!
			`}
        notification
      />
      <Hero />
      <Courseslideshow />
      <HowItWorks />
    </div>
  );
}
