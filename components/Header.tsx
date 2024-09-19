export default function Header({ children }: { children: React.ReactNode }) {
    return <div className="bg-zinc-100 p-8 dark:bg-zinc-800">{children}</div>;
  }