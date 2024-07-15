import person1 from "../assets/images/2.png";
import spainFlag from "../assets/images/flag_1.png";
import flag2 from "../assets/images/flag_2.png";
import flag3 from "../assets/images/flag_3.png";
import flag4 from "../assets/images/flag_4.png";
import flag5 from "../assets/images/flag_5.png";
import flag6 from "../assets/images/flag_6.png";
import flag7 from "../assets/images/flag_7.png";

export const FAQ = [
    {
        id: 1,
        title: "How do I Send money Using Sendbuddie?",
        description: (
            <p>
                1. Create or Login on Sendbuddie Website
                <br />
                2. Create a wallet and fund the wallet
                <br />
                3. Start sending out money to beneficiary
            </p>
        ),
    },
    {
        id: 2,
        title: "How do I change the address and telephone number on my account?",
        description: (
            <p>
                The address on your SendBuddie account must be your full residential address. If you need to change your
                phone number or home address, you can update them on our website by visiting sendbuddie.com If you do
                not have access to the phone number on your records, please contact customer service team.
            </p>
        ),
    },
    {
        id: 3,
        title: "How do I retrieve lost password on my account?",
        description: (
            <p>
                If you cannot remember your account password for the website:
                <br />
                1. Go to Login on SendBuddie website. <br />
                2. Click on ‘Forgotten password?’
                <br />
                3. Enter your e-mail address and click ‘Send’
                <br />
                4. Check for an e-mail from us – this will include a link
                <br />
                5. The link will take you through the process of setting up a new password
            </p>
        ),
    },
    {
        id: 4,
        title: "What is a multi-currency account and how does it work?",
        description: (
            <p>
                You can hold, receive, send, and spend money using a SendBuddie multi-currency account. You can hold
                more than 4 currencies, and convert between them at the real exchange rate whenever you need. You can
                {/* eslint-disable-next-line */}
                send money from your account to a bank account whenever you like — we'll charge fixed fee when you do
                this, and a conversion fee when you send to a different currency.
            </p>
        ),
    },
    {
        id: 5,
        title: "How do I change the name on my account?",
        description: (
            <p>
                The name on your SendBuddie account must be your full legal name as it appears on your government-issued
                photo ID. If you have made a mistake when registering (e.g., your name is misspelt), please contact
                customer service team.
            </p>
        ),
    },
    {
        id: 6,
        title: "Can I hold multiple currencies in a SendBuddie account?",
        description: (
            <p>
                You can convert money between any of the currencies in your account — always with the real exchange
                rate. We’ll charge a low conversion fee to do this.
            </p>
        ),
    },
];

export const SUBSCRIBERS = [
    {
        id: 1,
        number: "10",
        title: "Payment options",
    },
    {
        id: 2,
        number: "10M+",
        title: "Completed transactions",
    },
    {
        id: 3,
        number: "700k+",
        title: "Trusted cusomers",
    },
    {
        id: 4,
        number: "50",
        title: "Global partners",
    },
];

export const TESTIMONIES = [
    {
        id: 1,
        image: person1,
        name: "Olayinka James",
        occupation: "Software Developer",
        description: ` Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
        consequat duis enim velit mollit. nim mollit non deserunt ullamco est sit aliqua dolor
        do amet sint.`,
    },
    {
        id: 2,
        image: person1,
        name: "Banjo Bolutito",
        occupation: "Financial Analyst",
        description: ` Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
        consequat duis enim velit mollit. nim mollit non deserunt ullamco est sit aliqua dolor
        do amet sint.`,
    },
    {
        id: 3,
        image: person1,
        name: "Itopa Segun",
        occupation: "Mechanical Engineer",
        description: ` Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
        consequat duis enim velit mollit. nim mollit non deserunt ullamco est sit aliqua dolor
        do amet sint.`,
    },
    {
        id: 4,
        image: person1,
        name: "Ilesanmi Muyiwa",
        occupation: "Senior Auditor",
        description: ` Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
        consequat duis enim velit mollit. nim mollit non deserunt ullamco est sit aliqua dolor
        do amet sint.`,
    },
];

export const FLAG = [
    {
        id: 1,
        country: spainFlag,
    },
    {
        id: 2,
        country: flag2,
    },
    {
        id: 3,
        country: flag3,
    },
    {
        id: 4,
        country: flag4,
    },
    {
        id: 5,
        country: flag5,
    },
    {
        id: 6,
        country: flag6,
    },
    {
        id: 7,
        country: flag7,
    },
];

export const TESTIMONIES_SWIPER_BREAKPOINTS = {
    200: {
        slidesPerView: 1,
        spaceBetween: 20,
    },
    640: {
        slidesPerView: 1,
        spaceBetween: 20,
    },
    768: {
        slidesPerView: 1,
        spaceBetween: 20,
    },
    1024: {
        slidesPerView: 2,
        spaceBetween: 20,
    },
};
