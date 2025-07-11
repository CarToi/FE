export default function ProgressBar({ progress }) {
  return (
    <div className="h-2 w-full bg-[#CFDAF2]">
      <div
        className="h-2 rounded-lg bg-[#3560C0]"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
