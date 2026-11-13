import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('../pages/Home.tsx'),
  route('sobre', '../pages/Sobre.tsx'),
  route('contato', '../pages/Contato.tsx'),
  route('privacidade', '../pages/Privacidade.tsx'),
  route('termos', '../pages/Termos.tsx'),
  route('techservices', '../pages/TechServices.tsx'),
] satisfies RouteConfig;
