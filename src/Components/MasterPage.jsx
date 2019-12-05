import React from 'react';

export default() => (
  // <div className="jumbotron text-center">
  //   <h1>CANCER PREDICTOR</h1>
  //   <p>Why go near doctor when i'm there ?</p>
  //   <form className="form-inline">
  //   </form>
  // </div>
  <div className="wrapper">
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
           <span class="sr-only">Toggle navigation</span>
           <span class="icon-bar"></span>
           <span class="icon-bar"></span>
           <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Cancer PREDICTOR&trade;</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <div>
      <div class="starter-template">
        <div className="jumbotron text-center">
          <h1>CANCER PREDICTOR</h1>
          <p>Why go near doctor when i'm there ?</p>
          <form className="form-inline">
          </form>
        </div>
      </div>
      <div class="row">
        <div className="col-lg-3 col-xs-12">
        </div>
        <div className="col-lg-6 col-xs-12">
        </div>
        <div className="col-lg-3 col-xs-12">
        </div>
      </div>
    </div>
  </div>
);