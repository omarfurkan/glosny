import React from 'react';
import './QuesAns.css'

const QuesAns = () => {
    return (
        <div className='ques-ans-container'>
            <div>
                <h3>How React Works?</h3>
                <p>React.js is an open-source JavaScript library that is used for building user interface specifically for single-page application.</p>
                <p>React does not commit state changes one after the other if there are multiple state changes. Instead, React goes through its virtual DOM, creates a list of those changes that new to be made to the actual DOM and then it all in one single process.</p>
                <p>A virtual DOM is a lightweight JavaScript representation of the Document Object Model used in declarative web frameworks. Updating the virtual DOM is comparatively faster than updating the actual DOM.</p>
            </div>
            <div>
                <h3>Difference between Props and State in React?</h3>
                <p>Props are used to pass data from one component to another. The State is a local data storage that is local to the component only and can't be passed to other components.</p>
                <p>In case of props - The data is passed from one component to another. It is immutable and props can be used with state and functional components. Props are read-only</p>
                <p>On the other hand state - The data is passed within the component only. It is mutable and state can be used only with the state components/class component. State is both read and write.</p>
            </div>
            <div>
                <h3> How useState Works?</h3>
                <p>useState is a hook (function) that allows you to have state variables in functional components. Anyone pass the initial state to this function and it returns a variable with the current state value and another function to update this value.</p>
                <p>To set an initial value for the variable, pass the initial value as an argument to the useState function. When React first runs component, useState will return the two-element array as usual but will assign the initial value to the first element of the array.</p>
            </div>
        </div>
    );
};

export default QuesAns;