import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Flex = () => {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
          flexWrap: 'wrap',
      
        },
      ]}>
        {/* <View style={{flex: 1, backgroundColor: 'orange'}} />
        <View style={{flex: 1, backgroundColor: 'white'}} />
        <View style={{flex: 1, backgroundColor: 'green'}} /> */}
        <View style={{flex: 1, backgroundColor: 'orange',justifyContent: 'flex-start'
            ,borderBottomEndRadius: 20, borderBottomLeftRadius: 20, borderTopRightRadius: 20
            , borderTopLeftRadius: 20, marginBottom: 10, marginRight: 10, height: '30%'}}>
        <Text style = {styles.text}>Design Application</Text>
          <Text style = {{textAlign: 'center' }}>Hello World</Text>
          <Text  style = {{textAlign: 'center' }}>Basic Quality</Text>

        </View>
        <View style={{flex: 1, backgroundColor: 'orange',justifyContent: 'flex-start'
            ,borderBottomEndRadius: 20, borderBottomLeftRadius: 20, borderTopRightRadius: 20
            , borderTopLeftRadius: 20, marginBottom: 10,  marginRight: 10, height: '30%'}}>
        <Text style = {styles.text}>Design Application</Text>
          <Text style = {{textAlign: 'center' }}>Hello World</Text>
          <Text  style = {{textAlign: 'center' }}>Basic Quality</Text>

        </View>
        <View style={{flex: 1, backgroundColor: 'orange',justifyContent: 'flex-start'
            ,borderBottomEndRadius: 20, borderBottomLeftRadius: 20, borderTopRightRadius: 20
            , borderTopLeftRadius: 20, marginBottom: 10,  marginRight: 10, height: '30%'}}>
        <Text style = {styles.text}>Design Application</Text>
          <Text style = {{textAlign: 'center' }}>Hello World</Text>
          <Text  style = {{textAlign: 'center' }}>Basic Quality</Text>

        </View>
        <View style={{flex: 1, backgroundColor: 'orange',justifyContent: 'flex-start'
            ,borderBottomEndRadius: 20, borderBottomLeftRadius: 20, borderTopRightRadius: 20
            , borderTopLeftRadius: 20, marginBottom: 10, marginRight: 10, height: '30%'}}>
        <Text style = {styles.text}>Design Application</Text>
          <Text style = {{textAlign: 'center' }}>Hello World</Text>
          <Text  style = {{textAlign: 'center' }}>Basic Quality</Text>

        </View>
        <View style={{flex: 1, backgroundColor: 'orange',justifyContent: 'flex-start'
            ,borderBottomEndRadius: 20, borderBottomLeftRadius: 20, borderTopRightRadius: 20
            , borderTopLeftRadius: 20, marginBottom: 10, marginRight: 10, height: '30%'}}>
        <Text style = {styles.text}>Design Application</Text>
          <Text style = {{textAlign: 'center' }}>Hello World</Text>
          <Text  style = {{textAlign: 'center' }}>Basic Quality</Text>

        </View>

        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    color: 'red',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Cochin',
    verticalAlign: 'top',
    textTransform: 'uppercase',
    textShadowColor: 'rgba(1, 1, 1, 1.25)',
    textShadowOffset: {width: -2, height: -2},
    textShadowRadius: 5,
    paddingTop : 15,
    }
});


export default Flex;