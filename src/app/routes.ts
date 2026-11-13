import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('../pages/Home.tsx'),
  route('sobre', '../pages/Sobre.tsx'),
] satisfies RouteConfig;
