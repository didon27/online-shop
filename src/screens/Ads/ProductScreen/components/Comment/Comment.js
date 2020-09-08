import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import StarRating from 'react-native-star-rating';
import moment from 'moment';

import { colors } from '../../../../../constants';
import styles from './styles';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { item } = this.props;

    return (
      <View style={styles.elementContainer}>
        <View style={{ flexDirection: 'row', flex: 1, height: 40 }}>
          <View style={{ flexDirection: 'row', flex: 1 }}>
            <View style={{ paddingRight: 10 }}>
              {item.user__avatar !== null ? (
                <Avatar
                  rounded
                  source={{ uri: item.user__avatar }}
                  imageProps={{ resizeMode: 'cover' }}
                  size={40}
                />
              ) : (
                <Avatar
                  rounded
                  icon={{
                    name: 'ios-person',
                    type: 'ionicon',
                    color: 'white',
                  }}
                  containerStyle={styles.iconProfile}
                  size={28}
                />
              )}
            </View>
            <View style={{ justifyContent: 'space-between' }}>
              <Text style={styles.userNameComents}>
                {item.user__first_name} {item.user__last_name}
              </Text>
              <StarRating
                disabled
                maxStars={5}
                rating={item.raiting}
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
          <View>
            <Text style={styles.date}>
              {moment(item.created).format('DD.MM.YYYY')}
            </Text>
          </View>
        </View>

        <Text style={styles.coment}>{item.description}</Text>
      </View>
    );
  }
}

export default Comment;
