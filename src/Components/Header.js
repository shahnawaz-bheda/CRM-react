
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import Data from './Data.json'




export default function Leads(props, { initialValue }) {

  const [isEditing1, setIsEditing1] = useState(false);
  const [text1, setText1] = useState(initialValue);
  const [key1, setKey1] = useState(0);

  const handleEdit1 = () => {
    setIsEditing1(true);
    // Increment the key to re-render the input in place
    setKey1((prevKey) => prevKey + 1);
  };

  const handleBlur1 = () => {
    setIsEditing1(false);
  };

  const handleChange1 = (e) => {
    setText1(e.target.value);
  };


  const [isOpenPopup12, setIsOpenPopup12] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  // Function to toggle the "Add to Campaign" popup
  const togglePopup12 = () => {
    setIsOpenPopup2(!isOpenPopup2);
  };


  const handleAddToCampaignClick = () => {
    if (isChecked) {
      togglePopup12();
    } else {
      alert('Please check the checkbox before proceeding.');
    }
  };

  // Function to handle checkbox change
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const [temporaryMessage, setTemporaryMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const sendMessage = () => {
    if (temporaryMessage.trim() !== '') {
      // Add the temporary message to the chat history
      setChatHistory([...chatHistory, { user: 'User 1', message: temporaryMessage }]);

      // Clear the input field after sending
      setTemporaryMessage('');
    }
  };

  const [isOpenPopupmsg, setIsOpenPopupmsg] = useState(false);

  const openPopupmsg = () => {
    setIsOpenPopupmsg(true);
  };

  const closePopupmsg = () => {
    setIsOpenPopupmsg(false);
  };


  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const openPopup = () => {
    setIsOpenPopup(true);
  };

  const closePopup = () => {
    setIsOpenPopup(false);
  };

  const [isOpenPopup1, setIsOpenPopup1] = useState(false);
  const openPopup1 = () => {
    setIsOpenPopup1(true);
  };
  const closePopup1 = () => {
    setIsOpenPopup1(false);
  };


  const [isOpenPopup2, setIsOpenPopup2] = useState(false);
  const openPopup2 = () => {
    setIsOpenPopup2(true);
  };
  const closePopup2 = () => {
    setIsOpenPopup2(false);
  };


  const [isOpenPopup3, setIsOpenPopup3] = useState(false);
  const openPopup3 = () => {
    setIsOpenPopup3(true);
  };
  const closePopup3 = () => {
    setIsOpenPopup3(false);
  };


  const [isOpenPopup4, setIsOpenPopup4] = useState(false);
  const openPopup4 = () => {
    setIsOpenPopup4(true);
  };
  const closePopup4 = () => {
    setIsOpenPopup4(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prevState) => !prevState);
  };

  const [isOpen1, setIsOpen1] = useState(false);

  const toggleAccordion1 = () => {
    setIsOpen1((prevState) => !prevState);
  };

  const [isOpen2, setIsOpen2] = useState(false);

  const toggleAccordion2 = () => {
    setIsOpen2((prevState) => !prevState);
  };

  const [editing, setEditing] = useState(false);
  const [text, setText] = useState('');

  const handleEdit = () => {
    setEditing(true);
  };

  const handleBlur = () => {
    setEditing(false);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleBlur();
    }
  };




  return (
    <>
      <div style={{ background: '#ABC0DE' }}>
        <div className='p-5' style={{ background: '#edf2f7' }}>
          <div>
            <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600" style={{ background: '#F2F0F1' }}>
              <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center">
                  <img src="logoblack.png" className="h-8 mr-3" alt="Flowbite Logo" />
                </a>
                <div className="flex md:order-2">
                  <button type="button" onClick={openPopup} className=" bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-0 text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{ color: 'blue ' }}>New</button>
                  <button type="button" onClick={openPopup1} className="ml-1 bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-0 text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{ color: 'blue ' }} >Import</button>
                  <button type="button" onClick={openPopup2} className="ml-1 bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-0 text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{ color: 'blue ' }} >Add to campaign</button>
                  <button type="button" onClick={openPopup3} className="ml-1 bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-0 text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{ color: 'blue ' }} >change Status</button>
                  <button type="button" onClick={openPopup4} className="ml-1 bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-0 text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{ color: 'blue ' }} >Change Owner</button>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className=' mt-5 text-black bg-white'>
          <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col  md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-black  rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page" style={{ color: '#A0A0A0' }}>Title  <p className='text-black'>CEO</p></a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" style={{ color: '#A0A0A0' }}>Company <p className='text-black' >imbuesoft</p></a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" style={{ color: '#A0A0A0' }}>Phone <p style={{ color: '#6A98B6    ' }}> +91 9558362640</p></a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" style={{ color: '#A0A0A0' }}>Email <p style={{ color: '#6A98B6    ' }}>imbuesoft@gmail.com</p></a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" style={{ color: '#A0A0A0' }}>Lead Owner <p style={{ color: '#6A98B6    ' }}>Dr. Prakash Gujarati</p></a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>  
      </div>

      <div className='mt-2'>
       
        {isOpenPopupmsg && (
          <div className="fixed inset-0 flex items-center justify-end z-50 text-black">
            <div className="bg-black bg-opacity-80 absolute inset-0" onClick={closePopupmsg}></div>
            <div className="bg-white p-4 relative rounded-lg w-72 h-100">
              <div className="absolute top-2 right-3 cursor-pointer text-black" onClick={closePopupmsg}>
                X
              </div>
              <h1 className="text-black text-center border-b py-2">Chat With US</h1>
              <div className="p-2">
                <div className="overflow-y-auto h-50">
                  {chatHistory.map((message, index) => (
                    <div key={index} className="mb-2">
                      <div className="text-gray-600">{message.user}:</div>
                      <div className="bg-gray-200 p-2 rounded-lg">{message.message}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="w-full px-3 py-2 border rounded-lg outline-none focus:ring focus:ring-blue-500"
                    value={temporaryMessage}
                    onChange={(e) => setTemporaryMessage(e.target.value)}
                  />
                  <button
                    className="bg-blue-500 text-white mt-2 px-4 py-2 rounded-lg ml-2"
                    onClick={sendMessage}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>

        )}
      </div >




      <a href='#' onClick={openPopupmsg}><img src='msg.jpg' width={'50px'} style={{ marginLeft: '95%', marginTop: '23%' }} /></a>

      {
        isOpenPopup && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-black bg-opacity-80 absolute inset-0" onClick={closePopup}></div>
            <div className="bg-white  p-4 relative rounded-0" style={{ width: '900px', height: '400px' }}>
              <div className="absolute top-2 right-3 cursor-pointer text-black" onClick={closePopup}>
                X
              </div>


              <div style={{ maxHeight: 'calc(100% - 40px)', overflowY: 'auto', marginTop: '50px' }}>
                <h2 className="text-black text-center border-b">New Lead</h2>
                <p className="mt-5 text-end text-black" style={{ fontSize: '13px' }}>
                  = Required Information
                </p>
                <div
                  className="p-2 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300"
                  role="alert"
                >
                  <span className="font-medium">Lead Information</span>
                </div>
                <div className="grid gap-4 grid-cols-2 mt-3">
                  <div>
                    <div className="grid grid-cols-3 gap-4 text-black">
                      <div className="...">
                        <p className='mt-3'>Lead Status</p>
                        <p className="mt-4">Name</p>
                        <p className="mt-3">.</p>
                        <p className="mt-3">.</p>
                        <p className="mt-3">.</p>
                        <p className="mt-3">.</p>
                        <p className="mt-3">.</p>
                        <p className="mt-3">.</p>
                        <p className="mt-3">.</p>
                        <p className="mt-5">Title</p>
                        <p className="mt-5">Email</p>
                        <p className="mt-5">Phone</p>
                        <p className="mt-5">Rating</p>
                      </div>
                      <div className="col-span-2 ...">
                        <select
                          name="LeadStatus"
                          className="form-control text-gray-400 w-full border border-rounded mt-3 p-1"
                          id="LeadStatus"
                        >
                          <option>New</option>
                          <option>Wrap text</option>
                          <option>Clip text</option>
                        </select>

                        <input
                          className="block w-full border border placeholder-gray p-1 rounded mt-3"
                          type="text"
                          placeholder="First Name."
                        />
                        <input
                          className="block w-full border border placeholder-gray p-1 rounded mt-3"
                          type="text"
                          placeholder="Middle Name."
                        />
                        <input
                          className="block w-full border border placeholder-gray p-1 rounded mt-3"
                          type="text"
                          placeholder="Last Name."
                        />
                        <input
                          className="block w-full border border placeholder-gray p-1 rounded mt-3"
                          type="text"
                          placeholder="Suffix"
                        />
                        <input
                          className="block w-full border border placeholder-gray p-1 rounded mt-3"
                          type="text"
                          placeholder="Email"
                        />
                        <input
                          className="block w-full border border placeholder-gray p-1 rounded mt-3"
                          type="text"
                          placeholder="Phone"
                        />

                        <input
                          className="block w-full border border placeholder-gray p-1 rounded mt-3"
                          type="text"
                        />

                        <input
                          className="block w-full border border placeholder-gray p-1 rounded mt-3"
                          type="text"
                        />

                        <input
                          className="block w-full border border placeholder-gray p-1 rounded mt-3"
                          type="text"
                        />

                        <input
                          className="block w-full border border placeholder-gray p-1 rounded mt-3"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="grid grid-cols-3 gap-4 text-black">
                      <div className="...">
                        <p className='mt-3'>Lead Owner</p>
                        <p className="mt-4">Website</p>
                        <p className='mt-3'>.</p>
                        <p className='mt-3'>.</p>
                        <p className='mt-3'>.</p>
                        <p className='mt-3'>.</p>
                        <p className='mt-3'>.</p>
                        <p className='mt-3'>.</p>

                        <p className='mt-11'>Company</p>
                        <p className='mt-5'>Industry</p>
                        <p className='mt-5'>No. of Employees</p>
                        <p className='mt-5'>Lead Source</p>
                      </div>
                      <div className="col-span-2 ...">
                        <p className='mt-3'>xyz xyz</p>
                        <input
                          className="block w-full border border placeholder-gray p-1 rounded mt-3"
                          type="text"

                        />
                        <p className='mt-3'>.</p>
                        <p className='mt-3'>.</p>
                        <p className='mt-3'>.</p>
                        <p className='mt-3'>.</p>
                        <p className='mt-3'>.</p>
                        <p className='mt-3'>.</p>

                        <input
                          className="block w-full border border placeholder-gray p-1 rounded mt-7"
                          type="text"

                        />

                        <select
                          name="LeadStatus"
                          className="form-control text-gray-400 w-full border border-rounded mt-3 p-2"
                          id="LeadStatus"
                        >
                          <option>New</option>
                          <option>Wrap text</option>
                          <option>Clip text</option>
                        </select>


                        <input
                          className="block w-full border border placeholder-gray p-1 rounded mt-5"
                          type="text"

                        />

                        <select
                          name="LeadStatus"
                          className="form-control text-gray-400 w-full border border-rounded mt-3 p-2"
                          id="LeadStatus"
                        >
                          <option>New</option>
                          <option>Wrap text</option>
                          <option>Clip text</option>
                        </select>
                      </div>
                    </div>
                  </div>

                </div>
                <div
                  className="p-2 mt-5 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300"
                  role="alert"
                >
                  <span className="font-medium">Address Information</span>

                </div>
                <p className='mt-2 text-black ms-3'>Address</p>


                <div className="relative w-full mt-5">
                  <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm  rounded-r-lg  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Mockups, Logos, Design Templates..." required />
                  <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    <span className="sr-only">Search</span>
                  </button>
                </div>

                <textarea className='block h-100 w-full  border border placeholder-gray p-1 rounded mt-5' placeholder='street'></textarea>

                <input
                  className="block w-full border border placeholder-gray p-1 rounded mt-5"
                  type="text" placeholder='City'

                />
                <input
                  className="block w-full border border placeholder-gray p-1 rounded mt-5"
                  type="text" placeholder='Country'

                />


              </div>
              <div
                className="p-4  text-sm text-gray-800 rounded-0  dark:bg-gray-800 dark:text-gray-300 text-center"
                role="alert" style={{ width: '104%', marginLeft: '-16px', background: '#EEEDEC' }}
              >
                <button className="bg-white border border-blue  text-blue-500 font-bold py-2 px-4 rounded-0">
                  Cancel
                </button>
                <button className="bg-white ms-2 border border-blue  text-blue-500 font-bold py-2 px-4 rounded-0">
                  Save & New
                </button>
                <button className="bg-blue-500 ms-2 border border-blue  text-white font-bold py-2 px-4 rounded-0">
                  Save
                </button>

              </div>
            </div>
          </div>
        )
      }


      {
        isOpenPopup1 && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-black bg-opacity-80 absolute inset-0" onClick={closePopup1}></div>
            <div className="bg-white  p-4 relative rounded-0" style={{ width: '900px', height: '520px', background: '#EAF5FE' }}>
              <div className="absolute top-2 right-3 cursor-pointer text-black" onClick={closePopup1

              }>
                X
              </div>

              <div className="grid gap-4 grid-cols-2 mt-12">
                <div className='mt-5'>
                  <img src='lead_img.JPG' />
                </div>
                <div>
                  <div className="flex items-center justify-center">
                    <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <p className='text-black'>Import from file</p>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">Follow a guided process to upload leads </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">using a CSV file.</p>
                      </div>
                      <input id="dropzone-file" type="file" className="hidden" />
                    </label>
                  </div>

                  <div className="flex items-center justify-center mt-5">
                    <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <p className='text-black'>Import, Update, or Export </p>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">use the data import Wizard, an advanced </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">import tool that supports multiple objects,including custom objects.</p>
                      </div>
                      <input id="dropzone-file" type="file" className="hidden" />
                    </label>
                  </div>

                  <div className="relative h-32 w-32 absolute bottom-0 left-10 right-0  ... mt-12 ml-12 text-end">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-0 ">
                      Next
                    </button>

                  </div>

                </div>

              </div>

            </div>
          </div>
        )
      }


      {
        isOpenPopup2 && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-black bg-opacity-80 absolute inset-0" onClick={closePopup2}></div>
            <div className="bg-white  p-4 relative rounded-0" style={{ width: '800px', height: '450px' }}>
              <div className="absolute top-2 right-3 cursor-pointer text-black" onClick={closePopup2}>
                X
              </div>
              <p className='text-black text-center border-b' style={{ fontSize: '22px' }} >Add to Campaign</p>
              <div className="grid gap-4 grid-cols-2 mt-12 text-black">
                <p>1 Lead Selected</p>
              </div>
              <div className="mb-6 mt-3">
                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Campaign</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="search Campaign" required />
              </div>

              <div className="mb-6 mt-3">
                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Member Status</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>

              <p className='text-black' style={{ fontSize: '12px' }}>Update existing campaign Members?</p>

              <div className="flex items-center mb-4">
                <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label>
              </div>
              <div className="flex items-center">
                <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="default-radio-2" className=" text-sm font-medium text-gray-900 dark:text-gray-300">Checked state</label>
              </div>

              <div className='mt-2 text-end
            '>
                <button className=" border text-black font-bold py-1 px-2 rounded ">
                  Cancel
                </button>
                <button className="bg-blue-500 ms-3 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ">
                  Submit
                </button>
              </div>

            </div>
          </div>
        )
      }


      {
        isOpenPopup3 && (
          <div className="fixed inset-0 flex items-center justify-center z-50 text-black">
            <div className="bg-black bg-opacity-80 absolute inset-0" onClick={closePopup3}></div>
            <div className="bg-white  p-4 relative rounded-0" style={{ width: '800px', height: '240px' }}>
              <div className="absolute top-2 right-3 cursor-pointer text-black" onClick={closePopup3}>
                X
              </div>
              <h1 className='text-black text-center border-b'>Change Status</h1>

              <p className='mt-3'> 1 Lead Selected</p>
              <div className="mb-6 mt-3">
                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Change Status</label>
                <select
                  name="LeadStatus"
                  className="form-control text-gray-400 w-full border border-rounded mt-3 p-2"
                  id="LeadStatus"
                >
                  <option>Unqualified</option>
                  <option>New</option>
                  <option>Working</option>
                  <option>Nurturing</option>
                  <option>Qualification</option>
                </select>
              </div>

              <div className='mt-2 text-end
            '>
                <button className=" border text-black font-bold py-1 px-2 rounded ">
                  Cancel
                </button>
                <button className="bg-blue-500 ms-3 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ">
                  Save
                </button>
              </div>

            </div>

          </div>

        )
      }


      {
        isOpenPopup4 && (
          <div className="fixed inset-0 flex items-center justify-center z-50 text-black">
            <div className="bg-black bg-opacity-80 absolute inset-0" onClick={closePopup4}></div>
            <div className="bg-white  p-4 relative rounded-0" style={{ width: '700px', height: '450px' }}>
              <div className="absolute top-2 right-3 cursor-pointer text-black" onClick={closePopup4}>
                X
              </div>
              <h1 className='text-center text-black border-b ' style={{ fontSize: '25px' }}>Change Owner</h1>

              <p className='mt-5'> You`ve selected 1 record</p>

              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                </span>
                <input type="text" id="website-admin" className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Users" />
              </div>

              <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem] mt-12">
                <input
                  className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                  type="checkbox"
                  value=""
                  id="checkboxChecked"
                  checked />
                <label
                  className="inline-block pl-[0.15rem] hover:cursor-pointer"
                  for="checkboxChecked">
                  Send notification email
                </label>
              </div>

              <p className='mt-12'>The New Owner will also become the owner of these records to that are owned by the current record owner.</p>

              <p className='mt-7'>Notes and attachments</p>
              <p className='mt-2'>Open activities </p>


              <div className='mt-2 text-end
            '>
                <button className=" border text-black font-bold py-1 px-2 rounded ">
                  Cancel
                </button>
                <button className="bg-blue-500 ms-3 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ">
                  Submit
                </button>
              </div>


            </div>


          </div>

        )
      }

    </>
  )
}
