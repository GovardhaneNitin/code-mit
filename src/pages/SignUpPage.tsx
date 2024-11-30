import React, { useState } from "react";
import { UserPlus } from "lucide-react";
import InputField from "../components/forms/InputField";
import AuthButton from "../components/forms/AuthButton";
import { SignUpCredentials } from "../types/auth";

export default function SignUpPage() {
  const [credentials, setCredentials] = useState<SignUpCredentials>({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<
    Partial<Record<keyof SignUpCredentials, string>>
  >({});

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof SignUpCredentials, string>> = {};

    if (!credentials.email.includes("@")) {
      newErrors.email = "Please enter a valid email address";
    }
    if (credentials.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters long";
    }
    if (credentials.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }
    if (credentials.password !== credentials.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // In a real app, this would make an API call
      console.log("Signing up with:", credentials);
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (err) {
      setErrors({ email: "An error occurred during sign up" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <UserPlus className="mx-auto h-12 w-12 text-indigo-600 dark:text-indigo-400" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            Sign in
          </a>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <InputField
              label="Email address"
              type="email"
              value={credentials.email}
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
              error={errors.email}
              required
            />

            <InputField
              label="Username"
              type="text"
              value={credentials.username}
              onChange={(e) =>
                setCredentials({ ...credentials, username: e.target.value })
              }
              error={errors.username}
              required
            />

            <InputField
              label="Password"
              type="password"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
              error={errors.password}
              required
            />

            <InputField
              label="Confirm Password"
              type="password"
              value={credentials.confirmPassword}
              onChange={(e) =>
                setCredentials({
                  ...credentials,
                  confirmPassword: e.target.value,
                })
              }
              error={errors.confirmPassword}
              required
            />

            <AuthButton type="submit" isLoading={isLoading}>
              Create Account
            </AuthButton>
          </form>
        </div>
      </div>
    </div>
  );
}
