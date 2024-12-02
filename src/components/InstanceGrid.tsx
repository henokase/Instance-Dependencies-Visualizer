import React from 'react';
import { instances } from '../data/instances';

interface InstanceGridProps {
  searchTerm: string;
}

const InstanceGrid: React.FC<InstanceGridProps> = ({ searchTerm }) => {
  const hasDependencyMatch = (dependencies: string[]): boolean => {
    if (!searchTerm) return false;
    return dependencies.includes(searchTerm);
  };

  const getRowHighlight = (instance: typeof instances[0]): string => {
    if (!searchTerm) return '';
    if (instance.id === searchTerm) return 'bg-green-300';
    if (hasDependencyMatch(instance.dependencies)) return 'bg-gray-100';
    return '';
  };

  const renderTable = (startIndex: number, endIndex: number) => (
    <div className="w-full md:flex-1 overflow-x-auto mb-4 md:mb-0">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-2 md:p-3 bg-gray-100 border border-gray-300 font-semibold text-left">Instance</th>
            <th className="p-2 md:p-3 bg-gray-100 border border-gray-300 font-semibold text-left">Dependencies</th>
          </tr>
        </thead>
        <tbody>
          {instances.slice(startIndex, endIndex).map((instance) => (
            <tr 
              key={instance.id}
              className={`
                transition-colors duration-200
                ${getRowHighlight(instance)}
              `}
            >
              <td className="p-2 md:p-3 border border-gray-300">
                <span className={`
                  inline-block px-2 py-1 rounded text-sm md:text-base
                  ${instance.id === searchTerm ? 'bg-purple-500 text-white' : 'bg-gray-200'}
                `}>
                  {instance.id}
                </span>
              </td>
              <td className="p-2 md:p-3 border border-gray-300">
                <div className="flex flex-wrap gap-1">
                  {instance.dependencies.map(dep => (
                    <span 
                      key={dep}
                      className={`
                        px-2 py-1 rounded text-sm md:text-base
                        ${dep === searchTerm ? 'bg-purple-500 text-white' : 'bg-gray-200'}
                      `}
                    >
                      {dep}
                    </span>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const totalInstances = instances.length;
  const itemsPerTable = Math.ceil(totalInstances / 3);

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {renderTable(0, itemsPerTable)}
      {renderTable(itemsPerTable, itemsPerTable * 2)}
      {renderTable(itemsPerTable * 2, totalInstances)}
    </div>
  );
};

export default InstanceGrid;