import React from 'react';

function CurrentTime() {
  const locale = 'en';
  const [today, setDate] = React.useState(new Date()); // Save the current date to be able to trigger an update

  React.useEffect(() => {
    const timer = setInterval(() => {
      // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    };
  }, []);

  const day = today.toLocaleDateString(locale, { weekday: 'short' });
  const date = `${day} ${
    today.getMonth() + 1
  }.${today.getDate()}.${today.getFullYear()}`;

  const time = today.toLocaleTimeString(locale, {
    hour: 'numeric',
    hour12: false,
    minute: 'numeric',
    second: 'numeric',
  });

  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return (
    <footer className='footer mt-auto py-3 bg-black'>
      <span className='text-white ps-3'>Current Time</span>
      <span className='text-white ps-3'>{date}</span>
      <span className='text-white ps-3'>
        {timeZone} {time}
      </span>
    </footer>
  );
}

export default CurrentTime;
