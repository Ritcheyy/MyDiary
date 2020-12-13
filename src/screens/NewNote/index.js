import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Text, TextInput} from 'react-native';
import InputScrollView from 'react-native-input-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import BaseHeader from '../../components/common/BaseHeader';
import {NoteViewStyles} from '../../components/NoteView/styles';
import {getColorByTheme} from '../../assets/styles/Theme';
import Colors from '../../assets/styles/Colors';
import {addNote} from '../../redux/actions/note';
import uuid from 'react-native-uuid';

const NoteView = ({navigation, theme, addNewNote}) => {
  let noteTitleInput = null;
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];
  const dateObj = new Date();
  const formattedDate = `${
    months[dateObj.getMonth()]
  } ${dateObj.getDate()}, ${dateObj.getFullYear()}`;

  const [noteTitle, setNoteTitle] = useState('');
  const [noteText, setNoteText] = useState('');
  const [hasTitle, setHasTitle] = useState(false);

  useEffect(() => {
    noteTitleInput.focus();
  }, [noteTitleInput]);

  const handleGoBack = () => {
    if (noteTitle || noteText) {
      addNewNote({
        id: uuid.v1(),
        title: noteTitle,
        content: noteText,
        date_created: new Date(),
      });
    }
    return navigation.goBack();
  };

  const saveNote = async () => {
    if (noteTitle || noteText) {
      const id = uuid.v1();
      await addNewNote({
        id,
        title: noteTitle,
        content: noteText,
        date_created: new Date(),
      });
      navigation.navigate('NoteView', {id});
    }
  };

  const handleTitleInput = (value) => {
    setHasTitle(true);
    setNoteTitle(value);
  };

  const handleContentInput = (text) => {
    setNoteText(text);
    if (!hasTitle && noteText) {
      const textArray = text
        .trim()
        .replace(/(\r\n|\n|\r)/gm, ' ')
        .split(' ');
      const generatedTitle = textArray.slice(0, 6).join(' ');
      setNoteTitle(generatedTitle);
    }
  };

  return (
    <View
      style={[
        NoteViewStyles.wrapper,
        {backgroundColor: getColorByTheme(theme)},
      ]}>
      <SafeAreaView>
        <BaseHeader
          headerType="newNote"
          saveNote={() => saveNote}
          handleGoBack={() => handleGoBack}
        />
      </SafeAreaView>

      <InputScrollView
        contentInsetAdjustmentBehavior="automatic"
        indicatorStyle={getColorByTheme(theme, 'scrollIndicator')}>
        <View style={NoteViewStyles.content}>
          <TextInput
            multiline
            maxLength={64}
            placeholder="Title"
            value={noteTitle}
            onChangeText={(value) => handleTitleInput(value)}
            placeholderTextColor={theme === 'dark' ? Colors.gray_2 : null}
            ref={(input) => {
              noteTitleInput = input;
            }}
            style={[
              NoteViewStyles.noteTitle,
              {color: getColorByTheme(theme, 'text')},
            ]}
          />
          <Text style={NoteViewStyles.noteDate}>{formattedDate}</Text>
          <TextInput
            multiline
            placeholder="What would you like to tell me about today?"
            value={noteText}
            onChangeText={(text) => handleContentInput(text)}
            placeholderTextColor={theme === 'dark' ? Colors.gray_2 : null}
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
  theme: state.themeReducer.theme,
});
const mapDispatchToProps = {
  addNewNote: addNote,
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteView);
