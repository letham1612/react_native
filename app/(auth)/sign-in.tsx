import { Text, SafeAreaView } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";

const SignIn = () => {
  const { t } = useTranslation();

  return (
    <SafeAreaView>
      <Text>{t("welcome")}</Text>
    </SafeAreaView>
  );
};

export default SignIn;  

