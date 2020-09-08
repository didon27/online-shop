import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Icon, Button } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';

import ElementFL from './components/Ads';
import LoadingStatus from '../../components/LoadingStatus';

import { colors } from '../../constants';

import styles from './styles';

import { translate } from '../../i18n';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { navigation } = this.props;

    this.focusListener = navigation.addListener('didFocus', () =>
      this.componentDidFocus(),
    );
  }

  componentWillUnmount() {
    this.focusListener.remove();
  }

  componentDidFocus() {
    const { getProfileInfo, authStatus } = this.props;
    if (authStatus) {
      getProfileInfo();
    }
  }

  handlePressChangeAvatar = async () => {
    const { onUpdateAvatar } = this.props;
    const options = {
      title: 'Select avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, response => {
      onUpdateAvatar(response);
    });
  };

  renderAvatar() {
    const { user } = this.props;

    if (user.avatar !== null) {
      return (
        <Image
          source={{ uri: user.avatar }}
          style={{ borderRadius: 75, height: 82, width: 82 }}
          resizeMode="cover"
        />
      );
    } else {
      return (
        <Icon
          name="person"
          type="ion-icon"
          size={50}
          color="silver"
          underlayColor="transparent"
          containerStyle={styles.iconProfile}
        />
      );
    }
  }

  render() {
    const {
      loading,
      authStatus,
      user,
      navigation,
      ads,
      setStatusAds,
      adsState,
    } = this.props;

    if (!authStatus) {
      return <LoadingStatus text={translate('firstYouNeed')} />;
    }
    if (loading === true) {
      return <LoadingStatus />;
    }
    return (
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
        <LinearGradient
          colors={['rgb(45,118,233)', 'rgb(97,193,248)']}
          start={{ x: 0.0, y: 1 }}
          end={{ x: 0.8, y: 1.3 }}>
          <View style={styles.headerProfile}>
            <View style={styles.headerProfileContainer}>
              <Icon
                name="folder-open"
                type="ion-icon"
                color="white"
                underlayColor="transparent"
                containerStyle={styles.iconHeader}
                onPress={() => navigation.navigate('ProfilePaymentHistory')}
              />
              <View>
                <View style={styles.profileImage}>{this.renderAvatar()}</View>
                <Icon
                  name="pencil-outline"
                  type="material-community"
                  underlayColor="transparent"
                  color="white"
                  size={20}
                  containerStyle={styles.iconHeaderProfile}
                  onPress={this.handlePressChangeAvatar}
                />
              </View>
              <View>
                <View>
                  <Icon
                    name="ios-notifications-outline"
                    type="ionicon"
                    color="white"
                    underlayColor="transparent"
                    containerStyle={styles.iconHeader}
                    onPress={() => navigation.navigate('ProfileNotifications')}
                  />
                </View>
                <View style={styles.containerTextIcon}>
                  <Text style={styles.fontInsideImage}>5</Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={styles.headerTitleText}>{user.full_name}</Text>
            </View>
          </View>
        </LinearGradient>
        <Button
          title="Settings"
          titleStyle={styles.btnSettingsTitle}
          buttonStyle={styles.btnStyle}
          onPress={() => navigation.navigate('ProfileSettings')}
        />
        <View>
          <View style={styles.infoElement}>
            <Icon
              name="ios-mail"
              type="ionicon"
              color={colors.HEADER}
              underlayColor="transparent"
              containerStyle={{ marginHorizontal: 20 }}
            />
            <Text style={styles.elementLabel}>{user.email}</Text>
          </View>
          <View style={styles.infoElement}>
            <Icon
              name="ios-call"
              type="ionicon"
              color={colors.HEADER}
              underlayColor="transparent"
              containerStyle={{ marginHorizontal: 20 }}
            />
            <Text style={styles.elementLabel}>
              {user.phone_number !== null ? user.phone_number : 'Not found'}
            </Text>
          </View>
          <View style={styles.infoElement}>
            <Icon
              name="ios-business"
              type="ionicon"
              color={colors.HEADER}
              underlayColor="transparent"
              containerStyle={{ marginHorizontal: 20 }}
            />
            <Text style={styles.elementLabel}>
              {user.city !== null ? user.city.name : 'Not found'}
            </Text>
          </View>
        </View>
        <View style={styles.blockBody}>
          <Text style={styles.headerText}>MY ADS</Text>

          <View style={styles.selectedContainer}>
            <TouchableOpacity
              onPress={() => {
                setStatusAds('active');
              }}
              style={
                adsState === 'active'
                  ? styles.textBlockActive
                  : styles.textBlockUnactive
              }>
              <Text
                style={
                  adsState === 'active'
                    ? styles.textActive
                    : styles.unactiveText
                }>
                Active
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setStatusAds('inactive');
              }}
              style={
                adsState === 'inactive'
                  ? styles.textBlockActive
                  : styles.textBlockUnactive
              }>
              <Text
                style={
                  adsState === 'inactive'
                    ? styles.textActive
                    : styles.unactiveText
                }>
                Unactive
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={ads.results}
            renderItem={({ item }) => <ElementFL item={item} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </ScrollView>
    );
  }
}

export default ProfileScreen;
