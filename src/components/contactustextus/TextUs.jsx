import "./TextUs.css";

const TextUs = () => {
  return (
    <div className="textus">
      <div className="textus-container">
        <div className="textus-left">
          <div className="text-title">
            <h1>Dont put off seeking justice </h1>
          </div>

          <div className="text-note">
            <p>
              Call our team to assist you with professional legal services. Do
              not wait or hestate
            </p>
          </div>

          <div className="text-phone">+ 254715860031</div>
        </div>
        <div className="textus-right">
          <div className="text-form">
            <form action="">
              <div>
                <label htmlFor=""></label>
                <input type="text" placeholder="First Name" />
                <label htmlFor=""></label>
                <input type="text" placeholder="Last Name" />
              </div>
              <div>
                <label htmlFor=""></label>
                <input type="text" placeholder="Email" />
                <label htmlFor=""></label>
                <input type="text" placeholder="Phone" />
              </div>

              <div>
                <label htmlFor=""></label>
                <input type="text" placeholder="Case type" />
              </div>

              <div>
                <textarea name="" id="" placeholder="Describe Your Case"></textarea>
              </div>

              <div>
                <input type="radio" name="" id="" />
              </div>

              <div>
                <div>*Communcation through our website does not establish ....</div>
                <div><input type="submit" /></div>
              </div>
              <div>
                *Average response time is 24 hours
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextUs;
