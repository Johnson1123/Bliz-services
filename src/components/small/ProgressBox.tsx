interface ProgressBoxProps {
  percentage: number;
  title: string;
}

export default function ProgressBox({ percentage, title }: ProgressBoxProps) {
  return (
    <div className="w-full my-3">
      {/* Title and Percentage */}
      <div className="flex justify-between items-center mb-2 my-3">
        <h4 className="text-sm font-medium text-gray- text-black">{title}</h4>
        <span className="text-sm font-medium text-gray-700">{percentage}%</span>
      </div>
      {/* Progress Bar Container */}
      <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
        <div
          className={`bg-pink h-full`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
