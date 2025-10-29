# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Tugas: Slicing Desain Figma ke React.js dengan Tailwind CSS

Referensi Desain
Gunakan desain dari Figma berikut:
🔗 Personal Profile – Figma Mockup
Pilih salah satu
Pastikan kamu bisa membuka file tersebut untuk melihat elemen desain, ukuran, warna, dan font di tab Inspect.

Langkah-Langkah Pengerjaan
1. Buat Project React Baru
npx create-react-app personal-profile
cd personal-profile
2. Instal dan Konfigurasi Tailwind CSS
Ikuti panduan resmi Tailwind untuk integrasi dengan React:
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
Edit file tailwind.config.js:
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
Edit src/index.css agar hanya berisi:
@tailwind base;
@tailwind components;
@tailwind utilities;
Coba jalankan:
npm start
Jika tidak error, Tailwind sudah aktif.

3. Struktur Folder Proyek
Buat struktur rapi agar mudah dikembangkan:
src/
├── assets/
│   ├── images/        // gambar dari Figma
│   └── fonts/         // font custom jika ada
├── components/
│   ├── Navbar.js
│   ├── ProfileCard.js
│   ├── AboutSection.js
│   ├── SkillsSection.js
│   ├── PortfolioSection.js
│   ├── TestimonialSection.js
│   ├── ContactSection.js
│   └── Footer.js
├── pages/
│   └── Home.js
├── App.js
└── index.css