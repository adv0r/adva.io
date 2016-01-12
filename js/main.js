var e = "hi@adva.io";

var App = {
    echo: function(text) {
        this.echo(text);

        if(ga != undefined) ga('send', 'event', 'echo', 'text', text);
    },
    help: function() {
      showHelp(this);

        if(ga != undefined) ga('send', 'event', 'help');
    },

        ls: function() {
            this.error('<ls> is not available. I guess you want to list available commands with <help>:');
             showHelp(this);
        if(ga != undefined) ga('send', 'event', 'ls');
    },
    whoami: function() {
        this.echo("\nHey there! I'm glad you are here!"); 
        this.echo("My name is Nico (a.k.a [[b;#44D544;]adva]) and I'm a software engineer / maker / entrepreneur / human, driven by curiosity.");
        this.echo("I am pretty busy all the time, so this website will probably be forever under construction and never completed. ");
        this.echo("\nI'm [[b;#44D544;] available to work as freelancer on interesting stuff], type [[b;#44D544;]services] or feel free to get in touch via [[b;#44D544;]contact] command\n");

        if(ga != undefined) ga('send', 'event', 'whoami');
    },
    contact: function() {
        this.echo("Get in touch via:")
        this.echo("Email: " + e); 
        this.echo("Twitter: @adv4nced"); 

        if(ga != undefined) ga('send', 'event', 'contact');
    },
      api: function() {
        this.echo("api: //TODO ")
        if(ga != undefined) ga('send', 'event', 'api');
    },
       blog: function() {
        if(ga != undefined) ga('send', 'event', 'blog');
        this.echo("Loading the blog... Wait a sec ... \n")
        setTimeout(function(){ document.location.href = 'http://blog.adva.io'; }, 2500);
    },
       publications: function() {
        this.clear();
        this.echo("publications: //TODO")
        if(ga != undefined) ga('send', 'event', 'publications');
    },
        slides: function() {
        this.echo("slides: //TODO")
        if(ga != undefined) ga('send', 'event', 'slides');
    },
          projects: function() {
        this.echo("projects: //TODO")
        if(ga != undefined) ga('send', 'event', 'projects');
    },
        publicPGPkey: function() {
        showPGP(this);
        if(ga != undefined) ga('send', 'event', 'publicPGPkey');
    },
        tip: function() {
        this.echo("If you made some extra million on Bitcoin price swings, feel free to drop some @ [[b;#44D544;]1337AdvApU14cW4M8fU5E1zAqDEe4NZGGN] \n ")
        if(ga != undefined) ga('send', 'event', 'tip');
    },
        keywords: function() {
        this.echo("You like buzzwords? hacking, entrepreneurship ,API, startups, disruption, cryptocurrencies, node, agile, java, machine learning, making, <drop stuff here> \n")
        if(ga != undefined) ga('send', 'event', 'keywords');
    },
          services: function() {
        this.echo("Need a creative nerd with (some) social skills? I have extended experience working in distributed teams on a wide spectrum of projects. Get in touch for a savy sanity check on your software business, technical project management, programming, reviews, technical writing or brainstorming sessions. Type [[b;#44D544;]contact] \n")
        if(ga != undefined) ga('send', 'event', 'services');
    },
          pics: function() {
        this.echo("pics: //TODO")
        if(ga != undefined) ga('send', 'event', 'pics');
    },
        share: function() {
        this.echo("share: //TODO")
        if(ga != undefined) ga('send', 'event', 'share');
    },
         cv: function() {
        this.echo("Seriously, you came this far asking for a CV?")
        this.error("Try again, please.");
        if(ga != undefined) ga('send', 'event', 'cv');
    },
        su: function(user) {
        this.echo("Seriously, [[b;#44D544;]"+user+"]!? I like you. Who are you?")
        if(ga != undefined) ga('send', 'event', 'su');
    },
    sudo: function() {
        this.echo("Ohhhh jeeez. A smart one. Who are you?")
        if(ga != undefined) ga('send', 'event', 'su');
    },
    about: function() {
        this.echo("This page built with <a href='http://terminal.jcubic.pl/' target='_blank'>jQuery Terminal Emulator</a> plugin, and hosted by <a href='http://pages.github.com' target='_blank'>GitHub Pages<a/>. Source code is also available on <a href='https://github.com/rgv151/huy.im/tree/gh-pages' target='_blank'>GitHub</a>.<br/><br/>This page is under development.. keep visting for many cool things on the future.", {raw:true});

        if(ga != undefined) ga('send', 'event', 'about');
    },
    id: function(){
        this.echo("uid=1000(tui) gid=1000(tui)");
        if(ga != undefined) ga('send', 'event', 'id','id');
    },
    startx: function() {
        this.error('xinit: unable to connect to X server: Resource temporarily unavailable\nxinit: server error');

        if(ga != undefined) ga('send', 'event', 'startx');
    }
}

