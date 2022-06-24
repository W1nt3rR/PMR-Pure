const app=Vue.createApp({
template:`

<header class=" text-white p-1 HEADER" > 
    <div class="Naslov text-center"> 
        <img src="Logo.png" alt="Vue logo" style="height:10px width:10px"> 
        <strong> PUTR HRAST </strong> 
    </div> 
    <p class="text-center">
        VISIT US AT <a href="index.html" class="link">PUTR HRAST</a>
    </p> 
</header>

<div class="container"> 
    <div class="row">
        <div class="col-sm LEFT border border-dark border-2 mb-3">
            <h1 class="text-center WHYUS">WHY CHOOSE US?</h1>
            <div class="TEXT">
            <div class="mb-4">
            <h3> QUALITY WOOD TO KEEP YOU HOT ALL NIGHT LONG </h3>
        </div>

        <div class="mb-4">
            <h3> YOU'R WINTER IS BETTER WITH US </h3>
        </div>

        <div class="mb-4">
            <h3> FAST DELIVERY ALL ACROSS THE COUNTRY </h3>
        </div>
    </div>
</div>

<div class="col-sm RIGHT border border-dark border-2 mb-3">
    <img src="1693211.jpg" alt="Vue logo" class="img-fluid" style="height:375px">
</div>

</div> 
</div>
    <footer class="ftr">
        <div class="container text-center text-light"> 
        <i>&copy; 2020.</i> 
        </div> 
    </footer> 
    ` 
});

app.mount("#app");