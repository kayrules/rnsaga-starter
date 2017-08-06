import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';
import { Container, Content, Form, Header, Item, Input, Label, Button, Card, CardItem, Body } from 'native-base';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import * as Actions from '../../actions';
import styles from '../../assets/themes/green';
import Styles from '../../assets/themes/green';
import Icon from 'react-native-vector-icons/FontAwesome'

import { loginRequest } from '../../actions'

const logo = require('../../assets/images/logo1.png');
const subLogo = require('../../assets/images/parentLogin.png');

// function mapStateToProps(state) { return { user: state.user }; }
// function mapDispatchToProps(dispatch) { return bindActionCreators(Actions, dispatch); }

class Login extends Component {

    static navigationOptions = {
        drawerLabel: 'Logout',
        drawerIcon: ({ tintColor }) => <Icon size={ 20 } name={ 'umbrella' } color={ tintColor }/>
    }

    constructor(props) {
        super(props);
        this.state = {
            username: 'demo',
            password: 'demo',
        };
    }

    login = () => {
        this.props.loginRequest({
            username: this.state.username,
            password: this.state.password
        });
    }

    render() {

        return (
            <Container style={styles.container}>
                <Content contentContainerStyle={styles.pad}>
                    <View style={{marginTop: 80}}>
                        {
                        /*
                        <Image source={logo} style={styles.logo} />
                        <Image source={subLogo} style={styles.subLogo} />
                        */
                        }
                    </View>
                    <View>
                        <Card style={styles.panel}>
                            <CardItem>
                                <Body>
                                    <Item inlineLabel>
                                        <Input style={styles.font} placeholder="Username" onChangeText={(text) => this.setState({username: text})} value={this.state.username} keyboardType="email-address" />
                                    </Item>
                                    <Item inlineLabel>
                                        <Input style={styles.font} placeholder="Password" onChangeText={(text) => this.setState({password: text})} value={this.state.password} secureTextEntry={true} />
                                    </Item>

                                    {
                                        this.props.user.loading ? (
                                            <Button disabled block onPress={this.login} style={{marginTop: 20}}>
                                                <Text style={Styles.buttonText}>Logging in..</Text>
                                            </Button>
                                        ) : (
                                            <Button success block onPress={this.login} style={{marginTop: 20}}>
                                                <Text style={Styles.buttonText}>Enter</Text>
                                            </Button>
                                        )
                                    }

                                </Body>
                            </CardItem>
                        </Card>
                    </View>
                </Content>
            </Container>
        );
    }

}

// export default connect(mapStateToProps, mapDispatchToProps)(Login);

function mapStateToProps (state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps (dispatch) {
    return {
        loginRequest: (credentials) => dispatch(loginRequest(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
