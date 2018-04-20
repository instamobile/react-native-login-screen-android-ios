const React = require("react-native");

const { StyleSheet } = React;

export default {

loginScreenContainer: {
  flex: 1,
},
logoView: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
},
logoText: {
  fontSize: 40,
  fontWeight: "800",
  marginTop: 120
},
loginFormView: {
  flex: 2
},
loginFormTextInput: {
  height: 43,
  fontSize: 14,
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#eaeaea',
  backgroundColor: '#fafafa',
  paddingLeft: 10,
  marginLeft: 15,
  marginRight: 15,
  marginTop: 5,
  marginBottom: 5,

},
loginButton: {
  backgroundColor: '#3897f1',
  borderRadius: 5,
  height: 45,
  marginTop: 10,
}
};
