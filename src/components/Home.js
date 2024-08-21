import React from "react";
import HomeTop from "./Home/HomeTop";
import HomeSecondTop from "./Home/HomeSecondTop";
import HomeMiddleSection from "./Home/HomeMiddleSection";
import HomeMiddleSectionData from "./Home/HomeMiddleSectionData";
import HomeBottom from "./Home/HomeBottom";
import HomeBottomSlider from "./Home/HomeBottomSlider";

const Home = () => {
	return (
		<div>
			<HomeTop />
			<HomeSecondTop />
			<HomeMiddleSection />
			<HomeMiddleSectionData />
			<HomeBottom />
			<HomeBottomSlider />
		</div>
	);
};

export default Home;