jQuery(document).ready(function($) {
     if(typeof window.orientation !== 'undefined'){
         this.echo("Loading the blog... Wait a sec ... \n")
         setTimeout(function(){ document.location.href = 'http://blog.adva.io'; }, 2500);  
     }
     
     else
     {
           $('body').terminal(App, {
         greetings: "[[b;#44D544;]                #                                #            \n"+
        "                #                                #            \n"+
        "                #                                             \n"+
        "  ######   ######  ##   ##   ######            ###      ##### \n"+
        " #     #  #     #   #   #   #     #              #     #     #\n"+
        " #     #  #     #    # #    #     #              #     #     #\n"+
        " #    ##  #     #    # #    #    ##    ##        #     #     #\n"+
        "  #### #   ######     #      #### #    ##      #####    ##### \n\n"+
                    "Verba volant, bits persist - A geek's own box]\n\n\nWelcome human, type [[b;#44D544;]help] to list available commands, [[b;#44D544;]whoami] to read something about me, or [[b;#44D544;]about] to learn about this webpage .\n\n",
                prompt: function(p){
            var path = '~'
            p(e + ":" + path + "# ");
        },
        onBlur: function() {
            // prevent loosing focus
            return false;
        },
        tabcompletion: true
        });
     }


 
});

function showPGP(consoleObj)
{
consoleObj.echo("-----BEGIN PGP PUBLIC KEY BLOCK-----\n"+
"Version: Mailvelope v0.8.0\n"+
"Comment: Email security by Mailvelope - http://www.mailvelope.com\n"+

"xsBNBFNBPl0BCAClQAECgqAl3OhTZo5o4DL8PHphMzALz/xZF+8ys3h9VRPZ\n"+
"WrhzdhCj4celvy9uhfE22e8CBGpSwY1p/CkpilgZX1j/Ur9t1jZgoOGKFkR4\n"+
"tRM9cTGQHh+LvpBjnShkV8zlYc2+2GqgPN6Dijqi0N0Pq/TnNcPF0etPZZ/t\n"+
"Vq8rueaXKEDRkHICNcIYK2d0UML/6ai/pvmrCvKZZWqju+GcNDkhpU82lWtv\n"+
"x6o/J4BUVGCnqePR40ZrpxOk65X7dmC0edZhCtZp0Aiyeh7I8Pu8sPmTiF4/\n"+
"f3t+uGAmRkT+19QOnVsx9sHnDK5hBUNL+OBW0MiMPx8jqbX4G5DPzIjLABEB\n"+
"AAHNH05pY29sbyBQYXRlcm5vc3RlciA8aGlAYWR2YS5pbz7CwHIEEAEIACYF\n"+
"AlNBPmkGCwkIBwMCCRAm2a02Gx6G4wQVCAIKAxYCAQIbAwIeAQAAdcQH+wWJ\n"+
"cjvVbKo/Ss56lWO5PXIfz1+fbjLwxX8o12p/bzu55fWW07g5WBFE0CQK1W/i\n"+
"QVsN505QPhNkFhWTPR7paQmvjilSVoN8mKQfnrMO8bRyb03WCnUNsd4GzO4D\n"+
"hV5rErnPw49jZGfh2OuDHxxspw2XgmYwmV04GY/xN64ZToLGbBtw/DOXP01U\n"+
"XwiJoxYVCt4l85qJ3jikSkN3U95hUQdQyAixD2zFwdBqWuMzOw/sMLh8i7Ok\n"+
"JHPu69bzvd3j38S8sy+4p9YK7/seAW3SfuzsfaaOlKIWMxR4LwrXjJ46KMV7\n"+
"+7ixA4Km7Uf9G0sD9L9BCg8sbwSmYJ3T/IAvxxzOwE0EU0E+aQEIAORiRlgw\n"+
"9E8R0ns81lon3TUxb2iexdLKKZpkduc4zHS3zL/XQyLoP9hjsdh/AKQQpc57\n"+
"GApIsUWgGycKDyIJDB0bw+7tp8nQrfy/01Rt70gpxo6t1ZaufmQtuuQUZ5Uv\n"+
"YGk/QTv54WDKHxDG9qTlVRD30Zf4hrkfFV/3KTyyjMZX24UQ4ByZgJsPlz/s\n"+
"LhbZ+ZJrdhospoYaBZD8uAte5Kp7FeyOgWhP0YZu1L4zSWTlffWBz5wUejZk\n"+
"5qHNXvZSRQ+Nbgr2IrWE8SW3HYw3AZELMoqNx177vdHKpJhQZLX8zgURHUPx\n"+
"e2KrL1vqBhxL976NkhkXxOAt6+DxnhAfekcAEQEAAcLAXwQYAQgAEwUCU0E+\n"+
"agkQJtmtNhsehuMCGwwAAC+yB/0X0Mj8zRI632vUm1lDyncz9wckG0vOzQkf\n"+
"BCYgv/RHxsTqqQjdeh6lovuOqPhVjCBe2qiLk6AzQN6Z+CMiXxdatppBjTEm\n"+
"c8/8MXFFleK/DUInCX01WMF7z+GZ2hM4oejM9FM3G+Ic+ILvgMSpjCv/ZwCx\n"+
"Pl9Mommy7cbpB+ERlVoKullu/4g+9l7sjJQu1wRwiaMcTyB9DRrlHiOMvEKW\n"+
"BgH1y5PCIXHHzBH0iPb236Kw5cgVqTMjBffKW2EM8Q9ix+zwNtuFcPuUoLEt\n"+
"CBkch/bN/E7ZfPPLjjmrWcQ+roQekYz9h4LW8Z/bcI5MsV57UOwNzdEY8Z+p\n"+
"5PchLxtG"+
"=NUbL"+
"-----END PGP PUBLIC KEY BLOCK-----");
}

