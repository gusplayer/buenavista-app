import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import API from '../utils/api';

export default class Terms extends React.Component {
  constructor() {
    super();
    this.state = {
      terms: '',
      loading: true
    };
  }

  async componentDidMount() {
    const termsAPI = await API.getTerms();

    this.setState({
      terms: termsAPI[0].Terminos_Condiciones,
      loading: false
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#f14b5a" />
        </View>
      );
    }
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>{this.state.terms}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ffffff',
    padding: 25
  },
  text: {
    flex: 1,
    marginBottom: 40
  }
});
