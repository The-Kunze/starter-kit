        /*    
        @licstart  The following is the entire license notice for the 
        JavaScript code in this page.

        Copyright (C) 2014  Pandorabots, Inc.

        The JavaScript code in this page is free software: you can
        redistribute it and/or modify it under the terms of the GNU
        General Public License (GNU GPL) as published by the Free Software
        Foundation, either version 3 of the License, or (at your option)
        any later version.  The code is distributed WITHOUT ANY WARRANTY;
        without even the implied warranty of MERCHANTABILITY or FITNESS
        FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.

        As additional permission under GNU GPL version 3 section 7, you
        may distribute non-source (e.g., minimized or compacted) forms of
        that code without the copy of the GNU GPL normally required by
        section 4, provided you include this license notice and a URL
        through which recipients can access the Corresponding Source.   


        @licend  The above is the entire license notice
        for the JavaScript code in this page.
        */

function Pandorabot(host, botid) {
    this.host = host;
    this.botid = botid;
    this.custid = "";
    this.protocol = "https";
}

Pandorabot.prototype.talk = function(input, callback) {
    var generated = "g" + Math.round(Math.random() * 1000001);
    var pb = this;
    window[generated] = function(json) {
    pb.custid = json["custid"];
    callback(json);  
    delete window[generated];
    };
    var script = document.createElement("script");
    script.src = this.protocol+"://" + this.host + "/pandora/talk-xml?botid=" + this.botid + (this.custid.length > 0 ? "&custid="+this.custid : "") + "&format=json" + "&callback=" + generated + "&input=" + encodeURIComponent(input);
    console.log(script.src);
    document.body.appendChild(script);
}
