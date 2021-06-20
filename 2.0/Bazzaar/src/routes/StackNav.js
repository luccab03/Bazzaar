import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../pages/Home";
import Product from "../pages/Product";
import Header from "../components/Header";

const { Navigator, Screen } = createStackNavigator();

export default function StackNav() {
	return (
		<Navigator>
			<Screen
				name="Home"
				component={Home}
				options={{
					headerShown: false,
				}}
			/>
			<Screen name="Product" component={Product} options={{
				title: "Detalhes do produto"
			}}/>
		</Navigator>
	);
}
