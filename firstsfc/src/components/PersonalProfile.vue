<template>
  <div class="main-wrapper">
    <h1 style="text-align: center;">Personal Profile Web Page - Anthonee Rumbaoa</h1>

    <div class="container">
      
      <div class="card">
        <h3>Course</h3>
        <p>Bachelor in Science Computer Science specializing Cybersecurity and Forensic - Asia Pacific College</p>
      </div>

      <div class="card">
        <h3>About Me</h3>
        <p>Hello! {{ message }} and pagod na ako.</p>
      </div>

      <div class="card">
        <h3>IT Experience</h3>
        <p>Mag open ng computer</p>
      </div>

      <div class="card">
        <h3>Hobbies & Interests</h3>
        <ul>
          <li>Loves to play sports and videogames</li>
          <li>A fan of R&B music</li>
          <li>Laging pagod</li>
        </ul>
      </div>

      <div class="card image-card">
        <div>
          <img 
            v-for="(image, index) in manyFoods" 
            :key="index" 
            :src="image" 
            alt="Food item"
            style="width: 100px; margin: 5px;" 
          />
        </div>
      </div>

      <div class="card">
        <h3>Goals In Life / Dream</h3>
        <p>Experience 10+hrs of sleep everyday</p>
      </div>

    </div>
  </div>
</template>

<script></script>

<style src="./css/css-grid.css"></style>
