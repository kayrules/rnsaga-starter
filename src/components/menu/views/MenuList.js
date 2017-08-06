'use strict'
import React from 'react'
import { Text, Image, StatusBar } from "react-native";
import {
    Button,
    Container,
    List,
    ListItem,
    Content,
    Icon
} from "native-base";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from '../../../assets/themes/green';
import * as Actions from '../../../actions';

const routes = ["Home"];

function mapStateToProps(state) { return { user: state.user }; }
function mapDispatchToProps(dispatch) { return bindActionCreators(Actions, dispatch); }

class MenuList extends React.Component
{
    logout = () => {
        var ret = this.props.logout();
        this.props.navigation.navigate('DrawerClose');
        console.log(ret.type);
    }

    render() {
        return (
            <Container>
                <Content>
                    <Image
                        source={require('../../../assets/images/men.jpg')}
                        style={{
                            height: 120,
                            alignSelf: "center",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                        <Image
                            square
                            style={{ height: 80, width: 70 }}
                            source={require('../../../assets/images/men.jpg')}
                            />
                    </Image>

                    <List
                        dataArray={routes}
                        renderRow={data => {
                            return (
                                <ListItem
                                    button
                                    onPress={() => this.props.navigation.navigate(data)}>
                                    <Text>{data}</Text>
                                </ListItem>
                            );
                        }}
                        />

                    <Button success block onPress={this.logout} style={{marginTop: 20}}>
                        <Text style={[{color: 'white', fontSize: 18}, styles.fontBold]}>Logout</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuList);
