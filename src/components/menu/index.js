'use strict'
import React from 'react'
import { DrawerNavigator } from 'react-navigation'
// Navigators
import HomeNavigator from '../home/views/HomeNavigator'
import Login from '../common/Login'
import MenuList from './views/MenuList'


const routeConfig = {
    HomeNavigator: { screen: HomeNavigator },
    // Logout: { screen: Login }
}

const drawerConfig = {
    contentComponent: props => <MenuList {...props} />
}

export const Menu = DrawerNavigator(routeConfig, drawerConfig)
