var MyClass = React.createClass({
    render: function() {
      return (
        <div>
          <div className="grid grid-flow-row gap-1">
            <div className="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800" style={{borderBottom: '3px solid blue'}}>
              <div x-data="{ open: false }" className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                <div className="p-1 flex flex-row items-center justify-between">
                  <a href="#" className="text-xl font-normal tracking-widest text-gray-900 uppercase dark-mode:text-white focus:outline-none focus:shadow-outline">Sales</a>
                  <button className="md:hidden focus:outline-none focus:shadow-outline" @click="open = !open">
                    <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                      <path x-show="!open" fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
                      <path x-show="open" fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                <nav :class="{'flex': open, 'hidden': !open}" className="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-start md:flex-row pt-1 md:ml-5">
                  <a style={{borderTop: '3px solid blue'}} className="px-4 py-2 mt-2 text-sm font-normal text-gray-900 bg-gray-200 dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Home</a>
                  <a className="px-4 py-2 mt-2 text-sm font-normal bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-1 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Chatter</a>
                  <div @click.away="open = false" className="relative" x-data="{ open: false }">
                    <button @click="open = !open" className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-normal text-left bg-transparent dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-1 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                      <span>Opportunities</span>
                      <svg fill="currentColor" viewBox="0 0 20 20" :class="{'rotate-180': open, 'rotate-0': !open}" className="inline w-5 h-5 ml-1 transition-transform duration-200 transform">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <div x-show="open" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95" className="absolute right-0 w-full mt-2 origin-top-right  shadow-lg md:w-48">
                      <div className="px-2 py-2 bg-white  shadow dark-mode:bg-gray-800">
                        <a className="block px-4 py-2 mt-2 text-sm font-normal bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Link #1</a>
                        <a className="block px-4 py-2 mt-2 text-sm font-normal bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Link #2</a>
                        <a className="block px-4 py-2 mt-2 text-sm font-normal bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Link #3</a>
                      </div>
                    </div>
                  </div>
                  <div @click.away="open = false" className="relative" x-data="{ open: false }">
                    <button @click="open = !open" className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-normal text-left bg-transparent dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-1 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                      <span>Leads</span>
                      <svg fill="currentColor" viewBox="0 0 20 20" :class="{'rotate-180': open, 'rotate-0': !open}" className="inline w-5 h-5 ml-1 transition-transform duration-200 transform">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <div x-show="open" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95" className="absolute right-0 w-full mt-2 origin-top-right  shadow-lg md:w-48">
                      <div className="px-2 py-2 bg-white  shadow dark-mode:bg-gray-800">
                        <a className="block px-4 py-2 mt-2 text-sm font-normal bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Link #1</a>
                        <a className="block px-4 py-2 mt-2 text-sm font-normal bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Link #2</a>
                        <a className="block px-4 py-2 mt-2 text-sm font-normal bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Link #3</a>
                      </div>
                    </div>
                  </div>
                  <div @click.away="open = false" className="relative" x-data="{ open: false }">
                    <button @click="open = !open" className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-normal text-left bg-transparent dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-1 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                      <span>Tasks</span>
                      <svg fill="currentColor" viewBox="0 0 20 20" :class="{'rotate-180': open, 'rotate-0': !open}" className="inline w-5 h-5 ml-1 transition-transform duration-200 transform">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <div x-show="open" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95" className="absolute right-0 w-full mt-2 origin-top-right  shadow-lg md:w-48">
                      <div className="px-2 py-2 bg-white  shadow dark-mode:bg-gray-800">
                        <a className="block px-4 py-2 mt-2 text-sm font-normal bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Link #1</a>
                        <a className="block px-4 py-2 mt-2 text-sm font-normal bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Link #2</a>
                        <a className="block px-4 py-2 mt-2 text-sm font-normal bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Link #3</a>
                      </div>
                    </div>
                  </div>
                  <a className="px-4 py-2 mt-2 text-sm font-normal bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-1 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Files</a>
                  <div @click.away="open = false" className="relative" x-data="{ open: false }">
                    <button @click="open = !open" className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-normal text-left bg-transparent dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-1 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                      <span>Accounts</span>
                      <svg fill="currentColor" viewBox="0 0 20 20" :class="{'rotate-180': open, 'rotate-0': !open}" className="inline w-5 h-5 ml-1 transition-transform duration-200 transform">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <div x-show="open" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95" className="absolute right-0 w-full mt-2 origin-top-right  shadow-lg md:w-48">
                      <div className="px-2 py-2 bg-white  shadow dark-mode:bg-gray-800">
                        <a className="block px-4 py-2 mt-2 text-sm font-normal bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Link #1</a>
                        <a className="block px-4 py-2 mt-2 text-sm font-normal bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Link #2</a>
                        <a className="block px-4 py-2 mt-2 text-sm font-normal bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Link #3</a>
                      </div>
                    </div>
                  </div>
                  <div @click.away="open = false" className="relative" x-data="{ open: false }">
                    <button @click="open = !open" className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-normal text-left bg-transparent dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-1 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                      <span>Contacts</span>
                      <svg fill="currentColor" viewBox="0 0 20 20" :class="{'rotate-180': open, 'rotate-0': !open}" className="inline w-5 h-5 ml-1 transition-transform duration-200 transform">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <div x-show="open" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95" className="absolute right-0 w-full mt-2 origin-top-right  shadow-lg md:w-48">
                      <div className="px-2 py-2 bg-white  shadow dark-mode:bg-gray-800">
                        <a className="block px-4 py-2 mt-2 text-sm font-normal bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Link #1</a>
                        <a className="block px-4 py-2 mt-2 text-sm font-normal bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Link #2</a>
                        <a className="block px-4 py-2 mt-2 text-sm font-normal bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Link #3</a>
                      </div>
                    </div>
                  </div>
                  <div @click.away="open = false" className="relative" x-data="{ open: false }">
                    <button @click="open = !open" className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-normal text-left bg-transparent dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-1 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                      <span>Campaigns</span>
                      <svg fill="currentColor" viewBox="0 0 20 20" :class="{'rotate-180': open, 'rotate-0': !open}" className="inline w-5 h-5 ml-1 transition-transform duration-200 transform">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <div x-show="open" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95" className="absolute right-0 w-full mt-2 origin-top-right  shadow-lg md:w-48">
                      <div className="px-2 py-2 bg-white  shadow dark-mode:bg-gray-800">
                        <a className="block px-4 py-2 mt-2 text-sm font-normal bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Link #1</a>
                        <a className="block px-4 py-2 mt-2 text-sm font-normal bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Link #2</a>
                        <a className="block px-4 py-2 mt-2 text-sm font-normal bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Link #3</a>
                      </div>
                    </div>
                  </div>
                  <div @click.away="open = false" className="relative" x-data="{ open: false }">
                    <button @click="open = !open" className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-normal text-left bg-transparent dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-1 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                      <span>More</span>
                      <svg fill="currentColor" viewBox="0 0 20 20" :class="{'rotate-180': open, 'rotate-0': !open}" className="inline w-5 h-5 ml-1 transition-transform duration-200 transform">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <div x-show="open" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95" className="absolute right-0 w-full mt-2 origin-top-right  shadow-lg md:w-48">
                      <div className="px-2 py-2 bg-white  shadow dark-mode:bg-gray-800">
                        <a className="block px-4 py-2 mt-2 text-sm font-normal bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Link #1</a>
                        <a className="block px-4 py-2 mt-2 text-sm font-normal bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Link #2</a>
                        <a className="block px-4 py-2 mt-2 text-sm font-normal bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Link #3</a>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
            <div>
              <div className="mb-2 border-solid border-grey-light border shadow-sm bg-white">
                <div>
                  <div className="bg-gray-100 px-2 py-1 border-solid border-grey-light border-b grid grid-cols-5 gap-1">
                    <div className="flex">
                      <div>
                        <svg className="w-8 h-8 mt-1 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                          <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
                        </svg>
                      </div>
                      <div className="ml-2">
                        <p style={{marginBottom: '-6px'}}>Account</p>
                        <p className="text-lg font-semibold ">Consulting</p>
                      </div>
                    </div>
                    <div className="col-span-4 ">
                      <div className="flex justify-end ">
                        <div className="inline-flex rounded-md shadow-sm" role="group">
                          <button type="button" style={{fontSize: '14px'}} className="inline-flex  font-light items-center text-blue-700 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                            <svg className="w-3 h-3 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                            Follow
                          </button>
                          <button type="button" style={{fontSize: '14px'}} className="inline-flex font-light items-center px-4 py-2 text-blue-700 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                            New Contact
                          </button>
                          <button type="button" style={{fontSize: '14px'}} className="inline-flex font-light items-center text-blue-700 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                            New Case
                          </button>
                          <button type="button" style={{fontSize: '14px'}} className="inline-flex font-light items-center text-blue-700 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                            New Note
                          </button>
                          <button type="button" style={{fontSize: '14px'}} className="inline-flex font-light items-center text-blue-700 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                            New Opportunity
                          </button>
                          <button type="button" style={{fontSize: '14px'}} className="inline-flex items-center text-blue-700 px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                            Edit
                          </button>
                          <button type="button" style={{fontSize: '14px'}} className="inline-flex font-light items-center text-blue-700 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                            <svg className="w-3 h-3 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                              <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-1 text-sm">
                  <ul className="grid grid-flow-col" style={{fontSize: '14px'}}>
                    <li className="ml-3">
                      <p className="text-gray-500 font-light">Type</p>
                      <h6>Prospect</h6>
                    </li>
                    <li>
                      <p className="text-gray-500 font-light">Phone</p>
                      <p>(800) 928-9156</p>
                    </li>
                    <li>
                      <p className="text-gray-500 font-light">Website</p>
                      <p className="text-blue-700 font-light">WWW.Imbuesoft.com</p>
                    </li>
                    <li>
                      <p className="text-gray-500 font-light">Billing Address</p>
                      <p>888 Airport Bivd,<br />Burlingame, CA 94010 USA</p>
                    </li>
                    <li>
                      <p className="text-gray-500 font-light">Open Opportunities Amount Lifetime</p>
                      <p>$0.00</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-4 bg-white" style={{marginBottom: '-45px'}}>
                <div className="col-span-8">
                  <ul className="grid grid-flow-col border-b border-gray-200 text-gray-500">
                    <li>
                      <a href="#page1" style={{fontSize: '15px'}} className=" flex ml-5 font-light border-b-4 border-transparent text-sm  bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:border-indigo-600 py-2">
                        DETAILS</a>
                    </li>
                    <li style={{marginLeft: '-155px'}}>
                      <a href="#page2" style={{fontSize: '15px'}} className="flex border-b-4 font-light border-transparent text-sm  bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:border-indigo-600 py-2">
                        RELATED
                      </a>
                    </li>
                    <li style={{marginLeft: '-250px'}}>
                      <a href="#page3" style={{fontSize: '15px'}} className="flex border-b-4 font-light border-transparent text-sm  bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:border-indigo-600 py-2">
                        NEWS</a>
                    </li>
                  </ul>
                </div>
                <div className="col-span-4 ">
                  <ul className="grid grid-flow-col font-light  border-b border-gray-200 text-gray-500">
                    <li>
                      <a href="#page1" style={{fontSize: '15px'}} className="flex  border-b-4 font-light border-transparent text-sm  bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:border-indigo-600 py-2">
                        ACTIVITY</a>
                    </li>
                    <li style={{marginLeft: '-100px'}}>
                      <a href="#page2" style={{fontSize: '15px'}} className="flex  border-b-4 font-light border-transparent text-sm  bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:border-indigo-600 py-2">
                        CHATTER
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div id="myTabContent" className="bg-white ">
                <div className="grid grid-cols-12 gap-4  mt-12">
                  <div className="col-span-8 ml-2">
                    <div className="grid grid-cols-12 mt-4 gap-4">
                      <div className="col-span-6 ml-2 ">
                        <p className="text-gray-700" style={{fontSize: '14px'}}>Account Owner</p>
                        <div className="border-b border-gray-200 text-blue-700">
                          <span className="text" style={{fontSize: '15px'}}>Michelle Lavalette</span>
                          <span className="icon-container"> <i className="fas fa-user" onclick="editField(this)" /></span>
                        </div>
                        <p className="text-gray-700 mt-2" style={{fontSize: '14px'}}>Account Name</p>
                        <div className="border-b border-gray-200">
                          <span className="text" style={{fontSize: '15px'}}>Soliant Consulting</span>
                          <span className="icon-container"><i className="fas fa-pen" onclick="editField(this.parentNode)" /></span>
                        </div>
                        <p className="text-gray-700 mt-2" style={{fontSize: '14px'}}>Parent Account</p>
                        <div className="border-b border-gray-200">
                          <span className="text" style={{fontSize: '15px'}}>.</span>
                          <span className="icon-container"><i className="fas fa-pen" onclick="editField(this.parentNode)" /></span>
                        </div>
                        <p className="text-gray-700 mt-2" style={{fontSize: '14px'}}>Account Number</p>
                        <div className="border-b border-gray-200">
                          <span className="text" style={{fontSize: '15px'}}>a111</span>
                          <span className="icon-container"><i className="fas fa-pen" onclick="editField(this.parentNode)" /></span>
                        </div>
                        <p className="text-gray-700 mt-2" style={{fontSize: '14px'}}>Type</p>
                        <div className="border-b border-gray-200">
                          <span className="text" style={{fontSize: '15px'}}>Prospect</span>
                          <span className="icon-container"><i className="fas fa-pen" onclick="editField(this.parentNode)" /></span>
                        </div>
                        <p className="text-gray-700 mt-2" style={{fontSize: '14px'}}>Industry</p>
                        <div className="border-b border-gray-200">
                          <span className="text" style={{fontSize: '15px'}}>Technology</span>
                          <span className="icon-container"> <i className="fas fa-pen" onclick="editField(this.parentNode)" /></span>
                        </div>
                        <p className="text-gray-700 mt-2" style={{fontSize: '14px'}}>Annual Revenue</p>
                        <div className="border-b border-gray-200">
                          <span className="text" style={{fontSize: '15px'}}>.</span>
                          <span className="icon-container"><i className="fas fa-pen" onclick="editField(this.parentNode)" /></span>
                        </div>
                        <p className="text-gray-700 mt-2" style={{fontSize: '14px'}}>Billing Address</p>
                        <div className="border-b border-gray-200">
                          <span className="text text-blue-700" style={{fontSize: '15px'}}>888 Airport Bivd, Burlingame, CA 94010 USA</span>
                          <span className="icon-container">  <i className="fas fa-pen " onclick="editField(this.parentNode)" /></span>
                        </div>
                      </div>
                      <div className="col-span-6">
                        <p className="text-gray-700" style={{fontSize: '14px'}}>Phone</p>
                        <div className="border-b border-gray-200">
                          <span className="text" style={{fontSize: '15px'}}>+91(955)8362840</span>
                          <span className="icon-container"><i className="fas fa-pen" onclick="editField(this.parentNode)" /></span>
                        </div>
                        <p className="text-gray-700 mt-2" style={{fontSize: '14px'}}>Fax</p>
                        <div className="border-b border-gray-200">
                          <span className="text" style={{fontSize: '15px'}}>.</span>
                          <span className="icon-container"><i className="fas fa-pen" onclick="editField(this.parentNode)" /></span>
                        </div>
                        <p className="text-gray-700 mt-2" style={{fontSize: '14px'}}>Website</p>
                        <div className="border-b border-gray-200">
                          <span className="text text-blue-700" style={{fontSize: '15px'}}>www.imbuesoft.com</span>
                          <span className="icon-container"><i className="fas fa-pen" onclick="editField(this.parentNode)" /></span>
                        </div>
                        <p className="text-gray-700 mt-2" style={{fontSize: '14px'}}>Ticker Symbol</p>
                        <div className="border-b border-gray-200">
                          <span className="text" style={{fontSize: '15px'}}>.</span>
                          <span className="icon-container"><i className="fas fa-pen" onclick="editField(this.parentNode)" /></span>
                        </div>
                        <p className="text-gray-700 mt-2" style={{fontSize: '14px'}}>Ownership</p>
                        <div className="border-b border-gray-200">
                          <span className="text" style={{fontSize: '15px'}}>.</span>
                          <span className="icon-container"><i className="fas fa-pen" onclick="editField(this.parentNode)" /></span>
                        </div>
                        <p className="text-gray-700 mt-2" style={{fontSize: '14px'}}>Number of Locations</p>
                        <div className="border-b border-gray-200">
                          <span className="text" style={{fontSize: '15px'}}>.</span>
                          <span className="icon-container ml-1"><i className="fas fa-pen" onclick="editField(this.parentNode)" /></span>
                        </div>
                        <p className="text-gray-700 mt-2" style={{fontSize: '14px'}}>Employees</p>
                        <div className="border-b border-gray-200">
                          <span className="text" style={{fontSize: '15px'}}>.</span>
                          <span className="icon-container ml-12"><i className="fas fa-pen" onclick="editField(this.parentNode)" /></span>
                        </div>
                        <p className="text-gray-700 mt-2" style={{fontSize: '14px'}}>Shipping Address</p>
                        <div className="border-b border-gray-200">
                          <span className="text" style={{fontSize: '15px'}}>.</span>
                          <span className="icon-container"><i className="fas fa-pen" onclick="editField(this.parentNode)" /></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-4">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                      <div className="px-6  bg-gray-100 mt-3">
                        <ul className="grid grid-flow-col text-gray-500">
                          <li>
                            <a href="#page1" style={{fontSize: '11px'}} className=" flex ml-3 font-light border-b-4 border-transparent text-sm  bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:border-indigo-600 py-2">
                              New Task</a>
                          </li>
                          <li>
                            <a href="#page2" style={{fontSize: '11px'}} className="flex border-b-4 font-light border-transparent text-sm  bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:border-indigo-600 py-2">
                              Log a Call
                            </a>
                          </li>
                          <li>
                            <a href="#page3" style={{fontSize: '11px'}} className="flex border-b-4 font-light border-transparent text-sm  bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:border-indigo-600 py-2">
                              NEW EVENT</a>
                          </li>
                          <li>
                            <a href="#page3" style={{fontSize: '11px'}} className="flex border-b-4 font-light border-transparent text-sm  bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:border-indigo-600 py-2">
                              Email</a>
                          </li>
                        </ul>
                      </div>
                      <div className="p-3">
                        <input type="text" className="rounded " style={{fontSize: '10px', width: '250px', height: '30px'}} placeholder="Recap Your Call..." />
                        <button className="bg-blue-900 hover:bg-blue-700 text-white px-6 border rounded-0" style={{fontSize: '10px', height: '30px'}}>
                          Add
                        </button>
                      </div>
                    </div>
                    <div className="mt-3" style={{fontSize: '14px'}}>
                      <div @click.away="open = false" className="relative" x-data="{ open: false }">
                        <button @click="open = !open" style={{marginLeft: '-15px'}} className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-normal text-left bg-transparent dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-1 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                          <span>Filter Timeline</span>
                          <svg fill="currentColor" viewBox="0 0 20 20" :class="{'rotate-180': open, 'rotate-0': !open}" className="inline w-5 h-5 ml-1 transition-transform duration-200 transform">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                        <div x-show="open" x-transition:enter="transition ease-out duration-100" className="absolute right-0 w-full mt-2 origin-top-right  shadow-lg md:w-48">
                          <div className="px-2 py-2 bg-white  shadow dark-mode:bg-gray-800" style={{marginLeft: '-215px'}}>
                            <a className="block px-4 py-2 mt-2 text-sm font-normal bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Link #1</a>
                            <a className="block px-4 py-2 mt-2 text-sm font-normal bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Link #2</a>
                            <a className="block px-4 py-2 mt-2 text-sm font-normal bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Link #3</a>
                          </div>
                        </div>
                        <div className="flex items-center justify-between h-16" style={{marginLeft: '250px', marginTop: '-50px'}}>
                          <div className="flex items-center">
                            <a href="#" className="text-black ">
                              <button type="button" style={{fontSize: '14px', marginLeft: '-15px'}} className="inline-flex  font-light items-center text-blue-700 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                                Expand All
                              </button>
                            </a>
                            <a href="#" className="text-black py-1 ">
                              <button type="button" style={{height: '37px'}} className="inline-flex  font-light items-center text-blue-700 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                                <svg className="w-3 h-3 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                                  <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                                </svg>
                              </button>
                            </a>
                          </div>
                        </div>
                        <p className="ml-5" style={{fontSize: '15px', marginLeft: '-1px'}}>Next Steps
                          <a href="#" className="text-black" style={{marginLeft: '150px'}}>
                            <button type="button" style={{fontSize: '14px', marginLeft: '57px'}} className="inline-flex  font-light items-center text-gray-200 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                              More Steps
                            </button>
                          </a>
                        </p>
                        <div style={{marginLeft: '-20px'}}>
                          <p className="ml-5 mt-3">No Next Steps. To get things moving, add a task or set up a
                          </p><p className="text-center" style={{marginLeft: '-70px'}}>Meeting</p>
                          <p />
                        </div>  
                        <p className="ml-5 mt-2" style={{fontSize: '18px', marginLeft: '-1px'}}>Past Activity</p>
                        <span className style={{marginLeft: '350px'}}>Today</span>
                        <p className="ml-10 text-blue-700" style={{fontSize: '15px'}}>Call
                          <br />
                        </p><p className="ml-10">You Logged a call</p>
                        <p />
                        <a href="#" className="text-black" style={{marginLeft: '260px'}}>
                          <button type="button" style={{fontSize: '13px', marginTop: '-100px'}} className="inline-flex  font-light items-center text-gray-200 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                            More Post Activity
                          </button>
                        </a>
                        <textarea id="w3review" className="mt-3" name="w3review" rows={1} cols={43} defaultValue={"                 All Closed Opportunities\n                    "} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });