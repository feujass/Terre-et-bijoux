import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo: React.FC<LogoProps> = ({ className = "", size = "md" }) => {
  // Logo supprimé - affichage du texte uniquement
  return null;
};

export default Logo;

