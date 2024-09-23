import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, Modal, KeyboardAvoidingView, Platform, PermissionsAndroid } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';

interface Option {
  id: number;
  name: string;
}

const UserProfile = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: new Date(),
    gender: '',
    email: '', 
  });
  const [avatar, setAvatar] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [dobError, setDobError] = useState<string | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [modals, setModals] = useState({ gender: false });

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: "Permission to access photos",
          message: "This app needs access to your photos.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  };

  const handleChoosePhoto = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    if (!result.canceled && result.assets && result.assets.length > 0) {
      setAvatar(result.assets[0].uri);
    }
  };

  const validateEmail = (email: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validateDob = () => {
    return formData.dob instanceof Date && !isNaN(formData.dob.getTime());
  };

  const handleUpdateInfo = () => {
    setEmailError(null);
    setDobError(null);

    if (!validateEmail(formData.email)) {
      setEmailError("Vui lòng nhập địa chỉ email hợp lệ.");
      return;
    }

    if (!validateDob()) {
      setDobError("Vui lòng chọn ngày sinh.");
      return;
    }

    console.log("Cập nhật thông tin:", formData, avatar);
  };

  const handleDeleteAccount = () => {
    console.log("Xóa tài khoản");
  };

  const onChangeDob = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || formData.dob;
    setShowDatePicker(false);
    setFormData({ ...formData, dob: currentDate });
  };

  const renderModal = (type: keyof typeof modals, options: Option[], onSelect: (value: string) => void) => (
    <Modal
      transparent={true}
      visible={modals[type]}
      onRequestClose={() => setModals({ ...modals, [type]: false })}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <View style={{ width: 300, backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
          {options.map((option) => (
            <TouchableOpacity key={option.id} onPress={() => {
              onSelect(option.name);
              setModals({ ...modals, [type]: false });
            }}>
              <Text style={{ padding: 10 }}>{option.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView style={{ flex: 1, backgroundColor: '#F3F4F6', padding: 20 }}>
        <TouchableOpacity onPress={handleChoosePhoto} style={{ marginBottom: 20, alignSelf: 'center' }}>
          {avatar ? (
            <Image source={{ uri: avatar }} style={{ width: 160, height: 160, borderRadius: 80 }} />
          ) : (
            <View style={{ width: 160, height: 160, borderRadius: 80, backgroundColor: '#E5E7EB', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 24, color: '#4B5563' }}>Chọn ảnh</Text>
            </View>
          )}
        </TouchableOpacity>

        <Text style={{ fontSize: 18, marginBottom: 8 }}>Họ và Tên</Text>
        <TextInput
          value={formData.fullName}
          onChangeText={(text) => setFormData({ ...formData, fullName: text })}
          placeholder="Nhập họ và tên"
          style={{ borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 4, padding: 8, marginBottom: 20 }}
        />

        <Text style={{ fontSize: 18, marginBottom: 8 }}>Email</Text>
        <TextInput
          value={formData.email}
          onChangeText={(text) => setFormData({ ...formData, email: text })}
          placeholder="Nhập email"
          style={{ borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 4, padding: 8, marginBottom: 20 }}
          keyboardType="email-address"
        />
        
        {emailError && (
          <Text style={{ color: 'red', marginBottom: 8 }}>{emailError}</Text>
        )}

        <View>
          <Text style={{ fontSize: 18, marginBottom: 8 }}>Giới tính</Text>
          <TouchableOpacity style={{ borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 4, padding: 8, marginBottom: 20 }} onPress={() => setModals({ ...modals, gender: true })}>
            <Text>{formData.gender || 'Chọn giới tính'}</Text>
          </TouchableOpacity>
          {renderModal('gender', [
            { id: 1, name: 'Nam' },
            { id: 2, name: 'Nữ' },
            { id: 3, name: 'Khác' },
          ], (value) => setFormData({ ...formData, gender: value }))}

        </View>

        <View>
          <Text style={{ fontSize: 18, marginBottom: 8 }}>Ngày sinh</Text>
          <TouchableOpacity onPress={() => setShowDatePicker(true)} style={{ borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 4, padding: 8, marginBottom: 20 }}>
            <Text>{formData.dob.toLocaleDateString() || 'Chọn ngày sinh'}</Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={formData.dob}
              mode="date"
              display="default"
              onChange={onChangeDob}
            />
          )}
          {dobError && (
            <Text style={{ color: 'red', marginBottom: 8 }}>{dobError}</Text>
          )}
        </View>

        <TouchableOpacity
          onPress={handleUpdateInfo}
          style={{ backgroundColor: '#4CAF50', padding: 10, borderRadius: 4, alignItems: 'center', marginTop: 20 }}
        >
          <Text style={{ color: 'white', fontSize: 18 }}>Cập nhật thông tin</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleDeleteAccount}
          style={{ backgroundColor: '#F44336', padding: 10, borderRadius: 4, alignItems: 'center', marginTop: 10 }}
        >
          <Text style={{ color: 'white', fontSize: 18 }}>Xóa tài khoản</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default UserProfile;
