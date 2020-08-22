import React from 'react';
import {View, Text} from 'react-native';
import {NoteCardStyles} from './styles';

const NoteCard = (props) => {
  return (
    <>
      <View
        style={[NoteCardStyles.noteCard, NoteCardStyles[props.note.cardType]]}>
        <Text
          numberOfLines={20}
          style={[
            NoteCardStyles.title,
            props.note.cardType === 'wide' ? NoteCardStyles.wideTitle : '',
            props.note.cardType === 'rightLong' ||
            props.note.cardType === 'leftLong'
              ? NoteCardStyles.longCardTitle
              : '',
          ]}>
          {props.note.title}
        </Text>
        <Text
          style={
            props.note.cardType === 'wide'
              ? NoteCardStyles.wideDate
              : NoteCardStyles.date
          }>
          {props.note.date}
        </Text>
      </View>
    </>
  );
};

export default NoteCard;
