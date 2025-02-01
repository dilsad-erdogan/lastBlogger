
const Rightbar = () => {
  return (
    <div className="flex flex-row justify-between h-5/6">
      <div className="p-5 bg-gray-200 dark:bg-gray-800 rounded-2xl flex flex-col">
        <h1 className="text-xl font-bold">Who to follow</h1>

        <div className="mt-5">
          <div className="mb-2">
            <h1 className="font-bold text-lg">Jane</h1>
            <p className="text-sm">@jane</p>
          </div>

          <div className="mb-2">
            <h1 className="font-bold text-lg">Jane</h1>
            <p className="text-sm">@jane</p>
          </div>

          <div className="mb-2">
            <h1 className="font-bold text-lg">Jane</h1>
            <p className="text-sm">@jane</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rightbar