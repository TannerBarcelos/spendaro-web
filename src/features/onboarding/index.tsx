import { motion } from "framer-motion";
import { ArrowRight, BarChart3, PiggyBank, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "@tanstack/react-router";

const onboardingCards = [
  {
    icon: PiggyBank,
    title: "Track Expenses",
    description: "Monitor your spending habits with ease and precision",
  },
  {
    icon: Wallet,
    title: "Budget Wisely",
    description: "Create and manage budgets that work for you",
  },
  {
    icon: BarChart3,
    title: "Visualize Growth",
    description: "See your financial progress through intuitive charts",
  },
];

export default function Component() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      {/* Gradient Orbs */}
      <div className="pointer-events-none fixed inset-0 flex items-center justify-center overflow-hidden">
        <div className="absolute left-[40%] top-1/4 h-[30rem] w-[30rem] rounded-full bg-purple-500 opacity-10 blur-[128px]" />
        <div className="absolute right-1/3 top-1/2 h-[25rem] w-[25rem] rounded-full bg-cyan-500 opacity-10 blur-[128px]" />
      </div>

      <div className="container relative mx-auto flex min-h-screen flex-col items-center justify-center gap-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="mb-2 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-5xl font-bold text-transparent sm:text-6xl">
            Welcome to Spendaro!
          </h1>
          <p className="text-xl text-muted-foreground">
            Your journey to smarter financial management starts here.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid w-full max-w-5xl gap-6 sm:grid-cols-3"
        >
          {onboardingCards.map((card, index) => (
            <Card className="relative overflow-hidden p-8" key={index}>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent space-y-4" />
              <CardContent className="space-y-2 p-0">
                <card.icon className="h-12 w-12 text-purple-500" />
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full max-w-2xl"
        >
          <Card className="relative overflow-hidden p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent" />
            <CardHeader className="text-center space-y-4">
              <CardTitle className="text-2xl">Let's Get Started</CardTitle>
              <CardDescription>
                Before you can start tracking your expenses, you need to create
                a budget. Select the button below to get started.
              </CardDescription>
            </CardHeader>
            <div className="w-full items-center justify-center flex p-4">
              <Button
                className="z-0"
                onClick={() => {
                  navigate({
                    to: "/onboarding/create-first-budget",
                  });
                }}
              >
                Create Budget
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </Card>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-sm text-muted-foreground"
        >
          Join thousands of users who are taking control of their finances with
          Spendaro
        </motion.p>
      </div>
    </div>
  );
}
