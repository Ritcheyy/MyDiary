import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {NoteCardStyles} from './styles';
import {formatDate} from '../../utils/helpers';

const NoteCard = ({note, viewNote}) => {
  return (
    <>
      <TouchableOpacity
        onPress={viewNote}
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
          {formatDate(note.date_created)}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default NoteCard;
