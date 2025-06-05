import Link from 'next/link';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarTrigger,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Feather, Home, BookOpen, Newspaper, DownloadCloud, Megaphone, Settings } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/bible-stories', label: 'Bible Stories', icon: BookOpen },
  { href: '/blog', label: 'Blog', icon: Newspaper },
  { href: '/gospel-tracks', label: 'Gospel Tracks', icon: DownloadCloud },
  { href: '/sunday-school', label: 'Sunday School', icon: DownloadCloud },
  { href: '/flyers', label: 'Flyers', icon: Megaphone },
];

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen>
      <Sidebar>
        <SidebarHeader className="p-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10" asChild>
              <Link href="/">
                <Feather className="h-7 w-7" />
              </Link>
            </Button>
            <h1 className="font-headline text-2xl font-semibold text-primary">
              Pen Evangelist
            </h1>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.label}>
                <Link href={item.href} passHref legacyBehavior>
                  <SidebarMenuButton className="text-base" asChild>
                    <a>
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="p-4 border-t border-sidebar-border">
           {/* Placeholder for potential footer items like settings or user profile */}
           <Button variant="ghost" className="w-full justify-start gap-2 text-muted-foreground">
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </Button>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset className="bg-background">
         <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-4 md:hidden">
            <SidebarTrigger />
             <div className="flex items-center gap-2">
                <Feather className="h-6 w-6 text-primary" />
                <h1 className="font-headline text-xl font-semibold text-primary">Pen Evangelist</h1>
            </div>
          </header>
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
            {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
