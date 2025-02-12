import { AppRegistry } from 'react-native-web';
import App from './App';
import './index.css';  // if using styles

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', {
  initialProps: {},
  rootTag: document.getElementById('root'),
});
