import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { SocialIcon } from 'react-native-elements';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      {/* Phần hình ảnh background */}
      <Image 
        source={require('../../assets/images/img_login.jpg')}  // Sử dụng require() để thêm ảnh
        style={styles.backgroundImage} 
      />

      <View style={styles.formContainer}>
        <Text style={styles.welcomeText}>Chào mừng bạn đến với</Text>
        <Text style={styles.titleText}>THE PHUC LONG</Text>

        <View style={styles.phoneInputContainer}>
          <Text style={styles.countryCode}>+84</Text>
          <TextInput 
            style={styles.phoneInput} 
            placeholder="Nhập số điện thoại"
            keyboardType="phone-pad"
          />
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Đăng nhập</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>HOẶC</Text>

        <SocialIcon
          title="Tiếp tục bằng Twitter"
          button
          type="twitter"
          style={styles.socialButton}
          
        />
        <SocialIcon
          title="Tiếp tục bằng Facebook"
          button
          type="facebook"
          style={styles.socialButton}
        />
        <SocialIcon
          title="Tiếp tục bằng Google"
          button
          type="google"
          style={styles.socialButton}
        />

        <TouchableOpacity style={styles.languageSelector}>
          <Text style={styles.languageText}>Tiếng Việt</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  backgroundImage: {
    width: '100%',
    height: '35%', // Tùy chỉnh theo hình ảnh của bạn
    resizeMode: 'cover',
  },
  formContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 16,
    color: '#000',
    marginTop: 10,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
    width: '100%',
  },
  countryCode: {
    fontSize: 18,
    marginRight: 10,
  },
  phoneInput: {
    fontSize: 16,
    flex: 1,
  },
  loginButton: {
    backgroundColor: '#ddd',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  loginButtonText: {
    fontSize: 16,
    color: '#000',
  },
  orText: {
    fontSize: 14,
    marginVertical: 10,
    color: '#888',
  },
  socialButton: {
    width: '100%',
    marginBottom: 10,
  },
  languageSelector: {
    marginTop: 20,
  },
  languageText: {
    fontSize: 14,
    color: '#888',
  },
});

export default LoginScreen;
