import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const TodoItem = ({name, completed}) => {
  const [complete, setComplete] = useState(completed);

  return (
    <View style={styles.itemContainer}>
      <Text
        style={[
          styles.itemText,
          complete && {textDecorationLine: 'line-through'},
        ]}>
        {name}
      </Text>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => setComplete(!complete)}>
        <Text style={styles.close}>&times;</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    fontSize: 18,
  },
  close: {
    fontSize: 18,
  },
});

export default TodoItem;
