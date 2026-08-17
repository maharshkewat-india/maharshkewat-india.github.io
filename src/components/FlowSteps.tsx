interface FlowStepsProps {
  steps: readonly string[];
  label: string;
  accent?: 'cyan' | 'green';
}

export default function FlowSteps({ steps, label, accent = 'cyan' }: FlowStepsProps) {
  const border = accent === 'cyan' ? 'border-cyan-300/25 text-cyan-100' : 'border-emerald-300/25 text-emerald-100';
  const dot = accent === 'cyan' ? 'bg-cyan-300' : 'bg-emerald-300';
  return <ol aria-label={label} className="flex flex-col items-stretch gap-2 sm:flex-row sm:flex-wrap sm:items-center"><span className="sr-only">{label}: </span>{steps.map((step, index) => <li key={step} className="flex items-center gap-2"><span className={`inline-flex min-h-10 items-center justify-center rounded-md border bg-black/20 px-3 py-2 text-center font-mono text-[0.69rem] font-semibold uppercase tracking-[0.09em] ${border}`}>{step}</span>{index < steps.length - 1 && <span aria-hidden="true" className="flex h-4 items-center justify-center text-slate-500 sm:h-auto sm:w-5">↓<span className={`ml-1 hidden h-1.5 w-1.5 rounded-full sm:inline-block ${dot}`} /></span>}</li>)}</ol>;
}
