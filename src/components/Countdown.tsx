import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = () => {
  const targetDate = new Date("2026-01-24T21:00:00").getTime();
  
  const calculateTimeLeft = (): TimeLeft | null => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <div className="text-center py-8 animate-fade-in">
        <h3 className="text-4xl md:text-5xl font-cursive text-primary">
          ¡Llegó el gran día!
        </h3>
      </div>
    );
  }

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-3 md:p-4 lg:p-6 min-w-[70px] md:min-w-[90px] lg:min-w-[100px] shadow-soft border border-secondary/30">
        <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary">
          {value.toString().padStart(2, "0")}
        </div>
      </div>
      <div className="text-xs md:text-sm lg:text-base text-muted-foreground mt-2 capitalize">
        {label}
      </div>
    </div>
  );

  return (
    <div className="py-8 animate-fade-in">
      <h3 className="text-xl md:text-2xl font-cursive text-primary text-center mb-6">
        Tiempo restante para mi gran noche
      </h3>
      <div className="flex justify-center gap-2 md:gap-4 lg:gap-6 flex-wrap">
        <TimeBox value={timeLeft.days} label="Días" />
        <TimeBox value={timeLeft.hours} label="Horas" />
        <TimeBox value={timeLeft.minutes} label="Minutos" />
        <TimeBox value={timeLeft.seconds} label="Segundos" />
      </div>
    </div>
  );
};

export default Countdown;
