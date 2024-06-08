
import { Link } from 'react-router-dom';
import './HomePage.css'; 
import Nav from '../Nav.tsx';
import React, { useState } from 'react';
import './HomePage.css';


const HomePage = () => {

    const [entries, setEntries] = useState([]);
    const [input, setInput] = useState('');
    const [showPopup, setShowPopup] = useState(false);


    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    const addEntry = () => {
        const newEntry = {
            content: input,
            timestamp: new Date().toLocaleString() 
        };
        setEntries([...entries, newEntry]); 
        setInput(''); 
        handleLoginSuccess();
    };

    const handleLoginSuccess = () => {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);  
    };

    return (
        <div className="home-container">
            <Nav/>
            <div className="content">
                <h1 className='text-4xl mt-12'>Submit A Journal Entry</h1>
            </div>
    
            <div className="content">
                <textarea 
                    value={input} 
                    onChange={handleInputChange} 
                    placeholder="Write your journal entry here..."
                />
                <button onClick={addEntry}>Post Entry</button>
                <div className="entries">
                    {entries.map((entry, index) => (
                        <div key={index} className="entry">
                            <p>{entry.content}</p>
                            <small>{entry.timestamp}</small>
                        </div>
                    ))}
                </div>
            </div>
            {showPopup && (
                <div className="popup">
                    Journal Entry Successful
                </div>
            )}
            <div className="navigation">
                {/* Navigation components or links go here */}
            </div>
                <div className="navigation">
                    <button className=''>Get Started</button>
                </div>
        </div>
    );
};

export default HomePage;
