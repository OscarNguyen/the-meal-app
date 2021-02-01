import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform, TouchableNativeFeedback } from 'react-native';
const CategoryGridTile = props => {
  let TouchCmp = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TouchCmp style={{ flex: 1 }} onPress={props.onSelect}>
        <View style={{ ...styles.textContainer, backgroundColor: props.backColor }}>
          <Text style={styles.text} numberOfLines={2}>
            {props.itemData.item.title}
          </Text>
        </View>
      </TouchCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    elevation: 5,
    overflow: Platform.OS === 'android' && Platform.OS >= 21 ? 'hidden' : 'visible',
  },
  textContainer: {
    borderRadius: 10,
    flex: 1,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
  },
  text: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    textAlign: 'right',
  },
});

export default CategoryGridTile;
