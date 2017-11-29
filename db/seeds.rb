sauce_radio = Project.create(
    {
        name: 'Sauce Radio',
        site_url: 'http://www.Wethesauce.com',
        photo_url: 'http://wethesauce.com/wp-content/uploads/2016/07/cropped-Sauce-Radio-Color-1-e1467740479569.png',
        description: 'This is a wordpress site that I created my senior year at Georgia Sate University. 
        I wanted to create a collection of music that I personally listened to and make it accessable to my peers.
        I update this website weekly and in the future I would like make this site more mobile friendly and or create a mobile app.'
    })
    sauce_radio.save
    
    jeopardy = Project.create(
    {
        name: 'Hip-Hop Jeopardy',
        site_url: 'http://undertaker-alvin-81307.bitballoon.com/',
        photo_url: 'https://imgur.com/92wBdTF.jpg',
        description: 'This was my first project at General Assembly. This is a simply jeopardy game made from HTML, CSS and JavaScript.'
    })
    jeopardy.save
    
    vagabondtraveler = Project.create(
        {
            name: 'Vagabond Traveler',
            site_url: 'http://vagabondtraveler.herokuapp.com',
            photo_url: 'https://imgur.com/S4XZY18.jpg',
            description: 'This was a group project .'
        })
        vagabondtraveler.save
    
    sauce_react = Project.create(
    {
        name: 'Sauce Radio React On Rails',
        site_url: 'https://sauce-radio-project.herokuapp.com/',
        photo_url: 'https://imgur.com/sUFOhiF.jpg',
        description: 'This is a full CRUD app. You have the ablity to create, Edit and delete albums.
        I used React on rails to create this app with a postgres databse.'
    })
    sauce_react.save
    
    m_mufflers = Project.create(
    {
        name: 'M&M Mufflers',
        site_url: 'http://www.mmmufflers.com/',
        photo_url: 'https://imgur.com/YsCnwTs.jpg',
        description: 'This is my frist freelance project. I used an HTML template to get started and intergrated Google maps into the site.'
    })
    m_mufflers.save

    