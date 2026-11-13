import type { ReactNode } from 'react'
import { siteContent } from '../../content/site'

interface AppLayoutProps {
  children: ReactNode
}

/** Layout mínimo do portal: header + main + footer. */
export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-[#0b192c] text-white">
      <header className="border-b border-white/10 px-6 py-4">
        <span className="text-xl font-extrabold tracking-widest text-[#00e676]">
          {siteContent.shortName}
        </span>
      </header>

      <main className="flex flex-1 items-center justify-center p-8">{children}</main>

      <footer className="border-t border-white/10 px-6 py-4 text-center text-sm text-[#b8c5d6]">
        {siteContent.footer}
      </footer>
    </div>
  )
}
