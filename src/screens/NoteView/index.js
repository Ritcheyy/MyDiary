import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

const NoteView = ({route, notes}) => {
  const note = notes.find((item) => item.id === route.params.id);
  return (
    <View
      style={{
        position: 'absolute',
        top: '50%',
        left: '1%',
      }}>
      <Text
        style={{
          color: '#000',
          fontSize: 20,
        }}>
        This is note: {route.params.id} with title:
        {note.title}
      </Text>
    </View>
  );
};

const mapStateToProps = (state) => ({notes: state.noteReducer.notes});

export default connect(mapStateToProps)(NoteView);
