import { Routes, Route } from "react-router-dom";
import { routes } from "./routesConfigs";

const AppRoutes = () => {
	return (
		<Routes>
			{routes.map(
				(
					{
						path,
						component: Component,
						layout: Layout,
						children = [],
					},
					index
				) => (
					<Route
						key={index}
						path={path}
						element={
							<Layout>
								<Component />
							</Layout>
						}
						children={children.map(({ path, element }, indx) => {
							return { key: indx, path, element };
						})}
					/>
				)
			)}
		</Routes>
	);
};

export default AppRoutes;
