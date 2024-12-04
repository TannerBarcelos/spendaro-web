import { useOnboardingStore } from "@/stores/onboarding-store";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, LayoutTemplate, Plus } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function SetInitialCategories() {
  // Pull out the onboarding budget information from the store
  const {
    budget_description,
    budget_name,
    amount: budget_amount,
  } = useOnboardingStore();
  const [selectedOption, setSelectedOption] = useState<
    "template" | "custom" | null
  >(null);

  const handleSelection = (option: "template" | "custom") => {
    setSelectedOption(option);
  };
  console.log(budget_description, budget_name, budget_amount);
  return (
    <div className="container relative mx-auto flex min-h-screen flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-center mb-2 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent">
          Choose your budget categories
        </h1>
        <p className="text-md text-muted-foreground my-4">
          Every budget is made up of categories. Choose how you'd like to set
          them up below.
        </p>
        <div className="p-4 shadow-sm"></div>
      </motion.div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {["template", "custom"].map((option) => (
            <motion.div
              key={option}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: option === "template" ? 0.2 : 0.4,
              }}
              className="w-full"
            >
              <Card
                className="relative overflow-hidden p-8 cursor-pointer transition-colors"
                onClick={() => handleSelection(option as "template" | "custom")}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent" />
                <CardHeader className="space-y-4 text-left">
                  <div className="flex items-center space-x-4">
                    {option === "template" ? (
                      <LayoutTemplate className="h-12 w-12 text-primary flex-shrink-0" />
                    ) : (
                      <Plus className="h-12 w-12 text-primary flex-shrink-0" />
                    )}
                    <div>
                      <CardTitle className="text-2xl">
                        {option === "template"
                          ? "Use Template Categories"
                          : "Create Custom Categories"}
                      </CardTitle>
                      <CardDescription>
                        {option === "template"
                          ? "Start with our recommended budget categories"
                          : "Build your budget categories from scratch"}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-left mt-3">
                  <ul className="list-disc text-sm text-muted-foreground mb-4 space-y-1">
                    {option === "template" ? (
                      <>
                        <li>Pre-defined common categories</li>
                        <li>Quick setup process</li>
                        <li>Easily customizable later</li>
                      </>
                    ) : (
                      <>
                        <li>Full control over categories</li>
                        <li>Tailored to your specific needs</li>
                        <li>Add, edit, or remove as needed</li>
                      </>
                    )}
                  </ul>
                  <Button
                    className="z-0"
                    onClick={() => {
                      handleSelection(option as "template" | "custom");
                      console.log("clicked");
                    }}
                  >
                    {option === "template"
                      ? "Use Template"
                      : "Create Custom Categories"}
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SetInitialCategories;
