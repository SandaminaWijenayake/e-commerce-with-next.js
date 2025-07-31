import React from "react";
import { motion } from "framer-motion";
import CircularProgress from "@mui/material/CircularProgress";

export interface LoadingOverlayProps {
  message?: string;
  size?: number;
  color?: "primary" | "secondary" | "inherit";
  className?: string;
}

export const LoadingOverlay = ({
  message = "Loading products...",
  size = 50,
  color = "primary",
  className = "",
}: LoadingOverlayProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`flex pt-56 flex-col items-center justify-center py-10 ${className}`}
    >
      <CircularProgress color={color} size={size} />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-lg text-gray-600"
      >
        {message}
      </motion.p>
    </motion.div>
  );
};
