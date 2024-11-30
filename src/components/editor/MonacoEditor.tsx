import Editor from "@monaco-editor/react";
import { Play, RotateCcw } from "lucide-react";

interface MonacoEditorProps {
  code: string;
  onChange: (value: string | undefined) => void;
  onRun: () => void;
  onReset: () => void;
  language?: string;
}

export default function MonacoEditor({
  code,
  onChange,
  onRun,
  onReset,
  language = "typescript",
}: MonacoEditorProps) {
  return (
    <div className="flex flex-col h-full bg-[#1e1e1e] rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-[#3c3c3c]">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={onReset}
            className="p-1.5 text-gray-400 hover:text-white rounded hover:bg-[#3c3c3c] transition-colors"
            title="Reset Code"
          >
            <RotateCcw size={18} />
          </button>
          <button
            onClick={onRun}
            className="flex items-center space-x-1 px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded transition-colors"
          >
            <Play size={16} />
            <span>Run</span>
          </button>
        </div>
      </div>
      <div className="flex-1">
        <Editor
          height="100%"
          defaultLanguage={language}
          theme="vs-dark"
          value={code}
          onChange={onChange}
          options={{
            fontSize: 14,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            lineNumbers: "on",
            roundedSelection: false,
            padding: { top: 16 },
            automaticLayout: true,
            tabSize: 2,
            wordWrap: "on",
            formatOnPaste: true,
            formatOnType: true,
          }}
        />
      </div>
    </div>
  );
}
