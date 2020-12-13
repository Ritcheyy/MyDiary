import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Text, TextInput} from 'react-native';
import InputScrollView from 'react-native-input-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import BaseHeader from '../../components/common/BaseHeader';
import {NoteViewStyles} from '../../components/NoteView/styles';
import {getColorByTheme} from '../../assets/styles/Theme';
import {removeNote} from '../../redux/actions/note';
import {formatDate} from '../../utils/helpers';

const NoteView = ({route, navigation, notes, theme, removeNoteAction}) => {
  const note = notes.find((item) => item.id === route.params.id);
  let titleInput = null;
  let noteInput = null;
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (editMode) {
      noteInput.focus();
    }
  });

  const handleGoBack = () => {
    return navigation.navigate('Home');
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const deleteNote = () => {
    removeNoteAction(note.id);
    handleGoBack();
  };

  return (
    <View
      style={[
        NoteViewStyles.wrapper,
        {backgroundColor: getColorByTheme(theme)},
      ]}>
      <SafeAreaView>
        <BaseHeader
          headerType="noteview"
          noteviewEditMode={editMode}
          toggleEditMode={() => toggleEditMode}
          handleGoBack={() => handleGoBack}
          deleteNote={() => deleteNote}
        />
      </SafeAreaView>

      <InputScrollView
        contentInsetAdjustmentBehavior="automatic"
        indicatorStyle={getColorByTheme(theme, 'scrollIndicator')}>
        <View style={NoteViewStyles.content}>
          <TextInput
            editable={editMode}
            multiline
            maxLength={64}
            ref={(input) => {
              titleInput = input;
            }}
            style={[
              NoteViewStyles.noteTitle,
              {color: getColorByTheme(theme, 'text')},
            ]}>
            {note.title}
          </TextInput>
          <Text style={NoteViewStyles.noteDate}>
            {formatDate(note.date_created)}
          </Text>
          <TextInput
            editable={editMode}
            multiline
            ref={(input) => {
              noteInput = input;
            }}
            style={[
              NoteViewStyles.noteText,
              {color: getColorByTheme(theme, 'text')},
            ]}>
            {note.content}
          </TextInput>
        </View>
      </InputScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  notes: state.noteReducer.notes,
  theme: state.themeReducer.theme,
});

const mapDispatchToProps = {
  removeNoteAction: removeNote,
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteView);
