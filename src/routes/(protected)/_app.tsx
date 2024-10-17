import { Navbar } from '@/components/navbar'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/(protected)/_app')({
  component: () => <Layout />,
})

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
