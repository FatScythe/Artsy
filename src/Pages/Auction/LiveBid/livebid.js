import { useParams, useNavigate } from "react-router-dom";
import {
  Arrow,
  CloseIcon,
  Eye,
  RedLoveIcon,
  SendIcon,
} from "../../../Components/Icons/icons";
import "./livebid.css";
import { AuctionData } from "../data";

const LiveBid = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const liveBid = AuctionData.find((data) => data.id === parseInt(id));
  return (
    <section className='live-bid container'>
      <LiveBidDesktop {...liveBid} navigate={navigate} />
      <LiveBidMobile {...liveBid} navigate={navigate} />
    </section>
  );
};

const LiveBidDesktop = ({ url, tag, bid, creator, navigate }) => {
  return (
    <div className='d-none'>
      <h2>
        home/ auctions/ <span>live bid</span>
      </h2>
      <main>
        <div className='img'>
          <img src={url} alt={tag} draggable='false' />
          <div className='overlay close-live'>
            <span onClick={() => navigate("/Auction")}>
              <CloseIcon />
            </span>
            <span>live</span>
          </div>
          <p className='overlay bid'>current bid ${bid}</p>
          <p className='overlay tag'>tag: {tag}</p>
        </div>

        <div className='comment-section'>
          <div className='comments'></div>
          <div className='comment'>
            <p>creator : {creator}</p>
            <div className='input'>
              <div>
                <input type='text' placeholder='Place a bid...' />
                <div className='overlay send'>
                  <SendIcon />
                </div>
              </div>

              <div>
                <div className='love'>
                  <RedLoveIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <h1>
        <span>see upcoming drops</span>
        <button>
          <Arrow />
        </button>
      </h1>
    </div>
  );
};

const LiveBidMobile = ({ url, tag, bid, creator, navigate }) => {
  return (
    <div className='mobile d-md-none'>
      <main>
        <img src={url} alt={tag} />
        <div className='overlay title'>
          <p className='tag'>tag: {tag}</p>

          <div className='live-cancel'>
            <button className='live'>live</button>
            <span className='viewers'>
              <span>
                <Eye />
              </span>
              <span>296</span>
            </span>

            <span className='close' onClick={() => navigate("/Auction")}>
              <CloseIcon />
            </span>
          </div>
        </div>

        <div className='overlay comment-section'>
          <div className='comments'></div>
          <div className='comment'>
            <div className='input'>
              <div>
                <input type='text' placeholder='Join conversation...' />
                <div className='overlay send'>
                  <SendIcon />
                </div>
              </div>

              <div>
                <div className='love'>
                  <RedLoveIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LiveBid;
