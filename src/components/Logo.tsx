import logo from "/assets/Finallogo.png"; // Adjust path as needed

interface LogoProps {
  size?: "small" | "medium" | "large";
  variant?: "full" | "mark"; // ← added to match Footer usage
  className?: string;
}

const Logo = ({
  size = "medium",
  variant = "full",
  className = "",
}: LogoProps) => {
  const sizeClasses: Record<NonNullable<LogoProps["size"]>, string> = {
    small: "w-12 h-auto", // smaller
    medium: "w-60 h-auto", // default
    large: "w-28 h-auto",
  };

  return (
    <div
      className={`${sizeClasses[size]} ${className} flex items-center justify-center`}
    >
      <img
        src={logo}
        alt={variant === "mark" ? "Freety mark logo" : "Freety full logo"}
        className="object-contain"
      />
    </div>
  );
};

export default Logo;
