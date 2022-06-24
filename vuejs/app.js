const app=Vue.createApp({
template:
    `

    <div id="header">
        <h1>Cogflake & Snowheel Company</h1>
    </div>
    
    <div id="content">

        <div class="card">
            <img id="logo" src="../images/cogwheel_nice_android.svg" alt="">
            <div>
                <h1>We are a company working on delivering best products to the market and solving every and all your problems.</h1>
                <h1>Check out our latest project <a href="../index.html">Here</a></h1>
            </div>
        </div>

        <div class="card">
            <img src="../images/developers/developer-1.jpg" alt="">
            <h1>Vijay Kaleb is our best developer and does most heavy lifiting</h1>
        </div>

        <div class="card">
            <img src="../images/developers/developer-2.jpg" alt="">
            <h1>Sergej Marshal, a war veteran fought in WW2, is now working as a full-time Front End Developer</h1>
        </div>

        <div class="card">
            <img src="../images/developers/main-developer.jpeg" alt="">
            <h1>And then there's me (It's and old photo), useless person who does nothing all day and wastes human resources. Oh and I created all the sites, the guys above are useless.</h1>
        </div>
    </div>

    <footer>
        <div id="copyright">
            <div>© Copyright <strong>Cogflake & Snowheel Company</strong>.</div>
            <div>Designed by <strong>W1nt3rR</strong> </div>
        </div>
    </footer>
    ` 
});

app.mount("#app");