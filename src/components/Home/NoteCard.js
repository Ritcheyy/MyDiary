import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NoteCardStyles} from './styles';

const NoteCard = ({note, viewNote}) => {
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
  const dateObj = note.date_created;
  const formattedDate = `${
    months[dateObj.getMonth()]
  } ${dateObj.getDate()}, ${dateObj.getFullYear()}`;

  return (
    <>
      <TouchableOpacity
        onPress={() => viewNote(note.id)}
        style={[NoteCardStyles.noteCard, NoteCardStyles[note.cardType]]}>
        <Text
          numberOfLines={20}
          style={[
            NoteCardStyles.title,
            note.cardType === 'wide' ? NoteCardStyles.wideTitle : '',
            note.cardType === 'rightLong' || note.cardType === 'leftLong'
              ? NoteCardStyles.longCardTitle
              : '',
          ]}>
          {note.title}
        </Text>
        <Text
          style={
            note.cardType === 'wide'
              ? NoteCardStyles.wideDate
              : NoteCardStyles.date
          }>
          {formattedDate}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default NoteCard;
