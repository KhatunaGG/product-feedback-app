"use client";
import { ChevronLeft } from "../../__atoms";

export type GoBackButtonProps = {
  isOverlyOpen?: boolean;
  toggleOverlay?: () => void;
};

const GoBackButton = ({ toggleOverlay, isOverlyOpen }: GoBackButtonProps) => {
  return (
    <button
      onClick={() => {
        if (isOverlyOpen) toggleOverlay?.();
      }}
      className="flex items-center gap-2"
    >
      <ChevronLeft />
      <p>Go Back</p>
    </button>
  );
};

export default GoBackButton;
