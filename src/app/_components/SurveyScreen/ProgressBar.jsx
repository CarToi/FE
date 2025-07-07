export default function ProgressBar({ progress }) {
  return (
    <div className="w-full h-[12px] bg-[#CFDAF2]">
      <div
        className="h-[12px] bg-[#3560C0] rounded-lg"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
