'use strict'

import React from 'react'
import { addNavigationHelpers } from 'react-navigation'
import { Menu } from '../'
import { connect } from 'react-redux'
import Login from '../../common/Login'

const mapStateToProps = (state) => {
    return {
        navigationState: state.menu,
        user: state.user,
    }
}

class MenuNavigator extends React.Component
{
    static navigationOptions = {
        title: 'Menu',
        headerLeft: ({ tintColor }) => <Icon size={ 20 } name={ 'umbrella' } color={ tintColor }/>
    }

    render(){
        const { dispatch, navigationState, user } = this.props
        return (
            user.loggedIn ? (
                <Menu
                    navigation={
                        addNavigationHelpers({
                            dispatch: dispatch,
                            state: navigationState,
                        })
                    }
                    />
            ) : (
                <Login />
            )
        )
    }
}

export default connect(mapStateToProps)(MenuNavigator)
