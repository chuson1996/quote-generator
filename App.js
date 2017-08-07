import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Font } from 'expo';

const quotes = [{
  message: 'Stop focusing on dumb shit. Don’t be afraid to break things. Don’t be romantic. Don’t take the time to breathe. Don’t aim for perfect. And whatever you do, keep moving.',
  author: 'Gary Vaynerchuk',
}, {
  message: 'Make it simple. Make it memorable. Make it inviting to look at. Make it fun to read.',
  author: 'Gary Vaynerchuck',
}, {
  message: `Don't quit. Never give up trying to build the world you can see, even if others can't see it. Listen to your drum and your drum only. It's the one that makes the sweetest sound.`,
  author: 'Simon Sinek',
}, {
  message: 'If you have the opportunity to do amazing things in your life, I strongly encourage you to invite someone to join you.',
  author: 'Simon Sinek',
}, {
  message: `I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.'`,
  author: 'Muhammad Ali',
}];

export default class App extends React.Component {
  state = {
    activeQuoteIndex: 0,
    isFontLoaded: false,
  }

  componentDidMount() {
    Font.loadAsync({
      'Average': require('./assets/fonts/Average-Regular.ttf'),
      'Prata': require('./assets/fonts/Prata-Regular.ttf')
    }).then(() => {
      this.setState({
        isFontLoaded: true,
      });
    })
  }

  nextQuote = () => {
    const { activeQuoteIndex } = this.state;

    if (activeQuoteIndex < quotes.length - 2) {
      this.setState({
        activeQuoteIndex: activeQuoteIndex + 1
      });
    } else {
      this.setState({
        activeQuoteIndex: 0
      });
    }
  }

  render() {
    const activeQuote = quotes[this.state.activeQuoteIndex];
    const { isFontLoaded } = this.state;
    return (
      <View style={styles.container}>
        <Text style={[styles.message, isFontLoaded && { fontFamily: 'Prata' }]}>
          {activeQuote.message}
        </Text>
        <Text style={[styles.author, isFontLoaded && { fontFamily: 'Average' }]}>
          {activeQuote.author}
        </Text>

        <View style={styles.button}>
          <Button
            title={'Next quote'}
            onPress={this.nextQuote}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30
  },
  message: {
    fontSize: 24,
    marginBottom: 20,
  },
  author: {
    fontSize: 18,
  },
  button: {
    position: 'absolute',
    bottom: 40,
  },
});
