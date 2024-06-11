import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddAgent.css'; // Import the CSS file for styling

function AddAgent() {
  const [agentName, setAgentName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to save the new agent (e.g., send data to the backend)
    console.log('New Agent:', { agentName, description });
    // Navigate back to the Agent Catalogue page after saving
    navigate('/agent-catalogue');
  };

  return (
    <div className="add-agent-container">
      <aside className="sidebar">
        <div className="logo">Logotype here</div>
        <nav>
          <ul>
            <li>
              <span className="icon">🤖</span> Agent Catalogue
            </li>
            <li>
              <span className="icon">⚙️</span> Settings
            </li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="header">
          <div className="user-info">
            <span className="user-name">Natalie Davis</span>
            <span className="user-avatar">👤</span>
          </div>
        </header>
        <section className="content">
          <h1>Add New Agent</h1>
          <div className="step-indicator">
            <div className="step active">1</div>
            <div className="step">2</div>
            <div className="step">3</div>
            <div className="step">4</div>
            <div className="step">5</div>
            <div className="step">6</div>
            <div className="step">7</div>
          </div>
          <form onSubmit={handleSubmit} className="add-agent-form">
            <label>
              Agent's Name
              <input
                type="text"
                value={agentName}
                onChange={(e) => setAgentName(e.target.value)}
                required
              />
            </label>
            <label>
              Description
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </label>
            <div className="form-actions">
              <button type="button" onClick={() => navigate('/agent-catalogue')} className="cancel-button">Cancel</button>
              <button type="submit" className="continue-button">Continue</button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}

export default AddAgent;