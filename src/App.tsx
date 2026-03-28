type MissionSummary = {
  backlogScanned: number
  claimed: number
  spawned: number
  doneDetected: number
  blockedDetected: number
  warnings: number
  errors: number
}

type MissionTask = {
  taskId: string
  from: string
  to: string
  assignee: string
  notes: string[]
}

type MissionRun = {
  runId: string
  startedAt: string
  finishedAt: string
  status: 'success' | 'partial' | 'failed'
  worker: string
  workspace: string
  summary: MissionSummary
  tasks: MissionTask[]
}

const sampleRuns: MissionRun[] = [
  {
    runId: 'mr-20260318-023500-001',
    worker: 'cron-worker-v1',
    startedAt: '2026-03-18T02:35:00Z',
    finishedAt: '2026-03-18T02:35:12Z',
    status: 'success',
    workspace: '/home/skullby/.openclaw/agency-agents/agents-orchestrator',
    summary: {
      backlogScanned: 2,
      claimed: 1,
      spawned: 1,
      doneDetected: 0,
      blockedDetected: 0,
      warnings: 0,
      errors: 0,
    },
    tasks: [
      {
        taskId: 'mission-0-task-system-bootstrap',
        from: 'backlog',
        to: 'in-progress',
        assignee: 'agents-orchestrator',
        notes: ['Claimed successfully'],
      },
    ],
  },
  {
    runId: 'mr-20260318-023500-sample',
    worker: 'cron-worker-v1',
    startedAt: '2026-03-18T02:35:00Z',
    finishedAt: '2026-03-18T02:35:03Z',
    status: 'success',
    workspace: '/home/skullby/.openclaw/agency-agents/agents-orchestrator',
    summary: {
      backlogScanned: 2,
      claimed: 0,
      spawned: 0,
      doneDetected: 0,
      blockedDetected: 0,
      warnings: 0,
      errors: 0,
    },
    tasks: [],
  },
]

const statusStyles: Record<MissionRun['status'], string> = {
  success: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  partial: 'bg-amber-50 text-amber-700 ring-amber-200',
  failed: 'bg-rose-50 text-rose-700 ring-rose-200',
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">{value}</p>
    </div>
  )
}

function App() {
  const latest = sampleRuns[0]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300">Mission Control</p>
            <h1 className="mt-1 text-2xl font-semibold tracking-tight text-white">Read-side UI shell</h1>
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
            Factory Ops · operator view
          </div>
        </div>
      </header>

      <main id="contenido-principal" className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-10">
        <section className="grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-950/20 lg:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Kickoff slice</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Operator-facing shell wired to mission-run JSON shape</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
              First concrete slice for Mission Control: a visible read-side layout that can consume mission run summaries,
              worker metadata, and task transitions without depending on live agent state.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-300">
              <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">Calendar-ready schema</span>
              <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">Task transitions</span>
              <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">Worker summary</span>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[2rem] border border-white/10 bg-white p-6 text-slate-900 shadow-2xl shadow-cyan-950/20">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Latest run</p>
              <div className="mt-3 flex items-center justify-between gap-4">
                <div>
                  <p className="text-lg font-semibold text-slate-900">{latest.runId}</p>
                  <p className="mt-1 text-sm text-slate-500">{latest.worker}</p>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ring-1 ${statusStyles[latest.status]}`}>
                  {latest.status}
                </span>
              </div>
              <div className="mt-4 space-y-2 text-sm text-slate-600">
                <p>Started: {new Date(latest.startedAt).toLocaleString()}</p>
                <p>Finished: {new Date(latest.finishedAt).toLocaleString()}</p>
                <p className="truncate">Workspace: {latest.workspace}</p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">Implementation status</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <Stat label="Runs" value={sampleRuns.length} />
                <Stat label="Tasks" value={sampleRuns.reduce((count, run) => count + run.tasks.length, 0)} />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-4 lg:grid-cols-3">
          <Stat label="Backlog scanned" value={latest.summary.backlogScanned} />
          <Stat label="Claimed" value={latest.summary.claimed} />
          <Stat label="Spawned" value={latest.summary.spawned} />
        </section>

        <section className="mt-8 grid gap-4 lg:grid-cols-3">
          <Stat label="Done detected" value={latest.summary.doneDetected} />
          <Stat label="Blocked detected" value={latest.summary.blockedDetected} />
          <Stat label="Warnings" value={latest.summary.warnings} />
        </section>

        <section className="mt-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 lg:p-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">Run timeline</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">Recent mission runs</h3>
            </div>
            <p className="text-sm text-slate-400">Schema aligned to logs/mission-runs/*.json</p>
          </div>

          <div className="mt-6 grid gap-4 xl:grid-cols-2">
            {sampleRuns.map((run) => (
              <article key={run.runId} className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-white">{run.runId}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-400">{run.worker}</p>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ring-1 ${statusStyles[run.status]}`}>
                    {run.status}
                  </span>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <Stat label="Backlog" value={run.summary.backlogScanned} />
                  <Stat label="Claimed" value={run.summary.claimed} />
                  <Stat label="Spawned" value={run.summary.spawned} />
                </div>
                <div className="mt-4 space-y-3 text-sm text-slate-300">
                  <p>
                    <span className="font-semibold text-white">Started:</span> {new Date(run.startedAt).toLocaleString()}
                  </p>
                  <p>
                    <span className="font-semibold text-white">Finished:</span> {new Date(run.finishedAt).toLocaleString()}
                  </p>
                </div>
                <div className="mt-5 space-y-3">
                  {run.tasks.length > 0 ? (
                    run.tasks.map((task) => (
                      <div key={task.taskId} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <p className="font-semibold text-white">{task.taskId}</p>
                          <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">
                            {task.from} → {task.to}
                          </p>
                        </div>
                        <p className="mt-2 text-sm text-slate-300">Assignee: {task.assignee}</p>
                        <ul className="mt-3 space-y-1 text-sm text-slate-400">
                          {task.notes.map((note) => (
                            <li key={note}>• {note}</li>
                          ))}
                        </ul>
                      </div>
                    ))
                  ) : (
                    <div className="rounded-2xl border border-dashed border-white/10 bg-white/5 p-4 text-sm text-slate-400">
                      No task transitions recorded for this sample run.
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
