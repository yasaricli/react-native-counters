import React, {Component} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Counters from 'react-native-counters';

export default class Index extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={Styles.content}>
          <Text style={Styles.title}>Default Styles</Text>
          <Counters />
        </View>
        <View style={Styles.content}>
          <Text style={Styles.title}>Custom Styles</Text>
          <Counters
            buttonStyle={{
              borderColor: '#333',
              borderWidth: 2,
            }}
            buttonTextStyle={{
              color: '#333',
            }}
            countTextStyle={{
              color: '#333',
            }}
          />

          <View style={{marginTop: 15}}>
            <Counters
              buttonStyle={{
                borderColor: '#333',
                borderWidth: 2,
                borderRadius: 25,
              }}
              buttonTextStyle={{
                color: '#333',
              }}
              countTextStyle={{
                color: '#333',
              }}
            />
          </View>
        </View>
        <View style={Styles.content}>
          <Text style={Styles.title}>Custom Icons</Text>
          <Counters
            minusIcon={() => <Icon name="minus" size={20} color="#27AAE1" />}
            plusIcon={() => <Icon name="plus" size={20} color="#27AAE1" />}
          />
        </View>

        <View style={Styles.content}>
          <Text style={Styles.title}>Custom Texts</Text>
          <Counters
            plus={'Add'}
            minus={'Remove'}
            buttonStyle={{
              width: 100
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const Styles = StyleSheet.create({
  content: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  title: {
    paddingVertical: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
