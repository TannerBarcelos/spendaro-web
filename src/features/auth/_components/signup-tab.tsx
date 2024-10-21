import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { TabsContent } from "@radix-ui/react-tabs";
import { Mail, ArrowRight, Lock, CircleUser } from "lucide-react";
import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { z } from "zod";
import ErrorFields from "@/components/form-error-field";
import { useSignupUser } from "@/services/api/auth/auth-queries";
import { toast } from "sonner";
import { errorBuilder } from "@/lib/utils";

const newUserSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(5, "Password must be at least 5 characters"),
});

export type NewUser = z.infer<typeof newUserSchema>;

function SignupTab() {
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
    onSubmit: async ({ value }) => {
      try {
        const result = await signupMutation.mutateAsync(value);
        toast.success(result.data.message, {
          position: "top-center",
          richColors: true,
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
    <TabsContent value="signup">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="space-y-6"
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
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2.5 px-4 rounded-lg transition duration-300 flex items-center justify-center text-base"
            >
              <p>
                {isSubmitting ? (
                  <span>Signing Up...</span>
                ) : (
                  <span className="flex flex-row items-center w-20 justify-between">
                    Sign Up
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
export default SignupTab;
