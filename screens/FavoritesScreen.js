import React from 'react';
import { View, StyleSheet } from 'react-native';
import MealList from '../components/MealList';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { useSelector } from 'react-redux';
import DefaultText from '../components/DefaultText';
const FavoritesScreen = props => {
  const favData = useSelector(state => state.meals.favoriteMeals);

  if (favData.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No favorite meals</DefaultText>
      </View>
    );
  } else return <MealList listData={favData} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = navData => {
  return {
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Menu" iconName="ios-menu" onPress={() => navData.navigation.toggleDrawer()} />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FavoritesScreen;
