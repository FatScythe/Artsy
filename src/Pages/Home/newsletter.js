import "./newsletter.css";

const NewsLetter = () => {
  return (
    <section className='newsletter'>
      <main className='container'>
        <h2 className='bellefair'>NEWSLETTER</h2>
        <p>Subscribe to get daily updates on new drops & exciting deals </p>
        <form>
          <input
            type='email'
            placeholder='ENTER YOUR EMAIL'
            className='bellefair'
          />
          <button className='bellefair'>SUBSCRIBE</button>
        </form>
      </main>
    </section>
  );
};

export default NewsLetter;
