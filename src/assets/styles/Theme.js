import Colors from './Colors';

const getColorByTheme = (currentTheme, value) => {
  let color = '';
  switch (value) {
    case 'title':
      currentTheme === 'dark' ? (color = Colors.white) : (color = Colors.black);
      break;
    case 'statusBar':
      currentTheme === 'dark'
        ? (color = 'light-content')
        : (color = 'dark-content');
      break;
    case 'scrollIndicator':
      currentTheme === 'dark' ? (color = 'white') : (color = 'black');
      break;
    default:
      currentTheme === 'dark' ? (color = Colors.black) : (color = Colors.white);
  }
  return color;
};

export {getColorByTheme};
