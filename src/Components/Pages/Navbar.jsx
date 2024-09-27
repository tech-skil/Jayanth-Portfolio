import React from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'About', href: '#About', current: false },
  { name: 'Education', href: '#Edukation', current: false },
  { name: 'Skills', href: '#Skills', current: false },
  { name: 'Projects', href: '#Projects', current: false },
  { name: 'Contacts', href: '#Contacts', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  return (
    <div>
        <Disclosure as="nav" className="bg-gray-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-200 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <h1 className='font-bold cursor-pointer' href="#About">My Portfolio</h1>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Menu as="div" className="relative ml-3">
                  <div>
                    <div className="hidden sm:ml-6 sm:block">
                      <div className="flex space-x-4">
                        <a
                          href="#About"
                          className={classNames(
                            'text-gray-700 hover:text-purple-600 hover:border-b-2 hover:border-purple-600',
                            'rounded-md px-3 py-2 text-sm font-medium active:bg-slate-100 focus:outline-none focus:border-b-2 focus:border-purple-600 focus:text-purple-600'
                          )}
                        >
                          About
                        </a>
                        <a
                          href="#Edukation"
                          className={classNames(
                            'text-gray-700 hover:text-purple-600 hover:border-b-2 hover:border-purple-600',
                            'rounded-md px-3 py-2 text-sm font-medium active:bg-slate-100 focus:outline-none focus:border-b-2 focus:border-purple-600 focus:text-purple-600'
                          )}
                        >
                          Education
                        </a>
                        <a
                          href="#Skills"
                          className={classNames(
                            'text-gray-700 hover:text-purple-600 hover:border-b-2 hover:border-purple-600',
                            'rounded-md px-3 py-2 text-sm font-medium active:bg-slate-100 focus:outline-none focus:border-b-2 focus:border-purple-600 focus:text-purple-600'
                          )}
                        >
                          Skills
                        </a>
                        <a
                          href="#Projects"
                          className={classNames(
                            'text-gray-700 hover:text-purple-600 hover:border-b-2 hover:border-purple-600',
                            'rounded-md px-3 py-2 text-sm font-medium active:bg-slate-100 focus:outline-none focus:border-b-2 focus:border-purple-600 focus:text-purple-600'
                          )}
                        >
                          Projects
                        </a>
                        <a
                          href="#Contacts"
                          className={classNames(
                            'text-gray-700 hover:text-purple-600 hover:border-b-2 hover:border-purple-600',
                            'rounded-md px-3 py-2 text-sm font-medium active:bg-slate-100 focus:outline-none focus:border-b-2 focus:border-purple-600 focus:text-purple-600'
                          )}
                        >
                          Contacts
                        </a>
                        <div className='flex flex-row items-center justify-center cursor-pointer'>
                        {/* <SunIcon className="h-6 w-6 text-yellow-500 " aria-hidden="true" /> */}
                        <MoonIcon className="h-6 p-0.5 w-6 text-purple-700 hover:border-2 hover:border-black hover:rounded-full" aria-hidden="true" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#home"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#home"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-600')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#home"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Disclosure.Button
                as="a"
                href="#About"
                className={classNames(
                  'navmenue '
                )}
              >
                About
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#Edukation"
                className={classNames(
                  'navmenue'
                )}
              >
                Education
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#Skills"
                className={classNames(
                  'navmenue'
                )}
              >
                Skills
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#Projects"
                className={classNames(
                  'navmenue'
                )}
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#Contacts"
                className={classNames(
                  'navmenue'
                )}
              >
                Contacts
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
          <hr />
        </>
      )}
    </Disclosure>
    </div>
  )
}

export default Navbar
