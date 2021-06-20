import React from "react";
import { Image, StyleSheet, Text, View, Dimensions } from "react-native";

export default function About() {
	return (
		<View style={{ flex: 1 }}>
			<Text style={Styles.HeaderText}>Sobre a loja</Text>
			<Image
				style={Styles.Image}
				source={require("../images/placeholder.jpg")}
			/>
			<Text style={Styles.Text}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
				harum aut itaque quod inventore accusamus blanditiis
				consequuntur, ipsum cum magni ex vitae provident maiores
				pariatur porro placeat alias corrupti non!
			</Text>
			<Text style={Styles.Text}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
				harum aut itaque quod inventore accusamus blanditiis
				consequuntur, ipsum cum magni ex vitae provident maiores
				pariatur porro placeat alias corrupti non!
			</Text>
			<Text style={Styles.Text}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
				harum aut itaque quod inventore accusamus blanditiis
				consequuntur, ipsum cum magni ex vitae provident maiores
				pariatur porro placeat alias corrupti non!
			</Text>
		</View>
	);
}

const Styles = StyleSheet.create({
	HeaderText: {
		textAlign: "center",
		fontSize: 40,
		paddingTop: 10,
		paddingBottom: 20,
	},
	Image: {
		width: Dimensions.get("window").width,
		height: 250,
	},
	Text: {
		paddingTop: 15,
		paddingHorizontal: 15,
		fontSize: 15,
	},
});
