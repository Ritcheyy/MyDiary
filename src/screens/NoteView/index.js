import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {NoteViewStyles} from '../../components/NoteView/styles';
import {getColorByTheme} from '../../assets/styles/Theme';
import BaseHeader from '../../components/common/BaseHeader';

const NoteView = ({route, navigation, notes, theme}) => {
  const demoNote =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur commodi corporis dicta doloremque impedit in inventore laudantium magni, natus neque nobis nulla obcaecati officia pariatur possimus quos reprehenderit vel? \n\n Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur commodi corporis dicta doloremque impedit in inventore laudantium magni, natus neque nobis nulla obcaecati officia pariatur possimus quos reprehenderit vel?';

  const note = notes.find((item) => item.id === route.params.id);
  const handleGoBack = () => {
    return navigation.goBack();
  };

  return (
    <View
      style={[
        NoteViewStyles.wrapper,
        {backgroundColor: getColorByTheme(theme)},
      ]}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        indicatorStyle={getColorByTheme(theme, 'scrollIndicator')}>
        <BaseHeader noteview={true} handleGoBack={handleGoBack} />

        <View style={NoteViewStyles.content}>
          <Text style={NoteViewStyles.noteTitle}>{note.title}</Text>
          <Text style={NoteViewStyles.noteDate}>{note.date}</Text>
          <Text style={NoteViewStyles.noteText}>{demoNote}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  notes: state.noteReducer.notes,
  theme: state.themeReducer.theme,
});

export default connect(mapStateToProps)(NoteView);
