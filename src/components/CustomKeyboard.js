/**
 * CustomKeyboard
 * https://github.com/markuswind/react-native-select-input
 */

import KeyboardButton from './KeyboardButton.js';
import styles from './../stylesheets/customKeyboard.css.js';
import AccessoryArrowButton from './AccessoryArrowButton';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { Modal, TouchableWithoutFeedback, View, StyleSheet } from 'react-native';

class CustomKeyboard extends Component {
  constructor(props) {
    super(props);
  }

  onCancelPress() {
    this.props.onCancelPress();
  }

  onSubmitPress() {
    this.props.onSubmitPress();
  }

  render() {
    const props = this.props;
    const buttonsViewStyles = {
      backgroundColor: props.buttonsBackgroundColor,
      borderColor: props.buttonsBorderColor,
      borderBottomWidth: props.buttonsBorderWidth
    };

    const {
      nextButton,
      previousButton,
      doneButton,
      doneButtonTitle,
      infoContainer,
      infoMessage,
      tintColor,
      onNext,
      onPrevious,
      nextDisabled,
      previousDisabled,
      nextHidden,
      previousHidden,
      accessoryStyle,
      nextButtonStyle,
      previousButtonStyle,
      doneButtonStyle,
      doneButtonTitleStyle,
      infoMessageStyle,
      nextButtonDirection,
      previousButtonDirection,
      ...passThroughProps
    } = this.props;

    return (
      <Modal animationType={'slide'} transparent={true} visible={props.visible}>
        <TouchableWithoutFeedback onPress={this.onCancelPress.bind(this)}>
          <View style={styles.container}>
            <View style={styles.modal}>
              <View style={[styles.buttonview, buttonsViewStyles]}>
                <View style={localStyles.accessoryContainer}>
                  <View style={localStyles.leftContainer}>
                    <AccessoryArrowButton
                      style={[localStyles.previousButton, previousButtonStyle]}
                      hidden={previousHidden}
                      disabled={previousDisabled}
                      direction={previousButtonDirection}
                      customButton={previousButton}
                      tintColor={tintColor}
                      onPress={onPrevious}
                    />
                    <AccessoryArrowButton
                      style={nextButtonStyle && { style: nextButtonStyle }}
                      hidden={nextHidden}
                      disabled={nextDisabled}
                      direction={nextButtonDirection}
                      customButton={nextButton}
                      tintColor={tintColor}
                      onPress={onNext}
                    />
                  </View>


                <KeyboardButton
                  color={props.buttonsTextColor}
                  onPress={this.onCancelPress.bind(this)}
                  text={props.submitKeyText}
                  textAlign={'right'}
                  textSize={props.buttonsTextSize}
                />
              </View>

              </View>

              <View>{props.children}</View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

CustomKeyboard.propTypes = {
  buttonsBackgroundColor: PropTypes.string,
  buttonsBorderColor: PropTypes.string,
  buttonsBorderWidth: PropTypes.number,
  buttonTextColor: PropTypes.string,
  buttonTextSize: PropTypes.number,
  cancelKeyText: PropTypes.string,
  onCancelPress: PropTypes.func.isRequired,
  onSubmitPress: PropTypes.func.isRequired,
  submitKeyText: PropTypes.string,
  visible: PropTypes.bool.isRequired
};

CustomKeyboard.defaultProps = {
  doneButtonTitle: 'Done',
  tintColor: '#007AFF',
  nextDisabled: false,
  previousDisabled: false,
  nextHidden: false,
  previousHidden: false,
  nextButtonDirection: 'down',
  previousButtonDirection: 'up'
};

const localStyles = StyleSheet.create({
  accessoryContainer: {
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    borderTopColor: '#c1c2c2',
    borderTopWidth: 1,
    backgroundColor: '#eff0f1',
    flex: 1
  },
  accessoryContainerReverse: {
    flexDirection: 'row-reverse'
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  previousButton: {
    marginRight: 16
  },
  doneButtonText: {
    fontWeight: 'bold'
  }
});

export default CustomKeyboard;
