import { Navbar } from '@/components/navbar'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/(protected)/_layout')({
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
