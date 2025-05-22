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
├── composables/    # Vue composables
├── config/         # Configuration files
├── layouts/        # Layout components
├── libs/          # Utility libraries
├── pages/         # Route components
├── plugins/       # Vue plugins
├── router/        # Vue Router configuration
├── services/      # API services
├── stores/        # Pinia stores
└── types/         # TypeScript type definitions
```

## Components

### Structure Components
Located in `src/components/Structure/`
- Components that define the main structure of the application

### Loading Components
Located in `src/components/Loading/`
- Components related to loading states and spinners

### Global Components
Located in `src/components/Global/`
- Reusable components used throughout the application

## Composables

### useFetch
Located in `src/composables/useFecth.ts`
- A custom composable for handling data fetching
- Provides functionality for making HTTP requests
- Includes error handling and loading states

### axiosFetch
Located in `src/composables/axiosFetch.ts`
- A lightweight wrapper around Axios for making HTTP requests
- Provides a simplified interface for API calls

## Plugins

### setInitData
Located in `src/plugins/setInitData.ts`
- Plugin for initializing application data
- Sets up initial state and configurations

### i18n
Located in `src/plugins/i18n/`
- Internationalization plugin
- Handles multiple language support

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
