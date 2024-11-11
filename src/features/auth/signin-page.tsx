import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Mail, Lock } from "lucide-react";
import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { z } from "zod";
import ErrorFields from "@/components/form-error-field";
import { useSigninUser } from "@/api/auth-api/queries";
import { toast } from "sonner";
import { errorBuilder } from "@/lib/utils";
import { authStore } from "@/stores/auth-store";
import { Route as AuthRoute } from "@/routes/(auth)/_auth/signin";
import { router } from "@/main";
import AuthHeader from "./_components/auth-header";
import { Link } from "@tanstack/react-router";

const userSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(5, "Password must be at least 5 characters"),
});

export type User = z.infer<typeof userSchema>;

function SigninPage() {
  const redirect_url = AuthRoute.useSearch({
    select: (search) => search.redirect_url,
  });
  const auth = authStore();
  const signInMutation = useSigninUser();
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    } as User,
    validatorAdapter: zodValidator(),
    validators: {
      onChange: userSchema,
      onSubmit: userSchema,
    },
    onSubmit: async ({ value: user }) => {
      try {
        const { data: tokens } = await signInMutation.mutateAsync(user);
        auth.setAccessTokens(tokens.accessToken, tokens.refreshToken);
        toast.success("User signed in successfully", {
          position: "bottom-right",
          richColors: true,
          duration: 2_000,
        });
        router.history.push(redirect_url || "/dashboard");
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
    <div className="w-3/4 m-auto">
      <AuthHeader page="signin" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="space-y-4"
      >
        <form.Field
          name="email"
          children={(field) => {
            return (
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-xs font-normal text-gray-700 dark:text-foreground"
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
                    className="pl-10 pr-4 py-2 w-full border-gray-300 dark:border-foreground/50 rounded-lg dark:focus:ring-secondary dark:focus:border-secondary"
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
                  className="text-xs font-normal text-gray-700 dark:text-foreground"
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
                    className="pl-10 pr-4 py-2 w-full border-gray-300 dark:border-foreground/50 rounded-lg dark:focus:ring-secondary dark:focus:border-secondary"
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
              className="w-full bg-primary dark:bg-secondary hover:bg-primary/90 text-white dark:text-background text-sm font-normal p-6 rounded-lg flex items-center justify-center"
            >
              <span>{isSubmitting ? "Signing in..." : "Sign in"}</span>
            </Button>
          )}
        />
      </form>
      <p className="text-xs pt-4 text-gray-500 font-normal">
        Don&apos;t have an account?
        <Link
          to="/signup"
          className="text-primary hover:text-primary/90 ml-1 dark:text-secondary dark:hover:text-secondary/90"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
}
export default SigninPage;
