import React from "react";
import { View, Image, ScrollView, Text, Pressable } from "react-native";

import { Products as Style } from "../Styles";

export default function Products({ navigation }) {
	return (
		<View style={Style.Container}>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				<Pressable
					style={Style.ViewImage}
					onPress={() => {
						navigation.navigate("Product");
					}}
				>
					<Image
						style={Style.Image}
						source={require("../images/placeholder.jpg")}
					/>
					<Text style={Style.ImageText}>Titulo 1</Text>
					<Text style={Style.ImageText}>R$00,00</Text>
				</Pressable>
				<Pressable
					style={Style.ViewImage}
					onPress={() => {
						navigation.navigate("Product");
					}}
				>
					<Image
						style={Style.Image}
						source={require("../images/placeholder.jpg")}
					/>
					<Text style={Style.ImageText}>Titulo 2</Text>
					<Text style={Style.ImageText}>R$00,00</Text>
				</Pressable>
				<Pressable
					style={Style.ViewImage}
					onPress={() => {
						navigation.navigate("Product");
					}}
				>
					<Image
						style={Style.Image}
						source={require("../images/placeholder.jpg")}
					/>
					<Text style={Style.ImageText}>Titulo 3</Text>
					<Text style={Style.ImageText}>R$00,00</Text>
				</Pressable>
				<Pressable
					style={Style.ViewImage}
					onPress={() => {
						navigation.navigate("Product");
					}}
				>
					<Image
						style={Style.Image}
						source={require("../images/placeholder.jpg")}
					/>
					<Text style={Style.ImageText}>Titulo 4</Text>
					<Text style={Style.ImageText}>R$00,00</Text>
				</Pressable>
				<Pressable
					style={Style.ViewImage}
					onPress={() => {
						navigation.navigate("Product");
					}}
				>
					<Image
						style={Style.Image}
						source={require("../images/placeholder.jpg")}
					/>
					<Text style={Style.ImageText}>Titulo 5</Text>
					<Text style={Style.ImageText}>R$00,00</Text>
				</Pressable>
			</ScrollView>
		</View>
	);
}
