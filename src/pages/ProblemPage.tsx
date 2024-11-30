import { problems } from "../data/problems";
import CodeEditor from "../components/CodeEditor";
import ProblemDescription from "../components/ProblemDescription";

interface ProblemPageProps {
  problemId: number;
}

export default function ProblemPage({ problemId }: ProblemPageProps) {
  const problem = problems.find((p) => p.id === problemId);

  if (!problem) {
    return <div>Problem not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="lg:overflow-y-auto lg:max-h-[calc(100vh-8rem)]">
          <ProblemDescription problem={problem} />
        </div>
        <div className="lg:overflow-hidden">
          <CodeEditor problem={problem} />
        </div>
      </div>
    </div>
  );
}
