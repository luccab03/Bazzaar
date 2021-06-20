import React from "react";
import { ScrollView, Text, View } from "react-native";

import Carrosel from "../components/Carrosel";
import Header from "../components/Header";
import Products from "../components/Products";

import { Products as ProductsStyle } from "../Styles";

export default function Home( {navigation} ) {
	return (
		<View style={{ flex: 1 }}>
			<Header />
			<View style={{ flex: 14 }}>
				<ScrollView style={{ flex: 1 }}>
					<View style={{ flex: 1 }}>
						<Carrosel />
					</View>
					<View style={{ flex: 10 }}>
						<View style={ProductsStyle.View}>
							<Text style={ProductsStyle.Header}>
								Moda Feminina
							</Text>
							<Products navigation={navigation}/>
						</View>
						<View style={ProductsStyle.View}>
							<Text style={ProductsStyle.Header}>
								Moda Masculina
							</Text>
							<Products navigation={navigation}/>
						</View>
					</View>
				</ScrollView>
			</View>
		</View>
	);
}
