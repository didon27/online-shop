import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';

import ProfileScreen from '../screens/ProfileScreen';
import ProfileSettings from '../screens/Profile/ProfileSettings';
import ProfileSettingsChangePassword from '../screens/Profile/ProfileSettingsChangePassword';
import ProfileSettingsPersonalInformaion from '../screens/Profile/ProfileSettingsPersonalInformaion';
import ProfileSettingsPrivacyPolicy from '../screens/Profile/ProfileSettingsPrivacyPolicy';
import ProfileSettingsTermsOfUse from '../screens/Profile/ProfileSettingsTermsOfUse';
import ProfilePaymentHistory from '../screens/Profile/ProfilePaymentHistory';
import ProfileNotifications from '../screens/Profile/ProfileNotifications';
import ProfileNotificationsChat from '../screens/Profile/ProfileNotificationsChat';

import { DefaultHeader } from '../components/Headers';

import { colors } from '../constants';

const ProfileNavigation = createStackNavigator(
  {
    Home: {
      screen: ProfileScreen,
      navigationOptions: {
        header: null,
      },
    },
    ProfileSettings: {
      screen: ProfileSettings,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: (
            <DefaultHeader
              title="Settings"
              leftIcon={true}
              onPressLeftIcon={() => navigation.goBack()}
            />
          ),
          headerLeft: null,
          headerRight: null,
        };
      },
    },
    ProfileSettingsChangePassword: {
      screen: ProfileSettingsChangePassword,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: (
            <DefaultHeader
              title="Change password"
              leftIcon={true}
              onPressLeftIcon={() => navigation.goBack()}
            />
          ),
          headerLeft: null,
          headerRight: null,
        };
      },
    },
    ProfileSettingsPersonalInformaion: {
      screen: ProfileSettingsPersonalInformaion,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: (
            <DefaultHeader
              title="Personal information"
              leftIcon={true}
              onPressLeftIcon={() => navigation.goBack()}
            />
          ),
          headerLeft: null,
          headerRight: null,
        };
      },
    },
    ProfileSettingsPrivacyPolicy: {
      screen: ProfileSettingsPrivacyPolicy,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: (
            <DefaultHeader
              title="Privacy Policy"
              leftIcon={true}
              onPressLeftIcon={() => navigation.goBack()}
            />
          ),
          headerLeft: null,
          headerRight: null,
        };
      },
    },
    ProfileSettingsTermsOfUse: {
      screen: ProfileSettingsTermsOfUse,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: (
            <DefaultHeader
              title="Terms of use"
              leftIcon={true}
              onPressLeftIcon={() => navigation.goBack()}
            />
          ),
          headerLeft: null,
          headerRight: null,
        };
      },
    },
    ProfilePaymentHistory: {
      screen: ProfilePaymentHistory,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: (
            <DefaultHeader
              title="Payment history"
              leftIcon={true}
              onPressLeftIcon={() => navigation.goBack()}
            />
          ),
          headerLeft: null,
          headerRight: null,
        };
      },
    },
    ProfileNotifications: {
      screen: ProfileNotifications,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: (
            <DefaultHeader
              title="Notifications"
              leftIcon={true}
              onPressLeftIcon={() => navigation.goBack()}
            />
          ),
          headerLeft: null,
          headerRight: null,
        };
      },
    },
    ProfileNotificationsChat: {
      screen: ProfileNotificationsChat,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: (
            <DefaultHeader
              title="Chat"
              leftIcon={true}
              onPressLeftIcon={() => navigation.goBack()}
            />
          ),
          headerLeft: null,
          headerRight: null,
        };
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.HEADER,
      },
    },
  },
);

export default ProfileNavigation;
