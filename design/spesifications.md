# Spesifications Checklist
## Website Requirements

- [X] Uses consistent and semantic code
- [X] Cross Browser compatible & Respnsive
- [X] Colors and design principles
- [X] Easily readable

## Structure
- [X] Seperate folders for images, css, js
- [X] 4 HTML pages, root folder

## CONTENT PLANNING
1. Homepage
    1. Contain a Video showing Space Rocket Launch
    2. Contain Navigation Overlay
2. Launches Page
    1. Contains Sections of SpaceX SpaceX Launches
    2. Calendar/Timeline that shows launches happening
3. Gallery Page
    1. Contains images and resources from SpaceX
    2. Grid with 8-10 Pictures per Page, Gallery
    3. Image thumbnails
    4. Each thumnail links to enlarged image
4. About Page
    1. Sections containing a little info about the SpaceX team. 
    2. Info about the CEO Elon Musk, Tweets, books, etc
    3. Photos of team members and Elon. 
5. Contact Page
    1. Form fields and a submit button
    2. Contact information
    3. Social Media Links


## Web Accessibility Checklist
https://a11yproject.com/checklist.html

- [X] aria roles
- [ ] html lang="en"
- [ ] document outline

## Links
- [ ] Ensure links have :focus state. 
- [ ] Ensure links are recognizable (underlined). 
- [ ] Provide a “Skip to main content” link.

## Images
- [ ] Use appropriate alt text.

## JavaScript
- [ ] Unobtrusive JavaScript 
Use unobtrusive JavaScript (never use in line scripting).

- [ ] No-JS Alternatives 
Provide alternatives for users who do not have JavaScript enabled and for environments where JavaScript is unavailable.

## Forms
- [ ] Logical layout 
Tab order of the form follows a logical pattern.

- [ ] Associated label for all form controls (e.g. input, select etc.) 
(e.g. <label for="name">Name:</label><input id="name" type="text">)

- [ ] Make sure placeholder attributes are not being used in place of label tags. WHATWG 
An exception to this rule would be smaller forms with one or two fields (eg. search or log in forms)

- [ ] Group related form elements with fieldset and describe the group with legend 
Important for input type="radio" and input type="checkbox"

- [X] Color and Contrast
Test color contrast 
Best done early in the process, by ensuring that the foreground and background colors of your site have sufficient contrast you will help make your site more readable for everyone. Contrast Ratio is one tool for checking the contrast of your colors for both standard vision and color deficient user.

Test for different types of color blindness.
- [ ] Deuteranopia 
- [ ] Protanopia 
- [ ] Tritanopia 
Test against different types of color blindness with a tool like http://colorfilter.wickline.org. If you are on a Mac, another option is Michel Fortin's, Sim Daltonism color blindness simulator.

## Testing
Navigate your site or application using a range of tools. For instance, using only a keyboard or a screen reader will help you understand how a blind, low-vision, or limited-mobility user will experience it.

- [ ] Test using a screen reader 
- [ ] Test using keyboard only
