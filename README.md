# Customs portal template

The templates in this repository are based on the Material Design for Bootstrap (MDB) framework. This is the Material Design UI component library on top of the standard Bootstrap front end development framework.
More details on MDB here: https://mdbootstrap.github.io/bootstrap-material-design/

The original Material Design framework is available here:
https://material.io/develop

The original Bootstrap framework is available here:
https://getbootstrap.com/


# Getting started
These templates are built on the starter template available in MDB here. References to the MDB framework are linked through CDNs, but you may want to change these to locally hosted files.
https://mdbootstrap.github.io/bootstrap-material-design/docs/4.0/getting-started/introduction/


# Folder structure
The template themes are built with HTML / SCSS / JS.
- css
  - This folder contains the processed CSS for the theme styles. Do not edit this CSS file. Make changes in the SCSS folder and process the CSS properly.changes.
- img
  - This is where you can store images
- scss
  - All of the styling files are stored here. The styles.scss file in the root directory imports all of the styles which can be found in the fragments folder. Use something like Compass (http://compass-style.org/) or Scout App (https://scout-app.io/) to process the SCSS into CSS. Scout App has an easy to use interface and it can easily watch for SCSS. The fragment folder contains styles that override the MDB framework and are intentionally split up by sections of the portal eg. sidebar, table, header..etc.
- js
  - This is where you can store all of your Javascript. Out of the box, the MDB framework uses jQuery, Popper.js, and a custom Bootstrap JS source.


# UI Components
All of the UI components that come with the MDB library are documented here. This includes buttons, inputs, headings, alerts, modal popups, tables, and much more.
https://mdbootstrap.github.io/bootstrap-material-design/docs/4.0/bootstrap-components/alerts/


# Examples
To see what is possible in the MDB library, have a look at these examples.
https://mdbootstrap.github.io/bootstrap-material-design/docs/4.0/examples/


# Demo
Click on Dashboard or Your Parts to navigate to each of these pages. Click on Add New Part to demo a Bootstrap modal popup.
https://zakrowling.github.io/customs-portal/
