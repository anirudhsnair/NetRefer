# Tools, Frameworks and Techniques used
- JavaScript
- Cypress
- Cucumber BDD
- REST Assured
- Reports in HTML 

# To run
## From CLI using PowerShell scripts:
  1. Clone or download the source code 
  2. Open PowerShell
  3. Navigate to project folder For eg: "cd c:\netrefer"
  4. Then execute command "npx cypress run --spec 'relative path of the feature file' ". For eg: "npx cypress run --spec cypress\integration\Login.feature"
  5. Execute command "npx cypress run" in order  to execute all available feature files
  ![alt text](https://github.com/anirudhsnair/NetRefer/blob/master/cypress/readMe/PowershellExecution.PNG?raw=true)
  
## From cypress IDE
  1. Clone or download the source code 
  2. Open PowerShell
  3. Navigate to project folder For eg: "cd c:\netrefer"
  4. Then execute command "npx cypress open"
  5. Click on the feature to be executed from cypress Window
  ![alt text](https://github.com/anirudhsnair/NetRefer/blob/master/cypress/readMe/CypressWindow.jpg?raw=true) 
  ![alt text](https://github.com/anirudhsnair/NetRefer/blob/master/cypress/readMe/CypressResults.PNG?raw=true)
  

# Output | Results Location

Test execution report is available at "netrefer\cypress\report\mochawesome-report\"
![alt text](https://github.com/anirudhsnair/NetRefer/blob/master/cypress/readMe/HTML_Reports.PNG?raw=true)
