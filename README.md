# Reusable Website System — Professional V1

## GitHub Pages
Upload all files and folders to the repository root. Settings → Pages → Deploy from a branch → `main` → `/ (root)` → Save.

## Firebase setup
1. Firebase Console → Project settings → Your apps → Web app. Copy the config into `js/firebase-config.js`, replacing all `PASTE_...` values.
2. Authentication → Sign-in method → enable Email/Password. Add an admin user under Users.
3. Copy the admin user's UID. Replace `REPLACE_WITH_ADMIN_UID` in `firebase/firestore.rules`, then publish those rules in Firestore → Rules.
4. Enable Firebase Storage. Replace the UID in `firebase/storage.rules`, then publish in Storage → Rules. Storage availability/pricing may depend on current Firebase plan and project eligibility; check the Firebase Console.
5. Test public homepage, admin login, notice publish, gallery upload and delete.

Never put service-account private keys or admin passwords in this repository. Firebase web config is public; security rules protect the data. Replace the sample name, contact details and About text in `index.html` before publishing.
