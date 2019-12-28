import React, { useState } from "react"
import ContactInput from "../components/ContactInput"
import PageLayout from "../templates/PageLayout"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const StyledForm = styled("form")`
  width: 90%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  place-items: center;

  & > label {
    display: block;
  }
  & > div {
    margin: 1rem 1rem;
  }
  & > input:last-of-type {
    display: flex;
    border: 0.5px solid #ddd;
    border-radius: 5px;
    width: 80%;
    margin: 1rem 0;
  }
`

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const reset = () => {
    setName("")
    setEmail("")
    setMessage("")
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", name, email, message }),
      })
      alert("Success!")
      reset()
    } catch (error) {
      alert(error)
    }
  }

  return (
    <PageLayout>
      <h1>Contact Me!</h1>
      <StyledForm
        name="contact-me"
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        onSubmit={handleSubmit}
      >
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
      </StyledForm>
    </PageLayout>
  )
}

export default Contact
