import React, { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({});
    const [message, setMessage] = useState("");

    const handleInput = e => {
        const copyFormData = { ...formData };
        copyFormData[e.target.name] = e.target.value;
        setFormData(copyFormData);
    };

    const sendData = async e => {
        e.preventDefault();
        const {fname, lname, email, phone, message, time} = formData
        try {
            const response = await fetch(
                "https://v1.nocodeapi.com/grv080/google_sheets/EyPIjqWfOAOXnqyq?tabId=Feedback",
                {
                    method: "post",
                    body: JSON.stringify([[fname, lname, email, phone, message, time]]),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
            const json = await response.json();
            console.log("Success:", JSON.stringify(json));
            setMessage("Thank You Contact Us our customer support executive reach soon");
        } catch (error) {
            console.error("Error:", error);
            setMessage("Error");
        }
    };

    return (
          <div class="wrapper light-wrapper">
      <div class="container inner">
        <div class="row">
          <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <h2 class="section-title text-center">Drop Us a Line</h2>
            <p class="text-center">Nullam quis risus eget urna mollis ornare vel eu leo. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat. Praesent commodo cursus.</p>
        <div class="space30"></div>
            <form
                className=""
                id="contact"
                name="contact"
                required
                onSubmit={sendData}
            >
    <div class="messages"></div>
      <div class="controls">
        <div class="form-row">
            <div class="col-md-6">
              <div class="form-group">
                <input
                    name="fname" 
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    required
                    onChange={handleInput}
                />
              </div>
            </div>
              <div class="col-md-6">
              <div class="form-group">
                <input
                    name="lname" 
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    required
                    onChange={handleInput}
                />
              </div>
            </div>
          <div class="col-md-6">
              <div class="form-group">
                <input
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    required
                    onChange={handleInput}
                />
              </div>
            </div>
              <div class="col-md-6">
              <div class="form-group">
                <input
                    name="phone" 
                    type="tel"
                    className="form-control"
                    placeholder="Phone"
                    required
                    onChange={handleInput}
                />
              </div>
            </div>
            <div class="form-row">
              <div class="col-md-12">
                <textarea
                    name="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    onChange={handleInput}
                />
                </div>
                <input
                  type="hidden"
                  name="time"
                  value="=NOW()"
                  onChange={handleInput}
                  />
                <div class="space30"></div>
              <div class="col-md-12">
                <input name="submit" className="btn btn-send" type="submit" value="Send" />
               </div>
              </div>
            </div>
           </div>
           
                {message}
              
            </form>
        </div>
      </div>
     </div>
    </div>
       
    );
}