import PlayStoreSvg from "@/assets/images/PlayStoreSvg";
import AppleStoreSvg from "../assets/images/AppleStoreSvg";
import productIntro from "../assets/images/product-intro.jpg";
import paymentIcon from "../assets/images/payment-icon.svg";
import iphones from "../assets/images/iphones.svg";
import { FAQ, SUBSCRIBERS, TESTIMONIES, TESTIMONIES_SWIPER_BREAKPOINTS, FLAG } from "../data/home-page-data";
import { SendBuddieAccordion, CustomSwiper, SwiperSlide } from "../components/@ui-kits";
// import IphoneSvg from './../assets/images/IphoneSvg';

function Home() {
    return (
        <main className="">
            <section id="banner" className="">
                <div className="container mx-auto flex-col gap-6 px-10 py-8 md:flex lg:px-0 lg:flex-row">
                    <div className="flex w-full flex-col justify-center lg:w-3/5">
                        <h1 className="text-5xl tracking-wider dark:text-white md:text-left">
                            Creating a world of endless possibilities through web and mobile transfer.
                        </h1>
                        <p className="mt-6 text-2xl font-medium dark:text-white">
                            The cheapest and fastest way for individuals and businesses to Send Money.
                        </p>
                        <div className="mt-4 flex justify-between md:justify-start md:gap-3">
                            <button type="button" className="darK:text-white">
                                <PlayStoreSvg />
                            </button>{" "}
                            <button type="button">
                                <AppleStoreSvg />
                            </button>
                            <button type="button" className="btn-primary px-4 md:px-10">
                                Get Started
                            </button>
                        </div>
                    </div>
                    <div className="h-full w-full lg:w-2/5">
                        <div className="mt-12 lg:mt-5 flex flex-col gap-y-8 rounded-md border-2 border-gray-200 dark:border-zinc-700 p-5 shadow-lg">
                            <div className="flex flex-col">
                                <label htmlFor="" className="mb-1 flex text-lg dark:text-white">
                                    From
                                </label>
                                <select name="country" id="country" className="border-0 border-b-2 focus:ring-0 dark:bg-transparent dark:text-white dark:focus:bg-dark-brand">
                                    <option value="">Select country</option>
                                    <option value="ng">Nigeria</option>
                                    <option value="cm">Cameroon</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="" className="mb-1 flex text-lg dark:text-white">
                                    From
                                </label>
                                <select name="country" id="country" className="border-0 border-b-2 focus:ring-0  dark:bg-transparent dark:text-white dark:focus:bg-dark-brand">
                                    <option value="">Select country</option>
                                    <option value="ng">Nigeria</option>
                                    <option value="cm">Cameroon</option>
                                </select>
                            </div>
                            <div className="mb-5 flex flex-col">
                                <label htmlFor="" className="flex text-lg dark:text-white">
                                    Amount
                                </label>
                                <input type="text" className="border-0 border-b-2 outline-none focus:ring-0  dark:bg-transparent dark:text-white dark:focus:bg-dark-brand" />
                                <div className="flex justify-between pt-3 dark:text-white">
                                    <span>$450 Exchange rate</span>
                                    <span>$4.50 Transaction Fees</span>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="" className="mb-1 flex text-lg dark:text-white">
                                    Transfer service
                                </label>
                                <select name="country" id="country" className="border-0 border-b-2 focus:ring-0">
                                    <option value="">Select country</option>
                                    <option value="ng">Nigeria</option>
                                    <option value="cm">Cameroon</option>
                                    <option value="gh">Ghana</option>
                                </select>
                            </div>
                            <div className="mb-5 flex flex-col">
                                <label htmlFor="" className="flex text-lg dark:text-white">
                                    Converted to
                                </label>
                                <input type="text" className="border-0 border-b-2 outline-none focus:ring-0" />
                                <span className="self-center p-2">$1,200 saved vs banks</span>
                            </div>
                            <div>
                                <button type="submit" className="btn-primary w-full">
                                    Get started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="subscribers" className="p-24">
                <div className="container mx-auto grid grid-cols-2 gap-16 md:grid-cols-4 dark:text-white ">
                    {SUBSCRIBERS.map((item) => (
                        <div key={item.id} className="flex flex-col items-center">
                            <span className="text-4xl font-bold">{item.number}</span>
                            <span className="text-center text-lg">{item.title}</span>
                        </div>
                    ))}
                </div>
            </section>
            <section className="bg-[#F7FAFC] pt-10">
                <div className="container mx-auto flex flex-col items-center gap-y-20 border-b-2 border-b-light-blue-brand">
                    <div className="flex w-1/2 flex-col items-center gap-5">
                        <h2 className="text-center text-4xl font-medium">
                            A service with unmatched transactional speed
                        </h2>
                        <p className="text-justify text-2xl">
                            SendBuddie is a fast and secure service that lets you transfer money online within minutes
                            while using a computer, smartphone, or our app.
                        </p>
                        <button type="button" className="text-2xl text-blue-brand">
                            Get started now
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <img src={productIntro} alt="sendbuddies" className="w-[50%]" />
                    </div>
                </div>
            </section>
            <section>
                <div className="container mx-auto py-10 px-10 lg:px-0">
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                        <div className="flex flex-col items-center space-y-6">
                            <img src={paymentIcon} alt="payment" className="h-32 w-32" />
                            <h2 className="text-3xl font-medium">Payment</h2>
                            <p className="text-justify text-lg">
                                Send money at the real exchange rate with no hidden fees. You can use money in your
                                multi-currency account to send to any of the countries on SendBuddie.
                            </p>
                        </div>{" "}
                        <div className="flex flex-col items-center space-y-6">
                            <img src={paymentIcon} alt="Exchange" className="h-32 w-32" />
                            <h2 className="text-3xl font-medium">Exchanges</h2>
                            <p className="text-justify text-lg">
                                Receive payments from around the globe, and convert them to 36 currencies. Real exchange
                                rates and the low fees are guaranteed.
                            </p>
                        </div>{" "}
                        <div className="flex flex-col items-center space-y-6">
                            <img src={paymentIcon} alt="multi currency" className="h-32 w-32" />
                            <h2 className="text-3xl font-medium">Multi Currency </h2>
                            <p className="text-justify text-lg">
                                Convert and hold 36 currencies. Zero fee for holding multiple currencies, and we use the
                                real exchange rate to convert.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container mx-auto py-14 px-10 lg:px-0">
                    <div className="flex flex-col justify-between gap-10 lg:flex-row">
                        <div className="flex flex-col items-center justify-center bg-light-blue-brand">
                            <img src={iphones} alt="iphones" className="h-full w-full" />
                            {/* <IphoneSvg/> */}
                        </div>
                        <div className="flex w-full flex-col space-y-8 lg:w-1/2">
                            <h4 className="text-base text-blue-brand">FAST TRANSFERS IN SECONDS</h4>
                            <h1 className="text-2xl font-bold">
                                A Fast and secure way to send money on the go 24/7 round the clock.
                            </h1>
                            <p className="text-lg">
                                Make use of our app for free to send money online in minutes to over 36 countries. You
                                can track your payments and view your transfer history from anywhere.
                            </p>
                            <button type="button" className="btn-primary self-start px-10">
                                Get started
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* swiper goes here */}
            <section>
                <div className="container mx-auto px-10 lg:px-0">
                    <div>
                        <h3 className="text-5xl">With over 32+ currencies</h3>
                        <div className="px-3 md:px-0">
                            <CustomSwiper>
                                {FLAG.map((item) => {
                                    return (
                                        <SwiperSlide key={item.id}>
                                            <div className="my-10 flex justify-center rounded-2xl border-2 p-10">
                                                <img src={item.country} alt="" className="" />
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </CustomSwiper>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container mx-auto py-10">
                    <div className="flex flex-col justify-between px-5 lg:flex-row lg:px-0">
                        <div className="flex w-full flex-col items-center gap-2 lg:w-1/2 lg:justify-start">
                            <h1 className="mb-4 text-4xl font-medium">FAQs</h1>
                            <p className="text-center text-2xl lg:text-left">
                                Here are the Frequently asked questions and answers.{" "}
                            </p>
                        </div>
                        <div className="mt-3 w-full lg:mt-0 lg:w-1/2">
                            <SendBuddieAccordion data={FAQ} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-10">
                <div className="container mx-auto bg-blue-700">
                    <div className="flex flex-col space-y-10 py-10">
                        <div className="flex flex-col items-center space-y-6">
                            <h2 className="text-3xl tracking-wider text-white">Get in touch with us</h2>
                            <p className="text-lg text-slate-50">
                                You can easily reach us for questions or suggestions
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <form className="space-y-5">
                                <div className="flex justify-between gap-6">
                                    <div className="flex w-1/2 flex-col ">
                                        <label htmlFor="" className="text-white">
                                            First name
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            className="rounded-xl border-0 bg-input-wrapper p-3 text-white outline-none focus:ring-0"
                                        />
                                    </div>{" "}
                                    <div className="flex w-1/2 flex-col ">
                                        <label htmlFor="" className="text-white">
                                            Last name
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            className="rounded-xl border-0 bg-input-wrapper p-3 text-white outline-none focus:ring-0"
                                        />
                                    </div>{" "}
                                </div>
                                <div className="flex flex-col ">
                                    <label htmlFor="" className="text-white">
                                        Company website
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        className="rounded-xl border-0 bg-input-wrapper p-3 text-white outline-none focus:ring-0"
                                    />
                                </div>{" "}
                                <div className="flex flex-col ">
                                    <label htmlFor="" className="text-white">
                                        Email address
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        className="rounded-xl border-0 bg-input-wrapper p-3 text-white outline-none focus:ring-0"
                                    />
                                </div>{" "}
                                <div className="flex flex-col ">
                                    <label htmlFor="" className="text-white">
                                        Phone number
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        className="rounded-xl border-0 bg-input-wrapper p-3 text-white outline-none focus:ring-0"
                                    />
                                </div>
                                <div className="flex flex-col ">
                                    <label htmlFor="" className="text-white">
                                        Phone number
                                    </label>
                                    <textarea
                                        type="text"
                                        name="firstName"
                                        rows={3}
                                        className="rounded-xl border-0 bg-input-wrapper p-3 text-white outline-none focus:ring-0"
                                    />
                                </div>
                                <div>
                                    <button type="button" className="btn-white w-full">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pb-10 px-10 lg:px-10">
                <div className="container mx-auto rounded-b-2xl bg-light-blue-brand pb-24">
                    <div className="flex flex-col items-center gap-10 py-10">
                        <div className="flex flex-col items-center space-y-6">
                            <h2 className="text-4xl">What people have been saying</h2>
                            <p className="text-2xl">
                                We&#39;ve got series of testimonies from our users. Few of theme are outlined below.{" "}
                            </p>
                        </div>
                    </div>
                    {/* testimonies card start */}
                    <div>
                        <CustomSwiper breakpoints={{ ...TESTIMONIES_SWIPER_BREAKPOINTS }}>
                            {TESTIMONIES.map((person) => {
                                return (
                                    <SwiperSlide key={person.id}>
                                        <div className="flex flex-col items-center">
                                            <div className="flex w-4/5 flex-col gap-8 rounded-md border-2 border-slate-100 bg-white p-10">
                                                <div className="flex gap-4">
                                                    <img src={person.image} alt="" className="h-14 w-14" />
                                                    <div className="flex flex-col">
                                                        <span className="text-xl font-medium">{person.name}</span>
                                                        <span className="text-lg">{person.occupation}</span>
                                                    </div>
                                                </div>
                                                <p className="text-xl">{person.description}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </CustomSwiper>
                        {/* testimonies card start */}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
