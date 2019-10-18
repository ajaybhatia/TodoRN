import React, {useState} from 'react';
import {
  View,
  Modal,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
import Header from '../components/Header';
import FAB from '../components/FAB';
import TodoItem from '../components/TodoItem';

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [items, setItems] = useState([]);

  return (
    <View style={{flex: 1}}>
      <Header />
      <ScrollView>
        {items.map(item => (
          <TodoItem name={item.name} completed={item.completed} />
        ))}
      </ScrollView>
      <FAB onPress={() => setVisible(true)} />
      <Modal visible={visible} animationType="slide">
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => setVisible(false)}>
          <Text style={styles.closeText}>&times;</Text>
        </TouchableOpacity>
        <View style={styles.container}>
          <Text>Todo Name</Text>
          <TextInput style={styles.input} onChangeText={e => setName(e)} />
          <Button
            title="Save"
            onPress={() => {
              setItems([{name, completed: false}, ...items]);
              setVisible(false);
              setName('');
            }}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  closeButton: {
    alignSelf: 'flex-end',
    marginHorizontal: 10,
  },
  closeText: {
    fontSize: 32,
  },
  container: {
    flex: 1,
    margin: 10,
  },
  input: {
    backgroundColor: '#eee',
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 10,
  },
});

export default Home;
