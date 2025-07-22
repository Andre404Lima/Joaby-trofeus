import { useState } from "react";

import { sliderImages } from "../../constants/placeholders";
import { GrNext, GrPrevious } from "react-icons/gr";

import Spinner from "../spinner";

function Slider({ images = sliderImages }) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [loadingImage, setLoadingImage] = useState(true);
	const [direction, setDirection] = useState(null);
	console.log({ direction });
	const jumpImage = (direction) => {
		let nextIndex = currentIndex;
		if (direction === "next") {
			setDirection("next");
			nextIndex = (currentIndex + 1) % images.length;
		} else if (direction === "previous") {
			setDirection("prev");
			nextIndex =
				currentIndex === 0 ? images.length - 1 : currentIndex - 1;
		}
		setCurrentIndex(nextIndex);
	};

	const handleOnLoadImage = () => {
		setLoadingImage(false);
	};

	return (
		<div className="slider-container">
			<div className={`slider ${direction}`}>
				{loadingImage && <Spinner />}
				<div
					className="slider-images"
					style={{ transform: `translateX(-${currentIndex * 100}%)` }}
				>
					{images.map((image, index) => (
						<img
							key={index}
							src={image.url}
							alt={`Imagem ${index + 1}`}
							onLoad={handleOnLoadImage}
						/>
					))}
				</div>
			</div>
			<div className="slider-controls">
				<button
					onClick={() => jumpImage("previous")}
					className="slider-button"
					disabled={loadingImage}
				>
					<GrPrevious />
				</button>
				<button
					onClick={() => jumpImage("next")}
					className="slider-button"
					disabled={loadingImage}
				>
					<GrNext />
				</button>
			</div>
		</div>
	);
}

export default Slider;
