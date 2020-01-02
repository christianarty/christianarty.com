import React, { useState } from "react"
import PageLayout from "../templates/PageLayout"
import { navigate } from "gatsby"
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
  & > button {
    display: flex;
    border: 0.5px solid #ddd;
    border-radius: 5px;
    padding: 0.25rem 2rem;
    font-weight: bold;
    text-align: center;
  }
`

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Contact = () => {
  const [state, setState] = useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const form = e.target
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          ...state,
        }),
      })
      navigate(form.getAttribute("action"))
    } catch (error) {
      alert(error)
    }
  }

  return (
    <PageLayout>
      <h1>Contact Me!</h1>
      <StyledForm
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field" onChange={handleChange} />
          </label>
        </p>

        <div>
          <label>
            Name: <br />
            <input type="text" name="name" onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Email: <br />
            <input type="email" name="email" onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Message: <br />
            <textarea type="text" name="message" onChange={handleChange} />
          </label>
        </div>

        <button type="submit">Contact Me!</button>
      </StyledForm>
    </PageLayout>
  )
}

export default Contact
