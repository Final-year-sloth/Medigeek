import Image from 'next/image'

interface AvatarProps {
  url: string
  name: string
}

export default function Avatar({ url, name }: AvatarProps) {
  return (
    <div className="flex-shrink-0">
      <Image
        src={url || "/Sidebar_Images/Profile_Default.png"}
        alt={`${name}'s avatar`}
        width={150}
        height={150}
        className="rounded-full"
      />
    </div>
  )
}

