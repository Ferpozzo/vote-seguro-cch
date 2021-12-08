import React, { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";
import ValidationComponent from 'react-native-form-validator';
import axios from 'axios'
import { backendServer } from '../../constants/server'
import { Button, Icon, Input } from "../../components";
import { Images, argonTheme } from "../../constants";
import * as SecureStore from 'expo-secure-store';
const { width, height } = Dimensions.get("screen");
const messages = {
  pt: {
    numbers: "Erro nos números",
    required: "Este campo é obrigatório",
    minlength: "Tamanho mínimo é",
    maxLength: "Tamanho máximo é"
  }
};
class Register extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }
  _onSubmit() {
    const { navigation } = this.props
    this.validate({
      name: { minlength: 3, maxlength: 100, required: true },
      email: { email: true, required: true },
      password: { minlength: 8, required: true },
      confirmPassword: { required: true, equalPassword: this.state.password }
    });
    if (this.isFormValid()) {
      axios.post(backendServer.url + '/users', this.state)
        .then(response => {
          SecureStore.setItemAsync('token', response.data.token).then(data => {
            SecureStore.setItemAsync('email', this.state.email).then(data => {
              navigation.navigate("App")
            })
          })
        })
        .catch(error => {
          if (error.response) {
            console.log('Erro 1 ', error.response);
          } else if (error.request) {
            console.log('Erro 2 ', error.request);
          } else {
            console.log('Erro 3', error)
          }
        });
    }
  }
  render() {
    const { navigation } = this.props
    return (
      <Block flex middle>
        <StatusBar hidden />
        <ImageBackground
          source={Images.RegisterBackground}
          style={{ width, height, zIndex: 1 }}
        >
          <Block safe flex middle>
            <Block style={styles.registerContainer}>
              <Block flex={0.25} middle style={styles.socialConnect}>
                <Text color="#8898AA" size={12}>
                  Sign up with
                </Text>
                <Block row style={{ marginTop: theme.SIZES.BASE }}>
                  <Button style={{ ...styles.socialButtons, marginRight: 30 }}>
                    <Block row>
                      <Icon
                        name="logo-github"
                        family="Ionicon"
                        size={14}
                        color={"black"}
                        style={{ marginTop: 2, marginRight: 5 }}
                      />
                      <Text style={styles.socialTextButtons}>GITHUB</Text>
                    </Block>
                  </Button>
                  <Button style={styles.socialButtons}>
                    <Block row>
                      <Icon
                        name="logo-google"
                        family="Ionicon"
                        size={14}
                        color={"black"}
                        style={{ marginTop: 2, marginRight: 5 }}
                      />
                      <Text style={styles.socialTextButtons}>GOOGLE</Text>
                    </Block>
                  </Button>
                </Block>
              </Block>
              <Block flex><ScrollView
                showsVerticalScrollIndicator={false}>
                <Block flex={0.17} middle>
                  <Text color="#8898AA" size={12}>
                    Or sign up the classic way
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
                        placeholder="Nome"
                        onChangeText={(text) => this.setState({
                          name: text
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
                    <Block key='name'>{this.isFieldInError('name') && this.getErrorsInField('name').map((errorMessage, index) => <Text key={index} color={argonTheme.COLORS.WARNING}>{errorMessage}</Text>)}</Block>
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
                            name="ic_mail_24px"
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
                      <Block key='password'>{this.isFieldInError('password') && this.getErrorsInField('password').map((errorMessage, index) => <Text key={index} color={argonTheme.COLORS.WARNING}>{errorMessage}</Text>)}</Block>
                      <Block width={width * 0.8}>
                        <Input
                          password
                          borderless
                          placeholder="Confirme a senha"
                          onChangeText={(text) => this.setState({
                            confirmPassword: text
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
                      <Block key='confirmPassword'>{this.isFieldInError('confirmPassword') && this.getErrorsInField('confirmPassword').map((errorMessage, index) => <Text key={index} color={argonTheme.COLORS.WARNING}>{errorMessage}</Text>)}</Block>
                      <Block row style={styles.passwordCheck}>
                        <Text size={12} color={argonTheme.COLORS.MUTED}>
                          Força da senha:
                        </Text>
                        <Text bold size={12} color={this.state ? (this.state.password.length > 8 ? argonTheme.COLORS.SUCCESS : argonTheme.COLORS.WARNING) : argonTheme.COLORS.PRIMARY}>
                          {this.state ? (this.state.password.length > 8 ? " forte" : " fraca") : ""}
                        </Text>
                      </Block>
                    </Block>
                    <Block row width={width * 0.75}>
                      <Checkbox
                        checkboxStyle={{
                          borderWidth: 3
                        }}
                        color={argonTheme.COLORS.PRIMARY}
                        label="I agree with the"
                      />
                      <Button
                        style={{ width: 100 }}
                        color="transparent"
                        textStyle={{
                          color: argonTheme.COLORS.PRIMARY,
                          fontSize: 14
                        }}
                      >
                        Privacy Policy
                      </Button>
                    </Block>
                    <Block middle>
                      <Button onPress={() => this._onSubmit()} color="primary" style={styles.createButton}>
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                          CREATE ACCOUNT
                        </Text>
                      </Button>
                    </Block>
                  </KeyboardAvoidingView>
                </Block>
              </ScrollView>
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

export default Register;
