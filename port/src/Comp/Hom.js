import React,{useState} from 'react'
import './Hom.css';

const Tab=()=>{
    const [tabs,setTabs]=useState([])
    const [activeTab,setActiveTab]=useState(null)
    const [theme,setTheme]=useState('light');

    const handleAddtab=()=>{
        const newTab = {
            id: Date.now(),
            title: `Tab ${tabs.length + 1}`
        };

        setTabs([...tabs,newTab])
        setActiveTab(newTab)
    };

    const handleTabClick=(tab)=>{
        setActiveTab(tab)
    }

    const handThemeChange=()=>{
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className={`tab-container ${theme}`}>
        <div className="tab-header">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`tab-item ${tab === activeTab ? 'active' : ''}`}
              onClick={() => handleTabClick(tab)}
            >
              {tab.title}
            </div>
          ))}
          <div className="add-tab" onClick={handleAddtab}>
            <span>+</span>
          </div>
        </div>
        <div className="tab-content">
          {activeTab && <p>Content for {activeTab.title}</p>}
        </div>
        <div className="theme-toggle" onClick={handThemeChange}>
          Change Theme
        </div>
      </div>
    )
}

export default Tab