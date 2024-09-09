import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

interface MainAvatarProps {
  name: string
  avatarUrl: string
  initials: string
}

export const MainAvatar = ({ name, avatarUrl, initials }: MainAvatarProps) => {
  return (
    <Avatar className="size-32 border">
      <AvatarImage alt={name} src={avatarUrl} />
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  )
}
