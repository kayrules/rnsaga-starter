'use strict'
import { StackNavigator } from 'react-navigation'

// Screens
import ScreenOne from './views/ScreenOne'
import ScreenTwo from './views/ScreenTwo'
import ScreenThree from './views/ScreenThree'

const routeConfig = {
  ScreenOne: { screen: ScreenOne },
  ScreenTwo: { screen: ScreenTwo },
  ScreenThree: { screen: ScreenThree },
}
// going to disable the header for now
const stackNavigatorConfig = {
  headerMode: 'none',
  initialRoute: 'ScreenOne'
}

export const Home = StackNavigator(routeConfig, stackNavigatorConfig)
