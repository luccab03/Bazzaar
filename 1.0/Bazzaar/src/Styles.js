import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;

const Header = StyleSheet.create({
	View: {
		flex: 1,
		flexDirection: "row",
		backgroundColor: "#64686a",
		alignItems: "center",
	},
	Icon: {
		padding: 10,
	},
	Text: {
		padding: 5,
		color: "white",
		fontSize: 25,
	},
	End: {
		justifyContent: "flex-end",
	},
	Start: {
		justifyContent: "flex-start",
	},
});

const Carrosel = StyleSheet.create({
	Image: {
		width: width,
		height: 230,
		resizeMode: "stretch",
	},
});

const Products = StyleSheet.create({
	Header: {
		textAlign: "center",
		fontSize: 25,
		paddingBottom: 15,
	},
	View: {
		flex: 1,
		padding: 15,
	},
	Image: {
		height: 150,
		width: 90,
		resizeMode: "stretch",
	},
	ViewImage: {
		marginHorizontal: 18,
	},
	ImageText: {
		textAlign: "center",
		color: "#93a2a6",
	},
});

const ModalS = StyleSheet.create({
	Container: {
		flex: 1,
		marginHorizontal: 30,
		marginVertical: 120,
		backgroundColor: "white",
	},
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
		textAlign: "center",
		color: "#93a2a6",
	}
});

export { Header, Carrosel, Products, ModalS };
