import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Cards() {
	return (
		<View style={{ flex: 1 }}>
			<Text style={Styles.Header}>Cartões Aceitos</Text>
			<View style={Styles.Container}>
				<Image
					style={Styles.Image}
					source={{
						uri: "https://logosmarcas.net/wp-content/uploads/2020/04/Visa-Logo.png",
					}}
				/>
				<Image
					style={Styles.Image}
					source={{
						uri: "https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mastercard_vrt_pos_92px_2x.png",
					}}
				/>
				<Image
					style={Styles.Image}
					source={{
						uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Hipercard_logo.svg/1200px-Hipercard_logo.svg.png",
					}}
				/>
				<Image
					style={Styles.Image}
					source={{
						uri: "https://www.abcdacomunicacao.com.br/wp-content/uploads/elo_logo-baixa.png",
					}}
				/>
			</View>
		</View>
	);
}

const Styles = StyleSheet.create({
	Header: {
		textAlign: "center",
		fontSize: 40,
		paddingTop: 10,
		paddingBottom: 40,
	},
	Container: {
		flex: 1,
		alignItems: "center",
	},
	Image: {
		width: 150,
		height: 100,
		resizeMode: "stretch",
        marginBottom: 40,
	},
});
