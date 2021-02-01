import React, { useEffect, useCallback } from 'react';
import { ScrollView, Image, View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import HeaderButton from '../components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import DefaultText from '../components/DefaultText';
import { toggleFavorite } from '../store/actions/meals';
const MealDetailScreen = props => {
  const mealId = props.navigation.getParam('mealId');
  const availableMeals = useSelector(state => state.meals.meals);
  const selectedMeal = availableMeals.find(meal => meal.id === mealId);
  console.log(selectedMeal);

  const isCurrentFavoriteMeal = useSelector(state => state.meals.favoriteMeals.some(meal => meal.id === mealId));

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  const ListItem = props => (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );

  useEffect(() => {
    props.navigation.setParams({ isFav: isCurrentFavoriteMeal });
  }, [isCurrentFavoriteMeal]);

  useEffect(() => {
    // props.navigation.setParams({ mealTitle: selectedMeal.title });
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.detail}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map(item => (
        <ListItem key={item}>{item}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map(item => (
        <ListItem key={item}>{item}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = navigaData => {
  const mealId = navigaData.navigation.getParam('mealId');
  const mealTitle = navigaData.navigation.getParam('mealTitle');
  const toggleFavorite = navigaData.navigation.getParam('toggleFav');
  const isFav = navigaData.navigation.getParam('isFav');
  //const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return {
    title: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="favorite" iconName={isFav ? 'ios-star' : 'ios-star-outline'} onPress={() => toggleFavorite()} />
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
  image: {
    width: '100%',
    height: 200,
  },
  detail: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center',
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    padding: 10,
    borderWidth: 1,
  },
});

export default MealDetailScreen;
