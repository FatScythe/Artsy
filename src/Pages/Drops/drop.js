import { drops } from "./data";

const Drop = () => {
  return (
    <div className='drop'>
      {drops.map((drop) => {
        return <Card key={drop.id} {...drop} />;
      })}
    </div>
  );
};

const Card = ({ creator, date, title, img, status }) => {
  return (
    <div className='card'>
      <div className='img'>
        <img src={img} alt={title} />
        {status === "ended" && (
          <p className='status gray d-md-none'>{status}</p>
        )}
        {status === "upcoming" && (
          <p className='status blue d-md-none'>{status}</p>
        )}

        {status === "live now" && (
          <p className='status green d-md-none'>{status}</p>
        )}

        <div className='overlay'>
          <p>
            <span>Time remaining</span>
            <span>06 hrs : 45 min : 22 s</span>
          </p>

          <div className='btn d-none'>
            <button>Join</button>
          </div>
        </div>
      </div>
      <div className='info'>
        {status === "ended" && <p className='status gray d-none'>{status}</p>}
        {status === "upcoming" && (
          <p className='status blue d-none'>{status}</p>
        )}

        {status === "live now" && (
          <p className='status green d-none'>{status}</p>
        )}
        <p className='time'>
          {date.month} {date.day} at {date.time} am {date.timezone}
        </p>
        <h2 className='title'>{title}</h2>
        <p className='sub-title'>
          Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitae
          tempus. Sed nunc tempus aliquet lectus ut vulputate.
        </p>
        <p className='creator'>
          Creator : <span>{creator}</span>
        </p>
        <a href='/drops'>Get notified</a>
      </div>
    </div>
  );
};

export default Drop;
