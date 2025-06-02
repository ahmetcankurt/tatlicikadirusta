import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./ScrollToDownIcon.css";

export default function ScrollToDownIcon() {
  const [showIcon, setShowIcon] = useState(true);

  useEffect(() => {
    function handleScroll() {
      setShowIcon(window.scrollY === 0);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  if (!showIcon) return null;

  return (
    <button
      onClick={scrollDown}
      className="scroll-down-icon"
      aria-label="Sayfayı aşağı kaydır"
      title="Sayfayı aşağı kaydır"
    >
      <IoIosArrowDown />
    </button>
  );
}
