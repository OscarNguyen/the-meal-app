import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  ImageBackground,
} from 'react-native';
import DefaultText from './DefaultText';
const MealItem = props => {
  let Cmp = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    cpm = TouchableNativeFeedback;
  }
  return (
    <View style={styles.mealItem}>
      <Cmp onPress={props.onSelectMeal}>
        <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
          <ImageBackground style={styles.bgImage} source={{ uri: props.itemData.item.imageUrl }}>
            <Text numberOfLines={1} style={styles.title}>
              {props.itemData.item.title}
            </Text>
          </ImageBackground>
        </View>
        <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
          <DefaultText>{props.itemData.item.duration}m</DefaultText>
          <DefaultText>{props.itemData.item.complexity.toUpperCase()}</DefaultText>
          <DefaultText>{props.itemData.item.affordability.toUpperCase()}</DefaultText>
        </View>
      </Cmp>
    </View>
  );
};

const styles = StyleSheet.create({
  /* titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  }, */
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingVertical: 5,
    paddingHorizontal: 12,
    textAlign: 'center',
  },
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealHeader: {},
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  mealHeader: {
    height: '85%',
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%',
  },
});
export default MealItem;
