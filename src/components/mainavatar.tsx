import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

interface MainAvatarProps {
  name: string
  avatarUrl: string
  initials: string
  className: string
}

export const MainAvatar = ({ name, avatarUrl, initials, className }: MainAvatarProps) => {
  return (
    <Avatar className={cn(className, "size-32 border")}>
      <AvatarImage alt={name} src={avatarUrl} />
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  )
}

