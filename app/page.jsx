import Nav from "@/components/Nav"
import Sidebar from "@/components/Sidebar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Nav />
      <Sidebar />
      <div className='w-full'>

      </div>
    </main>
  )
}
