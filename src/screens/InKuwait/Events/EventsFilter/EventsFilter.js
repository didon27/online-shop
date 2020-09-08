import React, { Component } from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import { CheckBox, Button, Input, Divider } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

import { DefaultButton } from '../../../../components/Buttons';

import { colors, globalStyles } from '../../../../constants';

import styles from './styles';

const ElementFl = ({ element, onPressElement, activeElement }) => (
  <View style={styles.elementContainer}>
    <CheckBox
      checked={activeElement === element.pk ? true : false}
      iconType="ionicon"
      checkedIcon="ios-checkmark-circle"
      uncheckedIcon="ios-radio-button-off"
      checkedColor={colors.HEADER}
      containerStyle={{ marginRight: 15 }}
      onPress={() => {
        onPressElement('category', element.pk);
      }}
    />
    <Text style={styles.textElement}>{element.name}</Text>
    <Text style={styles.textCount}>{element.count_of_events}</Text>
  </View>
);

class EventsFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategory: null,
      showDataPicker: false,
      date: new Date(),
    };
  }

  componentDidMount() {
    const { getCategoriesList } = this.props;

    getCategoriesList();
  }

  handlePressDone = () => {
    const { getEventsList, navigation } = this.props;

    getEventsList();
    navigation.goBack();
  };

  render() {
    const { categories, setFilters, filters } = this.props;
    const { showDataPicker } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <View>
            <Text style={styles.textHeader}>SELECT DATE</Text>
            <View style={styles.containerRow}>
              <Input
                editable={false}
                leftIcon={{
                  name: 'ios-calendar',
                  type: 'ionicon',
                  color: colors.HEADER,
                  paddingRight: 15,
                  containerStyle: { marginHorizontal: 10 },
                  onPress: () =>
                    this.setState({ showDataPicker: !showDataPicker }),
                }}
                placeholder={
                  filters.date !== null
                    ? moment(filters.date).format('YYYY-MM-DD')
                    : 'Select date'
                }
                placeholderTextColor={colors.LABEL_GREY_COLOR}
                inputStyle={[globalStyles.gothamBook, styles.inputStyle]}
                inputContainerStyle={styles.inputContainer}
                containerStyle={{ paddingHorizontal: 0 }}
              />
            </View>
            {showDataPicker ? (
              <DateTimePicker
                value={filters.date !== null ? filters.date : new Date()}
                mode={'date'}
                display="default"
                onChange={(event, date) => setFilters('date', date)}
              />
            ) : null}
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.textHeader}>SELECT CATEGORY</Text>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={categories}
              renderItem={({ item }) => (
                <ElementFl
                  element={item}
                  onPressElement={setFilters}
                  activeElement={filters.category}
                />
              )}
              contentContainerStyle={{ marginTop: 10 }}
              ItemSeparatorComponent={() => <Divider />}
            />
          </View>

          <DefaultButton title="Done" onPressButton={this.handlePressDone} />
        </View>
      </SafeAreaView>
    );
  }
}

export default EventsFilter;
