import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";
import axios from 'axios'
import { Button, Icon, Input } from "../../components";
import { Images, argonTheme } from "../../constants";
import ValidationComponent from "react-native-form-validator";
import { backendServer } from "../../constants/server";
import * as SecureStore from 'expo-secure-store';

const { width, height } = Dimensions.get("screen");

class Login extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: null
    };
  }
  _onSubmit() {
    const { navigation } = this.props
    this.validate({
      email: { email: true, required: true },
      password: { required: true }
    });
    if (this.isFormValid()) {
      axios.post(backendServer.url + '/auth', this.state)
        .then(response => {
          SecureStore.setItemAsync('token', response.data.token).then(data => {
            SecureStore.setItemAsync('email', this.state.email).then(data => {
              navigation.navigate("App")
            })
          })
        })
        .catch(error => {
          if (error.response) {
            console.log('Erro 1 aqui ', error.response);
            if (error.response.data.error) {
              this.setState({ error: error.response.data.error })
            }
          } else if (error.request) {
            console.log('Erro 2 ', error.request);
          } else {
            console.log('Erro 3', error)
          }
        });
    }
  }
  render() {
    const { navigation } = this.props;
    return (
      <Block flex middle>
        <StatusBar hidden />
        <ImageBackground
          source={Images.RegisterBackground}
          style={{ width, height, zIndex: 1 }}
        >
          <Block safe flex middle>
            <Block style={styles.registerContainer}>
              <Block flex>
                <Block flex={0.17} middle>
                  <Text color="#8898AA" size={12}>
                    Preencha as informações para entrar
                  </Text>
                </Block>
                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        placeholder="Email"
                        onChangeText={(text) => this.setState({
                          email: text
                        })}
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="hat-3"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                    <Block key='email'>{this.isFieldInError('email') && this.getErrorsInField('email').map((errorMessage, index) => <Text key={index} color={argonTheme.COLORS.WARNING}>{errorMessage}</Text>)}</Block>
                    <Block width={width * 0.8}>
                      <Input
                        password
                        borderless
                        placeholder="Senha"
                        onChangeText={(text) => this.setState({
                          password: text
                        })}
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="padlock-unlocked"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                    <Block key='password'>{this.isFieldInError('password') && this.getErrorsInField('password').map((errorMessage, index) => <Text key={index} color={argonTheme.COLORS.WARNING}>{errorMessage}</Text>)}</Block>
                    <Block key='error'>{this.state.error && (<Text key={this.state.error} color={argonTheme.COLORS.WARNING}>{this.state.error}</Text>)}</Block>
                    <Block middle>
                      <Button color="primary" style={styles.createButton} onPress={() => this._onSubmit()}>
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                          ENTRAR
                        </Text>
                      </Button>
                    </Block>
                  </KeyboardAvoidingView>
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
    width: width * 0.5,
    marginTop: 25
  }
});

export default Login;
