document.onreadystatechange = function () {
    if (document.readyState == "interactive") {

      //elements
      var postButton = document.getElementsByClassName('toggle-popup');
      var sliderCircle = document.getElementsByClassName('slider-circle');

      var popup = document.getElementById('popup')
      var close = document.getElementById('close')
      var popupBody = document.getElementById('popup-body')
      var image = document.getElementById('image');
      var title = document.getElementById('title');
      var date = document.getElementById('date');
      var text =document.getElementById('text');
      var link = document.getElementById('link');

      var left = document.getElementById('left');
      var right = document.getElementById('right');



      //objects
      var object0 ={
        img: "http://www.trbimg.com/img-59dd1c1f/turbine/la-me-napa-sonoma-fire-pictures/650/650x366",
        title: "Amid harrowing tales of escape, death toll climbs to 15",
        text: "The majority of the fatalities are from Sonoma County, where huge swaths of the city of Santa Rosa were leveled by the Tubbs fire. Nine people have died in Sonoma County as of 11 a.m. Tuesday, Fleming said.",
        link: "http://www.latimes.com/local/lanow/la-me-ln-fires-20171010-story.html",
        date: "10.10.2017"
      }
      var object1 = {
        img: "https://img.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2017/10/10/Foreign/Images/AFP_T87N6-4426.jpg?uuid=qrXqWq2qEeeeWOYohUSvmA",
        title: "Catalan president stops short of declaring independence",
        text: "Catalan regional president Carles Puigdemont affirmed on Tuesday the right of Catalonia to be an independent country. But he notably stopped short of declaring the region an independent polity, calling for further dialogue with the Spanish government.",
        link: "https://www.washingtonpost.com/world/catalonias-leader-weighs-statehood-declaration-even-as-warnings-mount/2017/10/10/244b937c-ad35-11e7-9b93-b97043e57a22_story.html?utm_term=.ab287e508eba",
        date: "Oct. 9, 2017."
      }
      var object2 = {
        img: "http://peopledotcom.files.wordpress.com/2017/10/gwyneth-harvey.jpg?crop=0px%2C0px%2C1591px%2C1064.4547619048px&resize=420%2C281",
        title: "How Brad Pitt Threatened Harvey Weinstein",
        text: "Paltrow is one of dozens of women coming forward to accuse Weinstein of sexual misconduct, telling the New York Times that the movie mogul made unwanted advances towards her in a hotel room when she was 22. ",
        link: "http://people.com/movies/inside-story-how-brad-pitt-threatened-harvey-weinstein-with-a-missouri-whooping-after-gwyneth-paltrow-incident/",
        date: "OCTOBER 10, 2017",
      }
      var object3 = {
        img: "http://images.outbrain.com/v1/MmFqMkgwSE9tTms2RElOWExPZGN0QT09/eyJpdSI6IjU1ZGRiMmI3YjIwZmU2M2QxZjAzMjM2ZjRlNTRiYzgwYzcwMzBmMGE0ZThjOTU0NzIyNDczNjg1MjRmOGNiYmIiLCJ3IjozODAsImgiOjIxNCwiZCI6MS4wLCJjcyI6MCwiZiI6MH0%3D.webp",
        title: "Donald Trump is acting like a fifth-grade bully",
        text: "Two sources with knowledge of the transition say that the Tennessee senator's short stature was a key factor, the Daily Caller report said. Yes, really.",
        link: "http://edition.cnn.com/2017/10/10/politics/trump-corker-liddle/index.html",
        date: "October 10, 2017",
      }
      var object4 = {
        img: "https://img.washingtonpost.com/wp-apps/imrs.php?src=http://s3.amazonaws.com/posttv-thumbnails-prod/10-10-2017/t_1507663806166_name_20171010_trumppromises.jpg&w=800&h=450",
        title: "Trump’s bold declarations don’t always lead to the results he promises",
        text: "Should President Trump announce this week that he will “decertify” the Iran deal he has derided as a historic “embarrassment” to the United States, he in effect would be passing along to Congress responsibility for the fate of the international nuclear accord.",
        link: "https://www.washingtonpost.com/politics/trumps-bold-declarations-dont-always-lead-to-the-results-he-promises/2017/10/10/da9a04c6-aa04-11e7-b3aa-c0e2e1d41e38_story.html?utm_term=.3260fdddc6b8",
        date: "October 10"
      }
      var object5 = {
        img: "https://media.boingboing.net/wp-content/uploads/2016/02/RTX24ZD2.jpg",
        title: "Campus cops were told student may have weapon",
        text: "Texas Tech University’s campus police chief says an officer went to check on the wellbeing of a 19-year-old student because the department received reports that he had been acting erratically and might have “a weapon.”",
        link: "https://www.washingtonpost.com/national/the-latest-student-charged-in-killing-of-texas-tech-officer/2017/10/10/2d3d9eda-adb2-11e7-9b93-b97043e57a22_story.html?utm_term=.3c23cf3e9809",
        date: "October 10 "
      }

      var posts = [object0, object1, object2,object3, object4, object5]
      var current;
      //events
      for (var i = 0; i < postButton.length; i++) {
        postButton[i].addEventListener('click', function(){
          handleClick(this);
        })
      }
      for (var i = 0; i < sliderCircle.length; i++) {
        sliderCircle[i].addEventListener('click', function(){
          handleClick(this);
        })
      }
      close.onclick=function(){
        popup.style.display="none";
        popupBody.style.height =0
      }
      right.onclick=function(){
        if(current == 5){
          current = 0;
          show(current)
        }
        else{
        current++
        show(current)
      }

      }
      left.onclick=function(){
        if(current === 0){
          current = 5;
          show(current)
        }
        else{
        current--
        show(current)
      }
      }


      //functions

      function handleClick(element){
        var value = element.id[element.id.length -1];
        current = value;
        show(value)
      }
      function show (value){
        title.innerHTML= posts[value].title;
        image.src=posts[value].img;
        date.innerHTML = posts[value].date;
        text.innerHTML = posts[value].text;
        link.href = posts[value].link

        for (var i = 0; i < sliderCircle.length; i++) {
          sliderCircle[i].style.background="transparent"
        }
        document.getElementById('blog-post'+ value).style.background="#FFF"

        popup.style.display="block";
        popupBody.style.background="rgba(0, 0, 0, 0.75)";
        popupBody.style.height= document.body.clientHeight + "px";

      }



    }
}
