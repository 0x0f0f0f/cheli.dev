import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface Props {
  title: string;
  company: string;
  companyUrl: string;
  description?: string;
  dates: string;
  location: string;
  image?: string;
  links?: readonly {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
  children: React.ReactNode
}

export function ExperienceCard({
  title,
  company,
  companyUrl,
  description,
  dates,
  location,
  image,
  links,
  children
}: Props) {
  return (
    <li className="relative ml-10 py-4">
      {/* <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
        <Avatar className="border size-12 m-auto">
          <AvatarImage src={image} alt={title} className="object-contain" />
          <AvatarFallback>{title[0]}</AvatarFallback>
        </Avatar>
      </div> */}
      <div className="flex flex-1 flex-col justify-start gap-1">
        {dates && (
          <time className="text-xs text-muted-foreground">{dates}</time>
        )}
        <h2 className="font-semibold leading-none">{title} - <a className="underline" href={companyUrl}>{company}</a></h2>
        {location && (
          <p className="text-sm text-muted-foreground">{location}</p>
        )}
        {children && (
          <span className="prose dark:prose-invert text-sm text-muted-foreground">
            {children}
          </span>
        )}
      </div>
      {links && links.length > 0 && (
        <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
          {links?.map((link, idx) => (
            <a href={link.href} key={idx}>
              <Badge key={idx} title={link.title} className="flex gap-2">
                {link.icon}
                {link.title}
              </Badge>
            </a>
          ))}
        </div>
      )}
    </li>
  );
}
