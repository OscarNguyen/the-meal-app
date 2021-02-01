import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import { createAppContainer } from 'react-navigation';
import { Platform, Text } from 'react-native';
import Colors from '../constants/Colors';
import FavoritesScreen from '../screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import FiltersScreen from '../screens/FiltersScreen';

const defaultStackNavOptions = {
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans',
  },
  headerStyle: {
    backgroundColor: !Platform.OS === 'android' ? Colors.primaryColor : '',
  },
};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        title: 'Meal Categories',
      },
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    /*     mode: 'modal',
     */ defaultNavigationOptions: defaultStackNavOptions,
  },
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetailScreen: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  },
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel: Platform.OS === 'android' && <Text style={{ fontFamily: 'open-sans-bold' }}>Meals</Text>,
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarLabel: '',
      tabBarIcon: tabInfo => {
        return <Ionicons size={25} color={tabInfo.tintColor} name="ios-star" />;
      },
      tabBarColor: Colors.accentColor,
      tabBarLabel: Platform.OS === 'android' && <Text style={{ fontFamily: 'open-sans-bold' }}>Favorites</Text>,
    },
  },
};

const MealsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: 'white',
        shifting: true,
        //shifting: false
        /* barStyle: {
          backgroundColor: Colors.primaryColor,
        }, */
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accentColor,
          labelStyle: {
            fontFamily: 'open-sans',
          },
        },
      });

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen,
  },
  {
    /*     mode: 'modal',
     */ defaultNavigationOptions: defaultStackNavOptions,
  },
);

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: 'Meals',
      },
    },
    Filters: FiltersNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelType: {
        fontFamily: 'open-sans-bold',
      },
    },
  },
);
export default createAppContainer(MainNavigator);
