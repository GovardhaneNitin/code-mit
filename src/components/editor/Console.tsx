import { Terminal, X } from "lucide-react";

interface ConsoleProps {
  output: string[];
  onClear: () => void;
}

export default function Console({ output, onClear }: ConsoleProps) {
  return (
    <div className="bg-[#1e1e1e] rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-[#3c3c3c]">
        <div className="flex items-center space-x-2 text-gray-300">
          <Terminal size={16} />
          <span>Console</span>
        </div>
        <button
          onClick={onClear}
          className="p-1 text-gray-400 hover:text-white rounded hover:bg-[#3c3c3c] transition-colors"
          title="Clear Console"
        >
          <X size={16} />
        </button>
      </div>
      <div className="p-4 font-mono text-sm text-gray-300 max-h-40 overflow-y-auto">
        {output.length === 0 ? (
          <div className="text-gray-500">No output to display</div>
        ) : (
          output.map((line, index) => (
            <div key={index} className="mb-1">
              {line}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
