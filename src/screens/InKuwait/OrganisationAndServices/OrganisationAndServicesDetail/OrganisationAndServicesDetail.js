import React, { Component } from 'react';
import { ScrollView, View, Text, Image, Dimensions } from 'react-native';
import { Icon, Button } from 'react-native-elements';

import StarRating from 'react-native-star-rating';

import styles from './styles';
import { colors, globalStyles } from '../../../../constants';

const imgWidth = 1000;
const imgHeight = 750;

class OrganisationAndServicesDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iWidth: 0,
      iHeight: 0,
      imgURL:
        'https://www.nationalgeographic.com/content/dam/travel/Guide-Pages/north-america/united-states/newyork/newyork_NationalGeographic_2328428.adapt.1900.1.jpg',
      shareModal: false,
    };
  }

  componentDidMount() {
    Image.getSize(this.state.imgURL, (width, height) => {
      this.setState({
        iWidth: width,
        iHeight: height,
      });
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <View style={styles.container}>
            <Icon
              containerStyle={{}}
              name="chevron-left"
              type="feather"
              color="white"
              size={32}
              underlayColor="transparent"
              onPress={() => this.props.navigation.goBack()}
            />

            <Icon
              containerStyle={styles.icons}
              name="share-apple"
              type="evilicon"
              color="white"
              size={32}
              underlayColor="transparent"
              onPress={this.handlePressShere}
            />
          </View>
        </View>

        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View
            style={{
              width: '100%',
              height: imgHeight / (imgWidth / Dimensions.get('window').width),
            }}>
            <Image
              source={require('../../../../assets/images/building.jpg')}
              style={styles.imageContainer}
              resizeMode="contain"
            />
          </View>

          <View
            style={{
              flex: 1,
              backgroundColor: colors.BACKGROUND,
            }}>
            <View style={styles.wraperView}>
              <View style={styles.titleView}>
                <Text style={[globalStyles.gothamMediumRegular, styles.title]}>
                  Central skyscraper
                </Text>
                <View style={styles.date}>
                  <StarRating
                    disabled
                    maxStars={5}
                    rating={'4'}
                    emptyStar="ios-star"
                    fullStar="ios-star"
                    halfStar="ios-star"
                    iconSet="Ionicons"
                    fullStarColor={colors.STAR}
                    emptyStarColor={colors.UNACTIVE}
                    starSize={15}
                    starStyle={{ marginRight: 6 }}
                  />
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 20,
                }}>
                <View style={styles.block}>
                  <Icon
                    name="calendar-range-outline"
                    type="material-community"
                    color={'#63A3FF'}
                    iconStyle={{ marginRight: 10 }}
                    underlayColor="transparent"
                  />
                  <Text style={[globalStyles.gothamBook, styles.blockText]}>
                    Oct 11-12
                  </Text>
                </View>
                <View style={styles.block}>
                  <Icon
                    name="clock"
                    type="octicon"
                    color={'#63A3FF'}
                    iconStyle={{ marginRight: 10 }}
                    underlayColor="transparent"
                  />
                  <Text style={[globalStyles.gothamBook, styles.blockText]}>
                    11am - 14pm
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 15,
                }}>
                <View style={styles.block}>
                  <Icon
                    name="cash"
                    type="material-community"
                    color={'#63A3FF'}
                    iconStyle={{ marginRight: 10 }}
                    underlayColor="transparent"
                  />
                  <Text style={[globalStyles.gothamBook, styles.blockText]}>
                    3 KD Entry
                  </Text>
                </View>
                <View style={styles.block}>
                  <Icon
                    name="tag-outline"
                    type="material-community"
                    color={'#63A3FF'}
                    underlayColor="transparent"
                    iconStyle={{
                      marginRight: 10,
                      transform: [{ rotate: '90deg' }],
                    }}
                  />
                  <Text style={[globalStyles.gothamBook, styles.blockText]}>
                    Education
                  </Text>
                </View>
              </View>
              <View style={styles.descriptionView}>
                <Text style={[globalStyles.gothamBook, styles.description]}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with.
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default OrganisationAndServicesDetail;
