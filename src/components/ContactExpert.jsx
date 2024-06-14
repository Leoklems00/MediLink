import React from 'react';

const ContactExpertModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Contact an Expert</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name:</label>
            <input type="text" id="name" name="name" className="border-b w-full py-2 px-3 text-gray-900" placeholder="Enter your name" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email:</label>
            <input type="email" id="email" name="email" className="border-b w-full py-2 px-3 text-gray-900" placeholder="Enter your email" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message:</label>
            <textarea id="message" name="message" rows="4" className="border w-full py-2 px-3 text-gray-900" placeholder="Type your message here"></textarea>
          </div>
          <div className="flex justify-end">
            <button type="button" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200 mr-2" onClick={onClose}>
              Close
            </button>
            <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-200">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactExpertModal;
