import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import MealItem from './MealItem';
import { useSelector } from 'react-redux';
const MealList = props => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);
  const renderMeals = itemData => {
    const isFav = favoriteMeals.some(meal => meal.id === itemData.item.id);
    return (
      <MealItem
        onSelectMeal={() => {
          props.navigation.navigate('MealDetail', {
            mealId: itemData.item.id,
            mealTitle: itemData.item.title,
            isFav: isFav,
          });
        }}
        itemData={itemData}
      />
    );
  };
  return (
    <View style={styles.list}>
      <FlatList
        keyExtractor={item => item.id}
        data={props.listData}
        renderItem={renderMeals}
        style={{ width: '100%' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
});

export default MealList;
