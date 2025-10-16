export function Input() {
  return (
    <div className="sm:col-span-4">
      <label htmlFor="search" className="block text-sm/6 font-medium text-gray-900">
        rechercher
      </label>
      <div className="mt-2">
        <div className="flex items-center w-full rounded-lg bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
          <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">film.com/</div>
          <input
            id="search"
            type="text"
            name="search"
            placeholder="matrix"
            // Ajouté: w-full pour que l’input prenne tout l’espace restant
            className="block w-full rounded-r-lg min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-4 focus:outline-blue-500 outline-offset-2 sm:text-sm/6"
          />
        </div>
      </div>
    </div>
  )
}
