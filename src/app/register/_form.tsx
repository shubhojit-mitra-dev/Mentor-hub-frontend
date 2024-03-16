"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { api } from "@/lib/axios";
import { cn } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

interface LoginCredentials {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  isMentor: boolean;
}

const register = async (registrationData: LoginCredentials) => {
  const res = await api.post("/register", registrationData);
  return res.data;
};

export function SignUpForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const isMentor = searchParams.get("as") === "mentor";
  const [registrationData, setRegistrationData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    isMentor,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      console.log(data);
      if (data.message) toast(data.message);
      else toast(data);
      router.push("/explore");
    },
  });

  const continueAsMentor = () => {
    router.push("?as=mentor");
  };

  const continueAsEntrepreneur = () => {
    router.replace("/register", undefined);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (registrationData.password !== registrationData.confirmPassword) {
      toast("Passwords do not match");
    }

    mutate(registrationData);
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to MentorHub
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        {isMentor ? "Mentor registration" : "Entrepreneur registration"}
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              placeholder="Tyler"
              type="text"
              value={registrationData.firstName}
              required
              onChange={(e) =>
                setRegistrationData((state) => ({
                  ...state,
                  firstName: e.target.value,
                }))
              }
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              placeholder="Durden"
              type="text"
              value={registrationData.lastName}
              required
              onChange={(e) =>
                setRegistrationData((state) => ({
                  ...state,
                  lastName: e.target.value,
                }))
              }
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            placeholder="tylerdurden"
            type="text"
            value={registrationData.username}
            required
            onChange={(e) =>
              setRegistrationData((state) => ({
                ...state,
                username: e.target.value,
              }))
            }
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="helloworld@gmail.com"
            type="email"
            value={registrationData.email}
            required
            onChange={(e) =>
              setRegistrationData((state) => ({
                ...state,
                email: e.target.value,
              }))
            }
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            value={registrationData.password}
            required
            onChange={(e) =>
              setRegistrationData((state) => ({
                ...state,
                password: e.target.value,
              }))
            }
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="confirmPassword">Confirm password</Label>
          <Input
            id="confirmPassword"
            placeholder="••••••••"
            type="password"
            value={registrationData.confirmPassword}
            required
            onChange={(e) =>
              setRegistrationData((state) => ({
                ...state,
                confirmPassword: e.target.value,
              }))
            }
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>
      </form>

      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

      {isMentor ? (
        <Button
          className="w-full"
          onClick={continueAsEntrepreneur}
          variant="secondary"
          disabled={isPending}
        >
          I&apos;m an Entrepreneur
        </Button>
      ) : (
        <Button
          className="w-full"
          onClick={continueAsMentor}
          variant="secondary"
          disabled={isPending}
        >
          I&apos;m a Mentor
        </Button>
      )}
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
