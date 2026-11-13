import type { MetaFunction } from 'react-router'

export const meta: MetaFunction = () => [
  { title: 'FBSO TechSolutions | Tecnologia, Consultoria e Software' },
  {
    name: 'description',
    content:
      'FBSO Technology Solutions: tecnologia, consultoria e software para construir um futuro mais eficiente.',
  },
  { property: 'og:title', content: 'FBSO TechSolutions | Tecnologia, Consultoria e Software' },
  {
    property: 'og:description',
    content:
      'FBSO Technology Solutions: tecnologia, consultoria e software para construir um futuro mais eficiente.',
  },
  { property: 'og:type', content: 'website' },
]

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b192c] p-8">
      <section className="max-w-3xl text-center">
        <span className="mb-6 inline-block text-2xl font-extrabold tracking-widest text-[#00e676]">
          FBSO
        </span>

        <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
          FBSO Technology Solutions
        </h1>

        <p className="text-lg leading-relaxed text-[#b8c5d6]">
          Plataforma modular de soluções, para um futuro mais eficiente.
        </p>

        <span className="mt-6 inline-block rounded-full border border-[#1e88e5] px-4 py-2 text-sm text-[#90caf9]">
          Portal em desenvolvimento
        </span>
      </section>
    </main>
  )
}
