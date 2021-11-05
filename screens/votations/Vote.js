import React from "react";
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    StatusBar,
    KeyboardAvoidingView
} from "react-native";
import { Block, Card, Checkbox, Text, theme } from "galio-framework";

import { Button, Icon, Input } from "../../components";
import { Images, argonTheme } from "../../constants";

const { width, height } = Dimensions.get("screen");

class Vote extends React.Component {
    render() {
        const { navigation } = this.props;
        const votation = this.props.route.params.votation
        const candidate = this.props.route.params.candidate
        return (
            <Block flex middle>
                <StatusBar hidden />
                <ImageBackground
                    source={Images.RegisterBackground}
                    style={{ width, height, zIndex: 1 }}
                >
                    <Block flex middle>
                        <Block style={styles.registerContainer}>
                            <Block flex>
                                <Block flex middle>
                                    <Text style={styles.headerText} h6>
                                        Confirmar voto em <Text bold>{candidate.name}</Text> para <Text bold>{votation.name}</Text>?
                                    </Text>
                                    <Card
                                        flex
                                        borderless
                                        style={styles.card}
                                        title={candidate.name}
                                        caption={candidate.group}
                                        imageStyle={styles.cardImage}
                                        imageBlockStyle={{ padding: theme.SIZES.BASE / 2 }}
                                        image={candidate.img}
                                    />
                                    <Block style={styles.buttons}>
                                        <Button color="success" style={styles.createButton} onPress={() => navigation.navigate("VotationDetail", {
                                            voted: {
                                                confirmed: true,
                                                candidate: candidate,
                                                votation: votation
                                            }
                                        })}>
                                            <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                                                CONFIRMAR
                                            </Text>
                                        </Button>
                                        <Button color="warning" style={styles.createButton} onPress={() => navigation.navigate("VotationDetail", {
                                            voted: {
                                                confirmed: false,
                                                candidate: candidate,
                                                votation: votation
                                            }
                                        })}>
                                            <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                                                CANCELAR
                                            </Text>
                                        </Button>
                                    </Block>
                                </Block>
                            </Block>
                        </Block>
                    </Block>
                </ImageBackground>
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    registerContainer: {
        width: width * 0.9,
        height: height * 0.875,
        backgroundColor: "#F4F5F7",
        borderRadius: 4,
        shadowColor: argonTheme.COLORS.BLACK,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 8,
        shadowOpacity: 0.1,
        elevation: 1,
        overflow: "hidden"
    },
    socialConnect: {
        backgroundColor: argonTheme.COLORS.WHITE,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: "#8898AA"
    },
    socialButtons: {
        width: 120,
        height: 40,
        backgroundColor: "#fff",
        shadowColor: argonTheme.COLORS.BLACK,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 8,
        shadowOpacity: 0.1,
        elevation: 1
    },
    socialTextButtons: {
        color: argonTheme.COLORS.PRIMARY,
        fontWeight: "800",
        fontSize: 14
    },
    inputIcons: {
        marginRight: 12
    },
    passwordCheck: {
        paddingLeft: 15,
        paddingTop: 13,
        paddingBottom: 30
    },
    createButton: {
        width: width * 0.3,
        marginTop: 25
    },
    card: {
        marginTop: 30,
        width: '100%',
        height: 'auto',
        minHeight: 220
    },
    cardImage: {
        borderRadius: 14,
        height: 350
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-evenly'
    },
    headerText: {
        color: "#8898AA",
        paddingTop: 20,
        textAlign: "center"
    }
});

export default Vote;
