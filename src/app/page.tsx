import Image from 'next/image'
import MapWrapper from '@/components/maps/MapWrapper'

export default function Home() {
  return (
    <main className="relative w-full h-full">
      <MapWrapper/>
    </main>
  )
}
