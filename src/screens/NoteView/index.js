import React from 'react';
import {View, Text} from 'react-native';

const NoteView = ({route}) => {
  return (
    <View
      style={{
        position: 'absolute',
        top: '50%',
        right: 0,
      }}>
      <Text
        style={{
          color: '#000',
          fontSize: 20,
        }}>
        This is note: {route.params.note.id} with title:
        {route.params.note.title}
      </Text>
    </View>
  );
};

export default NoteView;
