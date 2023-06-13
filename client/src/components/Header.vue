<template>
    <header class="header">
      <div class="logo">
        <h1><span class="mighty">Mighty</span>Speedtester</h1>
      </div>
      <nav class="menulist">
        <ul >
          <li><button class="btn">About</button></li>
          <li><button class="btn">Docs</button></li>
          <li><button class="btn">Copyright</button></li>
          <li><button class="btn">Contact</button></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header'
  }
  </script>
  
  <style scoped>
  .header {
    position: absolute;
    display: flex;
    
    align-items: center;
    width: 100%;
    background-color: #fff;
    padding: 20px 0;
    margin-top: -305px;
    margin-left: -250px;
  }

  
  .logo h1 {
    font-size: 24px;
    font-weight: bold;
  }
  
  .logo .mighty {
    color: #C74B4B;
  }
  
  nav ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    margin-right: -200px;
  }
  
  nav ul li {
    margin-left: 15px;
  }
  
  .btn {
    background-color: #fff;
    border: none;
    font-size: 16px;
    cursor: pointer;
  }
  
  .btn:hover {
    opacity: 0.8;
  }
  </style>
  