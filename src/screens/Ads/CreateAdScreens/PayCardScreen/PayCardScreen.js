import React, { Component } from 'react';
import { View, Text, ScrollView, Modal } from 'react-native';
import { Icon, Input, Button } from 'react-native-elements';
import { WebView } from 'react-native-webview'

import styles from './styles';
import ModalComplite from './ModalComplite';

class PayCardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      cardType: 'visa',
      expYear: '',
      expMonth: '',
      cvc: '',
      isWebviewModalVisible: false,
      url: null,
      paymentId: null,
      addId: null,
      showModal: false,
    };
  }

  render() {
    const {
      cvc,
      number,
      expMonth,
      expYear,
      url,
      isWebviewModalVisible,
      showModal
    } = this.state;


    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Modal 
          animationType="fade"
          visible={isWebviewModalVisible}
          onRequestClose={() => {this.onShowModal}} 
        >
          <View style={{ flex: 1 }}>
            <WebView
              source={{ uri: url }}
            />
            <Button
              title="Cancel"
              onPress={this.toggleWebviewModal}
            />
          </View>
        </Modal>

        <View style={[styles.container, { paddingHorizontal: 15 }]}>
          <View style={styles.cardView}>
            <Icon
              name="ios-camera"
              type="ionicon"
              color="white"
              underlayColor="transparent"
              size={48}
              containerStyle={styles.iconContainer}
              onPress={() => {
                this.props.navigation.navigate('MakePicture', {
                  variant: 'card',
                });
              }}
            />
            <Text style={styles.textHint}>Take a photo of your card</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Input
              placeholder="Credit card number"
              inputStyle={styles.inputRowStyle}
              inputContainerStyle={styles.inputRowCStyle}
              containerStyle={styles.inputContainer}
              keyboardType="number-pad"
              value={number}
              onChangeText={number => this.setState({ number })}
            />
            <View style={{ flexDirection: 'row' }}>
              <Input
                placeholder="4584"
                inputStyle={styles.inputRowStyle}
                inputContainerStyle={styles.inputRowCStyle}
                containerStyle={styles.inputRowContainer}
              />
              <Input
                placeholder="09/20"
                inputContainerStyle={styles.inputRowCStyle}
                inputStyle={styles.inputRowStyle}
                containerStyle={styles.inputRowContainer}
                keyboardType="number-pad"
                value={expMonth}
                onChangeText={expMonth => this.setState({ expMonth })}
              />
              <Input
                placeholder="2021"
                inputStyle={styles.inputRowStyle}
                inputContainerStyle={styles.inputRowCStyle}
                containerStyle={styles.inputRowContainer}
                keyboardType="number-pad"
                value={expYear}
                onChangeText={expYear => this.setState({ expYear })}
              />
            </View>
            <Input
              placeholder="CVC/CVV"
              inputStyle={styles.inputRowStyle}
              inputContainerStyle={styles.inputRowCStyle}
              containerStyle={styles.inputContainer}
              keyboardType="number-pad"
              value={cvc}
              onChangeText={cvc => this.setState({ cvc })}
            />
          </View>
        </View>
        <Button
          title="BUY AD (150 KWD)"
          titleStyle={styles.btnTitle}
          buttonStyle={styles.btnStyle}
          onPress={() => this.loadWebview()}
        />
        
        <ModalComplite show={this.state.showModal} onClose={this.onShowModal} />
      </ScrollView>
    );
  }

  loadWebview = () => {
    const data = new FormData();
    const token = this.props.token;

    data.append('number', this.state.number)
    data.append('cvc', this.state.cvc)
    data.append('exp_year', this.state.expYear)
    data.append('exp_month', this.state.expMonth)
    data.append('payment_id', '3')

    const url = 'https://staging.masaha.app/api/v1/payments/credit-charge/'

    const requestOptions = {
      method: 'POST',
      headers: new Headers({
        ['Authorization']: `Bearer ${token}`,
      }),
      body: data,
    };

    fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => {
        this.setState({ url: result.url })
      })
      .catch(error => console.log(error))

    this.toggleWebviewModal()
  }

  onShowModal = () => {

    this.setState({
      showModal: !this.state.showModal,
    });
    
    if (!this.state.showModal === false) {
      this.props.navigation.navigate('Profile');
    }

  };

  toggleWebviewModal = () => {
    this.setState(prevState => ({
        isWebviewModalVisible: !prevState.isWebviewModalVisible,
    }));
};

}

export default PayCardScreen;



