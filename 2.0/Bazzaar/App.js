import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Feather";

import StackNav from "./src/routes/StackNav";
import Categories from "./src/pages/Categories";
import About from "./src/pages/About";
import Cards from "./src/pages/Cards";

const { Navigator, Screen } = createBottomTabNavigator();

const icons = {
	Home: {
		name: "home",
	},
	Categorias: {
		name: "menu",
	},
	"Sobre a loja": {
		name: "info",
	},
	Cartões: {
		name: "credit-card",
	},
};

export default function App() {
	return (
		<NavigationContainer>
			<Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ color, size }) => {
						const { name } = icons[route.name];
						return <Icon name={name} color={color} size={size} />;
					},
				})}
			>
				<Screen name={"Home"} component={StackNav} />
				<Screen name={"Categorias"} component={Categories} />
				<Screen name={"Sobre a loja"} component={About} />
				<Screen name={"Cartões"} component={Cards} />
			</Navigator>
		</NavigationContainer>
	);
}
