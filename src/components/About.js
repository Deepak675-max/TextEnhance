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
                              You will find tools for handling text, such as remove extra space, convert to uppercase, convert to lowercase, copy text, clear text, replace exising word and in future you would see some more
                              functionality empty lines, text sorter and many others.
                              Check the current features below and feel free to recommend a new feature by contacting us.

                        </p>
                        <br /><br /><br />
                        <h3>Thank You!!!</h3>
                        <br /><br /><br />

                        <h5>
                              <strong> Developed By: </strong> Deepak Kumar
                              <br /><br />
                              <strong>Email Id: </strong> deepakamboj6656@gmial.com
                        </h5>
                  </div>
            </div>
      )
}
