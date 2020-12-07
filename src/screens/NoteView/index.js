import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Text, TextInput} from 'react-native';
import InputScrollView from 'react-native-input-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import BaseHeader from '../../components/common/BaseHeader';
import {NoteViewStyles} from '../../components/NoteView/styles';
import {getColorByTheme} from '../../assets/styles/Theme';

const NoteView = ({route, navigation, notes, theme}) => {
  const demoNote =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur commodi corporis dicta doloremque impedit in inventore laudantium magni, natus neque nobis nulla obcaecati officia pariatur possimus quos reprehenderit vel? \n\n Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur commodi corporis dicta doloremque impedit in inventore laudantium magni, natus neque nobis nulla obcaecati officia pariatur possimus quos reprehenderit vel? \n\n Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur commodi corporis dicta doloremque impedit in inventore laudantium magni, natus neque nobis nulla obcaecati officia pariatur possimus quos reprehenderit vel? \n\n Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur commodi corporis dicta doloremque impedit in inventore laudantium magni, natus neque nobis nulla obcaecati officia pariatur possimus quos reprehenderit vel?';

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
          noteview={true}
          toggleEditMode={() => toggleEditMode}
          handleGoBack={handleGoBack}
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
          <Text style={NoteViewStyles.noteDate}>{note.date}</Text>
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
            {demoNote}
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

export default connect(mapStateToProps)(NoteView);
