"use client";
import { Framework } from "@/data";
import { useEffect, useState } from "react";
import TimeUnit from "@/components/TimeUnit";

type Props = {
  currentFramework: Framework;
};

type StateProps = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const calculateTimeToEvent = () => {
  const eventDate = new Date(process.env.NEXT_PUBLIC_EVENT_DATE as string);
  const currentDate = new Date();
  const timeRemaining = eventDate.getTime() - currentDate.getTime();

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

function CountdownTimer({ currentFramework }: Props) {
  const [countdown, setCountdown] = useState<StateProps>(calculateTimeToEvent());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculateTimeToEvent());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={"text-center flex flex-row flex-wrap items-center justify-center gap-[10px]"}>
      <TimeUnit label="DAYS" value={countdown.days} currentFramework={currentFramework} />
      <TimeUnit label="HOURS" value={countdown.hours} currentFramework={currentFramework} />
      <TimeUnit label="MINUTES" value={countdown.minutes} currentFramework={currentFramework} />
      <TimeUnit label="SECONDS" value={countdown.seconds} currentFramework={currentFramework} />
    </div>
  );
}

export default CountdownTimer;
