import { Code2 } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <Code2 className="mx-auto h-16 w-16 text-indigo-600 dark:text-indigo-400" />
          <h1 className="mt-4 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            Welcome to CodeMIT
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Enhance your coding skills with our curated collection of
            programming challenges
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Practice Problems
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Access a variety of coding problems across different difficulty
              levels
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Real-time Testing
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Test your solutions against multiple test cases instantly
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Track Progress
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Monitor your improvement and see your solving statistics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
