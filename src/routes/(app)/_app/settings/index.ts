import { createFileRoute } from '@tanstack/react-router'
import SettingsPage from '@/features/settings'

export const Route = createFileRoute('/(app)/_app/settings/')({
  component: SettingsPage,
})
