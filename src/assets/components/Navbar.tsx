import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/24/outline'

import { useTranslation } from 'react-i18next';

const Navbar = () => {

  const { t } = useTranslation();

  const navigation = [
    { href: "#skills", name: t('nav.skills') },
    { href: "#experience", name: t('nav.experience') },
    { href: "#education", name: t('nav.education') },
    { href: "#projects", name: t('nav.projects') },
    { href: "#certification", name: t('nav.certification') },
    { href: "#contact", name: t('nav.contact') }
  ];

  return (
    <Disclosure as="nav" className="bg-gray-800 sticky top-0 z-50 shadow-md backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo / Brand */}
          <div className="flex items-center">
            <h1 className="text-green-400 font-mono font-bold text-xl tracking-wide">
              Luis
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:space-x-6 items-center">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-white hover:underline underline-offset-4 transition"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center sm:hidden">
            <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      {/* Mobile Menu Items */}
      <DisclosurePanel className="sm:hidden bg-gray-900 border-t border-gray-700">
        <div className="px-2 pt-3 pb-4 space-y-1">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
};
export default Navbar;