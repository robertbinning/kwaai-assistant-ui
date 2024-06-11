import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AgentCatalogue.css'; // Make sure to create and import a CSS file for styling

const AgentCatalogue = () => {
  const navigate = useNavigate();

  const handleAddAgent = () => {
    navigate('/add-agent');
  };

  return (
    <div className="agent-catalogue-container">
      <aside className="sidebar">
        <div className="logo">Logotype here</div>
        <nav className="nav">
          <ul>
            <li><a href="/agent-catalogue">Agent Catalogue</a></li>
          </ul>
        </nav>
        <div className="settings">
          <a href="/settings">Settings</a>
        </div>
      </aside>
      <main className="main-content">
        <header className="header">
          <h1>Agent Catalogue</h1>
          <div className="header-right">
            <button className="add-agent-button" onClick={handleAddAgent}>Add New Agent</button>
            <div className="user-info">
              <span className="user-name">Natalie Davis</span>
              <img src="path/to/profile-pic.jpg" alt="Profile" className="profile-pic" />
            </div>
          </div>
        </header>
        <div className="content">
          <div className="empty-state">
            <img src="path/to/robot-icon.png" alt="Robot Icon" />
            <p>Hmm, it's empty here!<br />Ready to create your first agent?</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AgentCatalogue;