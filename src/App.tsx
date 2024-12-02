import { useState, useEffect } from 'react';
import InstanceGrid from './components/InstanceGrid';
import { instances } from './data/instances';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (value: string) => {
    const trimmedValue = value.trim();
    if (!trimmedValue) {
      setSearchTerm('');
      return;
    }

    const instance = instances.find(i => i.id === trimmedValue);
    if (instance) {
      setSearchTerm(trimmedValue);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleSearch(searchTerm);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  const handleClear = () => {
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-[1920px] mx-auto">
        <div className="mb-4 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Instance Dependencies Visualizer
          </h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Enter instance name (e.g., '1b', '2a')"
              className="w-full rounded-lg border border-gray-300 bg-white py-2 px-3 md:px-4 text-sm md:text-base shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2 mt-2">
            {searchTerm && (
              <button 
                className="bg-gray-200 text-gray-700 py-1.5 md:py-2 px-3 md:px-4 rounded-lg hover:bg-gray-300 transition-colors duration-200 text-sm md:text-base"
                onClick={handleClear}
              >
                Clear
              </button>
            )}
          </div>
        </div>
        
        <InstanceGrid searchTerm={searchTerm} />
      </div>
    </div>
  );
}

export default App;