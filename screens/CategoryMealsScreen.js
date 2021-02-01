import React from 'react';
import { useSelector } from 'react-redux';
import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import { StyleSheet, View } from 'react-native';
const CategoryMealsScreen = props => {
  const catId = props.navigation.getParam('categoryId');
  const cat = CATEGORIES.find(cat => cat.id === catId);
  const availableMeals = useSelector(state => state.meals.filteredMeals);
  const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.text}>
        <DefaultText>No meals to display</DefaultText>
      </View>
    );
  } else return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = navigationData => {
  console.log(navigationData);
  return {
    title: navigationData.navigation.getParam('categoryTitle'),
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Menu" iconName="ios-menu" onPress={() => navigationData.navigation.toggleDrawer()} />
      </HeaderButtons>
    ),
  };
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({
  text: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//<Text>The Category Meals Screen</Text>
{
  /*       <Text style={{ fontWeight: 'bold' }}>{props.navigation.getParam('categoryTitle')}</Text>*/
}
//<Text style={{ fontWeight: 'bold' }}>{cat.title}</Text>
// <Button
//  title="cc to meal detail"
//  onPress={() => {
//    props.navigation.navigate('MealDetail');
//  }}
// />
{
  /* can use pop or goback() */
}
// <Button title="back" onPress={() => props.navigation.pop()} />
