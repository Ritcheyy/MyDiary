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
import Colors from '../../assets/styles/Colors';
import {editNote} from '../../redux/actions/note';

const NoteView = ({
  route,
  navigation,
  notes,
  theme,
  editNoteAction,
  removeNoteAction,
}) => {
  const note = notes.find((item) => item.id === route.params.id);
  let titleInput = null;
  let noteInput = null;
  const [noteTitle, setNoteTitle] = useState(note.title);
  const [noteText, setNoteText] = useState(note.content);
  const [editMode, setEditMode] = useState(false);
  const [hasTitle, setHasTitle] = useState(false);

  useEffect(() => {
    if (editMode) {
      noteInput.focus();
    } else {
      saveNote();
    }
  }, [editMode]);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleGoBack = () => {
    if (noteText && (noteText !== note.content || noteTitle !== note.title)) {
      editNoteAction({
        id: note.id,
        title: noteTitle,
        content: noteText,
      });
    }
    navigation.goBack();
  };

  const saveNote = () => {
    if (noteText && (noteText !== note.content || noteTitle !== note.title)) {
      editNoteAction({
        id: note.id,
        title: noteTitle,
        content: noteText,
      });
      navigation.navigate('Home');
    }
  };

  const handleTitleInput = (value) => {
    setHasTitle(true);
    setNoteTitle(value);
  };

  const handleContentInput = (text) => {
    setNoteText(text);
    if (!hasTitle && !noteTitle && noteText) {
      const textArray = text
        .trim()
        .replace(/(\r\n|\n|\r)/gm, ' ')
        .split(' ');
      const generatedTitle = textArray.slice(0, 6).join(' ');
      setNoteTitle(generatedTitle);
    }
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
            value={noteTitle}
            onChangeText={(value) => handleTitleInput(value)}
            placeholder="Title"
            placeholderTextColor={
              theme === 'dark' ? Colors.gray_2 : Colors.placeHolder
            }
            ref={(input) => {
              titleInput = input;
            }}
            style={[
              NoteViewStyles.noteTitle,
              {color: getColorByTheme(theme, 'text')},
            ]}
          />
          <Text style={NoteViewStyles.noteDate}>
            {formatDate(note.date_created)}
          </Text>
          <TextInput
            editable={editMode}
            multiline
            value={noteText}
            onChangeText={(text) => handleContentInput(text)}
            placeholder="What would you like to tell me about today?"
            placeholderTextColor={
              theme === 'dark' ? Colors.gray_2 : Colors.placeHolder
            }
            ref={(input) => {
              noteInput = input;
            }}
            style={[
              NoteViewStyles.noteText,
              {color: getColorByTheme(theme, 'text')},
            ]}
          />
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
  editNoteAction: editNote,
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteView);
