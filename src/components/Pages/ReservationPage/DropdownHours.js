import React, { useRef, useEffect } from 'react';
import { useState } from 'react';
import "./DropdownHours.css";

function DropdownHours({ options, prompt, value, onChange }) {
    const [open, setOpen] = useState(false);

    function handleChange(event) {
        console.log(localStorage.setItem('cities', event.target.value));
        console.log(event.target.value);
    }

    return (
        <div className='dropdown'>
            <div className='control'
                onClick={() => setOpen((prev) => !prev)}>
                <div className='selected-value'>
                    {value ? value.name : prompt}
                </div>
                <div className={`arrow ${open ? "open" : null}`}>
                </div>
            </div>
            <div className={`options ${open ? "open" : null}`}>
                {
                    options.map((option, index) =>
                        <div className={`option ${value === option ? "selected" : null}`}
                            key={index}
                            onClick={() => {
                                onChange(option);
                                setOpen(false);
                            }}>
                            {option.name}
                        </div>)
                }
            </div>
        </div>
    )
}

export default DropdownHours;