import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { TabsContent } from "@radix-ui/react-tabs";
import { Mail, ArrowRight, Lock } from "lucide-react";
import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { z } from "zod";
import ErrorFields from "@/components/form-error-field";
import { useSigninUser } from "../_api/queries";
import { toast } from "sonner";
import { errorBuilder } from "@/lib/utils";
import { useNavigate } from "@tanstack/react-router";
import { useAuthStore } from "@/stores/auth-store";
import { fetchUser as getUserDetails } from "@/features/profile/_api";
import { useUserStore } from "@/stores/user-store";

const existingUserSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(5, "Password must be at least 5 characters"),
});

export type User = z.infer<typeof existingUserSchema>;

function SigninTab() {
  const authStore = useAuthStore();
  const userStore = useUserStore();
  const navigate = useNavigate();
  const signInMutation = useSigninUser();
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    } as User,
    validatorAdapter: zodValidator(),
    validators: {
      onChange: existingUserSchema,
      onSubmit: existingUserSchema,
    },
    onSubmit: async ({ value: user }) => {
      try {
        const result = await signInMutation.mutateAsync(user);
        const { data } = await getUserDetails();
        userStore.setFirstName(data.data.firstName);
        userStore.setLastName(data.data.lastName);
        userStore.setEmail(data.data.email);
        userStore.setProfileImage(data.data.profileImage);

        toast.success(result.data.message, {
          position: "bottom-right",
          richColors: true,
          duration: 2_000,
        });
        authStore.signin();
        navigate({
          to: "/dashboard",
        });
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
    <TabsContent value="signin">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="space-y-6"
      >
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
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2.5 px-4 rounded-lg transition duration-300 flex items-center justify-center text-base"
            >
              <p>
                {isSubmitting ? (
                  <span>Signing In...</span>
                ) : (
                  <span className="flex flex-row items-center w-20 justify-between">
                    Sign In
                    <ArrowRight />
                  </span>
                )}
              </p>
            </Button>
          )}
        />
      </form>
    </TabsContent>
  );
}
export default SigninTab;
