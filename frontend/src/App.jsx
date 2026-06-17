import React from 'react';

const App = () => {
  return (
    <div>
      <h1>___AI Blogs___</h1>
      <ul>
        <li>OpenAI Blog</li>
        <li>Google DeepMind BlogOpenAI Blog</li>
        <li>Anthropic News & Research</li>
        <li>Hugging Face Blog</li>
        <li>Towards AI</li>
        <li>Machine Learning Mastery</li>
      </ul><br />
      <h2>Registration Form</h2>

      <form>
        <label>Username:</label><br />
        <input type="text" name="username" placeholder="Enter your username" /><br /><br />

        <label>Email:</label><br />
        <input type="email" name="email" placeholder="Enter your email" /><br /><br />

        <label>Password:</label><br />
        <input type="password" name="password" placeholder="Enter your password" /><br /><br />

        <label>Message:</label><br />
        <textarea name="message" rows="4" cols="30" placeholder="Write your message"></textarea><br /><br />

        <button type="submit">Submit</button>
      </form>

    </div> 
  );
}

export default App;
