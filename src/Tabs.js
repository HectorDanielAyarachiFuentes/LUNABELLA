import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabData = [
    {
      title: 'Gato Cósmico',
      content: 'Explora el universo con nuestro gato astronauta.',
      starred: false,
    },
    {
      title: 'Gato Futurista',
      content: 'Este gato viaja en el tiempo y predice el futuro.',
      starred: false,
    },
    {
      title: 'Gato Mecánico',
      content: 'Conoce a nuestro gato cibernético con implantes futuristas.',
      starred: false,
    },
  ];

  const handleStarClick = (index) => {
    const updatedTabs = [...tabData];
    updatedTabs[index].starred = !updatedTabs[index].starred;
    setActiveTab(index);
  };

  return (
    <div className="tabs">
      <div className="tab-buttons">
        {tabData.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleStarClick(index)}
            className={index === activeTab ? 'active' : ''}
          >
            {tab.title}
            {tab.starred && (
              <span className="starred" role="img" aria-label="star">
                🌟
              </span>
            )}
          </button>
        ))}
      </div>
      <div className="tab-content">
        <h3>{tabData[activeTab].title}</h3>
        <p>{tabData[activeTab].content}</p>
      </div>
    </div>
  );
};

export default Tabs;
