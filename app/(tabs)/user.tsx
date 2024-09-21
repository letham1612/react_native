import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import axios from 'axios';
import { useRouter } from 'expo-router';

interface FormData {
  name: string;
  phone: string;
  gender: string;
  idNumber: string;
  dob: string;
  email: string;
  province: string;
  provinceId: string;
  district: string;
  districtId: string;
  ward: string;
  wardId: string;
  address: string;
}

interface Location {
  id: number;
  full_name: string;
}

const UserInfo: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    gender: '',
    idNumber: '',
    dob: '',
    email: '',
    province: '',
    provinceId: '',
    district: '',
    districtId: '',
    ward: '',
    wardId: '',
    address: '',
  });

  const [modals, setModals] = useState<{ [key: string]: boolean }>({
    gender: false,
    province: false,
    district: false,
    ward: false,
  });
  const [provinces, setProvinces] = useState<Location[]>([]);
  const [districts, setDistricts] = useState<Location[]>([]);
  const [wards, setWards] = useState<Location[]>([]);

  const scrollViewRef = useRef<ScrollView | null>(null);

  const handleFocus = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };

  const fetchProvinces = async () => {
    try {
      const response = await axios.get('https://esgoo.net/api-tinhthanh/1/0.htm');
      const provincesData = response.data.data.map((item: any) => ({
        id: item.id,
        full_name: item.name,
      }));
      setProvinces(provincesData);
      console.log('Fetched provinces:', provincesData);
    } catch (error) {
      console.error('Error fetching provinces:', error);
    }
  };

  const fetchDistricts = async (provinceId: string) => {
    if (provinceId) {
      try {
        const response = await axios.get(`https://esgoo.net/api-tinhthanh/2/${provinceId}.htm`);
        const districtsData = response.data.data.map((item: any) => ({
          id: item.id,
          full_name: item.name,
        }));
        setDistricts(districtsData);
        console.log('Fetched districts:', districtsData);
      } catch (error) {
        console.error('Error fetching districts:', error);
      }
    } else {
      console.error('No province ID provided.');
    }
  };

  const fetchWards = async (districtId: string) => {
    if (districtId) {
      try {
        const response = await axios.get(`https://esgoo.net/api-tinhthanh/3/${districtId}.htm`);
        const wardsData = response.data.data.map((item: any) => ({
          id: item.id,
          full_name: item.name,
        }));
        setWards(wardsData);
        console.log('Fetched wards:', wardsData);
      } catch (error) {
        console.error('Error fetching wards:', error);
      }
    }
  };

  useEffect(() => {
    fetchProvinces();
  }, []);

  useEffect(() => {
    if (formData.provinceId) {
      fetchDistricts(formData.provinceId);
    }
  }, [formData.provinceId]);

  useEffect(() => {
    if (formData.districtId) {
      fetchWards(formData.districtId);
    }
  }, [formData.districtId]);

  const handleSelect = (type: string, fullName: string, code: string) => {
    if (type === 'province') {
      setFormData((prev) => ({
        ...prev,
        province: fullName, // Hiển thị full_name cho tỉnh
        provinceId: code,   // Lưu id để gọi API lấy quận/huyện
        district: '',       // Reset quận và xã khi chọn lại tỉnh
        ward: '',
      }));
      setDistricts([]);
      setWards([]);
      fetchDistricts(code); // Gọi API lấy quận/huyện bằng id
    } else if (type === 'district') {
      setFormData((prev) => ({
        ...prev,
        district: fullName,  // Hiển thị full_name cho quận/huyện
        districtId: code,    // Lưu id để gọi API lấy xã/phường
        ward: '',            // Reset xã khi chọn lại quận/huyện
      }));
      setWards([]);
      fetchWards(code); // Gọi API lấy xã/phường bằng id
    } else if (type === 'ward') {
      setFormData((prev) => ({
        ...prev,
        ward: fullName,  // Hiển thị full_name cho xã/phường
        wardId: code,    // Lưu id nếu cần
      }));
    }

    setModals((prev) => ({ ...prev, [type]: false }));
  };

  const renderModal = (type: string, items: Location[]) => (
    <Modal visible={modals[type]} animationType="slide">
      <View style={styles.modalContainer}>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSelect(type, item.full_name, item.id.toString())}>
              <Text style={styles.modalItem}>{item.full_name}</Text>
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity onPress={() => setModals((prev) => ({ ...prev, [type]: false }))}>
          <Text style={styles.closeButton}>Đóng</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
    >
      <ScrollView
        ref={scrollViewRef}
        style={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => router.push('/home')}>
            <Text style={styles.backButton}>{'<'}</Text>
          </TouchableOpacity>
          <Text style={styles.header}>Thông tin cá nhân</Text>
        </View>

        {/* Các trường thông tin khác */}
        <View>
          <Text style={styles.label}>Họ và tên</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập họ và tên"
            value={formData.name}
            onChangeText={(text) => setFormData({ ...formData, name: text })}
          />
        </View>

        <View>
          <Text style={styles.label}>Số điện thoại</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập số điện thoại"
            keyboardType="phone-pad"
            value={formData.phone}
            onChangeText={(text) => setFormData({ ...formData, phone: text })}
          />
        </View>

        <View>
          <Text style={styles.label}>Giới tính</Text>
          <TouchableOpacity style={styles.input} onPress={() => setModals({ ...modals, gender: true })}>
            <Text>{formData.gender || 'Chọn giới tính'}</Text>
          </TouchableOpacity>
          {renderModal('gender', [
            { id: 1, full_name: 'Nam' },
            { id: 2, full_name: 'Nữ' },
            { id: 3, full_name: 'Khác' },
          ])}
        </View>

        <View>
          <Text style={styles.label}>Số CMND/CCCD</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập số CMND/CCCD"
            value={formData.idNumber}
            onChangeText={(text) => setFormData({ ...formData, idNumber: text })}
          />
        </View>

        <View>
          <Text style={styles.label}>Ngày sinh</Text>
          <TextInput
            style={styles.input}
            placeholder="Ngày sinh (YYYY-MM-DD)"
            value={formData.dob}
            onChangeText={(text) => setFormData({ ...formData, dob: text })}
          />
        </View>

        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập email"
            keyboardType="email-address"
            value={formData.email}
            onChangeText={(text) => setFormData({ ...formData, email: text })}
          />
        </View>

        {/* Tỉnh/thành phố */}
        <View>
          <Text style={styles.label}>Tỉnh/Thành phố</Text>
          <TouchableOpacity style={styles.input} onPress={() => setModals({ ...modals, province: true })}>
            <Text>{formData.province || 'Chọn tỉnh/thành phố'}</Text>
          </TouchableOpacity>
          {renderModal('province', provinces)}
        </View>

        {/* Quận/Huyện */}
        <View>
          <Text style={styles.label}>Quận/Huyện</Text>
          <TouchableOpacity style={styles.input} onPress={() => setModals({ ...modals, district: true })}>
            <Text>{formData.district || 'Chọn quận/huyện'}</Text>
          </TouchableOpacity>
          {renderModal('district', districts)}
        </View>

        {/* Xã/Phường */}
        <View>
          <Text style={styles.label}>Xã/Phường</Text>
          <TouchableOpacity style={styles.input} onPress={() => setModals({ ...modals, ward: true })}>
            <Text>{formData.ward || 'Chọn xã/phường'}</Text>
          </TouchableOpacity>
          {renderModal('ward', wards)}
        </View>

         <View>
          <Text style={styles.label}>Địa chỉ</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập địa chỉ"
            onFocus={handleFocus}
            value={formData.address}
            onChangeText={(text) => setFormData({ ...formData, address: text })}
          />
        </View>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.saveButton} onPress={() => console.log('Saving data...')}>
            <Text style={styles.saveButtonText}>Lưu thông tin</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  backButton: {
    fontSize: 24,
    marginRight: 8,
    color:'#006E3C'
  },
  header: {
    fontSize: 24,
    color:'#006E3C'
  },
  label: {
    marginTop: 16,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 12,
    marginTop: 8,
  },
  modalContainer: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    padding: 16,
    marginTop:30,
  },
  modalItem: {
    fontSize: 18,
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  closeButton: {
    fontSize: 18,
    color: 'blue',
    marginTop: 16,
  },
  footer: {
    marginTop: 32,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  saveButton: {
    backgroundColor: '#006E3C',
    paddingVertical: 16,
    borderRadius: 4,
    alignItems: 'center',
    width: 150,
  },
  saveButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default UserInfo;

