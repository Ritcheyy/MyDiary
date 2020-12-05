import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NoteCardStyles} from './styles';

const NoteCard = ({note, viewNote}) => {
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
          {note.date}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default NoteCard;
