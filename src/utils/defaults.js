const defaults = {
    jumboLandingHeadline: "Purrfect Paws Pet Sitting",
    jumboLandingText: "If your pet could talk, what would they say? Don’t force them to wait all day long just to go to the bathroom when there is help available. \n\n Schedule your FREE meet and greet with your closest pet care professional today!",
    landingContent: [
        {
          image: "https://res.cloudinary.com/dbg1cm3ro/image/upload/v1666376402/cat-1_qjrwhv.webp",
          title: "Bonded",
          text: "Our team is made up of animal lovers, most of whom have pets at home, so when they come to take care of yours, we can guarantee they will treat your pets like they would their own—with love and understanding.",
        },
        {
            image: "https://res.cloudinary.com/dbg1cm3ro/image/upload/v1666376395/dogs-1_y8kh4s.webp",
            title: "Professional",
            text: "Many of our team members are trained in pet CPR, first aid, and the Heimlich maneuver. We can provide Sub-Q shots and administer topical and oral medications. ",

        },
        {
            image: "https://res.cloudinary.com/dbg1cm3ro/image/upload/v1666376384/dogs-2_sc2wqi.webp",
            title: "Insured",
            text: "Anyone can be convinced that bad things won’t happen to them. The truth is accidents can and do happen. You can trust in us to handle these situations with grace and care."
        },

    ],

    landingServices: [
        {
            title: "Pet Sitting",
            text: "We come to YOUR home to pet sit! Our pet sitting service includes options for short visits, dog walking, live-in, and overnight care. We pet sit for almost all animals big and small. We also handle farm animals in some areas. Unfortunately we do not pet sit for snakes. ",
            label: "Pet Sitting Rates",
            link: "/services#pet-sitting",
        },
        {
            title: "Doggy Daycare",
            text: "Want to have your dog become more socialized while you’re at work? Drop them off at our doggy daycare!",
            label: "Doggy Daycare Rates",
            link: "/services#boarding",

        },
        {
            title: "Pooper Scooper",
            text: "With this service, we come to your home and collect all the dog poop from your yard!",
            label: "Pooper Scooper Rates",
            link: "/services#pooper-scooper",

        },
        {
            title: "Boarding",
            text: "If you’re traveling away for a few nights and would prefer to board your pet, come check out our home facility! (Available in AZ only) ",
            label: "Boarding Rates",
            link:'/services#boarding'
        },
        {
            title: "Pet Transportation",
            text: "While Uber and Lyft drivers may not accept furry, scaly, or feathery passengers, we offer pet taxi services to help your family make trips to the groomers, vet, airport, and more! We can also do pick-up and drop-off when you board with us!",
            label: "Pet Taxi Rates",
            link: "/services#pet-transportation",

        },
        {
            title: "Grooming",
            text: "We can clip your pet’s toenails.",
            label: "Grooming Rates",
            link: "/services#grooming",

        }
    ],
    servicesContent: [
        {
            title:"Pet Sitting Visits & Dog Walking",
            id: "pet-sitting",
            text:[
                "We’ll send a pet care professional to your home to spend half an hour with your pet to take care of all of their needs including, but not limited to, going on a walk, feeding, litter-box scooping, and play! Your pet won’t get lonely with us while you spend a full day at work.",
                "Our pet sitting service includes options for short visits, dog walking, live-in, and overnight care.",
                "Zones are based on the distance between your home and the pet care professional that is coming to visit. Rates are for up to four (4) pets per visit and up to two (2) dogs per dog walk. Visiting pets are an additional $5 per pet per visit.",
            ],
            table: {
                heads:["Doggy Daycare & Boarding Rates", "Single Day"],
                content: [
                    ["One (1) Dog", "$50"],
                    ["Two (2) Dogs", "$60"],
                ],
                extra: "LIVE IN CARE- The pet care professional will come and go throughout the day, staying as long as possible, returning as often as possible, + stay overnight from 9 pm to 5 am the next day = $129/daily.  PARTIAL LIVE IN – (This is used on the last day of a live in service) This is the same as a live in but with no overnight. $95 day If you need service into the overnight hours of 9 pm – 5 am then it will be considered a live in. ",
            },
            button: {
                label:"Schedule A Pet Sit!",
                link:"/contact-us"
            },
            // image: "https://res.cloudinary.com/dbg1cm3ro/image/upload/v1666552121/gr-cat_euwsz0.webp",

        },
        {
            title:"Pooper Scooper",
            id: "pooper-scooper",
            text:[
                "A pet care professional will come to your property to remove all of the dog poop from your back and side yard! We offer both a prepaid recurring weekly service as well as one-off single visits. ",
                "Rates are for up to two (2) dogs per visit. Additional dogs are an additional $5 per dog per visit. There is an additional $14 fee per visit for scooping the front yard.",
            ],
            table: {
                heads:["Weekly", "Single Visit"],
                content: [
                    ["$29 per week (prepaid monthly)", "$49 per visit"],
                ],
                extra: "Front yard is an additional $14",
            },
            button: {
                label:"Let’s Clean Your Yard!",
                link:"/contact-us"
            },
        },
        {
            title:"Doggy Boarding",
            id: "boarding",
            text:[
                "Your furry kid(s) can go on a vacation when you do even if they can’t go with you! We provide ’round the clock care with 24-hour supervision. Dog boarding is only available at our Phoenix and Chandler locations in Arizona; we do not use cages.",
                "The first day is charged at full price regardless of drop-off time. Each day is calculated as 24 hours starting at midnight. The full-day is reserved for your pet(s) because we do not intermix pets from other families.",
            ],
            table: {
                heads:["Doggy Daycare & Boarding Rates", "Single Day"],
                content: [
                    ["One (1) Dog", "$50"],
                    ["Two (2) Dogs", "$60"],
                ],
                extra: "Clients boarding their pets at a pet care professional’s home must provide their own food, otherwise, we charge an additional $5.00 per day per pet as a Food Charge. Pickup anytime after midnight counts as another day.\n CATS $45/daily per cat at our Phoenix location only.",
            },
            button: {
                label:"Plan Their Next Vacation",
                link:"/contact-us"
            },
        },
        {
            title:"Pet Grooming",
            id: "grooming",
            text:[
                "Contact us today and we’ll send a pet care professional to help clip your pet’s toenails!",
            ],
            button: {
                label:"Schedule Grooming Appointment",
                link:"/contact-us"
            },
        },
        {
            title:"Pet Taxi Transportation",
            id: "pet-transportation",
            text:[
                "Does your pet need to go to the vet’s office for their annual checkup and you don’t drive? Call us!",
                "While Uber and Lyft drivers may not accept furry, scaly, or feathery passengers, we offer pet taxi services to help your family make trips to the groomers, vet, airport, and more! We can also do pick-up and drop-off when you board with us!",
                "To the vet $80 round trip but only if handled the same day.",
            ],
            button: {
                label:"Request a Pet Taxi",
                link:"/contact-us"
            },
        },
        {
            title:"Additional Information and Fees",
            text:[
                "Times on visits are never guaranteed. We try to get as close to your requested time as possible, but due to traffic, weather conditions, other pet sitting requests, etc., times are never exact.",
                "Holidays we recognize: New Year’s Day, Martin Luther King Jr. Day, Easter, Mother’s Day, Memorial Day, Father’s Day, Independence Day, Labor Day, Indigenous Peoples Day, Halloween, Veteran’s Day, Thanksgiving Day, Christmas Eve, Christmas Day, and New Year’s Eve.",
            ],
            table: {
                heads:["Holiday", "	Payment in full is charged (no refunds)"],
                content: [
                    ["0-48 Hours", "Payment in full is charged (no refunds)"],
                    ["3-7 Days", "20% of Service total is due (80% refund) – Pay Pal fees"],
                    ["8+ Days", "No charge for service, refund in full – Pay Pal fees"]
                ],
                extra: "Clients boarding their pets at a pet care professional’s home must provide their own food, otherwise, we charge an additional $5.00 per day per pet as a Food Charge. Pickup anytime after midnight counts as another day.\n CATS $45/daily per cat at our Phoenix location only.",
            },
            bullets: [
                {
                    bold: false,
                    above: [],
                    text: [
                        "Key pickup and drop off is $10.00 per trip when not handled at a meet and greet.",
                        "Cash pickup is $10.00 per trip.",
                        "$10 fee per visit for visits taking place between 10pm and 7am (the overnight live-in care option is an exemption).",
                        "$10 fee per visit for “last-minute visits”. A last-minute visit is defined as any visit/stay that is booked same day or 5 pm or after the day before.",
                        "$5 fee per visit if it takes place on any recognized holidays for mid day weekly dog walking/potty break clients, except on Christmas Day (which is always double).",
                        "50% additional for any service if it takes place on any recognized holidays, except on Christmas Day (which is always double).",
                        "Christmas Day is double the regular rate for all services.",                        
                    ]
                },
                {
                    bold: true,
                    above: ["We run errands for people!", "Errand service includes but is not limited to: "],
                    text: [
                        "Home organization (laundry, dishes, smoke alarm battery check, etc.)",
                        "General Errand Services including grocery shopping, dry cleaning pick/delivery and the like",
                        "Personal Shopping",
                        "Home Management Services",
                        "Restaurant Recommendations and Reservations",
                        "Senior help",
                        "Travel planning",
                        "Internet research",
                        "Light Cleaning Services ",
                        "Courier/delivery service",
                        "Flower & balloon and other gift delivery",
                        "Meal delivery (Let us pick up a meal from your favorite place)",
                        "Merchandise returns",
                        "Mystery shopping",
                        "We can wait for the utility person to Repair or connect service (cable, phone, Internet, gas, electric, etc.)",
                        "New mommy services",
                        "Meeting/Event Assistance with set up/clean up",
                    ]
                },
                {
                    bold: false,
                    above: ["Vacation & Occasional pet sitting clients will pay 50% additional for all holidays except Christmas Day which is double."],
                    text: [
                        "Holidays charged: New Year’s Day, Martin Luther King Day, Easter, Mother’s Day, Father’s Day, Independence Day, Labor Day, Columbus Day, Veteran’s Day, Thanksgiving Day, Christmas Eve, Christmas Day (double), and New Year’s Eve."
                    ],
                },
                {
                    bold: true,
                    above: [],
                    text: [
                        "PAYMENT MUST BE RECEIVED ONE WEEK BEFORE THE 1ST VISIT ON ALL VACATION PET SITTING REQUESTS WITH THE EXCEPTION OF LIVE IN WHICH IS DUE 15 DAYS BEFORE THE 1ST DAY OF THE STAY. IF PAYMENT IS NOT RECEIVED IN TIME, THE RESERVATION WILL BE CANCELED.",
                        "Cancellation Policy:  Purrfect Paws Pet Sitting reserves the right to deny service or terminate service if job differs from original consult or if job poses safety concerns, financial concerns, or inappropriate or uncomfortable situations.  Refunds & Cancellations Vacation or Occasional pet sitting requests."
                    ],
                },
                {
                    above:["(% applies to entire service period total):"],

                }
            ],
        },
        {
            bullets: [
                {
                    above: [
                        "Live in or partial live-in cancellations-", 
                        "0-14 days before the 1st day of the stay or on any holidays no refunds",
                        "15+ days full refund – Pay Pal fees",
                        "WEEKLY DOG WALKING CLIENTS MUST PROVIDE 48 HRS NOTICE BEFORE THE 1ST REQUESTED VISIT IN THE WEEK TO CANCEL ANY VISITS IN THAT WEEK. IF A REFUND IS NOT POSSIBLE ADDITIONAL MINUTES WILL BE ADDED TO FUTURE PAID VISITS.",
                    ]
                }
            ]
        }
    ],

    locations: [
        {
            state: "Arizona",
            contact: {
                phone: "(480) 366-4472",
                phoneRaw:"4803664472",
            },
            text: ["We serve the entire East Valley. Our doggy daycare and boarding facilities are in Chandler.",],
        },
        {
            state: "Pennsylvania",
            contact: {
                phone: "(412) 400-4531",
                phoneRaw: "4124004513"
            },
            text: ["We serve Pittsburgh and its surrounding areas including, but not limited to: ", "Cranberry Twp., Mars, Avalon, Beechview, Bellevue, Ben Avon Heights, Bloomfield, Brighton Heights, Butler, Carnegie, Carrick, Cheswick, Downtown Pittsburgh, Fox Chapel, Glenshaw, Highland Park, Lawrenceville, McCandless, McKees Rocks, Mt. Washington, North Hills, North Side, Penn Hills, Perry Hwy., Perrysville, Pine Twp., Point Breeze, Oakland, Observatory Hill, Regent Square, Shadyside, Shaler, South Hills, South Park, South Side, Spring Hill, Squirrel Hill, Troy Hill, Wexford, and Seven Fields."]
        }
    ]
}

export default defaults;