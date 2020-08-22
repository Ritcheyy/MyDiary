import React from 'react';
import {View, ScrollView} from 'react-native';
import BaseHeader from '../../components/common/BaseHeader';
import NoteCard from '../../components/Home/NoteCard';
import Fab from '../../components/Home/Fab';

import {HomeStyles} from '../../components/Home/styles';
import {getColorByTheme} from '../../assets/styles/Theme';

const TestNotes = [
  {
    id: 1,
    title: 'How to make your personal brand stand out online',
    date: 'May 21, 2020',
  },
  {
    id: 2,
    title: 'Beautiful weather app Ui concepts we wish existed',
    date: 'May 18, 2020',
  },
  {
    id: 3,
    title: '10 excellent font pairing tools for designers',
    date: 'August 18, 2020',
  },
  {
    id: 4,
    title: 'How to make your personal brand stand out online',
    date: 'May 21, 2020',
  },
  {
    id: 5,
    title: 'Beautiful weather app Ui concepts we wish existed',
    date: 'May 18, 2020',
  },
  {
    id: 6,
    title: '10 excellent font pairing tools for designers',
    date: 'August 18, 2020',
  },
  {
    id: 7,
    title: 'Design For Good: Join The  Face Mask Challenge',
    date: 'May 21, 2020',
  },
  {
    id: 8,
    title: 'How to make your personal brand stand out online',
    date: 'May 21, 2020',
  },
  {
    id: 9,
    title: 'Beautiful weather app Ui concepts we wish existed',
    date: 'May 18, 2020',
  },
  {
    id: 10,
    title: '10 excellent font pairing tools for designers',
    date: 'August 18, 2020',
  },
  {
    id: 11,
    title: 'How to make your personal brand stand out online',
    date: 'May 21, 2020',
  },
  {
    id: 12,
    title: 'Beautiful weather app Ui concepts we wish existed',
    date: 'May 18, 2020',
  },
  {
    id: 13,
    title: '10 excellent font pairing tools for designers',
    date: 'August 18, 2020',
  },
  {
    id: 14,
    title: 'How to make your personal brand stand out online',
    date: 'May 21, 2020',
  },
];
const cardTypes = [
  'twin1',
  'twin2',
  'wide',
  'leftLong',
  'shortRight',
  'shortLeft',
  'rightLong',
];
let iterator = 0;

const Home = (props) => {
  return (
    <View
      style={[
        HomeStyles.wrapper,
        {backgroundColor: getColorByTheme(props.theme)},
      ]}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        indicatorStyle={getColorByTheme(props.theme, 'scrollIndicator')}>
        <BaseHeader
          theme={props.theme}
          toggleTheme={props.toggleTheme.bind(this)}
        />

        <View style={HomeStyles.cardsContainer}>
          {TestNotes.map((note, index) => {
            note.cardType = cardTypes[iterator];
            iterator++;
            if (iterator === cardTypes.length) {
              iterator = 0;
            }
            return <NoteCard note={note} key={note.id} />;
          })}
        </View>
      </ScrollView>
      <Fab />
    </View>
  );
};

export default Home;
