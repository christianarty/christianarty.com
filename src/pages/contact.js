import React, { useState } from "react"
import ContactInput from "../components/ContactInput"
import PageLayout from "../templates/PageLayout"
const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  return (
    <PageLayout>
      <h1>Contact Me!</h1>
      <form method="post" netlify-honeypot="bot-field" data-netlify="true">
        <input type="hidden" name="bot-field" />
        <ContactInput
          label={"Name"}
          value={name}
          type={"text"}
          onChange={setName}
        />
        <ContactInput
          label={"Email"}
          value={email}
          type={"email"}
          onChange={setEmail}
        />
        <ContactInput
          textarea
          label={"Message"}
          value={message}
          type={"text"}
          onChange={setMessage}
        />
        <input type="submit" value="Contact Me" />
      </form>
    </PageLayout>
  )
}

export default Contact
