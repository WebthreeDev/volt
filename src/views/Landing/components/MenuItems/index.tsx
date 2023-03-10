import { ButtonBase } from '@gravis.finance/uikit'
import React from 'react'

export const links = [
  {
    label: 'Why Us',
    href: '#whyus',
  },
  {
    label: 'Products',
    href: '#products',
  },
  {
    label: 'Mobile Wallet',
    href: '#mobilewallet',
  },
  {
    label: 'Roadmap',
    href: '#roadmap',
  },
  {
    label: 'Team',
    href: '#team',
  },
  {
    label: 'Tokenomics',
    href: '#tokenomics',
  },
  {
    label: 'Partners',
    href: '#partners',
  },
]

const ActiveLinkContext = React.createContext<{
  activeLink: string
  setActiveLink: React.Dispatch<React.SetStateAction<string>>
  // eslint-disable-next-line @typescript-eslint/no-empty-function
}>({ activeLink: '', setActiveLink: () => {} })

export const ActiveLinkProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeLink, setActiveLink] = React.useState(links[0].href)
  return <ActiveLinkContext.Provider value={{ activeLink, setActiveLink }}>{children}</ActiveLinkContext.Provider>
}

export const useActiveLink = () => React.useContext(ActiveLinkContext)

const prevIntersectionValue = {
  current: 0,
}

export const goTo = (id: string) => {
  const view = document.querySelector(id)
  if (view) {
    window.scrollTo({ top: view.getBoundingClientRect().top })
  }
}

export const MenuItemBase = ({
  onClick,
  href,
  ...props
}: React.ComponentProps<typeof ButtonBase> & React.HTMLAttributes<HTMLAnchorElement>) => {
  const { setActiveLink } = useActiveLink()

  const clickHandler = (event: any) => {
    event.preventDefault()

    const view = document.querySelector(href)
    if (view) {
      window.scrollTo({ top: view.offsetTop })
    } else {
      window.scrollTo({ top: 0 })
    }

    if (onClick) onClick(event)
  }

  React.useEffect(() => {
    const view = href !== '#' ? document.querySelector(href) : null
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (entry.intersectionRatio > prevIntersectionValue.current) {
            setActiveLink(href)
          }
          prevIntersectionValue.current = entry.intersectionRatio
        } else {
          setActiveLink((prevValue) => (prevValue === href ? '' : prevValue))
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: [0, 0.5, 1],
      },
    )
    if (view) {
      intersectionObserver.observe(view)
    }
    return () => {
      intersectionObserver?.disconnect()
    }
  }, [href, setActiveLink])

  return <ButtonBase as="a" href={href} onClick={clickHandler} {...props} />
}

export const MenuItems = ({ ItemComponent = MenuItemBase, ...props }) => {
  return (
    <ActiveLinkProvider>
      {links.map((link) => (
        <div key={link.href}>
          <ItemComponent href={link.href} {...props}>
            {link.label}
          </ItemComponent>
        </div>
      ))}
    </ActiveLinkProvider>
  )
}
