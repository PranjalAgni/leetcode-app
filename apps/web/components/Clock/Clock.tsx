import { ReactElement } from 'react';
import { useEffect, useState } from 'react';

interface Props {
  className: string;
}
export default function Clock({}: Props): ReactElement {
  const [currentTime, setCurrentTime] = useState(Date.now());
  const [formattedTime, setFormattedTime] = useState(null);

  useEffect(() => {
    setFormattedTime(new Date(currentTime).toLocaleTimeString('en-us'));
  }, [currentTime]);

  useEffect(() => {
    const tick = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => {
      clearInterval(tick);
    };
  }, []);

  return <p>{formattedTime}</p>;
}
