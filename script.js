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
  'wh': 'workhistory',
  'jobs': 'workhistory',
  'exp': 'workhistory',
  'li': 'linkedin',
  'm': 'menu',
  'p': 'pic',
  'cv': 'transfer',
  'resume': 'transfer',
  'history': 'logs',
  'l': 'logs',
  'cls': 'clear',
  'q': 'exit',
  'quit': 'exit',
  'stop': 'cancel',
  'chal': 'challenge'
};

const commandDescriptions = {
  'help': 'List available commands',
  'bio': 'Display professional bio',
  'contact': 'Display contact information',
  'workhistory': 'Display professional work history',
  'linkedin': 'Open LinkedIn profile in a new tab',
  'menu': 'Window with clickable menu',
  'pic': 'Launch image viewer',
  'transfer': 'Open CV in a new tab',
  'logs': 'Shows command history with timestamps',
  'clear': 'Clears the terminal and resets to welcome screen',
  'exit': 'End the terminal interface',
  'cancel': 'Cancel current running process or command (or use Ctrl+C)',
  'challenge': 'A simple challenge (placeholder)'
};

const workHistoryDetails = {
  '1': {
    title: '2014-2016 | Desktop Support Technician | Good Samaritan Regional Medical Center | Suffern, NY',
    description: 'Assist with implementation, education and maintenance of client-side EMR (EPIC) technology for all Hospital departments and units. Build and maintain end user PC workstations, laptops and peripherals. Move computers throughout hospital departments and 15+ remote doctor’s practices.'
  },
  '2': {
    title: '2016-2019 | Solutions Analyst II - Radiology IT | NYU Langone Health, New York, NY',
    description: '    • Deployed and maintained all Radiology IT assets across multiple sites, ensuring seamless operations for clinicians and staff.\n' +
                 '    • Participated in Radiology 24/7 IT help-line. 2-week On-call shift multiple times per year. Coverage for all NYU sites, remote radiologists and Bellevue hospital.\n' +
                 '    • System admin support for 20+ clinical application systems, account administration, upgrades and performance troubleshooting. Verify and correct patient data in multiple systems as needed for clinicians.\n' +
                 '    • Site go lives: Asses and configure Radiology Areas in legacy sites or new construction. Equipment installation including MRI, CT, IR suites, US, C-ARM and portable X-ray devices to interface with PACS.'
  },
  '3': {
    title: '2019-2022 | Senior Analyst I - Radiology IT | NYU Langone Health, New York, NY',
    description: '    • Troubleshot clinical applications, oversaw planned maintenance, and mitigated unplanned system outages.\n' +
                 '    • Spearheaded a remote education initiative, managing online Radiology Residency Lecture series with over 200 recorded sessions.\n' +
                 '    • Guided Radiology Education IT needs, including event support, web administration, and PACS server management.\n' +
                 '    • Played a critical role during COVID-19, transitioning in-person learning to virtual platforms and managing virtual graduation ceremonies.'
  },
  '4': {
    title: '2022-2024 | Senior Analyst - Research IT | NYU Grossman School of Medicine, New York, NY',
    description: '    • Administered external user accounts in PeopleSoft (HRMS) and served as QA Engineer/System Admin for Google Workspace, Lumapps, Medable, Anju/Trialmaster, and Almac systems.\n' +
                 '    • Optimized user storage access workflow by coordinating with IT Security, AD, and Windows server teams.\n' +
                 '    • Facilitated vendor SFTP data transfers with UNIX teams and advised business stakeholders.\n' +
                 '    • Led requirements gathering and vendor identification for Clinical Trials recruitment website development, integrating REDCap surveys for streamlined user experience.'
  }
};

const bioParts = [
  "Welcome to my professional digital footprint.\n" +
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
  "In December of 2022 I got the opportunity to make the switch into Research IT, Clinical trials, and..."
];