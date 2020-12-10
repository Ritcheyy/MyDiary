import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Text, TextInput} from 'react-native';
import InputScrollView from 'react-native-input-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import BaseHeader from '../../components/common/BaseHeader';
import {NoteViewStyles} from '../../components/NoteView/styles';
import {getColorByTheme} from '../../assets/styles/Theme';
import Colors from '../../assets/styles/Colors';

const NoteView = ({route, navigation, notes, theme}) => {
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
  } ${dateObj.getDate()}, ${dateObj.getFullYear()}.`;

  const [noteTitle, setNoteTitle] = useState('');
  const [noteText, setNoteText] = useState('');
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    noteTitleInput.focus();
  }, [noteTitleInput]);

  const handleGoBack = () => {
    return navigation.goBack();
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <View
      style={[
        NoteViewStyles.wrapper,
        {backgroundColor: getColorByTheme(theme)},
      ]}>
      <SafeAreaView>
        <BaseHeader
          noteviewEditMode={editMode}
          headerType="newNote"
          toggleEditMode={() => toggleEditMode}
          handleGoBack={handleGoBack}
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
            onChange={(e) => setNoteTitle(e.target.value)}
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
            onChange={(e) => setNoteText(e.target.value)}
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
  notes: state.noteReducer.notes,
  theme: state.themeReducer.theme,
});

export default connect(mapStateToProps)(NoteView);
