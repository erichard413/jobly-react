const mockCompanies = [
    {
        "handle": "anderson-arias-morrow",
        "name": "Anderson, Arias and Morrow",
        "description": "Somebody program how I. Face give away discussion view act inside. Your official relationship administration here.",
        "numEmployees": 245,
        "logoUrl": "/logos/logo3.png",
        "jobs" : [
            {"title": "Convervator, furniture",
                    "salary" : 110000,
                    "equity" : 0,
                },
            {"title": "Information Officer",
                    "salary" : 85000,
                    "equity" : .06,
                },
            {"title": "Consulting Civil Engineer",
                    "salary" : 115000,
                    "equity" : .07,
                }
            ]
    },
    {
        "handle": "arnold-berger-townsend",
        "name": "Arnold, Berger and Townsend",
        "description": "Kind crime at perhaps beat. Enjoy deal purpose serve begin or thought. Congress everything miss tend.",
        "numEmployees": 795,
        "logoUrl": null
    },
    {
        "handle": "ayala-buchanan",
        "name": "Ayala-Buchanan",
        "description": "Make radio physical southern. His white on attention kitchen market upon. Represent west open seven. Particularly subject billion much score thank bag somebody.",
        "numEmployees": 309,
        "logoUrl": null
    },
    {
        "handle": "baker-santos",
        "name": "Baker-Santos",
        "description": "Compare certain use. Writer time lay word garden. Resource task interesting voice.",
        "numEmployees": 225,
        "logoUrl": "/logos/logo3.png"
    },
    {
        "handle": "bauer-gallagher",
        "name": "Bauer-Gallagher",
        "description": "Difficult ready trip question produce produce someone.",
        "numEmployees": 862,
        "logoUrl": null
    }
]

const mockJobs = [
    {
        "id": 200,
        "title": "Accommodation manager",
        "salary": 126000,
        "equity": null,
        "companyHandle": "mejia-scott-ryan",
        "companyName": "Mejia, Scott and Ryan"
    },
    {
        "id": 36,
        "title": "Accountant, chartered certified",
        "salary": 175000,
        "equity": "0",
        "companyHandle": "stone-stewart",
        "companyName": "Stone-Stewart"
    },
    {
        "id": 161,
        "title": "Accountant, chartered certified",
        "salary": 86000,
        "equity": "0.070",
        "companyHandle": "boyd-evans",
        "companyName": "Boyd-Evans"
    },
    {
        "id": 86,
        "title": "Advertising account executive",
        "salary": 130000,
        "equity": "0.064",
        "companyHandle": "thomas-sons",
        "companyName": "Thomas and Sons"
    },
    {
        "id": 50,
        "title": "Advertising account executive",
        "salary": null,
        "equity": "0",
        "companyHandle": "thomas-sons",
        "companyName": "Thomas and Sons"
    }
]

const mockUsers = 
    {user: {
        username: 'testuser',
        first_name: "Test",
        last_name: "User",
        email: "joel@joelburton.com",
        is_admin: false
    },
    admin: {
        username: 'testadmin',
        first_name: "Test",
        last_name: "Admin!",
        email: "joel@joelburton.com",
        is_admin: true
    }
}


export {mockJobs, mockCompanies, mockUsers}