import pkg from './package.json';

export default {
  title: 'Typescript React Library Starter',
  description: pkg.description,
  base: `/${pkg.name}/`,
  version: pkg.version,
  propsParser: false,
  hashRouter: true,
  typescript: true,
  themeConfig: {
    logo: {
      src: '#',
      width: 233,
    },
    colors: {
      primary: '#000000',
    },
  },
};
