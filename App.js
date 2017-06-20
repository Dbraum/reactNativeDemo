import React from 'react';

import { Container, Header, Title,Text, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';


export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
            <Button light block>
                        <Text>Light</Text>
                    </Button>
                    <Button block>
                        <Text>Primary</Text>
                    </Button>
                    <Button block success>
                        <Text>Success</Text>
                    </Button>
                    <Button block info>
                        <Text>Info</Text>
                    </Button>
                    <Button block warning>
                        <Text>Warning</Text>
                    </Button>
                    <Button block danger>
                        <Text>Danger</Text>
                    </Button>
                    <Button dark block>
                        <Text>Dark</Text>
                    </Button>
        </Content>
        <Footer>
            <FooterTab>
                <Button full>
                    <Text>Footer</Text>
                </Button>
            </FooterTab>
        </Footer>
      </Container>
    );
  }
}
