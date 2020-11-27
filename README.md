# Neville Sexton - Newsround

Code Institute - Milestone ProjectII: Interactive frontend Development.

TBA

[![GitHub forks](https://img.shields.io/github/forks/nevdevtrev/milestoneproj2-IFD?style=plastic)](https://github.com/nevdevtrev/milestoneproj2-IFD/network)
[![GitHub stars](https://img.shields.io/github/stars/nevdevtrev/milestoneproj2-IFD?color=orange&style=plastic)](https://github.com/nevdevtrev/milestoneproj2-IFD/stargazers)
[![GitHub license](https://img.shields.io/github/license/nevdevtrev/milestoneproj2-IFD?color=pink&style=plastic)](https://github.com/nevdevtrev/milestoneproj2-IFD)
[![GitHub issues](https://img.shields.io/github/issues/nevdevtrev/milestoneproj2-IFD?color=blue&style=plastic)](https://github.com/nevdevtrev/milestoneproj2-IFD/issues)

## Technologies/Languages

1. HTML
2. Boostrap 4
3. Flexbox Grid System
4. CSS3
5. JavaScript
6. Github
7. Gitpod
8. Fontawesome
9. Google Fonts


## Design - UX

The design concept for this site was essentially this - 'clean and simple'. The purpose for the site was two-fold: firstly
as a shop window to the authors catalogue of books and contact information, but equally as a funnel for building up
a readership emailing list. An author's lifeblood is their readers so being able to compile an ever-growing contact 
database of their readers/fans is an essential tool for any author's marketing toolbox. To facilitate higher 
subscriber turnover I placed a simple email-input bootstrap toast component on the initial landing page to the website. This is closeable,
and ignorable, for any exisiting subscribers but is front-of-house for all new visitors to the site. 

The app is designed as a mobile first single page site with top navigation bar links (collapsible on small devices) to a selection of
news categories, namely: 'Headlines','Sport', 'Business','Arts','Fashion', 'World' and 'Entertainment'. Each category is a 
separate menu button keeping the experience as simple and pleasant as possible. I've also utilised a fixed footer with basic copyright 
information. 

The use of max-width containers was put in place to allow for a better visual experience for visitors on larger screens. The resulting narrower stream
of content gives a far better user experience for readability and content presentation.

### Design Features

The core features implemented were built upont the flexbox grid layout system and include: bootstrap toast input, bootstrap popovers 
(only on larger screens) and scrollspy - with the addition of a java based smooth scrolling feature. 

### Future Features

The main expansion of the current site will be to build and link an SQL database backend to the current email subscription toast. Also the 
intention will be to modify the current book presentations into a carousel as more and more books become availble for sale. 


### UX - First Time Visitor

Q: As a first time visitor how easy is it for me to navigate the site and find things of interest to me??
A: The new visitor to the site will immediately be presented with two things: firstly a vibrant landing page rich with author details and images, and secondly 
   a great FREE BOOK offer if they signup for author updates. This is a great UX as, in the first instance it's an immediate presentation of, and feel for, the 
   author's life and work, and in the second instance, as the typical visitor is a reader, a free book will be of direct interest to them. 
   
   The new visitor can fluidly move througout all the content by clicking the relevant navigation bar links which will smoothly roll them to their required section.
   This, again, is a nice user experience. Along with the fixed navbar the visitor is presented with a permanent footer (on all devices) containing all the authors 
   social media links. This gives them an ever-present and quick access to these services. Any section the visitor is currently in is highlighted in the 
   navigation bar too, so as a visual cue or reminder this helps the user know where they are at any time

   All links to external sites, eg. for purchasing books, open in new tabs so that the user doesn't lose his way from the site.
   
   A collapsible navbar is used for clean presentation on smaller devices, which holds the same functionality as on larger screens in terms of highlighted 
   sections. This gives the visitor the same desktop experience but in a cleaner minimalist way on their mobile.
   
   All input forms are deigned to ensure the user is assisted in completing them correctly. The combined use of required fields, enforced syntax and popup 
   prompts will gently guide the user to complete their task.

### UX - Returning Visitor

Q: As a returning visitor is the site efficiently structured for quick access to favourites, and contactibility??
A: The returning visitor can close or simply ignore the initally presented subscriber form on the landing page. All navigation links are available at all times
   so navigation is never hampered or impeded. The use of fixed footer and fixed navigation bar, with section-highlights, makes the repeat use of the site
   very easy for the returning visitor to navigate with speed and assuredness. Quick click of the contact link (or social links) on the page is all 
   that's required for the visitor to communicate with the author.
   

## Deployment

The site is hosted on GithHub Pages at https://github.com/nevdevtrev/project1-author-site.git and is built from the master branch. The Master
branch was created in the repository by:

1. On GitHub, navigate to your GitHub Pages site's repository.
2. Under your repository name, click  Settings.
3. Use the Select source drop-down menu to select master as your GitHub Pages publishing source.
4. Click Save

Should you wish to clone this simply:

1. On GitHub, navigate to the main page of the repository.
2. Under the repository name, click Clone or download.
3. In the Clone with HTTPs section, click the copy icon to copy the clone URL for the repository.
4. Open Git Bash.
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type git clone, and then paste the URL you copied in Step 2. ie. git clone https://github.com/nevdevtrev/project1-author-site.git
7. Press Enter. Your local clone will be created.

Cloning a repository to GitHub Desktop:

1. On GitHub, navigate to the main page of the repository.
2. Under your repository name, click the download icon to clone your repository in Desktop. 
3. Follow the prompts in GitHub Desktop to complete the clone. 

You can see the published live site [here](https://nevdevtrev.github.io/project1-author-site/)

## Testing

Testing was ongoing throughout the build and design process. Many iteratrions of layout were tried and often sidelined as difficulties and 
changing preferences were met. I had some real fundamental issues with nested classes and section structuring, particularly with bleeding 
content from divs when viewing on different portals. This was a highly frustrating recurrence which reduced my progress to a snail's pace,
but ultimately proved surmountable. Finally grasping just how divs, containers and their content interoperate pushed me past those initial 
frustrations, allowing me to get on with design. Using Chrome developer tool proved instrumental for this transition.

The toast used for email subscriptions has been tested for the input components, namely that the email added is (a)correct format and (b) 
not blank, and that the final checkbox selection is made. If not adhered to an error message will inform the user. 

Book links implemented with target="_blank" have been tested for new tab opening, bringing the user to the respective websites without
losing the authorsite.  

Popover links have been tested so that they appear on top (data-placement="top") and that they close (data-trigger="focus") when clicked 
outside the element. 

The final layout was tested for responsiveness across multiple devices (Pixel 2/ Pixel2 XL / Galaxy S5 / iphone 5/SE / ipad / ipad Pro / 
iphone 6/7/8 plus and iphone X) and on a variety of browsers (Firefox, Internet Explorer, Google chrome, Safari and Opera). Media queries 
have been used where necessary for various layout tweeks and preferences for larger screens. In some cases these have been used so that 
certain columns and divs are only visible on larger screens, while in other circumstances they're used for simple formatting variations. 


## Academic Pedigree

This project was completed as part of a quarterly module for The Code Institute Diploma in Full Stack Software Development.

## References/Credits

### General Content

All of the content supply and design aspects were implemented and brought together by myself using a combination of The Code Instite course material, 
www.w3schools.com and www.getbootstrap.com. The only aspects indirectly added pertain to the javascript functionality which I've yet to 
undertake as part of The Code Institute Diploma.

### Pictures

The underlying pictures used for the landing page website background and blog section were obtained from https://www.pexels.com 
and https://unsplash.com. However these were heavily modified by myself using the image manipulation capabilities of MS Powerpoint
to build these into the layered and tailored final product seen on the website.

The book covers for the self-published books were designed by me using 'free license images' found through google, and subsequently
modified again through MS Powerpoint.

### Videos

The video documentary from ABC TV was supplied directly to me from the TV Network which I subsequently added to my youtube channel.

The personal tribute video to my beautiful son Craig was created by me using defacto microsoft video software and added to my youtube 
channel.

### Acknowledgements

* Smooth scrollspy effect tutorial, which utilises JavaScript was found at csstricks.com
* www.w3schools.com and www.getbootstrap.com were referenced heavily to bring this together
* I had looked at several author websites as inspiration, including http://www.neilgaiman.com. These were a good beacon but ultimately
  I could only emulate inline with my current level of capability. I tried...



