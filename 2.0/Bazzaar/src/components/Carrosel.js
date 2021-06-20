import React from "react";
import { Image, ScrollView } from "react-native";

import { Carrosel as Style } from "../Styles";

export default function Carrosel() {
	return (
		<ScrollView
			horizontal
			pagingEnabled
			showsHorizontalScrollIndicator={false}
		>
			<Image
				source={require("../images/placeholder.jpg")}
				style={Style.Image}
			/>
			<Image
				source={require("../images/placeholder.jpg")}
				style={Style.Image}
			/>
			<Image
				source={require("../images/placeholder.jpg")}
				style={Style.Image}
			/>
		</ScrollView>
	);
}
