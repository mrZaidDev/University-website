import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
import { useState } from "react";
const Contact = () => {
    const [result,setResult] = useState('')

    const onsubmit = async (event) => {
        setResult('sending...')
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "ace0246f-c3c6-4316-9c0f-722b7feadc29");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
          setResult(res.message)
          event.target.reset()
          setTimeout(() => {
            setResult('')
          }, 1000);
        }
        setResult(res.message)
      };

  return (
    <div className="contact container">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
          fugit provident numquam sit deleniti! Saepe, enim provident, quos
          perspiciatis consequatur, maxime doloribus nemo quae vel facilis
          obcaecati est officiis incidunt?
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" /> zaidmrzaid@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            913148001406
          </li>
          <li>
            <img src={location_icon} alt="" />
            EPD2 Chaman street 43rd <br />
            MA 02139, United States
          </li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onsubmit}>
          <label htmlFor="">Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label htmlFor="">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
          />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows={6}
            placeholder="enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;


