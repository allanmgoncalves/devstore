import { Header } from '@/components/header'

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
