export default function WideContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      {children}
    </div>
  )
}