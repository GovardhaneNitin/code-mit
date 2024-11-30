import { useState } from "react";
import Split from "react-split";
import { Problem } from "../types";
import MonacoEditor from "./editor/MonacoEditor";
import Console from "./editor/Console";

interface CodeEditorProps {
  problem: Problem;
}

export default function CodeEditor({ problem }: CodeEditorProps) {
  const [code, setCode] = useState(problem.starterCode);
  const [output, setOutput] = useState<string[]>([]);

  const handleRunCode = () => {
    try {
      // In a real implementation, this would:
      // 1. Compile and run the code
      // 2. Test against test cases
      // 3. Show results
      setOutput((prev) => [
        ...prev,
        `Running code at ${new Date().toLocaleTimeString()}...`,
        code,
      ]);
    } catch (error) {
      setOutput((prev) => [...prev, `Error: ${error}`]);
    }
  };

  const handleResetCode = () => {
    setCode(problem.starterCode);
    setOutput([]);
  };

  const clearConsole = () => {
    setOutput([]);
  };

  return (
    <Split
      direction="vertical"
      sizes={[70, 30]}
      minSize={100}
      gutterSize={8}
      className="h-[calc(100vh-12rem)] flex flex-col"
    >
      <div className="overflow-hidden">
        <MonacoEditor
          code={code}
          onChange={(value) => setCode(value || "")}
          onRun={handleRunCode}
          onReset={handleResetCode}
        />
      </div>
      <div className="overflow-hidden">
        <Console output={output} onClear={clearConsole} />
      </div>
    </Split>
  );
}
