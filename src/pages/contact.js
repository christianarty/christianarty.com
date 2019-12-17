import React, { useState } from "react"
import PageLayout from "../templates/PageLayout"
const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  return (
    <PageLayout>
      <h1>Contact Me!</h1>
      <form method="post" action="#">
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Message:
            <textarea
              type="text"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </label>
        </div>
      </form>
    </PageLayout>
  )
}

export default Contact
