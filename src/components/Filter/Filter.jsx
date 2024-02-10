import React from 'react';

// Компонент фильтрации контактов
function Filter({ value, onChangeFilter }) {
  return (
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <label className="block text-sm font-medium leading-6 text-gray-900">
        Find contacts by name
        <input
          className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          type="text"
          value={value}
          onChange={onChangeFilter}
        />
      </label>
    </div>
  );
}

export default Filter;
