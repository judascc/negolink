import Header from "../components/Header";
import LeftMenu from "../components/LeftMenu";
import RightPanel from "../components/RightPanel";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />

      <div className="flex w-full">
        {/* LEFT */}
        <div className="w-[20%] border-r border-gray-800">
          <LeftMenu />
        </div>

        {/* CENTER */}
        <div className="w-[60%] p-4">{children}</div>

        {/* RIGHT */}
        <div className="w-[20%] border-l border-gray-800">
          <RightPanel />
        </div>
      </div>
    </div>
  );
}