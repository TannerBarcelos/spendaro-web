import { UserProfilePage } from '@/features/profile'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(app)/_app/profile/')({
  component: UserProfilePage,
})
