import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Product() {
	return (
		<View style={{ flex: 1 }}>
			<View style={{ flex: 3, alignItems: "center" }}>
				<Image
					style={Styles.Image}
					source={require("../images/placeholder.jpg")}
				/>
				<Text style={Styles.TextTitle}>Titulo do Produto</Text>
				<Text style={Styles.TextBody}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
					harum aut itaque quod inventore accusamus blanditiis
					consequuntur, ipsum cum magni ex vitae provident maiores
					pariatur porro placeat alias corrupti non!
				</Text>
			</View>
			<View style={{ flex: 1, alignItems: "center" }}>
				<Text style={Styles.TextTitle}>R$00,00</Text>
				<TouchableOpacity style={Styles.Button}>
					<Text style={Styles.ButtonText}>Adicionar ao carrinho</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const Styles = StyleSheet.create({
	Image: {
		margin: 30,
		width: 250,
		height: 150,
		resizeMode: "stretch",
	},
	TextTitle: {
		textAlign: "center",
		fontSize: 20,
		padding: 5,
	},
	TextBody: {
		textAlign: "left",
		color: "#93a2a6",
	},
	Button: {
		width: 200,
		paddingHorizontal: 15,
		paddingVertical: 12,
		borderRadius: 5,
		backgroundColor: "#0957ff",
	},
	ButtonText: {
		textAlign: "center",
		fontSize: 15,
		color: "white"
	}
});
