# Vue Portfolio Website

This project is a Vue.js-powered single-page portfolio showcasing professional experience, projects, and contact information. It is structured for use with the Vue CLI toolchain and provides a foundation for building and deploying a personal site.

## Project Structure

```
portfolio-website/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── components/
│   │       ├── AboutSection.vue
│   │       ├── ContactSection.vue
│   │       ├── HomeSection.vue
│   │       ├── Navbar.vue
│   │       └── ProjectsSection.vue
│   ├── App.vue
│   ├── main.js
│   └── styles.css
├── babel.config.js
├── package.json
├── vue.config.js
├── .gitignore
├── deploy.sh
└── README.md
```

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the development server**

   ```bash
   npm run serve
   ```

   The application will be available at `http://localhost:8080/` by default.

3. **Build for production**

   ```bash
   npm run build
   ```

   The compiled assets will be output to the `dist/` directory.

## Deployment

Use the provided `deploy.sh` script as a reference for building the project prior to deployment. After running the script, upload the contents of the `dist/` directory to your hosting provider or configure your continuous deployment pipeline to do so automatically.

## Customisation

- Update the content in the Vue components under `src/assets/components/` with your own biography, projects, and contact details.
- Modify `src/styles.css` to tailor the visual design to your personal brand.
- Add additional components or sections as needed and import them in `src/App.vue`.

## License

This project is provided as-is. Feel free to adapt it for your own portfolio.
