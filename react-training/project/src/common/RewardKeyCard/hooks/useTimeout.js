import { useState, useEffect } from "react";

const useTimeout = (endTime) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const distance = endTime - now;

    if (distance <= 0) return "Claim Now";

    const hours = Math.floor(distance / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    return `${hours} h ${minutes} m`;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  return timeLeft;
};

export default useTimeout;