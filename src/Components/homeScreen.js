import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

class homeScreen extends React.Component {
  render() {
    return (
        <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active" data-interval="2000">
              <img src="img/apple.jpg" class="d-block w-100" alt="..."></img>
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </div>
            <div class="carousel-item" data-interval="2000">
              <img src="img/dear.jpg" class="d-block w-100" alt="..."></img>
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </div>
            <div class="carousel-item" >
              <img src="img/flower.jpg" class="d-block w-100" alt="..."></img>
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="img/house.jpg" class="d-block w-100" alt="..."></img>
              <div class="carousel-caption d-none d-md-block">
                <h5>Forth slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
    );
  }
}
export default homeScreen;


