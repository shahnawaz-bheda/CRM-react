import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faImage, faVideo, faLink, faCode } from '@fortawesome/free-solid-svg-icons';

export default function Helpdesk() {
    const [selectedButton, setSelectedButton] = useState(null);
    const handleButtonClick = (button) => {
        setSelectedButton(button);
    };

    return (
        <div style={{ background: '#EDEDED', height: '600px' }} >
            <div className='container mx-auto' >
                <div style={{ background: 'white' }} className=' rounded-xl'>
                    <nav className="flex justify-between flex-wrap">
                        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                            <div className="text-sm lg:flex-grow m-3">
                                <select name="cars" className='text-xl text-black rounded-xl' id="cars" style={{ fontSize: '17px' }}>
                                    <option value="#">Shahnawaz bheda</option>
                                    <option>Knowledge Base</option>
                                    <option>My Account </option>
                                    <option>Log out</option>
                                </select>
                            </div>
                            <div>
                                <b><p className='text-black me-3' style={{ fontSize: '17px' }}>Helpdesk</p></b>
                            </div>
                        </div>
                    </nav>
                </div>

                <div style={{ background: 'white', height: '600px' }} className='rounded-2xl mt-3 py-2  '>
                    <div className=' border-b'>
                        <nav className="flex rounded-2xl justify-between flex-wrap ">
                            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                                <div className="text-sm lg:flex-grow">
                                    <p className='text-xl text-black ms-5 m-3' style={{ fontSize: '17px' }}>Tickets</p>
                                </div>
                                <div className='me-3'>
                                    <select name="#" style={{ fontSize: '15px' }} className='text-xl text-black' id="#">
                                        <option value="#">All Tickets   </option>
                                        <option>All Tickets</option>
                                        <option>Open Tickets </option>
                                        <option>Closed Tickets</option>
                                    </select>
                                </div>
                                <div>
                                    <button onClick={() => handleButtonClick("NewTickets")} style={{ background: 'black',fontSize: '14px' }} className="me-5 hover:bg-blue-700 text-white font-bold py-1 rounded-xl px-3 rounded">
                                        New ticket +
                                    </button>

                                    {/* <b><p className='text-black me-3' style={{ fontSize: '20px' }}>New Tickets +</p></b> */}
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className='mt-12'>
                        <p className='ms-5'>
                            {
                                selectedButton === "NewTickets" && (
                                    <>
                                        <div className="mb-6 m-5">
                                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
                                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="A short description" required />
                                        </div>

                                        <a href="#" className="block m-5 max-w  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                            <div className='p-6'>
                                                <p className='text-black '>Shahnawaz Bheda</p>
                                                <p className='text-gray-400 mt-5'>Detailed explaination</p>
                                            </div>

                                            <nav className="flex justify-between flex-wrap">
                                                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                                                    <div className="text-sm lg:flex-grow m-3">
                                                        <div className="grid grid-cols-2 gap-4">
                                                            <div>
                                                                <div class="grid grid-cols-10 ms-3 mt-3 text-black">
                                                                    <div><a href='#' style={{ color: 'black', fontSize: '17px' }}>T</a></div>
                                                                    <div><a href='#' style={{ color: 'black', fontSize: '17px' }}>H2</a></div>
                                                                    <div><a href='#' style={{ color: 'black', fontSize: '17px' }}><FontAwesomeIcon icon={faBars} /></a></div>
                                                                    <div><a href='#' style={{ color: 'black', fontSize: '17px' }}><FontAwesomeIcon icon={faBars} /></a></div>
                                                                    <div><a href='#' style={{ color: 'black', fontSize: '17px' }}><FontAwesomeIcon icon={faImage} /></a></div>
                                                                    <div><a href='#' style={{ color: 'black', fontSize: '17px' }}><FontAwesomeIcon icon={faVideo} /></a></div>
                                                                    <div><a href='#' style={{ color: 'black', fontSize: '17px' }}><FontAwesomeIcon icon={faLink} /></a></div>
                                                                    <div><a href='#' style={{ color: 'black', fontSize: '17px' }}>"</a></div>
                                                                    <div><a href='#' style={{ color: 'black', fontSize: '17px' }}><FontAwesomeIcon icon={faCode} /></a></div>
                                                                    <div><a href='#' style={{ color: 'black', fontSize: '17px' }}><FontAwesomeIcon icon={faLink} /></a></div>
                                                                </div>
                                                            </div>

                                                            <div className='text-end'>
                                                                <div>
                                                                    <div class="grid grid-cols-2 ms-72 text-black">
                                                                        <div>
                                                                            <button className="bg-gray-200 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
                                                                                Discard
                                                                            </button>
                                                                        </div>

                                                                        <div>
                                                                            <button className="bg-gray-200 me-12  hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
                                                                                Submit
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </nav>
                                        </a>

                                    </>
                                )
                            }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
