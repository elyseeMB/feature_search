import { AppSidebar } from '~/components/app-sidebar.js'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '~/components/ui/breadcrumb.js'
import { Separator } from '~/components/ui/separator.js'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '~/components/ui/sidebar.js'
import { Head } from '@inertiajs/react'
import { FC, Fragment, PropsWithChildren, ReactNode } from 'react'
import { ThemeProvider } from '~/components/theme-provider.js'

export type BreadcrumbItem = {
  title: string
  href: string
}

const Layout = ({
  children,
  breadcrumbs,
}: PropsWithChildren<{
  breadcrumbs: BreadcrumbItem[]
}>) => {
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
                      {breadcrumbs.map((item, index) => (
                        <Fragment key={index}>
                          <BreadcrumbItem className="hidden md:block">
                            <BreadcrumbLink href={item.href}>{item.title} </BreadcrumbLink>
                          </BreadcrumbItem>
                          {breadcrumbs.length - 1 === index ? (
                            <></>
                          ) : (
                            <BreadcrumbSeparator className="hidden md:block" />
                          )}
                        </Fragment>
                      ))}
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

export function withAppLayout<T>(breadcrumb: BreadcrumbItem[], component: FC<T>) {
  //@ts-ignore
  component.layout = (page: ReactNode) => <Layout breadcrumbs={breadcrumb}> {page} </Layout>
  return component
}

export default Layout
