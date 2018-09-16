import { createStackNavigator } from 'react-navigation';
import Home from '../HomeScreen/Home';
import Theme from '../SettingsScreen/Theme';

export default createStackNavigator(
	{
		Home: {
			screen: Home,
			navigationOptions: {
				header: () => null
			}
		},
		Theme: {
			screen: Theme,
			navigationOptions: ({ navigation }) => ({
				headerTitle: navigation.state.params.title
			})
		}
	},
	{
		headerMode: 'screen'
	}
);