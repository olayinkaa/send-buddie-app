/* eslint-disable react/no-unescaped-entities */
import TERMS_AND_CONDITIONS from "./data";

function TermsAndCondition() {
    return (
        <main>
            <div className="container mx-auto px-5 md:px-0">
                <h2 className="mt-16 text-3xl font-normal text-dark-heading dark:text-light-heading">
                    TERMS & CONDITIONS
                </h2>
                <div className="mt-5 px-5 py-10 dark:text-light-heading">
                    <ol className="list-decimal space-y-6">
                        {TERMS_AND_CONDITIONS.map((data) => {
                            return (
                                <li key={data.id}>
                                    <span className="text-xl font-medium uppercase">{data.title}</span>
                                    {data.items.map((item) => (
                                        <div key={item.number} className="flex gap-4 py-4 text-lg">
                                            <span>{item.number}</span>
                                            <span>{item.description}</span>
                                        </div>
                                    ))}
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </div>
        </main>
    );
}

export default TermsAndCondition;
