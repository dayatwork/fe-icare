// type Navigation = {
//   name: string
//   icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
//   href: string
//   current: boolean
// }[]

type Navigation = {
  name: string
  href: string
  current: boolean
}[]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const SidebarNav = ({ navigation }: { navigation: Navigation }) => {
  return (
    <div className="flex flex-col flex-grow py-4 bg-white overflow-y-auto rounded-md">
      <div className="mt-2 flex-grow flex flex-col">
        <nav className="flex-1 bg-white space-y-1" aria-label="Sidebar">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? 'text-limeade border-limeade'
                  : 'border- text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                'group flex items-center px-6 py-2 font-medium border-r-4'
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
