export default function Dashboardlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col gap-y-4">
  <h2>This is Setting Page</h2>
  {children}</div>;
}
