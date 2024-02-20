import React from 'react'

export default function RightSideBar() {
  return (
<aside className="bg-gray-800 h-full text-white flex-shrink-0">
            <div className="p-4">
              <div className="text-xl font-bold">Responsive Drawer</div>
              <div className="mt-4">
                <div className="mb-2">Mailbox</div>
                <ul>
                  <li className="mb-2">
                    <a
                      href="#"
                      className="flex items-center text-gray-300 hover:text-white"
                    >
                      <svg
                        className="h-5 w-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 2a1 1 0 00-1 1v12a1 1 0 102 0V3a1 1 0 00-1-1zM3 5a1 1 0 00-1 1v10a1 1 0 102 0V6a1 1 0 00-1-1zM17 7a1 1 0 00-1 1v8a1 1 0 102 0V8a1 1 0 00-1-1zM8 13a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1zM7 10a1 1 0 00-1 1v2a1 1 0 102 0v-2a1 1 0 00-1-1zM12 9a1 1 0 100 2h2a1 1 0 100-2h-2zM7 7a1 1 0 00-1 1v2a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Inbox
                    </a>
                  </li>
                  {/* <!-- Add more list items as needed --> */}
                </ul>
              </div>
            </div>
          </aside>  )
}
