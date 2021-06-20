import React, { useState } from "react";
import { View, Image, ScrollView, Text, Pressable, Button } from "react-native";

import Modal from "react-native-modal";

import { Products as Style, ModalS } from "../Styles";

export default function Products() {
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<View style={Style.Container}>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				<Pressable
					style={Style.ViewImage}
					onPress={() => setModalVisible(!modalVisible)}
				>
					<Modal
						isVisible={modalVisible}
						onBackdropPress={() => setModalVisible(!modalVisible)}
					>
						<View style={ModalS.Container}>
							<View style={{ flex: 4 }}>
								<Image
									style={ModalS.Image}
									source={require("../images/placeholder.jpg")}
								/>
								<Text style={ModalS.TextTitle}>
									Titulo do Produto
								</Text>
								<Text style={ModalS.TextBody}>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Sed harum aut itaque quod
									inventore accusamus blanditiis consequuntur,
									ipsum cum magni ex vitae provident maiores
									pariatur porro placeat alias corrupti non!
								</Text>
                                <Text style={ModalS.TextTitle}>
									R$00,00
								</Text>
							</View>
                            <View style={{flex: 1, margin: 20}}>
                                <Button title={"Adicionar ao carrinho"} onPress={() => setModalVisible(!modalVisible)} />
                                <Text></Text>
                                <Button title={"Fechar"} color={"#fb001d"} onPress={() => setModalVisible(!modalVisible)} />
                            </View>
						</View>
					</Modal>
					<Image
						style={Style.Image}
						source={require("../images/placeholder.jpg")}
					/>
					<Text style={Style.ImageText}>Titulo 1</Text>
					<Text style={Style.ImageText}>R$00,00</Text>
				</Pressable>
                <Pressable
					style={Style.ViewImage}
					onPress={() => setModalVisible(!modalVisible)}
				>
					<Modal
						isVisible={modalVisible}
						onBackdropPress={() => setModalVisible(!modalVisible)}
					>
						<View style={ModalS.Container}>
							<View style={{ flex: 4 }}>
								<Image
									style={ModalS.Image}
									source={require("../images/placeholder.jpg")}
								/>
								<Text style={ModalS.TextTitle}>
									Titulo do Produto
								</Text>
								<Text style={ModalS.TextBody}>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Sed harum aut itaque quod
									inventore accusamus blanditiis consequuntur,
									ipsum cum magni ex vitae provident maiores
									pariatur porro placeat alias corrupti non!
								</Text>
                                <Text style={ModalS.TextTitle}>
									R$00,00
								</Text>
							</View>
                            <View style={{flex: 1, margin: 20}}>
                                <Button title={"Adicionar ao carrinho"} onPress={() => setModalVisible(!modalVisible)} />
                                <Text></Text>
                                <Button title={"Fechar"} color={"#fb001d"} onPress={() => setModalVisible(!modalVisible)} />
                            </View>
						</View>
					</Modal>
					<Image
						style={Style.Image}
						source={require("../images/placeholder.jpg")}
					/>
					<Text style={Style.ImageText}>Titulo 2</Text>
					<Text style={Style.ImageText}>R$00,00</Text>
				</Pressable>
                <Pressable
					style={Style.ViewImage}
					onPress={() => setModalVisible(!modalVisible)}
				>
					<Modal
						isVisible={modalVisible}
						onBackdropPress={() => setModalVisible(!modalVisible)}
					>
						<View style={ModalS.Container}>
							<View style={{ flex: 4 }}>
								<Image
									style={ModalS.Image}
									source={require("../images/placeholder.jpg")}
								/>
								<Text style={ModalS.TextTitle}>
									Titulo do Produto
								</Text>
								<Text style={ModalS.TextBody}>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Sed harum aut itaque quod
									inventore accusamus blanditiis consequuntur,
									ipsum cum magni ex vitae provident maiores
									pariatur porro placeat alias corrupti non!
								</Text>
                                <Text style={ModalS.TextTitle}>
									R$00,00
								</Text>
							</View>
                            <View style={{flex: 1, margin: 20}}>
                                <Button title={"Adicionar ao carrinho"} onPress={() => setModalVisible(!modalVisible)} />
                                <Text></Text>
                                <Button title={"Fechar"} color={"#fb001d"} onPress={() => setModalVisible(!modalVisible)} />
                            </View>
						</View>
					</Modal>
					<Image
						style={Style.Image}
						source={require("../images/placeholder.jpg")}
					/>
					<Text style={Style.ImageText}>Titulo 3</Text>
					<Text style={Style.ImageText}>R$00,00</Text>
				</Pressable>
                <Pressable
					style={Style.ViewImage}
					onPress={() => setModalVisible(!modalVisible)}
				>
					<Modal
						isVisible={modalVisible}
						onBackdropPress={() => setModalVisible(!modalVisible)}
					>
						<View style={ModalS.Container}>
							<View style={{ flex: 4 }}>
								<Image
									style={ModalS.Image}
									source={require("../images/placeholder.jpg")}
								/>
								<Text style={ModalS.TextTitle}>
									Titulo do Produto
								</Text>
								<Text style={ModalS.TextBody}>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Sed harum aut itaque quod
									inventore accusamus blanditiis consequuntur,
									ipsum cum magni ex vitae provident maiores
									pariatur porro placeat alias corrupti non!
								</Text>
                                <Text style={ModalS.TextTitle}>
									R$00,00
								</Text>
							</View>
                            <View style={{flex: 1, margin: 20}}>
                                <Button title={"Adicionar ao carrinho"} onPress={() => setModalVisible(!modalVisible)} />
                                <Text></Text>
                                <Button title={"Fechar"} color={"#fb001d"} onPress={() => setModalVisible(!modalVisible)} />
                            </View>
						</View>
					</Modal>
					<Image
						style={Style.Image}
						source={require("../images/placeholder.jpg")}
					/>
					<Text style={Style.ImageText}>Titulo 4</Text>
					<Text style={Style.ImageText}>R$00,00</Text>
				</Pressable>
                <Pressable
					style={Style.ViewImage}
					onPress={() => setModalVisible(!modalVisible)}
				>
					<Modal
						isVisible={modalVisible}
						onBackdropPress={() => setModalVisible(!modalVisible)}
					>
						<View style={ModalS.Container}>
							<View style={{ flex: 4 }}>
								<Image
									style={ModalS.Image}
									source={require("../images/placeholder.jpg")}
								/>
								<Text style={ModalS.TextTitle}>
									Titulo do Produto
								</Text>
								<Text style={ModalS.TextBody}>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Sed harum aut itaque quod
									inventore accusamus blanditiis consequuntur,
									ipsum cum magni ex vitae provident maiores
									pariatur porro placeat alias corrupti non!
								</Text>
                                <Text style={ModalS.TextTitle}>
									R$00,00
								</Text>
							</View>
                            <View style={{flex: 1, margin: 20}}>
                                <Button title={"Adicionar ao carrinho"} onPress={() => setModalVisible(!modalVisible)} />
                                <Text></Text>
                                <Button title={"Fechar"} color={"#fb001d"} onPress={() => setModalVisible(!modalVisible)} />
                            </View>
						</View>
					</Modal>
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
