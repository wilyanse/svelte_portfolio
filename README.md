# This repository serves as a revamped version of my previous portfolio website
## The website should take in data from a JSON file containing my details, which is parsed and converted to a frontend in SvelteKit + SkeletonUI

## Features
- [ ] Landing/Hero Page
- [ ] About me Component
- [ ] Professional Background Component
- [ ] Projects Component
- [ ] Skills & Interests Component
- [ ] Contact Component

### General Menu
- [ ] Sidebar: Table of contents of icons to each section
- [ ] Scroll up floating button
- [ ] Header: Vanishes when at Landing page
    - [ ] Text: "Will's Portfolio"
    - [ ] Icon: Website Icon
- [ ] Footer: Vanishes when at Contact page
    - [ ] LinkedIn Icon: href to (LinkedIn link)
    - [ ] Email Icon: copy to clipboard (Email link)
    - [ ] Phone Icon: copy to clipboard (Phone number)

### Landing Page
- [x] Grabs attention
- [x] Outline logo of self
- [x] Text: "Hi there you've made it to my portfolio"
- [x] Button: "More about Will's portfolio"
    - [ ] Scrolls to 'About me' section

### About me
- [x] Text: "My name's Will Bryan Jose"
    - [x] Highlight 'Wil' 'yan' 'se'
- [x] Text: "I'm a big data fan, aspiring to one day become a data scientist. I've worked in several fields of computer science, which you will find out about the more that you scroll through this portfolio website."
- [x] Text: "What have I done?"
    - [x] Text: "Aspired to become a game developer"
    - [x] Text: "Worked with software development"
    - [x] Text: "Transitioned to web development"
- [x] Text: "What do I aim to do?"
    - [x] Text: "Work with data professionally"
    - [x] Text: "Develop my skills in other fields of Computer Science as a hobby"
    - [x] Text: "Leave my mark on the world!"

### Professional Background
- [ ] Work Experience
    - [x] Read from JSON file
    - [ ] Cards (in order of recent to least recent)
        - [ ] Header: (Job Position)
        - [ ] Body
            - [ ] (Company name)
            - [ ] (Start Date) - (End Date)
        - [ ] Footer: Button: "Want to know more?"
    - [ ] Work Modal
        - [ ] Header: (Job Position) at (Company name) {Link to "What does a (Job Position) do?" and "What does (Company name) do?"}
        - [ ] Body
            - [ ] (Start Date) - (End Date)
            - [ ] (Details, starting from high importance level to low)
            - [ ] Text: "Tech stack:" (list of strings from Tech stack)
            - [ ] Button (takes up whole left side): Next work experience (not applicable if at newest work)
            - [ ] Button (takes up whole right side): Previous work experience (not applicable if at oldest work)
        - [ ] Footer: Button: Close icon
- [ ] Education
    - [ ] Read from JSON file
    - [ ] Cards (in order of recent to least recent) (same format as work exp)
        - [ ] Header: (Graduation Level)
        - [ ] Body
            - [ ] (School name)
            - [ ] (Start Date) - (End Date)

### Projects
- [ ] Cards, import by JSON file, searchable by keyword where keywords are Fields of Comp sci & tech stack
    - [ ] (Project Name)
        - [ ] (Short description)
        - [ ] Button: "Want to know more?"
- [ ] Project Modal
    - [ ] (Project Name)
    - [ ] (Github Link)
    - [ ] (Descriptions, sort by importance level)
    - [ ] Tech stack: (Stack)

### Skills & Interests
- [ ] Scroll view
- [ ] Cards
    - [ ] (Activity Name)
    - [ ] (Activity Pic)

### Contact 
- [ ] Text: "That's pretty much it about me. Let's connect! Contact me through:"
- [ ] LinkedIn Icon: (LinkedIn link)
- [ ] Email Icon: (Email link)
- [ ] Phone Icon: (Phone number)