# stacklog

stacklog is a simple wrapper for a logger module that allows you
to add log state to code with nested callbacks.

## Example

_Code_

    var winston = require('winston')
    , StackLog = require('stacklog')
    , log = (new StackLog(winston))('FakeApp')
    ;

    ;(function run() {
      var l = log.info('run', 'I want a pony!');

      process.nextTick(function(){
        l.error('No!');
      });
    })();

_Output_

    info: [FakeApp][run] I want a pony!
    error: [FakeApp][run] No!

## Installation

    $ npm install stacklog

## How to use

Other than the minimal example above, stacklog is best used when abstracted 
away from your app in a local module. This will allow you to set up your 
preferred logger with appropriate config and then call it throughout your
application. See examples/fakeapp.js and example/winston.js for a more
realistic use case. To run the example:

    node examples/fakeapp.js

## Options



## License 

(The MIT License)

Copyright (c) 2013 Justin Slattery (Justin.Slattery@majorleaguesoccer.com) and 
Major League Soccer, LLC.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## Gir
                              :/::-.`                                        
                            .o-```.:+o++//-                                  
                           ++`````--------/o++:`                             
                         .o.````.-------------:++/:---------.`               
                        ++````.-------------------+oo+++++//+oso/:.          
              ://o:   `s-````-----------------------:oo-       `-:+o+.--`    
            -+/::shy:-s````.-------:++++/:-------------+o:           +/:/o`  
           /+::::hhhhy````-----:+++/:::::+++:------------/s-          .::/`  
          o/::::ohhhh+``.----/o+::::::::::::+o:------------+o`               
         o/::::+dhhhd.`.---:o+::::::::::::::::s:------------:s/              
        +/::::/hhhhhs`----/o::::::::::::::::::/y-------------:ss`            
       -+::::/hhhhhh.----/o::::::::::::::::::::m+-----------/oooh-           
       o::::+hhhhhy.-----s::::::::::::::::::::sho---------:/oooooy/          
      .o:::shhhhho`-----:o:::::::::::::::::::odd/--------:+oooooooy/         
      .o/ohhhhhy:`.-----:s:::::::::::::::::/yhho--------/oooooooooy/         
       `------y-``-------o+::::::::::::::/shhh+-------:+ooooooooy+`          
              y``.:oo+:---/o/:::::::::/oyhhhs:-------/ooooooooys.            
              y``-y.o.+o----/ossooosyhhhhyo:-------:+ooooooosy-              
              y``++-/`-Nh------/+osssoo/:--------:/ooooooooy:                
              o-`-sNmhNMMo----------------------/+oooooooy+                  
              `y`.-NMMMMMm--------------------/+oooooooyo`                   
               :+`/MMMMMMh------------------/+oooooooyo`                     
                :o.smNNds:---------------:/+oooooooyo.                       
                 .o/-------------------:/+oooooooy+`                         
                   .+o:-------------:/+oooooooss/`                           
                      :+o+:-----://+oooooooys+.                              
                         `:/+osyssoossyysohdo/`                              
                               `.----.`    ./sds/.                           
                                             .:oymho/:///`                   
                                         `-`+-:sh:-o-:::/s                   
                                        .o+ooos:/s/s:++:+s                   
                                        +h/:yho+/:s/sooyd`                   
                                            .s.:/ooss+yoy                    
                                            /+-////o+soh`                    
                                      `://o+.s/:--:/oyo`                     
                                   .+++:s/.   .//+y/:`                       
                                  /+.-/y-      :o+h                          
                                  y`-:oy+     //--os/`                       
                                  //+oysy`    //.-:+oys+-                    
                                               /+/++oyso:                    
                                                  `.`                        
                                                            

