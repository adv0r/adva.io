var e = "hi@adva.io";

var stdError =     "command not found, type help to list available comands";  


var App = {
    echo: function(text) {
        this.echo(text);

        if(ga != undefined) ga('send', 'event', 'echo', GitHub.getCurrentPath(), 'text', text);
    },
    help: function() {
        this.echo("Available commands:");
        this.echo("\t[[b;#44D544;]whoami]      display my short bio");
        this.echo("\t[[b;#44D544;]blog]     open the blog (blog.adva.io) #hacks  ");
        this.echo("\t[[b;#44D544;]services]      need technical lead for an interesting project? lets talk");
        this.echo("\t[[b;#44D544;]projects]      list some projects i've been working on");
        this.echo("\t[[b;#44D544;]contact]       get in touch"); //TODO check if retrieve is correct
        this.echo("\t[[b;#44D544;]tip]      support my development efforts with small tips (BTC)");
        this.echo("\t[[b;#44D544;]cv]      read my resume");
        this.echo("\t[[b;#44D544;]keywords]       drop some ramdom fancy buzzwords");
        this.echo("\t[[b;#44D544;]share]  share this with friends");
        this.echo("\t[[b;#44D544;]pics]      take a look my flickr photostream");
        this.echo("\t[[b;#44D544;]api]       retrieve a JSON representation of me"); //TODO check if retrieve is correct
        this.echo("\t[[b;#44D544;]help]        this help screen.");                        
        this.echo("");
        this.echo("TIP: press <tab> to trigger autocompletion");


        if(ga != undefined) ga('send', 'event', 'help', GitHub.getCurrentPath());
    },
    whoami: function() {
        this.echo("Hey! I'm glad you came here to know more about me"); 
        this.echo("My name is Nicolò Paternoster and I'm a geek.");
        this.echo("My technical summary:");
        this.echo("\t- Have strong knowledge about Linux operating system and open source software.");
        this.echo("\t- Responsible for day-to-day defense of our network, servers.");
        this.echo("\t- Experienced with web application development, specialist with PHP/MySQL. Can develop desktop/web application with Java/Python.");
        this.echo("\t- Able to make mobile apps using many different technologies (Native/Titanium/PhoneGap)");
        this.echo("\nI'm available to work as freelancer, so feel free to get in touch via [[b;#44D544;]contact] command");

        if(ga != undefined) ga('send', 'event', 'whoami', GitHub.getCurrentPath());
    },
    contact: function() {
        this.echo("Get in touch via:")
        this.echo("Email:   " + e); 
        this.echo("Twitter: @adv4nced"); 


        if(ga != undefined) ga('send', 'event', GitHub.getCurrentPath(), 'contact');
    },
      api: function() {
        this.echo("api: ")
        if(ga != undefined) ga('send', 'event', GitHub.getCurrentPath(), 'api');
    },
          blog: function() {
        this.echo("blog: ")
        if(ga != undefined) ga('send', 'event', GitHub.getCurrentPath(), 'blog');
    },
          projects: function() {
        this.echo("projects: ")
        if(ga != undefined) ga('send', 'event', GitHub.getCurrentPath(), 'projects');
    },
          tip: function() {
        this.echo("tip: ")
        if(ga != undefined) ga('send', 'event', GitHub.getCurrentPath(), 'tip');
    },
              keywords: function() {
        this.echo("keywords: ")
        if(ga != undefined) ga('send', 'event', GitHub.getCurrentPath(), 'keywords');
    },
          services: function() {
        this.echo("services: ")
        if(ga != undefined) ga('send', 'event', GitHub.getCurrentPath(), 'services');
    },
          pics: function() {
        this.echo("pics: ")
        if(ga != undefined) ga('send', 'event', GitHub.getCurrentPath(), 'pics');
    },
              share: function() {
        this.echo("share: ")
        if(ga != undefined) ga('send', 'event', GitHub.getCurrentPath(), 'share');
    },
         cv: function() {
        this.echo("cv: ")
        if(ga != undefined) ga('send', 'event', GitHub.getCurrentPath(), 'cv');
    },
    about: function() {
        this.echo("This page built with <a href='http://terminal.jcubic.pl/' target='_blank'>jQuery Terminal Emulator</a> plugin, and hosted by <a href='http://pages.github.com' target='_blank'>GitHub Pages<a/>. Source code is also available on <a href='https://github.com/rgv151/huy.im/tree/gh-pages' target='_blank'>GitHub</a>.<br/><br/>This page is under development.. keep visting for many cool things on the future.", {raw:true});

        if(ga != undefined) ga('send', 'event', 'about', GitHub.getCurrentPath());
    },
    id: function(){
        this.echo("uid=1000(tui) gid=1000(tui)");
        if(ga != undefined) ga('send', 'event', 'id', GitHub.getCurrentPath(),'id');
    },
    startx: function() {
        this.error('xinit: unable to connect to X server: Resource temporarily unavailable\nxinit: server error');

        if(ga != undefined) ga('send', 'event', 'startx', GitHub.getCurrentPath());
    }
}

jQuery(document).ready(function($) {
    $('body').terminal(App, {
        greetings: "[[b;#44D544;].___            ___ ___\n" +
            "|   | _____    /   |   \\ __ __ ___.__.\n" +
            "|   |/     \\  /    ~    \\  |  <   |  |\n" + 
            "|   |  Y Y  \\ \\    Y    /  |  /\\___  |\n" +
            "|___|__|_|  /  \\___|_  /|____/ / ____|\n" +
            "          \\/         \\/        \\/     \n" +
            "Software engineer in a box]\n\nType [[b;#44D544;]help] to list available commands,  [[b;#44D544;]whoami] to read something about me, or   [[b;#44D544;]about] to learn about this webpage .\n",
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
});
