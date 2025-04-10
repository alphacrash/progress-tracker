const Progress = ({ current, total, hide = false, overall }) => {
  const percentage = total > 0 ? Math.round((current / total) * 100) : 0;

  return (
    <div className="flex items-center gap-x-3 whitespace-nowrap">
      <div
        className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden "
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className={`flex flex-col justify-center rounded-full overflow-hidden text-xs text-white text-center whitespace-nowrap transition duration-500 ${
            overall
              ? "bg-emerald-300 "
              : percentage === 100
              ? "bg-green-600 "
              : "bg-blue-600 "
          }`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      {!hide && (
        <div className="w-24 text-end">
          <span className="text-sm text-gray-800">
            {current}/{total}
          </span>
        </div>
      )}
    </div>
  );
};

export default Progress;
