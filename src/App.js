import React, { useState } from 'react';
import GroupedTools from './components/GroupedTools';
import Data from './components/Data';
import GroupedData from './components/GroupedData';
import CoreToolkit from './components/CoreToolkit';

function App() {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <div>
      <div className='border border-gray-500 rounded-2xl bg-gray-300 grid grid-cols-2 w-fit gap-5 px-10 py-5 shadow-2xl'>
        <div
          className={`rounded-xl border border-gray-500 bg-gray-400 font-semibold w-fit px-5 py-4 ${selectedSection === 'Basic Resources' ? 'selected' : ''}`}
          onClick={() => handleSectionClick('Basic Resources')}
        >
          Basic Resources
        </div>
        <div
          className={`rounded-xl border border-gray-500 bg-gray-400 font-semibold w-fit px-5 py-4 ${selectedSection === 'Advanced Resources' ? 'selected' : ''}`}
          onClick={() => handleSectionClick('Advanced Resources')}
        >
          Advanced Resources
        </div>
        <div
          className={`rounded-xl border border-gray-500 bg-gray-400 font-semibold w-fit px-5 py-4 ${selectedSection === 'Tools Resources' ? 'selected' : ''}`}
          onClick={() => handleSectionClick('Tools Resources')}
        >
          Tools Resources
        </div>
        <div
          className={`rounded-xl border border-gray-500 bg-gray-400 font-semibold w-48 px-5 py-2 ${selectedSection === 'Case Studies & CORE Toolkits' ? 'selected' : ''}`}
          onClick={() => handleSectionClick('Case Studies & CORE Toolkits')}
        >
          Case Studies & CORE Toolkits
        </div>
      </div>
      <div className='section-info'>
        {selectedSection === 'Basic Resources' && <GroupedData />}
        {selectedSection === 'Advanced Resources' && <GroupedData />}
        {selectedSection === 'Tools Resources' && <GroupedTools />}
        {selectedSection === 'Case Studies & CORE Toolkits' && <CoreToolkit />}
      </div>
    </div>
  );
}

export default App;
