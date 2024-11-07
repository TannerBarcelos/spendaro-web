import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Mail, Lock, CircleUser } from "lucide-react";
import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { z } from "zod";
import ErrorFields from "@/components/form-error-field";
import { useSignupUser } from "./_api/queries";
import { toast } from "sonner";
import { errorBuilder } from "@/lib/utils";
import { authStore } from "@/stores/auth-store";
import { router } from "@/main";
import SplashImage from "./_components/splash-image";
import AuthHeader from "./_components/auth-header";
import { Link } from "@tanstack/react-router";

const newUserSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(5, "Password must be at least 5 characters"),
});

export type NewUser = z.infer<typeof newUserSchema>;

function SignupPage() {
  const auth = authStore();
  const signupMutation = useSignupUser();
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    } as NewUser,
    validatorAdapter: zodValidator(),
    validators: {
      onChange: newUserSchema,
      onSubmit: newUserSchema,
    },
    onSubmit: async ({ value: newUser }) => {
      try {
        const { data: tokens } = await signupMutation.mutateAsync(newUser);
        auth.setAccessTokens(tokens.accessToken, tokens.refreshToken);
        toast.success("User signed in successfully", {
          position: "bottom-right",
          richColors: true,
          duration: 2_000,
        });
        router.history.push("/dashboard");
      } catch (error) {
        const errorMessage = errorBuilder(error);
        toast.error(errorMessage, {
          position: "top-center",
          richColors: true,
        });
      }
    },
  });

  return (
    <div className="flex items-center justify-between h-full">
      <SplashImage src="/images/feel-good-illustration.svg" />
      <div className="w-1/2">
        <div className="w-3/4 m-auto">
          <AuthHeader page="signup" />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              form.handleSubmit();
            }}
            className="space-y-4"
          >
            <form.Field
              name="firstName"
              children={(field) => {
                return (
                  <div className="space-y-2">
                    <Label
                      htmlFor={field.name}
                      className="text-xs font-normal text-gray-700"
                    >
                      First Name
                    </Label>
                    <div className="relative">
                      <CircleUser className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <Input
                        type="text"
                        id={field.name}
                        name={field.name}
                        placeholder="Warren"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        className="pl-10 pr-4 py-2 w-full border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                        required
                      />
                    </div>
                    <ErrorFields field={field} />
                  </div>
                );
              }}
            />
            <form.Field
              name="lastName"
              children={(field) => {
                return (
                  <div className="space-y-2">
                    <Label
                      htmlFor={field.name}
                      className="text-xs font-normal text-gray-700"
                    >
                      Last Name
                    </Label>
                    <div className="relative">
                      <CircleUser className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <Input
                        type="text"
                        id={field.name}
                        name={field.name}
                        placeholder="Buffett"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        className="pl-10 pr-4 py-2 w-full border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                        required
                      />
                    </div>
                    <ErrorFields field={field} />
                  </div>
                );
              }}
            />
            <form.Field
              name="email"
              children={(field) => {
                return (
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-xs font-normal text-gray-700"
                    >
                      Email
                    </Label>
                    <div className="relative">
                      <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <Input
                        type="email"
                        id={field.name}
                        name={field.name}
                        placeholder="you@example.com"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        className="pl-10 pr-4 py-2 w-full border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                        required
                      />
                    </div>
                    <ErrorFields field={field} />
                  </div>
                );
              }}
            />
            <form.Field
              name="password"
              children={(field) => {
                return (
                  <div className="space-y-2">
                    <Label
                      htmlFor="password"
                      className="text-xs font-normal text-gray-700"
                    >
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <Input
                        type="password"
                        id={field.name}
                        name={field.name}
                        placeholder="Your password"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        className="pl-10 pr-4 py-2 w-full border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                        required
                      />
                    </div>
                    <ErrorFields field={field} />
                  </div>
                );
              }}
            />
            <form.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
              children={([canSubmit, isSubmitting]) => (
                <Button
                  disabled={!canSubmit}
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/80 text-white text-sm font-medium py-2.5 px-2 rounded-lg transition duration-300 flex items-center justify-center"
                >
                  <p>
                    {isSubmitting ? (
                      <span>Signing Up...</span>
                    ) : (
                      <span className="flex flex-row items-center w-20 justify-between">
                        Sign Up
                      </span>
                    )}
                  </p>
                </Button>
              )}
            />
          </form>
          <p className="text-xs pt-4 text-gray-500 font-normal">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-primary hover:text-primary/90 ml-1"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default SignupPage;
