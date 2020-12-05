import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import BaseHeader from '../../components/common/BaseHeader';
import NoteCard from '../../components/Home/NoteCard';
import Fab from '../../components/Home/Fab';

import {HomeStyles} from '../../components/Home/styles';
import {getColorByTheme} from '../../assets/styles/Theme';

let iterator = 0;
const cardTypes = [
  'twin1',
  'twin2',
  'wide',
  'leftLong',
  'shortRight',
  'shortLeft',
  'rightLong',
];

const Home = ({navigation, notes, theme}) => {
  const handleNoteView = (id) => {
    navigation.navigate('NoteView', {id});
  };

  return (
    <View
      style={[HomeStyles.wrapper, {backgroundColor: getColorByTheme(theme)}]}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        indicatorStyle={getColorByTheme(theme, 'scrollIndicator')}>
        <BaseHeader />

        <View style={HomeStyles.cardsContainer}>
          {notes.map((note, index) => {
            note.cardType = cardTypes[iterator];
            iterator++;
            if (iterator === cardTypes.length) {
              iterator = 0;
            }
            return (
              <NoteCard note={note} key={note.id} viewNote={handleNoteView} />
            );
          })}
        </View>
      </ScrollView>
      <Fab />
    </View>
  );
};

const mapStateToProps = (state) => ({
  notes: state.noteReducer.notes,
  theme: state.themeReducer.theme,
});

export default connect(mapStateToProps)(Home);
