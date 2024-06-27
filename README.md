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

### Api

Download Mockoon app at https://mockoon.com/

Here is the Mockoon API documentation based on the provided configuration JSON files:

# Mockoon API Documentation

## Overview

**API Title**: Demo API  
**API Version**: 1.0.0  
**Base URL**: http://localhost:3030/api

## General Configuration

### Settings

- **Max Logs Per Environment**: 100
- **Truncate Route Name**: True
- **Main Menu Size**: 270
- **Secondary Menu Size**: 320
- **Faker Locale**: pt_BR
- **Storage Pretty Print**: True
- **File Watcher Enabled**: Disabled
- **Log Transactions**: False
- **Environment Variables Prefix**: MOCKOON_
- **Enable Telemetry**: True

### Environments

- **Active Environment UUID**: 05af6b36-2eb0-49df-b5fe-655a9004d85e
- **Start Environments on Load**: False

## Environment: Demo API

- **UUID**: 05af6b36-2eb0-49df-b5fe-655a9004d85e
- **Name**: Demo API
- **Endpoint Prefix**: /api
- **Latency**: 0 ms
- **Port**: 3030
- **CORS Enabled**: Yes

### Headers

- **Content-Type**: application/json
- **Access-Control-Allow-Origin**: *
- **Access-Control-Allow-Methods**: GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS
- **Access-Control-Allow-Headers**: Content-Type, Origin, Accept, Authorization, Content-Length, X-Requested-With

## Routes

### Route: /api/professionals

- **Type**: CRUD
- **Method**: (All)
- **Endpoint**: /professionals
- **Responses**:

#### Response: 200 OK

- **UUID**: 70572c9d-795d-4425-953d-f2f1ced9d330
- **Body Type**: DATABUCKET
- **Databucket ID**: zptg
- **Headers**:
  - Access-Control-Allow-Origin: *
  - Access-Control-Allow-Methods: *
  - Access-Control-Allow-Headers: *
  - Access-Control-Max-Age: 0

## Data

### Data Bucket: Professionals

- **UUID**: c672be62-2921-4335-beab-0e2f6233685a
- **ID**: zptg
- **Name**: Professionals
- **Value**: 
  ```json
  [
    {
      "id": 1,
      "description": "Description 1",
      "profile": "https://image.url/1",
      "name": "Name 1",
      "phone": "123-456-7890",
      "email": "email1@example.com",
      "website": "https://website1.com",
      "company": "Company 1",
      "attendant": {
        "time": 90,
        "price": 150
      },
      "activity": {
        "name": "Job Title 1",
        "description": "Activity Description 1"
      },
      "address": {
        "street": "Street 1",
        "city": "City 1",
        "state": "ST",
        "zip": "12345",
        "country": "Country 1"
      },
      "available_dates": [
        {
          "date": "2024-06-27T12:00:00.000Z"
        }
      ],
      "testimonials": [
        {
          "id": "uuid1",
          "name": "Testimonial Name 1",
          "company": "Company 1",
          "testimonial": "Testimonial 1",
          "rating": 5,
          "date": "2023-06-27T12:00:00.000Z"
        }
      ]
    }
  ]
  ```

This documentation provides a structured view of the Mockoon environment settings, the Demo API environment configuration, routes, and the data bucket for professionals. Adjustments can be made as needed to include more specific details or additional routes and data.

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