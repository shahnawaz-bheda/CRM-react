import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Detail() {
  const [contact_person, setContact_person] = useState('');
  const [DoneBy, setDoneBy] = useState('');
  const [Description, setDescription] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editedItem, setEditedItem] = useState({});
  const [readData, setReadData] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('contact_person')) {
      setContact_person(localStorage.getItem('contact_person'));
    }
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get('https://645520dbf803f345763b3578.mockapi.io/Detail');
      setReadData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const header = { 'Access-Control-Allow-Origin': '*' };

      const newItem = {
        Contact_Person: contact_person,
        done_by: DoneBy,
        Description: Description,
      };

      const response = await axios.post(
        'https://645520dbf803f345763b3578.mockapi.io/Detail',
        newItem,
        { headers: header }
      );

      console.log('Response:', response.data);
      window.location.reload();
    } catch (error) {
      console.error('Error:', error);
      
    }
  };

  const DeleteData = async (id) => {
    try {
      await axios.delete(`https://645520dbf803f345763b3578.mockapi.io/Detail/${id}`);
      getData();
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (item) => {
    setIsEditing(true);
    setEditedItem(item);
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(
        `https://645520dbf803f345763b3578.mockapi.io/Detail/${editedItem.id}`,
        editedItem
      );

      const updatedData = readData.map((item) =>
        item.id === editedItem.id ? response.data : item
      );

      setReadData(updatedData);

      setIsEditing(false);
      setEditedItem({});
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  return (
    <>
      <div className="p-12">
        <form>
          <div className="mb-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  id="email"
                  value={contact_person}
                  readOnly
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Contact Person"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  id="email"
                  value={DoneBy}
                  onChange={(e) => setDoneBy(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="done by"
                  required
                />
              </div>
            </div>
          </div>
          <div className="mb-6">
            <textarea
              type="text"
              id="password"
              value={Description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="description"
              rows={6}
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover-bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus-ring-blue-800"
            onClick={(e) => handleSubmit(e)}
          >
            Save
          </button>
        </form>

        <div className="mt-12">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Sr. No
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Contact Person
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Done By
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Datetime
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {readData.map((item) => (
                  <tr
                    key={item.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.id}
                    </th>
                    <td>
                      {isEditing && editedItem.id === item.id ? (
                        <input
                          type="text"
                          value={editedItem.Description}
                          onChange={(e) =>
                            setEditedItem({ ...editedItem, Description: e.target.value })
                          }
                        />
                      ) : (
                        item.Description
                      )}
                    </td>
                    <td>{item.Contact_Person}</td>
                    <td>
                      {isEditing && editedItem.id === item.id ? (
                        <input
                          type="text"
                          value={editedItem.done_by}
                          onChange={(e) =>
                            setEditedItem({ ...editedItem, done_by: e.target.value })
                          }
                        />
                      ) : (
                        item.done_by
                      )}
                    </td>
                    <td className="px-6 py-4">{item.Date}</td>
                    <td className="px-6 py-4">
                      {isEditing && editedItem.id === item.id ? (
                        <button
                          type="button"
                          onClick={() => handleSave()}
                          className="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ms-5"
                        >
                          Save
                        </button>
                      ) : (
                        <>
                          <button
                            type="button"
                            onClick={() => handleEdit(item)}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ms-5"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => DeleteData(item.id)}
                            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 ms-5"
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
