import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.icon}>&#9776;</Text>
      <Text style={styles.title}>Todo</Text>
      <Text style={styles.icon}>&#9733;</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#3F56B4',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  title: {
    color: '#fff',
    fontSize: 24,
  },
  icon: {
    fontSize: 24,
    color: '#fff',
  },
});

export default Header;
