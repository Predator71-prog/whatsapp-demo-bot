const express = require("express");
const { MessagingResponse } = require("twilio").twiml;

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/bot", (req, res) => {
  const incoming = (req.body.Body || "").trim().toLowerCase();
  const twiml = new MessagingResponse();

  let reply =
    "Welcome to Dhruva Tech Demo 👋\n\n1️⃣ Company Info\n2️⃣ Services\n3️⃣ Talk to Human";

  if (incoming === "1") reply = "We provide IoT, LDS, Automation & Software solutions.";
  else if (incoming === "2")
    reply =
      "Services:\n• Lightning Detection System\n• LoRa IoT\n• Automation\n• Web/Mobile Apps";
  else if (incoming === "3")
    reply = "Thanks — a human will contact you shortly.";

  twiml.message(reply);
  res.type("text/xml").send(twiml.toString());
});

app.get("/", (req, res) => {
  res.send("WhatsApp Bot Demo Running!");
});

app.listen(3000, () => console.log("Listening on port 3000"));
