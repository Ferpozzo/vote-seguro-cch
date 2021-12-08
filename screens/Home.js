import React from 'react';
import { StyleSheet, Dimensions, ScrollView, View, ActivityIndicator } from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework';
const { width } = Dimensions.get('screen');
import { backendServer } from '../constants/server';
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';

function checkVotation(votation, navigation) {
  let buttonLayout;
  if (new Date(votation.endDate) >= new Date() && new Date(votation.startDate) < new Date()) {
    buttonLayout = (
      <Block style={styles.buttons}>
        <Button onPress={() => navigation.navigate('VotationDetail', { votation: votation })} style={styles.button} color='success'>Votar</Button>
        <Button disabled onPress={() => navigation.navigate('VotationResults', { votation: votation })} style={styles.buttonDisabled} color='info'>Resultados</Button>
      </Block>
    )
  } else if (new Date(votation.endDate) < new Date()) {
    buttonLayout = (
      <Block style={styles.buttons}>
        <Button disabled onPress={() => navigation.navigate('VotationDetail', { votation: votation })} style={styles.buttonDisabled} color='success'>Votar</Button>
        <Button onPress={() => navigation.navigate('VotationResults', { votation: votation })} style={styles.button} color='info'>Resultados</Button>
      </Block>
    )
  } else {
    buttonLayout = (
      <Block style={styles.buttons}>
        <Button disabled onPress={() => navigation.navigate('VotationDetail', { votation: votation })} style={styles.buttonDisabled} color='success'>Votar</Button>
        <Button disabled onPress={() => navigation.navigate('VotationResults', { votation: votation })} style={styles.button} color='info'>Resultados</Button>
      </Block>
    )
  }
  return buttonLayout
}
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      votations: null
    }
  }
  renderVotations = async () => {
    const { navigation } = this.props;
    let votationsLayout = [];
    try {
      SecureStore.getItemAsync('token').then(token => {
        axios.get(backendServer.url + '/votations',
          {
            headers: { "Authorization": `Bearer ${token}` }
          }).then((v) => {
            v.data.map((e, index) => {
              votationsLayout.push(<Block style={styles.votation} shadow card center space={'evenly'} key={index}>
                <Block center><Text h6>{e.name}</Text></Block>
                <Block center width={200}><Text style={styles.votationsDescription} >{e.description}</Text></Block>
                {checkVotation(e, navigation)}
              </Block>)
            })
            this.setState({
              votations: (
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={styles.votations}>
                  <Block style={styles.votations}>
                    {votationsLayout}
                  </Block>
                </ScrollView>
              )
            })
          }).catch(err => {
            console.log(err)
          })
      })
    } catch (error) {
      console.log(error)
      return (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.votations}>
          <Block style={styles.votations}>
            {votationsLayout}
          </Block>
        </ScrollView>
      )
    }
  }

  render() {
    if (this.state.votations) {
      return (
        <Block flex center style={styles.home}>
          {this.state.votations}
        </Block>
      );
    } else {
      this.renderVotations()
      return (
        <ActivityIndicator size="large" />
      );
    }
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  votations: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-evenly'
  },
  button: {
    width: 90,
    height: 35
  },
  buttonDisabled: {
    width: 90,
    height: 35,
    backgroundColor: 'grey'
  },
  votation: {
    height: 120,
    marginBottom: 10,
    width: '100%'
  },
  votationName: {
    fontSize: 16,
  },
  votationsDates: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between'
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between'
  },
  votationDate: {
    fontSize: 13,
    width: 100
  },
  votationsDescription: {
    fontSize: 12,
    textAlign: 'center'
  }
});

export default Home;
