import MainPageCard from "@/components/cards/MainPageCard";
import Divider from "@/components/divider";
import Slider from "@/components/slider";
import AntSlider from "@/components/slider/AntSlider";

function HomePage() {
	return (
		<div>
			<h1>Bem vindo, a Joaby Troféus.</h1>
			<AntSlider autoplay />
			<Divider />
			<h1>Modelos em Alta</h1>
			{Array.from({ length: 2 }, (_, index) => index + 1).map(
				(nextNumber) => {
					let direction = nextNumber % 2 === 0 ? "right" : "left";
					return (
						<MainPageCard
							key={nextNumber}
							imgDirection={direction}
						/>
					);
				}
			)}
		</div>
	);
}

export default HomePage;
