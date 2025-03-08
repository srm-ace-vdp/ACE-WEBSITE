$(document).ready(function () {
  $(function () {
    var usermessages = [];
    var INDEX = 0;
    generate_message(
      "Welcome to the Event ChatBot! I am here to assist you.",
      "user"
    );
    $("#chat-submit").click(function (e) {
      e.preventDefault();
      var msg = $("#chat-input")
        .val()
        .replace(/\?/g, "")
        .replace(/(.)\1{2,}/g, "$1$1")
        .trim();
      if (msg.trim() == "") {
        return false;
      }
      generate_message(msg, "self");
      handleMessage(msg);
    });

    const technicalEvents = {
      "1. Coders Elite": {
        description:
          "Hackathon. Unleash your innovation by creating solutions for real-world scenarios!",
        coordinators: [
          {
            role: "Faculty Coordinator",
            name: "Dr. Anusha",
          },
          {
            role: "Student Coordinator 1",
            name: "Arfan",
            contactNumber: "6379048920",
          },
          {
            role: "Student Coordinator 2",
            name: "Nandhini Raja",
            contactNumber: "8825638849",
          },
        ],
        eventqr:
          "https://drive.google.com/file/d/1T-Rm3KQM7flNqQhBH8tZWu6s8q2Q93dp/view",
        eventlink: "https://forms.gle/wnBykpsSHbcUUGu3A",
        "registration fee": "Rs. 180/- For 3 Candidates",
        eventvenue: "Lab 2",
        eventdate: "12/10/2021",
      },
      "2. Capture the Flag": {
        description:
          "An event to exercise your technical skills, which consists of a series of challenges that vary in difficulty level.",
        coordinators: [
          {
            role: "Faculty Coordinator",
            name: "Dr. Maheswari",
          },
          {
            role: "Student Coordinator 1",
            name: "Madhumitha",
            contactNumber: "9962613764",
          },
          {
            role: "Student Coordinator 2",
            name: "Sivakarthikeyan",
            contactNumber: "8925126677",
          },
        ],
        eventqr:
          "https://drive.google.com/file/d/1b-G1V_m0oR-G-OYMwl8NLMJjYmEXiLc_/view",
        eventlink: "https://forms.gle/Gnjo6QpXq64h6NcD6",
        "registration fee": "Rs. 100/130 For 1/2 Candidadtes",
        eventvenue: "Lab 1",
        eventdate: "13/10/2021",
      },
      "3. Bug Hunt: Debugging": {
        description:
          "Mission impeccable: Debug the program for flawless execution. In this group/team event, participants are tasked with identifying and fixing errors or bugs in the code. The winner is decided based on their debugging accuracy and speed.",
        coordinators: [
          {
            role: "Faculty Coordinator",
            name: "Dr. Arunnehru",
          },
          {
            role: "Student Coordinator 1",
            name: "Prem Koushik",
            contactNumber: "8610509497",
          },
          {
            role: "Student Coordinator 2",
            name: "Bhuvanesh",
            contactNumber: "6380953383",
          },
        ],
        eventqr:
          "https://drive.google.com/file/d/1oHHDUSEWEf-CH8ShmT6Uc6rG84PRoA1L/view",
        eventlink: "https://forms.gle/VUb1FHTYjo1zFQmS6",
        "registration fee": "Rs. 130/180/200 For 2/3/4 Candidadtes",
        eventvenue: "Lab 1",
        eventdate: "13/10/2021",
      },
      "4. Web and App Dev": {
        description:
          "Participants will be given a theme to develop a webpage. The individual who designs a more captivating and creative page/app is declared the winner.",
        coordinators: [
          {
            role: "Faculty Coordinator",
            name: "Dr. Golda",
          },
          {
            role: "Student Coordinator 1",
            name: "NIVETHA K",
            contactNumber: "9363119278",
          },
          {
            role: "Student Coordinator 2",
            name: "Joshika.S.L",
            contactNumber: "9360264293",
          },
        ],
        eventqr:
          "https://drive.google.com/file/d/12fnjChsJrfDdssRM3tKgZIYWu1BMVuiY/view",
        eventlink: "https://forms.gle/iQR7z65DAjjXUFyj8",
        "registration fee": "Rs. 100/130 For 1/2 Candidadtes",
        eventvenue: "Lab 1",
        eventdate: "12/10/2021",
      },
      "5. IdeateXchange": {
        description:
          "The battle of words: This is your chance to flex your persuasion skills. Participants can either support or negate the topic and debate upon it. The Adjudicator decides the winner based on the points presented.",
        coordinators: [
          {
            role: "Faculty Coordinator",
            name: "Ms. Deepa",
          },
          {
            role: "Student Coordinator 1",
            name: "Yogesh limbani",
            contactNumber: "9043080023",
          },
          {
            role: "Student Coordinator 2",
            name: "Nikil",
            contactNumber: "7418791075",
          },
        ],
        eventqr:
          "https://drive.google.com/file/d/1Kn8Z62tcqEpQ9UUKMiXsgRmI6rpgre-T/view",
        eventlink: "https://forms.gle/LqyFMKdn3wTEBPa6A",
        "registration fee": "Rs. 130/- For 2 Candidadtes",
        eventvenue: "CW 302",
        eventdate: "12/10/2021",
      },
      "6. SQLize": {
        description:
          "Solve the given mystery i.e solve the SQL queries and be crowned as the winner.",
        coordinators: [
          {
            role: "Faculty Coordinator",
            name: "Ms. Indumathy",
          },
          {
            role: "Student Coordinator 1",
            name: "Prawin K",
            contactNumber: "9176063869",
          },
          {
            role: "Student Coordinator 2",
            name: "Navika Menon",
            contactNumber: "9150806906",
          },
        ],
        eventqr:
          "https://drive.google.com/file/d/1HvnPVPo_K3pSbwrV5lrKElxMtJv-_Ifu/view",
        eventlink: "https://forms.gle/2MJPstibUooBHgkCA",
        "registration fee": "Rs. 75/- For 1 Candidadtes",
        eventvenue: "NS Lab ",
        eventdate: "13/10/2021",
      },
      "7. Trading Titans": {
        description:
          "A team will be given an initial sum of money with a brief description about the companies. The team with the maximum sum of money after the final rounds will be the winner. Each round will have different clues to guide the participants in their investing.",
        coordinators: [
          {
            role: "Faculty Coordinator",
            name: "Dr. Neelam Sanjeev Kumar",
          },
          {
            role: "Student Coordinator 1",
            name: "Soorej Rajesh",
            contactNumber: "7550122382",
          },
          {
            role: "Student Coordinator 2",
            name: "Dev Shah",
            contactNumber: "9600284269",
          },
        ],
        //TODO: To Update barcode
        eventqr:
          "https://drive.google.com/file/d/1b-G1V_m0oR-G-OYMwl8NLMJjYmEXiLc_/view",
        eventlink: "https://forms.gle/oizediZou41x5ES46",
        "registration fee": "Rs. 130/- For 2 Candidadtes",
        eventvenue: "CDC Lab",
        eventdate: "13/10/2021",
      },
      "8. Mock Interview": {
        description:
          "Sharpen your interview skills and boost your confidence in a job interview simulator. Practice answering a variety of questions and get instant feedback. Mock interviews help the participants gain more confidence, teach them about handling constructive criticism.",
        coordinators: [
          {
            role: "Faculty Coordinator",
            name: "Dr. Bharathi",
          },
          {
            role: "Student Coordinator 1",
            name: "Abhishek periwal",
            contactNumber: "9601181963",
          },
          {
            role: "Student Coordinator 2",
            name: "P.Yeshaswi",
            contactNumber: "9025416053",
          },
        ],
        eventqr:
          "https://drive.google.com/file/d/1xJsJ23na_Wp7nx8bVIdOwjVB4OLI9qye/view",
        eventlink: "https://forms.gle/XY2vJ7rGPa2qdVAc7",
        "registration fee": "Rs. 75/- For 1 Candidadtes",
        eventvenue: "CW 301",
        eventdate: "12/10/2021",
      },
      "9. TechnoEnigma": {
        description:
          "Technical Treasure Hunt. A true TechnoLogical event, where logic meets technology! Participants will be given various technical clues, and the team that solves all clues the fastest will be crowned as the winner.",
        coordinators: [
          {
            role: "Faculty Coordinator",
            name: "Dr. Chithra",
          },
          {
            role: "Student Coordinator 1",
            name: "Avanthika",
            contactNumber: "9841430530",
          },
          {
            role: "Student Coordinator 2",
            name: "Janani Giridharan",
            contactNumber: "9841698150",
          },
        ],
        eventqr:
          "https://drive.google.com/file/d/1mbtoK4tRc1osazxjfAYgPYa46RnVf-EM/view",
        eventlink: "https://forms.gle/DGmzMsLEjhS7DQ2t7",
        "registration fee": "Rs. 100/130/180 For 1/2/3 Candidadtes",
        eventvenue: "CW 304",
        eventdate: "12/10/2021",
      },
      back: "back",
      exit: "exit",
    };

    const nonTechnicalEvents = {
      "1. Guess the Whisper": {
        description: "Shh! The Whisper Challenge",
        coordinators: [
          {
            role: "Faculty Coordinator",
            name: "Dr. Meenakshi",
          },
          {
            role: "Student Coordinator 1",
            name: "SS Rahul",
            contactNumber: "6381022369",
          },
          {
            role: "Student Coordinator 2",
            name: "Mugunthan.D",
            contactNumber: "9566667776",
          },
        ],
        eventqr:
          "https://drive.google.com/file/d/10RWgvyN9VOI5eP9K26cclUrmprSjcOF2/view",
        eventlink: "https://forms.gle/PHFyVak9WmfmDH6T8",
        "registration fee": "Rs. 300/- For 4 Candidadtes",
        eventvenue: "CW 303 & Auditorium",
        eventdate: "12/10/2021 & 12/10/2021",
      },
      "2. Aficionado": {
        description:
          "Fandom Quiz. Do you spend excessive time watching web  series? If yes, then this is the event for you! This event tests  your knowledge on various fandoms.",
        coordinators: [
          {
            role: "Faculty Coordinator",
            name: "Dr. Gayathri",
          },
          {
            role: "Student Coordinator 1",
            name: "Anjali Annie",
            contactNumber: "8072024075",
          },
          {
            role: "Student Coordinator 2",
            name: "Sanjeev",
            contactNumber: "9489164036",
          },
        ],
        eventqr:
          "https://drive.google.com/file/d/1c5DN-OB9TcJcTv5E8CwcSrTIgXMvpbgZ/view",
        eventlink: "https://forms.gle/RHJ2BtRRXTuHxv1M6",
        "registration fee": "Rs. 180/- For 3 Candidadtes",
        eventvenue: "CW 303",
        eventdate: "12/10/2021",
      },
      "3. Groove and Pitch: Moves and Adzap Grooves": {
        description:
          "Get ready to groove and bust an idea in this fun Dance + Adzap event",
        coordinators: [
          {
            role: "Faculty Coordinator",
            name: "Mr. Sridhar",
          },
          {
            role: "Student Coordinator 1",
            name: "Namratha",
            contactNumber: "9962225355",
          },
          {
            role: "Student Coordinator 2",
            name: "Jaishree B",
            contactNumber: "9361307733",
          },
        ],
        eventqr:
          "https://drive.google.com/file/d/1SaU--ZFVphfS0b2BlXd5btZb2gqbIuj0/view",
        eventlink: "https://forms.gle/WfAicRUcYnvYTiyC6",
        "registration fee": "Rs. 180/- For 3 Candidadtes",
        eventvenue: "CW 304 & Auditorium",
        eventdate: "12/10/2021 & 13/10/2021",
      },
      "4. Surviving the Titanic: Shipwreck": {
        description:
          "Beware of a shipwreck joke! it might go overboard. Participants must fight amongst themselves to secure a life jacket on this sinking ship.",
        coordinators: [
          {
            role: "Faculty Coordinator",
            name: "Dr. Ramkumar and Dr. P. Durgadevi",
          },
          {
            role: "Student Coordinator 1",
            name: "Dakshak J",
            contactNumber: "9176699086",
          },
          {
            role: "Student Coordinator 2",
            name: "M. Varshaa",
            contactNumber: "9498403291",
          },
        ],
        eventqr:
          "https://drive.google.com/file/d/1gs6rnOg5jdiZJK-o6gK3qeUTL09auJek/view",
        eventlink: "https://forms.gle/ewMr6ELQfDrQR2EN6",
        "registration fee": "Rs. 125/- For 1 Candidadtes",
        eventvenue: "CW 301",
        eventdate: "12/10/2021",
      },
      "5. Digital Art": {
        description:
          "Ctrl+Alt+Design . A fun designing event, where participants are expected to design gaming characters. Topic : AI: Good or Bad",
        coordinators: [
          {
            role: "Faculty Coordinator",
            name: "Mr. Rajavel",
          },
          {
            role: "Student Coordinator 1",
            name: "Mitraa B",
            contactNumber: "9150267350",
          },
          {
            role: "Student Coordinator 2",
            name: "Rithvika",
            contactNumber: "7812852355",
          },
        ],
        eventqr:
          "https://drive.google.com/file/d/1rS1IQrKFM5iRv8nZXPpLM1n6UroNuK1v/view",
        eventlink: "https://forms.gle/Eknd3CEjYqxZZ6U88",
        "registration fee": "Rs. 75/- For 1 Candidadtes",
        eventvenue: "CW 305",
        eventdate: "12/10/2021",
      },
      "6. Shark Tank: Hook, Line and Innovate": {
        description:
          "Do you think you have the next groundbreaking idea that can make a difference? If yes, then this is the platform for you. Participants will have to pitch their ideas, and convince the judge of why they deserve their investment.",
        coordinators: [
          {
            role: "Faculty Coordinator",
            name: "Ms. Punitha",
          },
          {
            role: "Student Coordinator 1",
            name: "RJ Kesav Chandar",
            contactNumber: "9150571835",
          },
          {
            role: "Student Coordinator 2",
            name: "Adithi L",
            contactNumber: "6383031473",
          },
        ],
        eventqr:
          "https://drive.google.com/file/d/1o-w5QeuG3tGLUsMwSPbt8DGLHwXgzzxf/view",
        eventlink: "https://forms.gle/Fu6SNjY9g1FDojdGAa",
        "registration fee": "Rs. 125/- For 1 Candidadtes",
        eventvenue: "CW 302",
        eventdate: "12/10/2021",
      },
      "7. Paparazzi: Picture Perfect": {
        description: "IP from MUN - Capturing emotions ",
        coordinators: [
          {
            role: "Faculty Coordinator",
            name: "Dr. Sheeba Santhakumari",
          },
          {
            role: "Student Coordinator 1",
            name: "Abinandhan",
            contactNumber: "8248524841",
          },
          {
            role: "Student Coordinator 2",
            name: "Nancy Christina.K.V",
            contactNumber: "9315244829",
          },
        ],
        eventqr:
          "https://drive.google.com/file/d/1UhhHs8SRQlGzaktu8Zpw7S8hfbay0RMG/view",
        eventlink: "https://forms.gle/uzUKoEKxWmk6zR8ZA",
        "registration fee": "Rs. 75/- For 1 Candidadtes",
        eventvenue: "CW 302 & CW 301",
        eventdate: "12/10/2021 & 13/10/2021",
      },
      "8. Block and Tackle Error 101: Too much spontaneity!": {
        description:
          "Each participant is given a topic with 2-3 min to perform. They'll be asked to alternate between modes based on the judge's choice.",
        coordinators: [
          {
            role: "Faculty Coordinator",
            name: "Dr. Sridevi",
          },
          {
            role: "Student Coordinator 1",
            name: "Aman Kumar",
            contactNumber: "9633084454",
          },
          {
            role: "Student Coordinator 2",
            name: "Bhumi Sukeriya",
            contactNumber: "7790838276",
          },
        ],
        eventqr:
          "https://drive.google.com/file/d/1fTPrJjGqv5GCglDl0P_Wyn3ni-VITnNU/view",
        eventlink: "https://forms.gle/XMjacQAZ6dDcR9KM6",
        "registration fee": "Rs. 125/- For 1 Candidadtes",
        eventvenue: "CW 302",
        eventdate: "13/10/2021",
      },
      "9. Lawyer Up": {
        description:
          "A Lawyer who thinks is a Lawyer who wins. This is your chance to exhibit your communication and public speaking skills. Each participant is given prep time on spot, and time to present their opening arguments and cross examining.",
        coordinators: [
          {
            role: "Faculty Coordinator",
            name: "Dr. Vidhushavarshini",
          },
          {
            role: "Student Coordinator 1",
            name: "Megha Ramamurthy",
            contactNumber: "9941927298",
          },
          {
            role: "Student Coordinator 2",
            name: "Madhumithaa P",
            contactNumber: "9790245467",
          },
        ],
        eventqr:
          "https://drive.google.com/file/d/13OoVDzokm2z9Of_TJ86NBKzLnwgMk95X/view",
        eventlink: "https://forms.gle/3aFrbVV2TF6YCtGd6",
        "registration fee": "Rs. 125/- For 1 Candidadtes",
        eventvenue: "CW 301",
        eventdate: "13/10/2021",
      },
      "10. IPL Auction: Ee Saala Cup Namde!": {
        description:
          "A fun team event, it is a simulation of a real-life IPL Auction where the participants pick a team of 11. The franchises are allocated on spot.",
        coordinators: [
          {
            role: "Faculty Coordinator",
            name: "Dr. Manohar",
          },
          {
            role: "Student Coordinator 1",
            name: "Pranav Srinivasan",
            contactNumber: "9789860373",
          },
          {
            role: "Student Coordinator 2",
            name: "Mohammed Azhaar N",
            contactNumber: "8754626503",
          },
        ],
        eventqr:
          "https://drive.google.com/file/d/1jX1EpesKAZXNdWwBzZOGKFvWScFqTpbR/view",
        eventlink: "https://forms.gle/3Z1fsQYXLQ3DJb246",
        "registration fee": "Rs. 140/180 For 2/3 Candidadtes",
        eventvenue: "CW 305",
        eventdate: "12/10/2021 & 13/10/2021",
      },
      back: "back",
      exit: "exit",
    };

    const gamingEvents = {
      "1. Sherlocked!": {
        description:
          "Teams will be given a case to solve and an initial clue to start with. Each clue will lead to further clues or methods to contact characters important for solving the mystery.The first team to solve the mystery will be declared the winner",
        coordinators: [
          {
            role: "Faculty Coordinator",
            name: "Mr. Rajasekar",
          },
          {
            role: "Student Coordinator 1",
            name: "Sriram",
            contactNumber: "7373798801",
          },
          {
            role: "Student Coordinator 2",
            name: "Aditya Kumar Patel",
            contactNumber: "6354028687",
          },
        ],
        eventqr:
          "https://drive.google.com/file/d/1uoShYMb_tuM1lA-ojwvLBtJEVhOB7MCa/view",
        eventlink: "https://forms.gle/u5Du3tukPh7Ww6Ys9",
        "registration fee": "Rs. 150/- For 2 Candidadtes",
        eventvenue: "CW 305",
        eventdate: "13/10/2021",
      },
      "2. FIFA": {
        description:
          "Kick, Score and conquer the digital pitch of the football simulation video game.",
        coordinators: [
          {
            role: "Faculty Coordinator",
            name: "Mr. Muthurasu",
          },
          {
            role: "Student Coordinator 1",
            name: "Aryan Khatri",
            contactNumber: "7708770765",
          },
          {
            role: "Student Coordinator 2",
            name: "Krishna",
            contactNumber: "8925125942",
          },
        ],
        eventqr:
          "https://drive.google.com/file/d/1plffvlSMxaUp5bO2sJt4V9hd32d_H1qx/view",
        eventlink: "https://forms.gle/vPYGqZEskmgV1KGT7",
        "registration fee": "Rs. 200/- For 2 Candidadtes",
        eventvenue: "CW 303",
        eventdate: "13/10/2021",
      },
      "3. Rocket League": {
        description:
          "Unleash your tactical prowess! Gear up, lock and load to dominate the battlefield of RocketLeague. Matches played will be on a knockout basis. The finals will be a best of 3 maps.",
        coordinators: [
          {
            role: "Faculty Coordinator",
            name: "Mr. Muthurasu",
          },
          {
            role: "Student Coordinator 1",
            name: "Hasvanth",
            contactNumber: "8072115433",
          },
          {
            role: "Student Coordinator 2",
            name: "Pranav PK",
            contactNumber: "8667379148",
          },
        ],
        eventqr:
          "https://drive.google.com/file/d/1BwY9weyAu1sKN6LPXMIoOUWoCjNBvd_l/view",
        eventlink: "https://forms.gle/tL2thezUsdkRkiMJ6",
        "registration fee": "Rs. 100/- For 2 Candidadtes",
        eventvenue: "CW 304",
        eventdate: "13/10/2021",
      },
      "4. BGMI": {
        description:
          "We got supplies .It is a team event where you can showcase your PUBG skills.",
        coordinators: [
          {
            role: "Faculty Coordinator",
            name: "Mr. Muthurasu",
          },
          {
            role: "Student Coordinator 1",
            name: "Rohan Ganesh",
            contactNumber: "9962344289",
          },
          {
            role: "Student Coordinator 2",
            name: "Sultan Basit",
            contactNumber: "7305797531",
          },
        ], //TODO: To Update barcode
        eventqr:
          "https://drive.google.com/file/d/1gjedpWlNdQWPN1VeSQchb9gm0vx6B8S6/view",
        eventlink: " https://forms.gle/LzftcmjApfz3qVpB7",
        "registration fee": "Rs. 100/180/240/280 For 1/2/3/4 Candidadtes",
        eventvenue: "CW 304",
        eventdate: "13/10/2021",
      },
      back: "back",
      exit: "exit",
    };

    const QuesAnswerPairs = {
      hi: "Hello! How can I help you?",
      "tell about ace club":
        "ACE Club (Association of Computer Engineers) started its journey way back in 2011, It is a student organization focused on technology and innovation. ACE Club (Association of Computer Engineers) started its journey way back in 2011.",
      "what is ubertech":
        "ACE Club's flagship event, Ubertech, is a highly successful National Level Technical Symposium, running since 2011. With 10 editions so far, it attracts 1000+ participants nationwide. Ubertech offers diverse events across technical, non-technical, and gaming domains, along with industry trend workshops. Scheduled for October 12th and 13th of 2023, Ubertech promises two days of learning, networking, and fun, welcoming students from all colleges to showcase their talents and active participation.",
      "ubertech event dates":
        "Ubertech event is to be held on 12th and 13th of October.",
      "list all the events here":
        "We have various technical and non-technical events. Please ask for specific categories.",
      "event schedule for today":
        "The event schedule will be released soon. Stay tuned!",
      "event schedule for tomorrow":
        "The event schedule will be released soon. Stay tuned!",
      "technical events":
        "We have various technical events. Please ask for specific events.",
      "non-technical events":
        "We have various non-technical events. Please ask for specific events.",
      "gaming events":
        "We have various gaming events. Please ask for specific events.",
      back: "okie.",
      exit: "ok bye",
      "register for this event":
        'Please follow the below link to register for the event: <br><a href="https://www.google.com" target="_blank">click here to register</a><br><br>or scan the below Qr Code<br><br><img width="250px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/QR_Code_Example.svg/1200px-QR_Code_Example.svg.png" alt="Event-QR"><br><br>',
    };
    generate_link(QuesAnswerPairs);

    function handleMessage(msg) {
      setTimeout(function () {
        let input = msg.toLowerCase();
        let answer = QuesAnswerPairs[input];

        let input_tech = msg;
        let answer_tech = technicalEvents[input_tech];

        let input_non_tech = msg;
        let answer_non_tech = nonTechnicalEvents[input_non_tech];

        let gamingEvents_input = msg;
        let gamingEvents_answer = gamingEvents[gamingEvents_input];

        let back = QuesAnswerPairs["back"];
        if (answer) {
          generate_message(answer, "user");
        } else if (answer_tech) {
          input = input_tech;
          generate_event_data(input, answer_tech);
        } else if (answer_non_tech) {
          input = input_non_tech;
          generate_event_data(input, answer_non_tech);
        } else if (gamingEvents_answer) {
          input = gamingEvents_input;
          generate_event_data(input, gamingEvents_answer);
        } else {
          generate_message(
            '"' +
              msg +
              '"' +
              " is not a valid question. Please ask a valid question from below or contact our Coordinators.",
            "user"
          );
        }
        if (msg == "exit") {
          generate_message(
            "Thank you for visiting us. Have a nice day!",
            "user"
          );
        } else if (msg == "back") {
          var lastelement2 = usermessages[usermessages.length - 2];
          console.log(lastelement2);
          handleMessage(lastelement2.toLowerCase());
        } else {
          generate_link(QuesAnswerPairs, input);
        }
      }, 1000);
    }

    function generate_event_data(input, data) {
      var qrimage = data.eventqr;

      // Extract the file ID from the Google Drive link
      var fileID = extractFileID(qrimage);

      // Create the direct image link
      var directImageLink = "https://drive.google.com/uc?id=" + fileID;

      var message = "";
      message += "<strong>Event Name: </strong><br>";
      message += input;
      message += "<br><br>";
      message += "<strong>Description: </strong><br>";
      message += data.description;
      message += "<br><br>";
      message += "<strong>Coordinators: </strong><br>";
      message += "<ul>";
      for (let i = 0; i < data.coordinators.length; i++) {
        message += "<li>";
        message += data.coordinators[i].role + ": ";
        message += data.coordinators[i].name;
        if (data.coordinators[i].contactNumber) {
          message += " - " + data.coordinators[i].contactNumber;
        }
        message += "</li>";
      }
      message += "</ul>";
      message += "<br><br>";
      // to add event date
      message += "<strong>Event Date: </strong>";
      message += data["eventdate"];
      message += "<br><br>";
      message += "<strong>Event Venue: </strong>";
      message += data["eventvenue"];
      message += "<br><br>";
      message += "<strong>Registration Fee: </strong><br>";
      message += data["registration fee"];
      message += "<br><br>";
      message += "<strong>Event QR Code: </strong><br>";

      // Set different image widths based on screen size (adjust these values as needed)
      message +=
        '<img class="responsive-image" src="' +
        directImageLink +
        '" alt="Event-QR">';

      message += "<br><br>";
      message += "<strong>Event Link: </strong><br>";
      message += '<a href="' + data.eventlink + '" target="_blank">';
      message += "click here to register";
      message += "</a>";
      message += "<br><br>";
      generate_message(message, "user");
    }

    // Function to extract the file ID from a Google Drive link
    function extractFileID(driveLink) {
      const fileIDStart = driveLink.indexOf("/d/") + 3;
      const fileIDEnd = driveLink.indexOf("/view");
      return driveLink.substring(fileIDStart, fileIDEnd);
    }
    function generate_message(msg, type) {
      if (type == "self") {
        if (msg != "back" && msg != "exit") {
          usermessages.push(msg);
        }
        // if message is back then pop the last message and replace it with the previous message and then replace the last message with the previous message
      }
      INDEX++;
      var str = "";
      var image = "";
      if (type == "self") {
        image =
          'https://img.icons8.com/fluency/48/user-male-circle--v1.png" alt="user-male-circle--v1';
      } else {
        image =
          "https://media.licdn.com/dms/image/C4D03AQEHOgz-YBlfxA/profile-displayphoto-shrink_200_200/0/1641971678344?e=1698883200&v=beta&t=e2u29xpfRpI5duh8HqulVAEsgRVLEzMKjDrqDsxEVR0";
      }
      str += "<div id='cm-msg-" + INDEX + "' class=\"chat-msg " + type + '">';
      str += '          <span class="msg-avatar">';
      str +=
        '            <img width="40" src="' + image + '" alt="chatbot-user"/>';
      str += "          </span>";
      str += '          <div class="cm-msg-text">';
      str += msg.charAt(0).toUpperCase() + msg.slice(1);
      str += "          </div>";
      str += "        </div>";
      $(".chat-logs").append(str);
      $("#cm-msg-" + INDEX)
        .hide()
        .fadeIn(300);
      if (type == "self") {
        $("#chat-input").val("");
      }
      $(".chat-logs")
        .stop()
        .animate({ scrollTop: $(".chat-logs")[0].scrollHeight }, 1000);
    }

    function generate_button_message(msg, buttons) {
      INDEX++;
      var btn_obj = buttons
        .map(function (button) {
          var buttonDom =
            '<div class="button"><a href="javascript:;" class="btn btn-primary chat-btn" chat-value="' +
            button.value +
            '">' +
            button.name +
            "</a></div>";
          return buttonDom;
        })
        .join("");

      var str = "";
      str += "<div id='cm-msg-" + INDEX + '\' class="chat-msg user">';
      str += '          <span class="msg-avatar">';
      str +=
        '            <img src="https://image.crisp.im/avatar/operator/196af8cc-f6ad-4ef7-afd1-c45d5231387c/240/?1483361727745">';
      str += "          </span>";
      str += '          <div class="cm-msg-text">';
      str += msg;
      str += "          </div>";
      str += '          <div class="cm-msg-button">';
      str += btn_obj;
      str += "          </div>";
      str += "        </div>";
      $(".chat-logs").append(str);
      $("#cm-msg-" + INDEX)
        .hide()
        .fadeIn(300);
      $(".chat-logs")
        .stop()
        .animate({ scrollTop: $(".chat-logs")[0].scrollHeight }, 1000);
      $("#chat-input").attr("disabled", true);
    }

    function generate_link(questionAnswerPairs, excludeQues) {
      if (excludeQues == "list all the events here") {
        generate_button_message("Select One", [
          {
            name: "Technical Events",
            value: "technical",
          },
          {
            name: "Non-Technical Events",
            value: "non-technical",
          },
          {
            name: "Gaming Events",
            value: "gaming",
          },
          {
            name: "back",
            value: "back",
          },
          {
            name: "exit",
            value: "exit",
          },
        ]);
      } else if (excludeQues == "technical events") {
        const keys = Object.keys(technicalEvents);
        const values = Object.values(technicalEvents);
        var str = "";
        for (let i = 0; i < keys.length; i++) {
          str +=
            '<a href="javascript:;" class="btn btn-primary chat-btn" style="font-size: 12px; padding: 5px 10px;" chat-value="' +
            values[i] +
            '">' +
            keys[i] +
            "</a>";
        }
      } else if (excludeQues == "non-technical events") {
        const keys = Object.keys(nonTechnicalEvents);
        const values = Object.values(nonTechnicalEvents);
        var str = "";
        for (let i = 0; i < keys.length; i++) {
          str +=
            '<a href="javascript:;" class="btn btn-primary chat-btn" style="font-size: 12px; padding: 5px 10px;" chat-value="' +
            values[i] +
            '">' +
            keys[i] +
            "</a>";
        }
      } else if (excludeQues == "gaming events") {
        const keys = Object.keys(gamingEvents);
        const values = Object.values(gamingEvents);
        var str = "";
        for (let i = 0; i < keys.length; i++) {
          str +=
            '<a href="javascript:;" class="btn btn-primary chat-btn" style="font-size: 12px; padding: 5px 10px;" chat-value="' +
            values[i] +
            '">' +
            keys[i] +
            "</a>";
        }
      } else if (excludeQues in technicalEvents) {
        generate_button_message("Select One", [
          {
            name: "back",
            value: "back",
          },
          {
            name: "exit",
            value: "exit",
          },
        ]);
      } else if (excludeQues in nonTechnicalEvents) {
        generate_button_message("Select One", [
          {
            name: "back",
            value: "back",
          },
          {
            name: "exit",
            value: "exit",
          },
        ]);
      } else if (excludeQues in gamingEvents) {
        // generate button messges but not link
        generate_button_message("Select One", [
          {
            name: "back",
            value: "back",
          },
          {
            name: "exit",
            value: "exit",
          },
        ]);
      } else {
        const keys = Object.keys(questionAnswerPairs);
        const values = Object.values(questionAnswerPairs);
        var str = "";
        for (let i = 0; i < keys.length; i++) {
          if (keys[i] !== excludeQues) {
            if (
              keys[i] == "technical events" ||
              keys[i] == "non-technical events" ||
              keys[i] == "gaming events" ||
              keys[i] == "register for this event"
            ) {
              continue;
            } else {
              str +=
                '<a href="javascript:;" class="btn btn-primary chat-btn" style="font-size: 12px; padding: 5px 10px;" chat-value="' +
                values[i] +
                '">' +
                keys[i] +
                "</a>";
            }
          }
        }
      }
      $(".chat-logs").append(str);
    }
    $(document).delegate(".chat-btn", "click", function () {
      var value = $(this).attr("chat-value");
      var name = $(this).html();
      $("#chat-input").attr("disabled", false);
      generate_message(name, "self");
      handleMessage(name);
    });

    $("#chat-circle").click(function () {
      $("#chat-circle").toggle("scale");
      $(".chat-box").toggle("scale");
    });

    $(".chat-box-toggle").click(function () {
      var chatWelcome = document.getElementById("chat-welcome");
      chatWelcome.style.display = "none";
      $("#chat-circle").toggle("scale");
      $(".chat-box").toggle("scale");
    });
  });

  // var chatBoxVisible = false;
  // $(document).on("click touchstart", function (e) {
  //   if (
  //     chatBoxVisible &&
  //     !$(".chat-box").is(e.target) &&
  //     $(".chat-box").has(e.target).length === 0
  //   ) {
  //     $("#chat-circle").show("scale");
  //     $(".chat-box").hide("scale");
  //     chatBoxVisible = false;
  //   } else if (
  //     !chatBoxVisible &&
  //     ($(e.target).is("#chat-circle") ||
  //       $(e.target).parents("#chat-circle").length > 0)
  //   ) {
  //     $("#chat-circle").hide("scale");
  //     $(".chat-box").show("scale");
  //     chatBoxVisible = true;
  //   }
  // });
});
