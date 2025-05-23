# Vue-Nuxt-Like-Start

A Vue.js project with Nuxt-like features and structure.

## Nuxt-like Features

This project uses unplugin to provide Nuxt-like development experience:
- Auto-imports for components, composables, and utilities
- File-based routing with `pages/` directory
- Layout system with `layouts/` directory
- TypeScript support with auto-generated type definitions
- Plugin system similar to Nuxt

## Project Structure

```
src/
├── assets/         # Static assets like images, fonts, etc.
├── components/     # Vue components
│   ├── Global/    # Global reusable components
│   │   ├── LangSwitcher.vue    # Language switcher component
│   │   └── ThemeSwitcher.vue   # Dark/Light theme switcher
│   ├── Loading/   # Loading state components
│   │   ├── AppLoading.vue      # Initial app loading screen
│   │   └── PageLoading.vue     # Page transition loading screen
│   └── Structure/ # Layout structure components
│       ├── AppNav.vue          # Main navigation component
│       └── AppFooter.vue       # Application footer
├── composables/    # Vue composables
│   ├── useFetch.ts     # Advanced data fetching with loading states
│   └── axiosFetch.ts   # Lightweight Axios wrapper
├── config/         # Configuration files
├── layouts/        # Layout components
│   ├── default.vue    # Default application layout
│   └── auth.vue       # Authentication pages layout
├── libs/          # Utility libraries
├── pages/         # Route components
│   ├── auth/         # Authentication pages
│   └── products/     # Product-related pages
├── plugins/       # Vue plugins
│   ├── i18n/         # Internationalization
│   └── setInitData.ts # Initial data setup
├── router/        # Vue Router configuration
├── services/      # API services
├── stores/        # Pinia stores
│   ├── auth.ts       # Authentication state management
│   └── loading.ts    # Loading states management
└── types/         # TypeScript type definitions
```

## Components

### Global Components
Located in `src/components/Global/`
- `LangSwitcher.vue`: Handles language switching between English and Arabic
- `ThemeSwitcher.vue`: Toggles between dark and light themes using VueUse's `useColorMode`

### Loading Components
Located in `src/components/Loading/`
- `AppLoading.vue`: Displays a full-screen loading animation during initial application load
- `PageLoading.vue`: Shows a loading overlay during page transitions with a backdrop blur effect

### Structure Components
Located in `src/components/Structure/`
- `AppNav.vue`: Main navigation component with authentication-aware routing
- `AppFooter.vue`: Application footer with copyright information

## Composables

### useFetch
Located in `src/composables/useFetch.ts`
- A powerful data fetching composable similar to Nuxt's useFetch
- Features:
  - Reactive data fetching with loading states
  - Error handling
  - Response transformation
  - Automatic refresh on watched values
  - TypeScript support
  - Configurable HTTP methods and options

### axiosFetch
Located in `src/composables/axiosFetch.ts`
- A lightweight wrapper around Axios
- Provides a simplified interface for making HTTP requests
- Type-safe response handling

## Plugins

### setInitData
Located in `src/plugins/setInitData.ts`
- Plugin for initializing application data
- Sets up initial state and configurations

### i18n
Located in `src/plugins/i18n/`
- Internationalization plugin
- Supports English and Arabic languages
- Persists language preference in localStorage
- Provides global translation functions

## Configuration

The project uses several configuration files:
- `vite.config.ts` - Vite configuration with unplugin setup for Nuxt-like features
- `tsconfig.json` - TypeScript configuration
- `eslint.config.ts` - ESLint configuration
- `env.d.ts` - Environment type definitions
- `auto-imports.d.ts` - Auto-generated type definitions for auto-imports
- `components.d.ts` - Auto-generated type definitions for components

## Development

### Prerequisites
- Node.js
- npm or yarn

### Installation
```bash
npm install
# or
yarn install
```

### Development Server
```bash
npm run dev
# or
yarn dev
```

### Build
```bash
npm run build
# or
yarn build
```

## TypeScript Support

The project is built with TypeScript and includes:
- Type definitions for components
- Type-safe API calls
- Type definitions for environment variables

## Additional Features

- Vue Router for navigation
- Pinia for state management
- ESLint for code linting
- EditorConfig for consistent coding styles
- Git configuration for version control

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
