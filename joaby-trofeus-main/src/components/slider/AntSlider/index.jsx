import { useState } from "react";
import { Carousel, Radio } from "antd";
import { sliderImages } from "@/constants/placeholders";

const contentStyle = {
	color: "#fff",
	lineHeight: "160px",
	textAlign: "center",
	background: "#364d79",
};

function AntSlider({ images = sliderImages, autoplay, ...sliderProps }) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [loadingImage, setLoadingImage] = useState(true);
	const [dotPosition, setDotPosition] = useState("top");

	const handlePositionChange = ({ target: { value } }) => {
		setDotPosition(value);
	};

	return (
		<div className="slider-container">
			<Carousel
				style={{ width: "100%" }}
				dotPosition={"top"}
				autoplay={autoplay}
				{...sliderProps}
			>
				{images.map((image, index) => (
					<div key={index} style={contentStyle}>
						<img src={image.url} alt={`Imagem ${index + 1}`} />
					</div>
				))}
			</Carousel>
		</div>
	);
}

export default AntSlider;
