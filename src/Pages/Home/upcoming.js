import "./upcoming.css";
import {
  Dotmarker,
  LongArrow,
  ChevLeft,
  ChevRight,
} from "../../Components/Icons/icons";
const Upcoming = () => {
  return (
    <div className='upcoming'>
      <div className='container'>
        <h2 className='d-none'>See Upcoming Auctions and Exhibitions</h2>
        <div className='d-none arrow'>
          <LongArrow />
        </div>

        <div className='upcoming-carousel'>
          <div className='overlay1'></div>
          <div className='overlay'>
            <div className='title'>
              <h2 className='bellefair'>
                <span>
                  <Dotmarker />
                </span>
                <span>
                  MONALISA REDEFINED <br />
                  IN STYLE.
                </span>
              </h2>
              <p className='bellefair'>
                <span className='uno'>01</span>
                <span className='time'>START ON : 08:00 GTS . MONDAY</span>
              </p>
            </div>

            <div className='subtitle'>
              <p>
                GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
                INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR
                HIGHEST AND LOWEST BIDS.
              </p>

              <div className='info'>
                <span>See more</span>
                <button>Set a reminder</button>
              </div>
            </div>
          </div>
        </div>

        <div className='controls'>
          <div className='slider'>
            <svg
              width='296'
              height='10'
              viewBox='0 0 296 10'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect width='295.695' height='10' rx='5' fill='#AEAEAE' />
              <rect width='47.5224' height='10' rx='5' fill='white' />
            </svg>
          </div>
          <div className='chev-btn'>
            <button>
              <ChevLeft />
            </button>
            <button>
              <ChevRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
