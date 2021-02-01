import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
import Colors from '../constants/Colors';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
const CategoriesScreen = props => {
  const renderGridItem = itemData => {
    console.log('====================================');
    console.log(itemData);
    console.log('====================================');
    return (
      <CategoryGridTile
        itemData={itemData}
        //title={itemData.item.title}
        backColor={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate('CategoryMeals', {
            categoryId: itemData.item.id,
            categoryTitle: itemData.item.title,
          });
        }}
      />
    );
  };

  return (
    <FlatList keyExtractor={(item, index) => item.id} data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};
CategoriesScreen.navigationOptions = navData => {
  return {
    title: 'Meal Categories',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
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
});

export default CategoriesScreen;
