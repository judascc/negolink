export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      {children}
    </div>
  );
}