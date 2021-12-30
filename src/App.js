import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles.css';

function App() {
  return (
      <div>
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
            <section>
                <h2>About Me</h2>
                <p>This is a place with art.</p>
            </section>
            <section>
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="images/girl.jpeg" class="img-fluid d-block w-100" alt="Painting of a young girl sitting" />
                        </div>
                        <div class="carousel-item">
                            <img src="images/girl2.jpeg" class="img-fluid d-block w-100" alt="Painting of a young girl in an alternate pose" />
                        </div>
                        <div class="carousel-item">
                            <img src="images/glechoma_hederacea.jpeg" class="img-fluid d-block w-100" alt="Sketch of the plant glechoma hederacea" />
                        </div>
                        <div class="carousel-item">
                            <img src="images/hammock.jpeg" class="img-fluid d-block w-100" alt="Painting of a hammock hanging from a tree" />
                        </div>
                        <div class="carousel-item">
                            <img src="images/pink_flowers.jpeg" class="img-fluid d-block w-100" alt="Painting of pink flowers" />
                        </div>
                        <div class="carousel-item">
                            <img src="images/space_dude.jpeg" class="img-fluid d-block w-100" alt="Pen sketch of two men" />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </section>
        </body>
    </div>
  );
}

export default App;
