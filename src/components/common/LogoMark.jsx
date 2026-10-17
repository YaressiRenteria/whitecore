import SmartImg from "./SmartImg";

// Recorta tu logo para mostrar solo la bolsa, en círculo
export default function LogoMark({ className = "" }) {
  return (
    <span
      className={`relative block shrink-0 overflow-hidden rounded-full bg-black ${className}`}
    >
      <SmartImg
        src="/logo.png"
        alt=""
        className="h-full w-full object-cover"
        style={{ transform: "scale(1.75)", transformOrigin: "50% 38%" }}
      />
    </span>
  );
}