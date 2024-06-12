import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h5 className="text-lg font-bold">Medilink</h5>
          <p>© 2024 Medilink. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="/" className="hover:text-gray-200">Home</a>
          <a href="/about" className="hover:text-gray-200">About</a>
          <a href="/services" className="hover:text-gray-200">Services</a>
          <a href="/contact" className="hover:text-gray-200">Contact</a>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.675 0h-21.35C.599 0 0 .599 0 1.342v21.316C0 23.401.599 24 1.325 24h11.495v-9.339H9.692v-3.64h3.127V8.34c0-3.1 1.895-4.788 4.66-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.92.001c-1.504 0-1.794.714-1.794 1.763v2.31h3.587l-.467 3.64h-3.12V24h6.117c.726 0 1.325-.599 1.325-1.342V1.342C24 .599 23.401 0 22.675 0z"/>
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.609 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.126 1.124-4.09-.205-7.719-2.165-10.148-5.144-.422.722-.666 1.561-.666 2.475 0 1.709.869 3.213 2.188 4.099-.807-.026-1.566-.248-2.229-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.11-.849.171-1.296.171-.317 0-.626-.03-.927-.086.627 1.956 2.444 3.379 4.6 3.419-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.548 2.209 9.055 0 14.009-7.496 14.009-13.986 0-.209 0-.42-.015-.63.961-.693 1.8-1.56 2.46-2.548l-.047-.02z"/>
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.616 3.5c-1.264 0-2.288 1.024-2.288 2.288s1.024 2.288 2.288 2.288 2.288-1.024 2.288-2.288-1.024-2.288-2.288-2.288zm-.072 6.217h-.053c-2.238 0-3.674 1.464-3.674 4.264v5.303h-4.577V9.447h4.586v1.652h.065c.636-.927 1.798-2.244 4.219-2.244 3.151 0 5.015 2.045 5.015 6.32v5.859h-4.577v-5.347c.001-1.273-.027-2.904-1.766-2.904zM5.75 8.035c-1.313 0-2.375 1.063-2.375 2.375 0 1.313 1.063 2.375 2.375 2.375s2.375-1.063 2.375-2.375c0-1.313-1.063-2.375-2.375-2.375zm2.288 5.678h-4.576v10.54h4.576v-10.54zm18.125-2.155c0-4.892-2.558-7.184-6.166-7.184-2.746 0-4.354 1.505-5.082 2.628h-.073V4.92h-4.578c.061 1.065 0 10.54 0 10.54h4.578v-5.896c0-.317.023-.634.11-.86.261-.747.856-1.524 1.855-1.524 1.309 0 1.837 1.15 1.837 2.838v5.442h4.576V11.558c0-1.353-.046-2.707-.091-3.5z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
