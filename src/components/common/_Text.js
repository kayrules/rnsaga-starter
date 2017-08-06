import React, { Component } from 'react';
import { Text } from 'react-native';

export default class _Text extends Component {

    render() {
        var styles = [this.props.style, { fontFamily: 'Panton-Regular' }];
        return (
            <Text {...this.props} style={styles}>
                {this.props.children}
            </Text>
        )
    }

}
