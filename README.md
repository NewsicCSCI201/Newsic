# Newsic
Newsic Website
This is our CSCI 201 final project

Newsic is a music social media app linked with itunes music to help discovering new music seamlessly. Users can create posts to share their new music finds, search for other users to discover their new music finds and add songs to a personal playlist to have a never ending stream of new music. 

This is a link to our presentation: https://www.youtube.com/watch?v=PVBXD-tL73s&feature=youtu.beDeployment 

Deployment Documentation:
Make sure Tomacat v9 is installed and MySql is installed
1. Clone repository
2. Open eclipse workspace
3. Click file at top of eclipse -> open project from file system
4. Select directory and then click on the project folder name
5. Return back to file explorer/finder not eclipse, right click on SQL scripts, and click
open the SQL scripts in the Sql workbench, not within eclipse
6. Run SQL script
7. Refresh the schemas on the right side of the screen and you will notice new schemas
and tables
8. Right click on the project and click properties
a. Go to Server -> select tomcat v9 -> apply and close
b. Go back to the project properties
c. Select Project facets
d. On the top of the popup click the dropdown next to configurations and select
default configuration for tomcat v9 e. Click apply and close
9. run home.jsp on the tomcat 9 server
