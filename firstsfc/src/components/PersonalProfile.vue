<template>
<h1 style="text-align: center;">Personal Profile Web Page - Anthonee Rumbaoa</h1>

<div class="container">
    
<div class="card">
    <h3>Course</h3>
        <p>Bachelor in Science Computer Science specializing Cybersecurity and Forensic - Asia Pacific College</p>
            </div>
    
<div class="card">
    <h3>About Me</h3>
        <p>Hello! <div id="app"> {{ message }} </div> and pagod na ako.</p>
            </div>

<div class="card">
    <h3>IT Experience</h3>
        <p>Mag open ng computer</p>
            </div>

<div class="card">
<h3>Hobbies & Interests</h3>
    <ul>
        <p>Loves to play sports and videogames</p>
        <p>A fan of R&B music</p>
        <p>Laging pagod</p>
            </ul>
                </div>

<div class="card image-card">
    <div id="app2">

  <div>
    <img v-for="x in manyFoods" v-bind:src="x">
  </div>

</div>
        </div>

<div class="card">
    <h3>Goals In Life / Dream</h3>
        <p>Experience 10+hrs of sleep everyday</p>
            </div>

</div>
</template>
 
<script></script>
 
<style src="./css/css-grid.css"></style>
