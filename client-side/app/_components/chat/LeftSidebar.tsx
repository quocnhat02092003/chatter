import { navItems } from "@/app/_components/chat/chat-data";

type LeftSidebarProps = {
  activeTab: string;
  onTabChange: (tabId: string) => void;
};

export function LeftSidebar({ activeTab, onTabChange }: LeftSidebarProps) {
  return (
    <aside className="flex h-full min-h-0 w-full flex-col border-r border-[#d8dde6] bg-[#e8edf4] px-2 py-4 sm:px-2.5 sm:py-5 lg:px-4 lg:py-6">
      <div className="mb-5 flex items-center justify-center gap-0 lg:mb-8 lg:justify-start lg:gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#1461d2] px-2 text-white shadow-sm lg:h-11 lg:w-11">
          <svg
            className="h-5 w-5 lg:h-6 lg:w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M4.5 7.5C4.5 5.84315 5.84315 4.5 7.5 4.5H16.5C18.1569 4.5 19.5 5.84315 19.5 7.5V14.5C19.5 16.1569 18.1569 17.5 16.5 17.5H10.5L6.5 20V17.5H7.5C5.84315 17.5 4.5 16.1569 4.5 14.5V7.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="hidden lg:block">
          <p className="text-[32px] leading-[1.02] font-semibold tracking-tight text-[#1f2a37]">
            Chat
          </p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#6f7d90]">
            Active now
          </p>
        </div>
      </div>

      <nav className="space-y-2.5">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onTabChange(item.id)}
            className={`flex w-full items-center justify-center gap-0 rounded-xl px-2 py-3 text-base font-semibold transition lg:justify-start lg:gap-3 lg:px-3 lg:text-[14px] ${
              activeTab === item.id
                ? "bg-[#d6e4ff] text-[#0f55b9]"
                : "text-[#637186] hover:bg-[#dde5ef]"
            }`}
          >
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/70 text-sm lg:h-7 lg:w-7 lg:text-[13px]">
              {item.label.slice(0, 1)}
            </span>
            <span className="hidden lg:inline">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="group relative mt-auto">
        <button
          type="button"
          className="w-full rounded-2xl bg-white/60 p-2 text-left transition hover:bg-white/80 focus-visible:ring-2 focus-visible:ring-[#9ebcf0] focus-visible:outline-none lg:p-2.5"
          aria-label="Open account menu"
        >
          <div className="flex items-center justify-center gap-2 lg:justify-start">
            <div className="h-10 w-10 shrink-0 rounded-full bg-[#1d354f]" />
            <div className="hidden min-w-0 lg:block">
              <p className="truncate text-sm font-semibold text-[#1f2a37]">
                Alex Rivera
              </p>
              <p className="truncate text-xs text-[#7a8698]">
                alex.rivera@ifluid.io
              </p>
            </div>
          </div>
        </button>

        <div className="pointer-events-none absolute bottom-full left-0 z-20 mb-2 hidden w-50 translate-y-1 rounded-2xl border border-[#d8e0eb] bg-white p-2 opacity-0 shadow-[0_16px_28px_rgba(30,48,74,0.16)] transition-all duration-150 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100 lg:block">
          <button
            type="button"
            onClick={() => onTabChange("settings")}
            className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-[14px] font-semibold text-[#243850] transition hover:bg-[#edf3fb]"
          >
            <span>Settings</span>
            <span className="text-[#7b8ca1]">⌘,</span>
          </button>
          <button
            type="button"
            className="mt-1 flex w-full items-center rounded-xl px-3 py-2.5 text-[14px] font-semibold text-[#243850] transition hover:bg-[#edf3fb]"
          >
            Profile
          </button>
          <button
            type="button"
            className="mt-1 flex w-full items-center rounded-xl px-3 py-2.5 text-[14px] font-semibold text-[#243850] transition hover:bg-[#edf3fb]"
          >
            Support
          </button>
          <div className="my-1 h-px bg-[#e7edf5]" />
          <button
            type="button"
            className="flex w-full items-center rounded-xl px-3 py-2.5 text-[14px] font-semibold text-[#d14343] transition hover:bg-[#fff1f1]"
          >
            Log out
          </button>
        </div>
      </div>
    </aside>
  );
}
