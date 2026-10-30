// Paste Firebase Web App config here. Never add service-account private keys.
export const firebaseConfig={apiKey:"PASTE_API_KEY",authDomain:"PASTE_PROJECT_ID.firebaseapp.com",projectId:"PASTE_PROJECT_ID",storageBucket:"PASTE_STORAGE_BUCKET",messagingSenderId:"PASTE_MESSAGING_SENDER_ID",appId:"PASTE_APP_ID"};
export const isFirebaseConfigured=firebaseConfig.apiKey!=="PASTE_API_KEY"&&firebaseConfig.projectId!=="PASTE_PROJECT_ID"&&firebaseConfig.appId!=="PASTE_APP_ID";
