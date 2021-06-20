import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

import { Carrosel, Header, Products as ProductsStyle } from "./src/Styles";
import Icon from "react-native-vector-icons/Feather";
import Products from "./src/components/Products";


export default function App() {
	return (
		<View style={{ flex: 1 }}>
			<View style={Header.View}>
				<View style={[Header.View, Header.Start]}>
					<Text style={Header.Icon}>
						<Icon name="menu" size={30} color="#FFFF" />
					</Text>
					<Text style={Header.Text}>BAZZAAR</Text>
				</View>
				<View style={[Header.View, Header.End]}>
					<Text style={Header.Icon}>
						<Icon name="search" size={25} color="#FFFF" />
					</Text>
					<Text style={Header.Icon}>
						<Icon name="shopping-cart" size={25} color="#FFFF" />
					</Text>
				</View>
			</View>
			<View style={{ flex: 14 }}>
				<ScrollView style={{ flex: 1 }}>
					<View style={{ flex: 1 }}>
						<ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
							<Image
								source={require("./src/images/placeholder.jpg")}
								style={Carrosel.Image}
							/>
							<Image
								source={require("./src/images/placeholder.jpg")}
								style={Carrosel.Image}
							/>
						</ScrollView>
					</View>
					<View style={{ flex: 10 }}>
						<View style={ProductsStyle.View}>
							<Text style={ProductsStyle.Header}>Moda Feminina</Text>
							<Products />
						</View>
						<View style={ProductsStyle.View}>
							<Text style={ProductsStyle.Header}>Moda Masculina</Text>
							<Products />
						</View>
					</View>
				</ScrollView>
			</View>
		</View>
	);
}
