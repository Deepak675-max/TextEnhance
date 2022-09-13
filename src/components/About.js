import React from 'react'

export default function About(props) {
      return (
            <div>
                  <div className='container mt-5 text-center' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                        <h2>
                              <strong>About:</strong>
                        </h2>
                        <p >

                              We provide free tools to help you with your daily tasks.
                              You will find tools for handling text, such as remove duplicate characters, empty lines, text sorter and many others.
                              Check the current features below and feel free to recommend a new feature by contacting us.

                        </p>
                        <h5>
                              <strong> Developed By: </strong> Deepak Kumar
                        </h5>
                  </div>
            </div>
      )
}
