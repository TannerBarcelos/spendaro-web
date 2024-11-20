export { }

declare global {
    interface UserResource {
        metadata: {
            onboardingComplete?: boolean
        }
    }
}