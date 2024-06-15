import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';

const Settings = () => {
  const [editMode, setEditMode] = useState(null);
  const [settings, setSettings] = useState({
    notification: 'Email Notifications',
    privacy: 'Public Profile',
    account: 'Change Password',
  });
  const [inputValues, setInputValues] = useState({
    notification: settings.notification,
    privacy: settings.privacy,
    account: settings.account,
  });

  const handleEditClick = (field) => {
    setEditMode(field);
    setInputValues({
      ...inputValues,
      [field]: settings[field],
    });
  };

  const handleInputChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveClick = () => {
    setSettings({
      ...settings,
      [editMode]: inputValues[editMode],
    });
    setEditMode(null);
  };

  return (
    <DashboardLayout>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl mt-4 sm:mt-20">
        <h2 className="text-3xl font-semibold mb-4">Settings</h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Notification Settings:</label>
          {editMode === 'notification' ? (
            <div>
              <input
                type="text"
                name="notification"
                value={inputValues.notification}
                onChange={handleInputChange}
                className="border p-2 w-full mb-2"
              />
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200 mr-2"
                onClick={handleSaveClick}
              >
                Save
              </button>
              <button
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700 transition duration-200"
                onClick={() => setEditMode(null)}
              >
                Cancel
              </button>
            </div>
          ) : (
            <div className="flex justify-between items-center">
              <p className="border-b p-2 text-gray-900">{settings.notification}</p>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
                onClick={() => handleEditClick('notification')}
              >
                Edit
              </button>
            </div>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Privacy Settings:</label>
          {editMode === 'privacy' ? (
            <div>
              <input
                type="text"
                name="privacy"
                value={inputValues.privacy}
                onChange={handleInputChange}
                className="border p-2 w-full mb-2"
              />
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200 mr-2"
                onClick={handleSaveClick}
              >
                Save
              </button>
              <button
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700 transition duration-200"
                onClick={() => setEditMode(null)}
              >
                Cancel
              </button>
            </div>
          ) : (
            <div className="flex justify-between items-center">
              <p className="border-b p-2 text-gray-900">{settings.privacy}</p>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
                onClick={() => handleEditClick('privacy')}
              >
                Edit
              </button>
            </div>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Account Settings:</label>
          {editMode === 'account' ? (
            <div>
              <input
                type="text"
                name="account"
                value={inputValues.account}
                onChange={handleInputChange}
                className="border p-2 w-full mb-2"
              />
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200 mr-2"
                onClick={handleSaveClick}
              >
                Save
              </button>
              <button
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700 transition duration-200"
                onClick={() => setEditMode(null)}
              >
                Cancel
              </button>
            </div>
          ) : (
            <div className="flex justify-between items-center">
              <p className="border-b p-2 text-gray-900">{settings.account}</p>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
                onClick={() => handleEditClick('account')}
              >
                Edit
              </button>
            </div>
          )}
        </div>

        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
          Save Changes
        </button>
      </div>
    </DashboardLayout>

  );
};

export default Settings;
