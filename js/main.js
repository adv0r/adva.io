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
        this.echo("Hey! I'm glad you came here to know more about me"); 
        this.echo("My name is [[b;#44D544;] Nicolò Paternoster] and I'm a geek.");
        this.echo("This website is under construction ;) Wait for it. :");
        this.echo("\nI'm available to work as freelancer, so feel free to get in touch via [[b;#44D544;]contact] command");

        if(ga != undefined) ga('send', 'event', 'whoami');
    },
    contact: function() {
        this.echo("Get in touch via:")
        this.echo("Email:   " + e); 
        this.echo("Twitter: @adv4nced"); 
        this.echo("GitHub");
        this.echo("Linkedin");

        if(ga != undefined) ga('send', 'event', 'contact');
    },
      api: function() {
        this.echo("api: ")
        if(ga != undefined) ga('send', 'event', 'api');
    },
          blog: function() {
        this.echo("blog: ")
        if(ga != undefined) ga('send', 'event', 'blog');
    },
       publications: function() {
        this.echo("publications: ")
        if(ga != undefined) ga('send', 'event', 'publications');
    },
        slides: function() {
        this.echo("slides: ")
        if(ga != undefined) ga('send', 'event', 'slides');
    },
          projects: function() {
        this.echo("projects: ")
        if(ga != undefined) ga('send', 'event', 'projects');
    },
        publicPGPkey: function() {
        this.echo("publicPGPkey: ")
        if(ga != undefined) ga('send', 'event', 'publicPGPkey');
    },
          tip: function() {
        this.echo("tip: ")
        if(ga != undefined) ga('send', 'event', 'tip');
    },
              keywords: function() {
        this.echo("keywords: ")
        if(ga != undefined) ga('send', 'event', 'keywords');
    },
          services: function() {
        this.echo("services: ")
        if(ga != undefined) ga('send', 'event', 'services');
    },
          pics: function() {
        this.echo("pics: ")
        if(ga != undefined) ga('send', 'event', 'pics');
    },
        clear: function() {
        this.echo("clear: ")
        if(ga != undefined) ga('send', 'event', 'clear');
    },
              share: function() {
        this.echo("share: ")
        if(ga != undefined) ga('send', 'event', 'share');
    },
         cv: function() {
        this.echo("cv: ")
        if(ga != undefined) ga('send', 'event', 'cv');
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
    $('body').terminal(App, {
 greetings: "[[b;#44D544;]                #                                #            \n"+
"                #                                #            \n"+
"                #                                             \n"+
"  ######   ######  ##   ##   ######            ###      ##### \n"+
" #     #  #     #   #   #   #     #              #     #     #\n"+
" #     #  #     #    # #    #     #              #     #     #\n"+
" #    ##  #     #    # #    #    ##    ##        #     #     #\n"+
"  #### #   ######     #      #### #    ##      #####    ##### \n\n"+
            "Software engineer in a box]\n\n\nType [[b;#44D544;]help] to list available commands,  [[b;#44D544;]whoami] to read something about me, or   [[b;#44D544;]about] to learn about this webpage .\n\n",
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


function showHelp(consoleObj)
{
        consoleObj.echo("Available commands:");
        consoleObj.echo("\t[[b;#44D544;]whoami]      display my short bio");
        consoleObj.echo("\t[[b;#44D544;]blog]     open the blog (blog.adva.io) #hacks  ");
        consoleObj.echo("\t[[b;#44D544;]services]      need technical lead for an interesting project? lets talk");
        consoleObj.echo("\t[[b;#44D544;]projects]      list some projects i've been working on");
        consoleObj.echo("\t[[b;#44D544;]publicPGPkey]      use this public key to send me encrypted messages");
        consoleObj.echo("\t[[b;#44D544;]contact]       get in touch"); //TODO check if retrieve is correct
        consoleObj.echo("\t[[b;#44D544;]tip]      support my development efforts with small tips (BTC)");
        consoleObj.echo("\t[[b;#44D544;]cv]      read my resume");
        consoleObj.echo("\t[[b;#44D544;]publications]      list my publications");
        consoleObj.echo("\t[[b;#44D544;]slides]      some slides and prezis ");
        consoleObj.echo("\t[[b;#44D544;]keywords]       drop some ramdom fancy buzzwords");
        consoleObj.echo("\t[[b;#44D544;]share]  share this with friends");
        consoleObj.echo("\t[[b;#44D544;]pics]      take a look my flickr photostream");
        consoleObj.echo("\t[[b;#44D544;]api]       retrieve a JSON representation of me"); //TODO check if retrieve is correct
        consoleObj.echo("\t[[b;#44D544;]clear]       clear the console"); //TODO check if retrieve is correct
        consoleObj.echo("\t[[b;#44D544;]help]        this help screen.");                        
        consoleObj.echo("");
        consoleObj.echo("TIP: press <tab> to trigger autocompletion");
}
