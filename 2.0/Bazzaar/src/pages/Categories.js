import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Categories() {
	return (
		<View style={{ flex: 1 }}>
			<View style={Styles.Header}>
				<Text style={Styles.HeaderText}>Categorias</Text>
				<Text style={Styles.Subscript}>
					Selecione uma categoria para ver os produtos
				</Text>
			</View>
			<ScrollView style={{ flex: 1 }}>
				<View style={Styles.Container}>
					<Text style={Styles.Categories}>Masculino</Text>
				</View>
				<View style={Styles.Container}>
					<Text style={Styles.Categories}>Feminino</Text>
				</View>
				<View style={Styles.Container}>
					<Text style={Styles.Categories}>Acessórios</Text>
				</View>
				<View style={Styles.Container}>
					<Text style={Styles.Categories}>Promoções</Text>
				</View>
				<View style={Styles.Container}>
					<Text style={Styles.Categories}>Infantil</Text>
				</View>
				<View style={Styles.Container}>
					<Text style={Styles.Categories}>Unissex</Text>
				</View>
				<View style={Styles.Container}>
					<Text style={Styles.Categories}>Eletronicos</Text>
				</View>
				<View style={Styles.Container}>
					<Text style={Styles.Categories}>Relógios</Text>
				</View>
				<View style={Styles.Container}>
					<Text style={Styles.Categories}>Celulares</Text>
				</View>
				<View style={Styles.Container}>
					<Text style={Styles.Categories}>Instrumentos Musicais</Text>
				</View>
				<View style={Styles.Container}>
					<Text style={Styles.Categories}>Perfumes</Text>
				</View>
			</ScrollView>
		</View>
	);
}

const Styles = StyleSheet.create({
	Header: {
		paddingTop: 10,
		paddingBottom: 20,
	},
	HeaderText: {
		textAlign: "center",
		fontSize: 40,
	},
	Subscript: {
		textAlign: "center",
		color: "#8c8b88",
	},
	Categories: {
		textAlign: "center",
		fontSize: 30,
	},
	Container: {
		flex: 1,
		paddingTop: 15,
		paddingBottom: 15,
		borderColor: "#d0d0d0",
		borderTopWidth: 1,
	},
});
