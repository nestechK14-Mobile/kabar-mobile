import { View, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import React, { useState } from 'react';
import styles from './SignIn.styles';
import { FONTS, IC_CloseEye, IC_Eye, IC_Facebook, IC_Google, IC_MailBox } from '@/assets';
import CheckBox from '@react-native-community/checkbox';
import { scale } from '@/utils';
import { Text } from '@/components';
import { stringGotUppercase } from '@/utils/validation';

const SignInView = props => {
  const { navigateToTab, SIGN_IN_LABEL } = props;
  const [isCheck, setIsCheck] = useState(false);
  const [getPasswordVisible, setPasswordVisible] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const regex = /[^A-Z]+\.[^A-Z]+/;

  const handleLogin = () => {
    if (!userName) {
      setErrorText('Chưa nhập UserName');
    }
    if (!password) {
      setErrorText('Chưa nhập Password');
    }
    console.log(stringGotUppercase(userName), 'value upper case');
    if (stringGotUppercase(userName)) {
      setErrorText('UserName có ký tự in hoa');
    }
    if (userName.length < 10) {
      setErrorText('Username phải lớn hơn 10 kí tự');
    }
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView>
        <View style={styles.container}>
          <Text content={'Hello'} fontSize={scale(48)} />
          <Text
            content={'Again'}
            textStyle={{
              color: 'blue',
              fontSize: 48,
              fontWeight: '700',
              fontFamily: FONTS.SEMIBOLD
            }}
          />
          <Text
            content={'welcome back you`ve'}
            style={[styles.textDefault, { color: 'black', fontSize: 20, fontWeight: '400' }]}
          />
          <Text
            content={'been missed'}
            style={[styles.textDefault, { color: 'black', fontSize: 20, fontWeight: '400' }]}
          />
          <View style={styles.containerInputPassword}>
            <View style={{ flexDirection: 'row' }}>
              <Text
                content={'User Name'}
                textStyle={[FONTS.REGULAR, { fontsize: 14, fontWeight: 400 }]}
              />
              <Text content={'*'} textStyle={{ color: 'red', justifyContent: 'flex-end' }} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                justifyContent: 'space-between',
                borderWidth: scale(1),
                paddingHorizontal: scale(8),
                borderRadius: scale(6),
                borderColor: 'green'
              }}>
              <TextInput
                style={{
                  width: '50%',
                  fontSize: scale(14),
                  fontFamily: FONTS.REGULAR,
                  color: 'blue'
                }}
                placeholder="tài khoản"
                value={userName}
                onChangeText={function (userNameValue) {
                  setUserName(userNameValue);
                }}
              />
            </View>
          </View>
          <View style={styles.containerInputPassword}>
            <View style={styles.containerInputPasswordLabel}>
              <Text content={'Password'} textStyle={styles.labelDefault} />
              <Text content={'*'} textStyle={styles.labelRequired} />
            </View>
            <View style={styles.containerInputPasswordBody}>
              <TextInput
                style={styles.containerInputPasswordBodyInput}
                placeholder={SIGN_IN_LABEL.PASSWORD}
                secureTextEntry={getPasswordVisible ? false : true}
                value={password}
                onChangeText={function (passwordValue) {
                  setPassword(passwordValue);
                }}
              />
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: scale(24),
                  height: scale(24)
                }}
                onPress={() => {
                  setPasswordVisible(!getPasswordVisible);
                }}>
                {getPasswordVisible ? <IC_Eye /> : <IC_CloseEye />}
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.containerCheckBox}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <CheckBox
                disabled={false}
                value={isCheck}
                onValueChange={() => setIsCheck(!isCheck)}
                tintColors={{ true: 'blue' }}
              />
              <Text style={styles.textDefault}>Remember me</Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => navigateToTab()}>
                <Text style={[styles.textDefault, { color: 'blue' }]}>Forget Password</Text>
              </TouchableOpacity>
            </View>
          </View>
          {errorText && <Text content={errorText} textStyle={{ color: 'red' }} />}
          <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin}>
            <Text
              content={'Login'}
              textStyle={(styles.textDefault, { fontWeight: '600', color: 'white', fontSize: 16 })}
            />
          </TouchableOpacity>
          <View style={{ marginTop: 10, alignItems: 'center' }}>
            <Text style={(styles.textDefault, { fontWeight: '400', fontSize: 14 })}>
              or continue with
            </Text>
          </View>
          <View style={styles.containerBtnFbGg}>
            <TouchableOpacity style={styles.btnFbGg}>
              <IC_Facebook style={{ marginRight: 10 }} />
              <Text style={(styles.textDefault, { fontWeight: '600', fontSize: 16 })}>
                Facebook
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnFbGg}>
              <IC_Google style={{ marginRight: 10 }} />
              <Text style={(styles.textDefault, { fontWeight: '600', fontSize: 16 })}>Google</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerSignup}>
            <Text>don't have an account ?</Text>
            <TouchableOpacity>
              <Text style={(styles.textDefault, { color: 'blue', fontWeight: '500' })}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInView;
