import { useState } from "react";

const defaultImgUrl = `https://www.pontotel.com.br/local/wp-content/uploads/2022/05/imagem-corporativa.webp`;
const defaultDescription =
	"Lorem ipsum dolor sit amet. Id enim quisquam ut tempora asperiores et quia consequuntur et molestias velit sit ipsa suscipit et voluptates nemo in iure excepturi. Qui incidunt magni At quasi provident aut soluta voluptas.";

function ImgCardItem({ imgUrl }) {
	return (
		<div className="image-card">
			<img src={imgUrl} alt="item-image" />
		</div>
	);
}

function TextCardItem({ name = "testes", description = defaultDescription }) {
	return (
		<div
			className="text-card"
			style={{ width: `400px`, flex: 1, textAlign: "left" }}
		>
			<h1>{name}</h1>
			<p>{description}</p>
		</div>
	);
}

function MainPageCard({
	imgUrlProp = defaultImgUrl,
	imgDirection = "right",
	...textProps
}) {
	const [imgUrl] = useState(imgUrlProp);
	return (
		<div className="main-page-card">
			{imgDirection === "right" ? (
				<>
					<ImgCardItem imgUrl={imgUrl} />
					<TextCardItem {...textProps} />
				</>
			) : (
				<>
					<TextCardItem />
					<ImgCardItem imgUrl={imgUrl} />
				</>
			)}
		</div>
	);
}

export default MainPageCard;