function showHelp(consoleObj)
{
        consoleObj.echo("Available commands:");
        consoleObj.echo("\t[[b;#44D544;]whoami]      display a short bio");
        consoleObj.echo("\t[[b;#44D544;]blog]     goto #hacks blog ");
        consoleObj.echo("\t[[b;#44D544;]services]      need technical lead for an interesting project? lets talk");
        consoleObj.echo("\t[[b;#44D544;]projects]      list some projects i've been working on");
        consoleObj.echo("\t[[b;#44D544;]publicPGPkey]      use this public key to send me encrypted messages");
        consoleObj.echo("\t[[b;#44D544;]contact]       get in touch"); 
        consoleObj.echo("\t[[b;#44D544;]tip]      support my development efforts with small tips (BTC)");
        consoleObj.echo("\t[[b;#44D544;]cv]      read my resume");
        consoleObj.echo("\t[[b;#44D544;]publications]      list my publications");
        consoleObj.echo("\t[[b;#44D544;]slides]      some slides and prezis ");
        consoleObj.echo("\t[[b;#44D544;]keywords]       drop some ramdom fancy buzzwords");
        consoleObj.echo("\t[[b;#44D544;]share]  share this with friends");
        consoleObj.echo("\t[[b;#44D544;]pics]      take a look my flickr photostream");
        consoleObj.echo("\t[[b;#44D544;]api]       retrieve a JSON representation of me");
        consoleObj.echo("\t[[b;#44D544;]clear]       clear the console"); 
        consoleObj.echo("\t[[b;#44D544;]help]        this help screen.");                        
        consoleObj.echo("");
        consoleObj.echo("PRO TIP: press <tab> to trigger autocompletion");
}
