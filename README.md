# React People Management App

A modern React application built with TypeScript, showcasing best practices in React development, clean architecture, and state management.

## 🚀 Technologies

- React + TypeScript
- Vite (Build Tool)
- Redux Toolkit (State Management)
- Material-UI (Component Library)
- RxJS (Reactive Programming)
- ESLint (Code Quality)

## 🏗️ Architecture

The project follows a clean architecture pattern with a clear separation of concerns:

```
src/
├── components/     # Reusable UI components
├── pages/          # Page components and routes
├── redux/          # Redux store and state management
├── models/         # TypeScript interfaces and types
├── utilities/      # Helper functions and utilities
├── styled-components/ # Styled component definitions
└── data/          # Static data and mock services
```

## 🎯 Features

- People Management with DataGrid
- Favorites System
- Persistent Storage using LocalStorage
- Reactive Dialog Management using RxJS
- Type-safe Development with TypeScript
- Responsive Material-UI Components

## 💡 Best Practices

### React Best Practices
- Functional Components with TypeScript
- Custom Hooks for Logic Reuse
- Proper Component Composition
- Strict Mode Enabled

### State Management
- Redux Toolkit for Global State
- Slice Pattern for State Organization
- Type-safe Store Configuration
- Local Storage Integration

### TypeScript Integration
- Strict Type Checking
- Interface-based Component Props
- Type-safe Redux Store
- Proper Type Exports

### Clean Code
- ESLint Configuration for Code Quality
- Consistent File Structure
- Clear Naming Conventions
- Module Aliasing (@/ imports)

## 🛠️ Development Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## 🔧 ESLint Configuration

The project uses a modern ESLint setup with TypeScript integration:

- Type-Aware Linting
- React Hooks Rules
- React Refresh Support
- Custom TypeScript Rules

## 📦 Project Structure

- `components/`: Reusable UI components like Navbar, CustomDialog
- `pages/`: Main application pages and their components
- `redux/`: Store configuration and state slices
- `models/`: TypeScript interfaces and type definitions
- `utilities/`: Helper functions for localStorage and other utilities
- `styled-components/`: Styled component definitions for layout

## 🔄 State Management

The application uses Redux Toolkit with two main slices:
- `people`: Manages the list of people
- `favorites`: Handles favorite people selection

Both slices integrate with localStorage for persistence and maintain type safety through TypeScript interfaces.

## 🎨 UI Components

- Material-UI components for consistent design
- DataGrid for efficient data display
- Custom Dialog system using RxJS
- Responsive layout components

## 📱 Responsive Design

The application is built with responsiveness in mind using Material-UI's responsive components and styled-components for custom layouts.
