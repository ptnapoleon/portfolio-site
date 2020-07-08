import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles.css';

function App() {
  return (
    <html>
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    
    
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous" />
            <link rel="stylesheet" href="css/styles.css" />
        </head>
        <body>
            <header id="top-image">
                <h2 class="title">Art Portfolio</h2>
            </header>
            <nav class="navbar">
                <button><a href="gallery.html">Gallery</a></button>
            </nav>
            <section>
                <h2>About Me</h2>
                <p>This is a place with art.</p>
            </section>
        </body>
    </html>
  );
}

export default App;
