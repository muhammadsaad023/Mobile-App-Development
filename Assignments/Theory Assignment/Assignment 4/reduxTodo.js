// App.js
import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, TouchableOpacity } from 'react-native';
import { createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';

// Reducer
const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 1,
            text: action.payload.text,
            completed: false,
          },
        ],
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case 'EDIT_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        ),
      };
    default:
      return state;
  }
};

// Store
const store = createStore(todoReducer);

// Component
const TodoApp = () => {
  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState(null);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      if (editingId) {
        // Edit existing todo
        dispatch({ type: 'EDIT_TODO', payload: { id: editingId, text } });
        setEditingId(null);
      } else {
        // Add new todo
        dispatch({ type: 'ADD_TODO', payload: { text } });
      }
      setText('');
    }
  };

  const handleToggleTodo = (id) => {
    dispatch({ type: 'TOGGLE_TODO', payload: { id } });
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: 'REMOVE_TODO', payload: { id } });
  };

  const handleEditTodo = (id, currentText) => {
    setText(currentText);
    setEditingId(id);
  };

  return (
    <View>
      <TextInput
        placeholder="Add/Edit Todo"
        value={text}
        onChangeText={(value) => setText(value)}
      />
      <Button title={editingId ? 'Edit' : 'Add'} onPress={handleAddTodo} />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              onPress={() => handleToggleTodo(item.id)}
              onLongPress={() => handleEditTodo(item.id, item.text)}
            >
              <Text style={{ textDecorationLine: item.completed ? 'line-through' : 'none' }}>
                {item.text}
              </Text>
            </TouchableOpacity>
            <Button title="Remove" onPress={() => handleRemoveTodo(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

// App
const App = () => {
  return (
    <SafeAreaView>
      <Provider store={store}>
        <TodoApp />
      </Provider>
    </SafeAreaView>
  );
};

export default App;