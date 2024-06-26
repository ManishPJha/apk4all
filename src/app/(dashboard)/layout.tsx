import Base from "@/partials/Base";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Base>{children}</Base>;
}
