import 'intl-pluralrules'; 
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n'; 
import Onboarding from "@/components/Onboarding";

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      
        <Onboarding />
    </I18nextProvider>
  );
}
