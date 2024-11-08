import Bag from '@/utils/Bag'
import Bar from '@/utils/Bar'
import Calender from '@/utils/Calender'
import Charts from '@/utils/Charts'
import Fiver from '@/utils/Fiver'
import Goals from '@/utils/Goals'
import Linkedin from '@/utils/Linkedin'
import Profile from '@/utils/Profile'
import Upwork from '@/utils/Upwork'

export const cardData = [
    {
        logo:<Bar />,
        title:"Market Trend Analysis"
    } , 
    {
        logo:<Profile />,
        title:"Customer Reasearch"
    },
    {
        logo:<Goals />,
        title:"Go-to-Market Strategy"
    },
    {
        logo:<Charts />,
        title:"Competitive Analysis"
    },
    {
        logo:<Bag />,
        title:"Business Development Strategy"
    },
]


export const resourcesData = [
    {
        src:"https://cdn.prod.website-files.com/64e8bbf4a8e46c39e0352f6e/653fbff5cabfba49d46f0767_Rectangle%20486.jpg",
        category:"Blog",
        date:"October 23,2023",
        title:"Startup Market Sizing: Founder's Guide to TAM...",
        tag:"Market Sizing and Forecasting"
    },
    {
        src:"https://cdn.prod.website-files.com/64e8bbf4a8e46c39e0352f6e/653fc0054241bde3df05b337_Rectangle%20485.jpg",
        category:"Blog",
        date:"October 2,2023",
        title:"7 Simple Steps to Ace Your Startup Market Research",
        tag:"Business Plan & Pitch Deck"
    },
    {
        src:"https://cdn.prod.website-files.com/64e8bbf4a8e46c39e0352f6e/653fc0136a4e51a055b9f34c_Rectangle%20487.jpg",
        category:"Blog",
        date:"September 27,2023",
        title:"Research and Planning for a New Business in 4 Steps",
        tag:"Business Plan & Pitch Deck"
    }
]

export const socialsData = [
    {
        icon:<Upwork />,
        social:"Upwork",
        link:"https://www.upwork.com/freelancers/~017d06051b7b9dffb0"
    },
    {
        icon:<Fiver />,
        social:"Fiver",
        link:"https://www.fiverr.com/dikovh"
    },
    {
        icon:<Linkedin />,
        social:"Linkedin",
        link:"https://www.linkedin.com/company/addifico-consulting/"
    },
    {
        icon:<Calender />,
        social:"Book a meeting",
        link:"#"
    }
]
