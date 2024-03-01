Department_array = [{
    id: '0',
    image: "location",
    name: 'Soil and Water Engineering',
    floor: [
        ["Hod office", "Conference Hall", "IDP"],
        ["Post Office", "Warden Office", "405"]
    ],
    detail: 'The Agriculture Department plays a pivotal role in nurturing the backbone of human civilization',
    faculty: 10,
    contact: {
        Dean: "+912942470837",
    }
},
{
    id: '1',
    image: "location",
    name: 'Mechanical Engineering',
    floor: [
        ["Hod office", "Conference Hall", "IDP", "CARPENTRY SHOP", "Smith Shop", "Welding shop", "Machine shop", "Foundary Shop", "Pattern Shop", "Drawing Lab", "Fluid Lab"],

    ],
    detail: 'To provide mechanical engineers of highest caliber who would engage in research, design and development to help building the nation towards self reliance in her technological need. To become a centre of excellence in education, research and technological service to the nation for its need in design and manufacturing independence.',
    faculty: 10,
    contact: {
        Dean: "+912942470837",
    }
}
];

const search_btn = document.getElementById("search-btn"); // mod
const inputField = document.querySelector('.search-input'); //mod
const image = document.getElementById("image");
const building = document.querySelectorAll("#building p");
const faculty = document.getElementById("faculty");
const Overview = document.getElementById("Overview");
const Floor_plan = document.getElementById("Floor-plan");
const Contact = document.getElementById("Contact");
const overview_tab = document.getElementById("overview-content");
const floor_tab = document.getElementById("floor-content");
const contact_tab = document.getElementById("contact-content");
const select_floor = document.getElementById("flr");
const f_detail = document.getElementById("f-detail");
const main_box = document.getElementById("box_1")

let department_floor = ["ground floor", "first floor", "second floor", "third floor", "fourth floor"] //mod

// pane hide/unhide
main_box.style.display = "none";

// event listener for serch button
search_btn.addEventListener("click", () => { searchBox() }); //mod


// search function
function searchBox() {
    let user_input = inputField.value;     //mod
    console.log(user_input);
}


// Main funtction
function detail_pane(id) {
    overview_tab.style.display = "none";
    floor_tab.style.display = "none";
    contact_tab.style.display = "none";
    let is_validate = true;
    for (let key in Department_array) {
        if (id == Department_array[key].id) {
            is_validate = true;
            break;
        }
    }
    if (is_validate) {
        main_box.style.display = "block";
        let department = Department_array[id];
        // 
        select_floor.innerHTML = "";
        function floor_count(n) {
            for (let i = 0; i < n; i++) {
                const new_options = document.createElement("option");
                new_options.text = department_floor[i];
                new_options.value = i;
                select_floor.appendChild(new_options);
            }
        }

        //add image
        image.style.backgroundImage = `url(assets/${id}.jpg)`;

        //event listeners for overview
        Overview.addEventListener("click", () => {

            overview_tab.style.display = "block";
            floor_tab.style.display = "none";
            contact_tab.style.display = "none";



            //others
            building[0].innerText = department.name;
            building[1].innerText = `No. of floors: ${department.floor.length}`;
            building[2].innerText = department.detail;
        })

        let thanos = 0;

        const addFloorData = () => {
            function departmentFloorData() {
                let str = '';
                for (let value of department.floor[thanos]) {
                    str += `<li>${value}</li>`
                }
                return str;
            }

            f_detail.innerHTML = `<div class="floor-details" data-floor="${id}">
            <h2>${department_floor[parseInt(thanos)]}</h2>
            <p>This is a description of the ${department_floor[parseInt(thanos)]}.</p>
            
            <ul>
                ${departmentFloorData()}
            </ul>
    
          </div>`
        }
        addFloorData();
        select_floor.addEventListener('change', (event) => {
            thanos = event.target.value;
            addFloorData();
        })
        floor_count(department.floor.length);
        // event listeners for floor_plan
        Floor_plan.addEventListener("click", () => {
            overview_tab.style.display = "none";
            floor_tab.style.display = "block";
            contact_tab.style.display = "none";

            // console.log(parseInt(thanos));
        })


        // overview tab
        Contact.addEventListener("click", () => {
            overview_tab.style.display = "none";
            floor_tab.style.display = "none";
            contact_tab.style.display = "block";
        })
    }
}


detail_pane('0');