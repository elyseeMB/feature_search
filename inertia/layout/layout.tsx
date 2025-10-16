import { AppSidebar } from '~/components/app-sidebar.js'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '~/components/ui/breadcrumb.js'
import { Separator } from '~/components/ui/separator.js'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '~/components/ui/sidebar.js'
import { Head } from '@inertiajs/react'
import { PropsWithChildren } from 'react'
import { ThemeProvider } from '~/components/theme-provider.js'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Head title="search" />
        <div className="bg-background relative z-10 flex min-h-svh flex-col">
          <main className="flex flex-1 flex-col">
            <SidebarProvider>
              <AppSidebar />
              <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                  <SidebarTrigger className="-ml-1" />
                  <Separator
                    orientation="vertical"
                    className="mr-2 data-[orientation=vertical]:h-4"
                  />
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem className="hidden md:block">
                        <BreadcrumbLink href="#">Building Your Application</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator className="hidden md:block" />
                      <BreadcrumbItem>
                        <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </header>
                {children}
              </SidebarInset>
            </SidebarProvider>
          </main>
        </div>
      </ThemeProvider>
    </>
  )
}
