<div className="contact">
  <form onSubmit={handleSubmit} className="contact-form">
    <h2>Contact Me</h2>
    <input
      type="text"
      name="name"
      placeholder="Name"
      value={form.name}
      onChange={handleChange}
      required
    />
    <input
      type="email"
      name="email"
      placeholder="Email"
      value={form.email}
      onChange={handleChange}
      required
    />
    <textarea
      name="message"
      placeholder="Message"
      value={form.message}
      onChange={handleChange}
      required
    />
    <button type="submit" className="fun-button">Send</button>
    {status && <p className="status">{status}</p>}
  </form>
</div>
