import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {FabStyles} from './styles';
import {perfectSize} from '../../utils/pixelPerfect';

const Fab = () => {
  return (
    <TouchableOpacity style={FabStyles.btn}>
      <Icon name="plus" size={perfectSize(23)} color="white" />
    </TouchableOpacity>
  );
};

export default Fab;
