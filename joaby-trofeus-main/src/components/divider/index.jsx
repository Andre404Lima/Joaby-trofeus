function Divider({ distance = 20, direction = "horizontal" }) {
	return (
		<div
			style={{
				position: "",
				margin: `${distance}px 0px ${distance}px 0px`,
				width: "100%",
				border: "1px solid var(--colorPrimary-hover)",
			}}
		/>
	);
}

export default Divider;
