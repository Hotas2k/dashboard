import date from 'date-fns';

export const Week = () => {
  const currentDate = new Date();
  const currentWeekNumber = date.getWeek(currentDate);

  const headingStyle: React.CSSProperties = {
    margin: '0',
    position: 'absolute',
    top: '10px',
    left: '0',
    width: '100%',
  };
  const containerStyle: React.CSSProperties = {
    textAlign: 'center',
  };
  const weekNrStyle = {
    fontSize: '4rem',
    fontWeight: 'bold',
    textDcoration: 'underline',
  };

  return (
    <div style={containerStyle}>
      <h3 style={headingStyle}>{'Current week'.toString()}</h3>
      <div style={weekNrStyle}>{currentWeekNumber}</div>
    </div>
  );
};
