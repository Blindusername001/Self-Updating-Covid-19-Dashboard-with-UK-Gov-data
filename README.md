# Building a Covid 19 dashboard which updates regularly with Google sheets and Tableau

Building the below Tableau dashboard with data from UK government website [https://coronavirus.data.gov.uk/details/about-data].
What's different is, we're building a data pipeline which gets the latest data weekly automatically without manual intervention.
This was done with the help of Google sheets and Google scripts.

<img src="/Files_used_for_Read_Me_Doc/c19uk.gif" width="1000" height="480"/>


The outline is to use Google scripts (javascript code) and Trigger functionality in Google scripts to get latest covid data from UK Gov website into a Google sheet.
We will use this google sheet as the source for our Tableau dashboard.


<img src="/Files_used_for_Read_Me_Doc/Process%20outline.png" width="600" height="500"/>


Though it sounds simple, there are a few challenges to overcome which are detailed in the below setions.
