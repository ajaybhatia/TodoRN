import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const FAB = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.fab} onPress={onPress}>
      <Text style={styles.addIcon}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    height: 60,
    width: 60,
    borderRadius: 60,
    backgroundColor: '#3F56B4',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  addIcon: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default FAB;
