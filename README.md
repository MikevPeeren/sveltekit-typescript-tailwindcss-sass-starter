# SvelteKit TypeScript TailwindCSS & Sass Starter

A modern starter template for building web applications with SvelteKit, TypeScript, TailwindCSS, and Sass. This template provides a robust foundation for your next project with best practices and modern tooling.

## ✨ Why Choose This Starter?

- 🚀 **Modern Stack**: Built with the latest versions of SvelteKit, TypeScript, and TailwindCSS
- 🎨 **Styling Flexibility**: Combine TailwindCSS utilities with Sass for powerful styling
- 🧪 **Testing Ready**: Includes both E2E and unit testing setup out of the box
- 📝 **Code Quality**: Pre-configured with ESLint, Prettier, and TypeScript
- 🔄 **Git Hooks**: Husky and lint-staged ensure code quality on every commit
- 📱 **Responsive**: Built with mobile-first design principles
- ⚡️ **Performance**: Optimized for fast loading and smooth interactions

## 🚀 Features

- ⚡️ [SvelteKit](https://kit.svelte.dev/) - The official application framework for Svelte
- 🎨 [TailwindCSS v4](https://tailwindcss.com/) - A utility-first CSS framework
- 📘 [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- 🎨 [Sass](https://sass-lang.com/) - CSS extension language
- 🧪 [Playwright](https://playwright.dev/) - End-to-end testing
- 🧪 [Vitest](https://vitest.dev/) - Unit testing
- 📏 [ESLint](https://eslint.org/) - Code linting
- 🦋 [Prettier](https://prettier.io/) - Code formatting
- 🐶 [Husky](https://github.com/typicode/husky) - Git hooks
- 🧹 [Lint Staged](https://github.com/okonet/lint-staged) - Run linters on staged files

## 🚀 Quick Start

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/project?template=https://github.com/MikevPeeren/sveltekit-typescript-tailwindcss-sass-starter)

## 🛠️ Installation

```bash
# Clone the repository
git clone git@github.com:MikevPeeren/sveltekit-typescript-tailwindcss-sass-starter.git
# or
npx degit git@github.com:MikevPeeren/sveltekit-typescript-tailwindcss-sass-starter.git

# Install dependencies
yarn install
# or
npm install
```

## 🚀 Development

Start the development server:

```bash
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your application.

## 📝 Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn test` - Run Playwright end-to-end tests
- `yarn test:unit` - Run Vitest unit tests
- `yarn check` - Type-check your code
- `yarn check:watch` - Type-check your code in watch mode
- `yarn lint` - Lint your code
- `yarn format` - Format your code

## 📁 Project Structure

```
├── src/
│   ├── routes/          # SvelteKit routes
│   ├── app.html         # HTML template
│   ├── app.scss         # Global styles
│   └── app.d.ts         # TypeScript declarations
├── static/              # Static assets
├── tests/               # Test files
└── public/              # Public assets
```

## 🧪 Testing

This starter includes both end-to-end and unit testing setup:

- **End-to-end Testing**: Uses Playwright for browser testing
- **Unit Testing**: Uses Vitest for component and utility testing

Run tests with:
```bash
# Run end-to-end tests
yarn test

# Run unit tests
yarn test:unit
```

## 🎨 Styling

This starter combines the power of TailwindCSS with Sass:

- Use TailwindCSS utility classes directly in your components
- Create custom styles with Sass in `src/app.scss`
- Leverage TailwindCSS's responsive design utilities
- Use Sass variables and mixins for complex styling needs

## 🔧 Configuration

The project includes several configuration files:

- `tailwind.config.js` - TailwindCSS configuration
- `tsconfig.json` - TypeScript configuration
- `svelte.config.js` - SvelteKit configuration
- `.eslintrc.cjs` - ESLint configuration
- `.prettierrc` - Prettier configuration

## 📚 Learn More

- [SvelteKit Documentation](https://kit.svelte.dev/docs/introduction)
- [Svelte Documentation](https://svelte.dev/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [SvelteKit](https://kit.svelte.dev/) team for the amazing framework
- [TailwindCSS](https://tailwindcss.com/) team for the utility-first CSS framework
- All contributors who have helped improve this starter
