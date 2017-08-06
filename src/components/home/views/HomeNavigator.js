'use strict'
// React
import React from 'react'
// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { Home } from '../'
//Redux
import { connect } from 'react-redux'
// Icon
import Icon from 'react-native-vector-icons/FontAwesome'

const mapStateToProps = (state) => {
    return {
        navigationState: state.home
    }
}
class HomeNavigator extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => <Icon size={ 20 } name={ 'umbrella' } color={ tintColor }/>
    }

    render(){
        const { dispatch, navigationState} = this.props
        return (
            <Home
                navigation={addNavigationHelpers({
                    dispatch: dispatch,
                    state: navigationState
                })}
                />
        )
    }
}

export default connect(mapStateToProps)(HomeNavigator)
