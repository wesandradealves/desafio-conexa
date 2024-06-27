## Next.js Application Documentation

### Project Overview
This project is a Next.js application named `zenklub`, which leverages several modern front-end technologies and libraries to build a robust, scalable, and interactive web application. Below is a detailed overview of the dependencies and scripts used in this project.

### Getting Started

To start the development server:

```bash
npm run dev
```

To build the project for production:

```bash
npm run build
```

To start the production server:

```bash
npm run start
```

To run tests:

```bash
npm run test
```

### Dependencies

#### Core Dependencies
- **Next.js** (`next`): The React framework for production.
- **React** (`react`): A JavaScript library for building user interfaces.
- **React DOM** (`react-dom`): Serves as the entry point to the DOM and server renderers for React.

#### Styling and UI Libraries
- **Emotion** (`@emotion/react`, `@emotion/styled`): Library designed for writing CSS styles with JavaScript.
- **Material-UI** (`@mui/material`, `@mui/icons-material`, `@mui/styled-engine-sc`): A popular React UI framework.
- **Styled Components** (`styled-components`): A library for writing CSS-in-JS.
- **NextUI** (`@nextui-org/react`): A React UI library for building modern and beautiful user interfaces.

#### Utilities
- **Axios** (`axios`): A promise-based HTTP client for making requests.
- **Moment.js** (`moment`, `moment-timezone`): A library for parsing, validating, manipulating, and displaying dates and times in JavaScript.
- **React Helmet** (`react-helmet`, `react-helmet-async`): A reusable React component to manage changes to the document head.
- **React Lazy Load Image Component** (`react-lazy-load-image-component`): A React component for lazy loading images.
- **React Spinners** (`react-spinners`): A collection of loading spinners for React.

### Development Dependencies

#### Testing
- **Playwright Test** (`@playwright/test`): A library to automate Chromium, Firefox, and WebKit with a single API.

#### Build Tools
- **TypeScript** (`typescript`): A typed superset of JavaScript that compiles to plain JavaScript.
- **ts-node** (`ts-node`): TypeScript execution and REPL for Node.js.
- **ts-node-dev** (`ts-node-dev`): Like `nodemon` but uses `ts-node` under the hood.
- **PostCSS** (`postcss`): A tool for transforming CSS with JavaScript.
- **Sass** (`sass`): A CSS preprocessor that adds power and elegance to the basic language.
- **TailwindCSS** (`tailwindcss`): A utility-first CSS framework for rapid UI development.

### Directory Structure

- `app/`: Main Pages
- `components/`: React components used throughout the application.
- `context/`: Context providers for state management.
- `pages/`: Next.js pages.
- `assets/`: Static assets and styles.
- `tests/`: Unit and integration tests.

### Contributing

1. Fork the repository on git@github.com:wesandradealves/desafio-conexa.git
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

### License

This project is licensed under the MIT License.

### Conclusion

This documentation provides a comprehensive overview of the `zenklub` Next.js application, including the dependencies, scripts, and development setup. For further information, refer to the official documentation of the respective libraries and tools used in this project.