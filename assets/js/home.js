const loader=document.querySelector('.loader');

window.addEventListener('load',()=>{
    loader.style.display="none";
})



// ------------------------------------------Nav-----------------------------------------------
const mobile=document.querySelector(".links-sm");
const nav_btn=document.querySelector(".open");
const mob_btn=document.querySelector(".close");


//OPening Sidebar
nav_btn.addEventListener('click',()=>{
    mobile.style.right="0";
    nav_btn.style.display="none"
})


//Closing Sidebar
mob_btn.addEventListener('click',()=>{
    mobile.style.right="-100%";
    nav_btn.style.display="block"
})

// ----------------------------------------know more--------------------------------------------------------------------------
const knw=document.querySelector('.btn3');
const dpt=document.querySelector('.dpt_info p');
const d0=document.querySelector('.do p');


knw.addEventListener('click',()=>{
    if (knw.innerText==="KNOW MORE"){
        dpt.innerText="Our department is home to a distinguished faculty renowned for their expertise in diverse areas, including network security, cryptography, databases, wireless networks, artificial intelligence, operating systems and programming languages. A significant portion of our esteemed faculty brings a wealth of experience, with many exceeding a decade of dedicated service in their respective fields. Our research endeavors are centered around the pivotal domains of network security, cryptography, wireless sensor networks, data mining and cloud computing. This unwavering commitment to research is evidenced by the fruitful contributions of our faculty and students, as they present and publish their work at prestigious national and international conferences.";
        d0.innerText="ACE(Association Of Computer Science Engineers) set forth its journey in 2011.Since then, it has been led by passionate students from the Computer Science and Engineering (CSE) department, with a steadfast commitment to introducing their peers to cutting-edge technologies and fostering collaboration among like-minded individuals. Our primary goal is to empower students to enhance their technical prowess, enabling them to excel in the dynamic and competitive world of engineering and technology. At ACE Club, we offer a platform for students to integrate their skills across various domains of Engineering & Technology. This integration proves invaluable as they navigate the ever-evolving landscape of technology. Our flagship event, initially known as Fenestra and renamed Ubertech in 2013, stands as a prestigious National Level Technical Symposium. It serves as a stage for participants from colleges across the nation to learn, connect and engage in collaborative endeavors.Our club conducts a wide array of events and activities that emphasize the significance of technical knowledge and highlight current trends. These include workshops, seminars, certification drives and knowledge-sharing sessions. This symposium has excelled in cultivating thriving partnerships and fostering productive collaborations with renowned technology and innovation enterprises.So, what are you waiting for? Join us on this exciting journey of learning, exploration and teamwork!";
        knw.innerText="KNOW LESS";
    }
    else{
        dpt.innerText="Our department boasts a distinguished faculty with expertise in areas such as network security, cryptography, databases, AI, and programming languages. Many faculty members have over a decade of experience. Our research focuses on key areas like network security, wireless sensor networks, data mining, and cloud computing, with faculty and students regularly presenting at prestigious national and international conferences.";
        d0.innerText="ACE, founded in 2011 by CSE students, empowers peers with cutting-edge tech skills and collaboration opportunities. Our flagship event, Ubertech, is a National Level Technical Symposium, connecting students nationwide. We also host workshops, seminars, and certification drives. Join us to learn, explore, and grow together!";
        knw.innerText="KNOW MORE";
    }
        
});



// ---------------------------------------------------------------------BOD Area----------------------------------------------------------------------
const urls='https://raw.githubusercontent.com/srmacevdp/assets/main/JSON/BOD-SENIOR.json';
const urlj='https://raw.githubusercontent.com/srmacevdp/assets/main/JSON/BOD-JUNIOR.json';
const cards=document.querySelector('.cards');
const cards2=document.querySelector('.cards2');

fetch(urls)
    .then(res => {
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json();
    })
    .then(dat => {
        dat.bod_senior.forEach(bod => {
            cards.insertAdjacentHTML('beforeend', ` 
            <div class="card">
                <img src="${bod.image_url}" alt="pic" loading="lazy"/>
                <h1>${bod.name}</h1>
                <h2>${bod.position}</h2>
            </div>`);
        });
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });

    fetch(urlj)
    .then(res => {
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json();
    })
    .then(dat => {
        dat.bod_junior.forEach(bod => {
            cards2.insertAdjacentHTML('beforeend', ` 
            <div class="card">
                <img src="${bod.image_url}" alt="pic" loading="lazy"/>
                <h1>${bod.name}</h1>
                <h2>${bod.position}</h2>
            </div>`);
        });
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });

// --------------------------------------------------------counting animations---------------------------------------------------------------

    document.addEventListener("DOMContentLoaded", function() {
        const counters = document.querySelectorAll('.counter');
        const options = {
            root: null,  // Use the viewport
            threshold: 0.5  // Trigger when 50% of the element is in view
        };
    
        // Create the observer
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                const counter = entry.target;
    
                if (entry.isIntersecting) {
                    // Start the counting animation
                    startCounter(counter);
                } else {
                    // Reset the counter when it goes out of view
                    resetCounter(counter);
                }
            });
        }, options);
    
        counters.forEach(counter => {
            observer.observe(counter); // Observe each counter element
        });
    
        function startCounter(counter) {
            const target = +counter.getAttribute('data-target');
            const updateCounter = () => {
                const count = +counter.innerText;
                const increment = target / 100; // Adjust for faster/slower increments
    
                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCounter, 27); // Adjust for smoothness
                } else {
                    counter.innerText = target; // Ensure the counter ends exactly at the target
                }
            };
            updateCounter();
        }
    
        function resetCounter(counter) {
            counter.innerText = '0'; // Reset to 0 when the counter goes out of view
        }
    });
    
    //------------------------------------------------------- Contact us Web3froms-----------------------------------------------------------
    
const form = document.getElementById('form');
const result = document.getElementById('result');
const txt = document.querySelector('.cnt_txt');
const succ = document.querySelector('#succ');

console.log(succ);
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                form.style.display="none";
                txt.style.display="none";
                succ.style.display="block"
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});
