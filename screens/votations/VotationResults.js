import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Image } from 'react-native';
import { Block, Button, Card, Text, theme } from 'galio-framework';

import { TouchableOpacity } from 'react-native-gesture-handler';
const { width } = Dimensions.get('screen');

class VotationResults extends React.Component {
    renderVotations = () => {
        const { navigation } = this.props
        const votation = this.props.route.params.votation
        let subElections = votation.subElections.map((v, i) => {
            let winner = v.candidates.map((c, i) => {
                return (
                    <Block style={{ width: '50%', height: 'auto' }} key={i}>
                        <Card
                            flex
                            borderless
                            style={styles.card}
                            title={c.name}
                            caption={c.group}
                            imageStyle={styles.cardImageRadius}
                            imageBlockStyle={{ padding: theme.SIZES.BASE / 2 }}
                            image={c.image}
                        />
                    </Block>
                )
            })
            return (
                <Block key={i} style={styles.votation} shadow card center space={'evenly'} >
                    <Block style={styles.votationsDates}>
                        <Block center><Text p size={11}>Início: {v.startDate}</Text></Block>
                        <Block center><Text p size={11}>Fim: {v.endDate}</Text></Block>
                    </Block>
                    <Block center><Text h6>{v.name}</Text></Block>
                    <Block style={styles.votations}>
                        {winner}
                    </Block>
                </Block>
            )
        })
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.votations}>
                <Block style={styles.votations} flex>
                    <Block style={styles.votationHeader} shadow card center space={'evenly'}>
                        <Block center><Text h6>{votation.name}</Text></Block>
                        <Block center><Text p size={13}>{votation.description}</Text></Block>
                        <Block center><Text p size={20}>Vencedores</Text></Block>
                    </Block>
                    {subElections}
                </Block>
            </ScrollView>
        )
    }

    render() {
        return (
            <Block flex center style={styles.home}>
                {this.renderVotations()}
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    votations: {
        width: width - theme.SIZES.BASE * 2,
        paddingVertical: theme.SIZES.BASE,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    },
    button: {
        width: 80,
        height: 35
    },
    votationHeader: {
        height: 120,
        marginBottom: 10,
        width: '100%'
    },
    votation: {
        height: 'auto',
        marginBottom: 10,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    },
    votationName: {
        fontSize: 16,
    },
    votationsDates: {
        paddingTop: 8,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        width: '90%'
    },
    votationDate: {
        fontSize: 12,
        width: 100
    },
    candidateImage: {
        width: '100%',
        height: 185
    },
    candidateImageTextBlock: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0
    },
    candidate: {
        fontSize: 12,
        width: '100%',
        height: 'auto'
    },
    card: {
        width: '100%',
        height: 305,
        marginBottom: 10
    }
});


export default VotationResults;
