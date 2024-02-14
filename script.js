<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Interface</title>
  <style>
    .nav-bar {
        display: flex; 
        justify-content: center; 
        align-items: center;
        gap:80px; 
        height: 60px;
        width:100%;
        background-color: #0f1111;
        color:white;          
    }
    
    p {
        font-size: 25px;
        color: orange;
    }
    
    .Search {
        background-color:#f08804;
        border-radius: 2px 2px 2px 2px;
    }
    
    input {
        background-color:white;
    }
    
    .A {
        height:20px;
        width:100%;
        border: 2px solid black;
    }
    
    .Content {
        background-color:#ffffc7;
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
        background-size:cover; 
        po
         
    }
    
    .footer-a {
        text-align:center;
        height:800px;
        width:600px;
        border:2px solid black; 
        display:flex;
        flex-direction:row;
        justify-content: center ;
        flex-wrap: wrap;
        align-items:center;
        align-Content:center; 
    }
    
    
    body {
        text-align: center; 
    }
    
    .stati {
        display: flex; 
        justify-content: center; 
        align-items: center;
        background-color:red;
        height:100px;
        width:100%;
        position: fixed;
        right: 0;
        top:10rem;
    }
    
    @media(max-width:600px){
        divas. {
            background-color:red;
        }
    }
    
    pre {
        margin: 0;
        padding: 0;
    }
    
    .K {
        display:flex; 
        align-items:center; 
        justify-content:center; 
        margin:0;
        padding:0;
        
    }
    
    .au {
        border: 8px solid blue;
        border-left :8px solid black;
        border-right:8px solid black;
        border:none;
        padding:0 0px 0 0px;
        margin:0 1px 0 2px;
        height:30px;
        width:30px;
        
    }
    
    .f {
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
    }
    
    
    .e {      
        height: 10px;
        width:10px;
        background-color:blue;
        color:white;
    }
    
    .a {
        height: 6px;
        width:100%;
        -webkit-clip-path: polygon(20% 100%, 100% 100%, 100% 100%, 80% 0%, 0% 0%);
    }
    
    .b {
        position:fixed;
        height: 6px;
        width:22px;
        left:10rem;
        margin-top:0.45rem;
        background-color:black;
        transform: rotateY(180deg) rotate(90deg);
        -webkit-clip-path: polygon(30% 100%, 100% 100%, 100% 100%, 80% 0%, 0% 0%);

        
    }
    
    .c {
        position:fixed;
        height: 6px;
        width:22px;
        left:11.6rem;
        margin-top:1.01rem;
        background-color:black;
        transform: rotateY(180deg) rotate(90deg);
        -webkit-clip-path: polygon(30% 100%, 100% 100%, 100% 100%, 74% 0%, 0% 0%);
    }
    
    .d {
        height: 6px;
        width:100%;
        margin-top: 18px;
        -webkit-clip-path: polygon(20% 100%, 100% 100%, 100% 100%, 80% 0%, 0% 0%);
    }
    
    
    .NB {
        height:20px;
        width:20px;
        border:0.6rem solid blue;
        border-left:0.6rem solid black;
        border-right:0.6rem solid black;
    }


    
  </style>
</head>
<body>
 <header>
   <div class="nav-bar A" style="height:60px;">
    <p>amazon.in</p>
    <a>Account</a>
    <a>MyCart</a>
    <a>Contact Us</a>
    <a class="search">
    <div class="Search">
    <input type="text" placeholder="Amazon.in">
    Search
    </div>
    </a>
   </div>
 </header>
 <content>
    <div class="Content A">
      
    </div>
    <div class="static">
      <img src="/storage/emulated/0/D" alt="Random Image">
      <div class="NB">
      </div>
    </div>
    <div class="K">
        <p>
          <div class="K">
          <div><h4>Kanhaiy</h4></div>
          <div class="au">
             <div class="f">
              <div class="a e"></div>
              <div class="b e"></div>
              <div class="c e"></div>
              <div class="d e"></div>
             </div>
          </div>
          <div><h4>Lal</h4></div>
        </p>
    </div>
    <div class="J">
        <p>
           <div class="line"></div>
           <div><h6>jangid</h6></div>
           <div class="line"></div>
         </div>
       </p>
    </div>
    
 </content>
 <footer>
    <div class="footer-a">
      <div style="background-color:red; height:100px;
        width:200px;"></div>
      <div style="background-color:blue; height:100px;
        width:200px;"></div>
      <div style="background-color:green; height:100px;
        width:200px;"></div>
      <div style="background-color:yellow; height:100px;
        width:200px;"></div>
        <div style="background-color:brown; height:100px;
        width:200px;"></div>
    </div>
 </footer>
</body>
</html>