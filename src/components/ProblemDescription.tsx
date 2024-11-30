import { Problem } from "../types";

interface ProblemDescriptionProps {
  problem: Problem;
}

export default function ProblemDescription({
  problem,
}: ProblemDescriptionProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
        {problem.title}
      </h2>
      <span
        className={`px-2 py-1 text-xs font-semibold rounded-full 
        ${
          problem.difficulty === "Easy"
            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
            : problem.difficulty === "Medium"
            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
        }`}
      >
        {problem.difficulty}
      </span>

      <div className="mt-4 prose dark:prose-invert">
        <p className="text-gray-700 dark:text-gray-300">
          {problem.description}
        </p>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
          Examples:
        </h3>
        {problem.examples.map((example, index) => (
          <div
            key={index}
            className="mb-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-md"
          >
            <div className="mb-2 text-gray-900 dark:text-gray-100">
              <span className="font-semibold">Input:</span> {example.input}
            </div>
            <div className="mb-2 text-gray-900 dark:text-gray-100">
              <span className="font-semibold">Output:</span> {example.output}
            </div>
            {example.explanation && (
              <div className="text-gray-900 dark:text-gray-100">
                <span className="font-semibold">Explanation:</span>{" "}
                {example.explanation}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
