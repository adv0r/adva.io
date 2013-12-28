var API_PREFIX = 'https://api.github.com/repos/rgv151/huy.im/git',
    e = "hi@adva.io";

var stdError =     "command not found, type help to list available comands";  

var GitHub = new (function() {
    this.fs = new Object;
    this.loaded = false;
    this.stack = new Array;

    this.getCurrentPath = function(){
        if(this.stack.length == 0) 
            return '~/';
        return this.stack.join('/')
    },    
    this.getCurrentWorkingDirectory = function() {
        if(this.stack.length == 0) 
            return this.fs;
        
        var fs = this.fs
        for(var i in this.stack) {
            fs = fs[this.stack[i]];
        }
        return fs;
    };
        
    var self = this;    
    $.getJSON(API_PREFIX + '/refs/heads/master', function(data, textStatus, jqXHR){
    //$.getJSON('data/master.json', function(data, textStatus, jqXHR){
        var sha = data.object.sha;
        $.getJSON(API_PREFIX + '/trees/'+sha+'?recursive=1', function(data, textStatus, jqXHR){
        //$.getJSON('data/tree.json', function(data, textStatus, jqXHR){
            for(i in data.tree) {
                var item = data.tree[i];                
                var paths = item.path.split('/');   
                
                var fs = self.fs;                
                for(var i=0; i< paths.length; i++) {
                    var path = paths[i];                    
                    
                    if(!fs.hasOwnProperty(path)) {
                       fs[path] = new Object;
                    } else {
                       fs = fs[path]
                    }
                       
                    if (i == paths.length-1) {
                        item.path = path;
                        fs[path] = item;
                    }
                }
            }
            self.loaded = true;
        });
    });
})();

var App = {
    echo: function(text) {
        this.echo(text);

        if(ga != undefined) ga('send', 'event', 'echo', GitHub.getCurrentPath(), 'text', text);
    },
    help: function() {
        this.echo("Available commands:");
        this.echo("\t[[b;#44D544;]blog]     open my blog (blog.adva.io) ");
        this.echo("\t[[b;#44D544;]services]      have an interesting project?  Lets talk");
        this.echo("\t[[b;#44D544;]projects]      see what i've done");
        this.echo("\t[[b;#44D544;]tip]      send me a cryptocurrencies tip");
        this.echo("\t[[b;#44D544;]cv]     download a .pdf copy of my resume");
        this.echo("\t[[b;#44D544;]pics]      open my flickr photostream");
        this.echo("\t[[b;#44D544;]api]       retrieve a JSON object representing me"); //TODO check if retrieve is correct
        this.echo("\t[[b;#44D544;]whoami]      display my short brief");
        this.echo("\t[[b;#44D544;]help]        this help screen.");                        
        this.echo("");

        if(ga != undefined) ga('send', 'event', 'help', GitHub.getCurrentPath());
    },
    whoami: function() {
        this.echo("Hello, my name is Huy Doan (aka Bruce Doan), I'm dad of Mia (a super cute girl) and I'm from  HCMc, Vietnam.");
        this.echo("I'm a programmer, Linux system administrator. I really love Open Source and passionate to create, contrinute to Open Source projects");
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
          services: function() {
        this.echo("services: ")
        if(ga != undefined) ga('send', 'event', GitHub.getCurrentPath(), 'services');
    },
          pics: function() {
        this.echo("pics: ")
        if(ga != undefined) ga('send', 'event', GitHub.getCurrentPath(), 'pics');
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
            "Software Engineer in a box]\n\nType [[b;#44D544;]help] to list available commands,  [[b;#44D544;]whoami] to read something about me, or   [[b;#44D544;]about] to learn about this webpage .\n",
        prompt: function(p){
            var path = '~'
            if(GitHub.stack.length > 0) {
                for(i in GitHub.stack) {
                    path+= '/';
                    path+= GitHub.stack[i]
                }
            }
            p(e + ":" + path + "# ");
        },
        onBlur: function() {
            // prevent loosing focus
            return false;
        },
        tabcompletion: true
    });
});
