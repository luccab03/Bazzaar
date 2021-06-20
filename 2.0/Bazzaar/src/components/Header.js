import React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import { Header as Style } from "../Styles"

export default function Header() {
	return (
		<View style={Style.View}>
			<View style={[Style.View, Style.Start]}>
				<Text style={Style.Text}>BAZZAAR</Text>
			</View>
			<View style={[Style.View, Style.End]}>
				<Text style={Style.Icon}>
					<Icon name="search" size={25} color="#FFFF" />
				</Text>
				<Text style={Style.Icon}>
					<Icon name="shopping-cart" size={25} color="#FFFF" />
				</Text>
			</View>
		</View>
	);
}
