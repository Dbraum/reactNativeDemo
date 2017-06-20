import React from 'react';

import Expo from 'expo';
import CounterStore from './counterStore.js';
import { observer } from 'mobx-react';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';
import { View } from 'react-native';

@observer
export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      isReady: false
    }
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({
      isReady: true
    });
  }


  render() {
    if (!this.state.isReady) {
      return <Text>Light</Text>;
    }
    return (
      <Container>
        <Header>
          <Body>
            <Title>Mobx Counter</Title>
          </Body>
        </Header>
        <Button primary block onPress={ () => CounterStore.increment() }>
          <Text>Increment</Text>
        </Button>
        <Button primary block onPress={ () => CounterStore.decrement() }>
          <Text>Decrement</Text>
        </Button>
        <Card>
          <CardItem>
            <Text>
              { CounterStore.counter }
            </Text>
          </CardItem>
        </Card>
      </Container>
      );
  }
}
