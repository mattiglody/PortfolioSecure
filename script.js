const initialWelcomeHTML = `<div class="centered-line">SECURE SERVER LINK (TM)<br>MATTHEW IGLODY</div>
<div class="centered-line">-----ONE TIME PASSWORD ACCEPTED-----</div>
<pre class="ascii-art">                                                                                                    
    @@@.     @@@     -@@:             @@@                                                           
     @@@    @@@@@    @@@              @@@                                                           
     @@@    @@@@@    @@:    @@@@@@    @@@    @@@@@@.   @@@@@@@    @@@ @@@@@ @@@@@=     @@@@@@       
      @@@  @@@ @@%  @@@   @@@    @@#  @@@   @@@   @@  @@@   @@@@  @@@@. @@@@@  @@@   @@@   .@@:     
      @@@  @@. @@@  @@:   @@@@@@@@@@  @@@  @@@       @@@     @@@  @@@    @@@    @@#  @@@@@@@@@@     
       @@@@@@  .@@=@@@    @@@         @@@  @@@       @@@     @@@  @@@    @@@    @@#  @@@            
       @@@@@-   @@@@@:    @@@.        @@@   @@@   *@ =@@@   @@@#  @@@    @@@    @@#  @@@            
        @@@@    .@@@@      #@@@@@@@   @@@    @@@@@@+   @@@@@@@    @@@    @@@    @@#   @@@@@@@@      
</pre>

> ACCESSING PROFESSIONAL PORTFOLIO...

> INTERFACE PRIVILEGES: READ

> WELCOME USER
`;

const commandAliases = {
  'h': 'help',
  '?': 'help',
  'b': 'bio',
  'c': 'contact',
  'li': 'linkedin',
  'p': 'pic',
  'cv': 'transfer',
  'resume': 'transfer',
  'history': 'logs',
  'l': 'logs',
  'cls': 'clear',
  'q': 'exit',
  'quit': 'exit',
  'stop': 'cancel'
};

const commandDescriptions = {
  'help': 'List available commands',
  'bio': 'Display professional bio',
  'contact': 'Display contact information',
  'linkedin': 'Open LinkedIn profile in a new tab',
  'pic': 'Launch image viewer',
  'transfer': 'Open CV in a new tab',
  'logs': 'Shows command history with timestamps',
  'clear': 'Clears the terminal and resets to welcome screen',
  'exit': 'End the terminal interface',
  'cancel': 'Cancel current running process or command (or use Ctrl+C)'
};

const bioParts = [
  "Welcome to my professional digital footprint.\n" +
  "  \n" +
  "I'm glad you could take the time to stop by and check it out.\n" +
  "My name is Matthew Iglody,\n" +
  "I am a mid-career professional who has been working in IT since College.\n" +
  "The summer after my freshman year I began interning at Stryker orthopaedics.\n" +
  "I did this for two summers and then worked at school year round in the construction office..",
  "After graduating college I got my first job working in hospital IT near the town I grew up in.\n" +
  "I was given more responsibility and the team I worked with was great. I was traveling between sites\n" +
  "much more after two years and not too long after got the opportunity to work at\n" +
  "NYU Langone Medical Center for the Radiology Department as an IT Analyst.",
  "I was promoted to senior analyst after working roughly two years and just one year later COVID-19\n" +
  "hit NYC, over the next two years we worked to maintain and update our colleauges tele presence and\n" +
  "around spring of 2022 NYC felt like it was getting it's traffic back. There were more people coming\n" +
  "back onsite and policies were changing.",
  "In December of 2022 I got the opportunity to make the switch into Research IT, Clinical trials, and...\n" +
  "I was there for another two years",
  "Congrats! You've reached the end of my bio.\n" +
  "You have unlocked the code for a non-cartoon headshot!\n" +
  "It is pic-a or p-a | Enjoy, and thanks again!",
];