import React from 'react';

const RefundPolicy = () => {
    return (
        <div className="mx-auto p-6 sm:p-8 lg:px-20 xl:px-32 bg-black text-white">
            <h1 className="text-2xl sm:text-4xl font-bold mb-6 text-center">Refund Policy</h1>
            <p className="text-gray-500 mb-6 text-center">Last Updated: August 2024</p>

            <p className="mb-6 text-sm sm:text-base">
                We strive to provide the best educational content to our users. However, we understand that there may be situations where a refund is necessary.
            </p>

            <section className="mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">1. Refund Eligibility</h2>
                <ul className="list-decimal list-inside space-y-4 text-sm sm:text-base">
                    <li>1.1. Refunds are available for courses purchased on Doxmastery.com under the following conditions:
                        <ul className="list-disc list-inside ml-6 space-y-2">
                            <li>The refund request is made within 14 days of purchase.</li>
                            <li>The course has not been accessed or completed.</li>
                        </ul>
                    </li>
                    <li>1.2. Digital products, such as eBooks or downloadable materials, are non-refundable once accessed or downloaded.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">2. How to Request a Refund</h2>
                <ul className="list-decimal list-inside space-y-4 text-sm sm:text-base">
                    <li>2.1. To request a refund, please contact us at <a href="mailto:contact@doxmastery.com" className="text-blue-600 underline">contact@doxmastery.com</a> with your order details and reason for the refund request.</li>
                    <li>2.2. We will review your request and respond within 7 business days.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">3. Refund Process</h2>
                <ul className="list-decimal list-inside space-y-4 text-sm sm:text-base">
                    <li>3.1. Approved refunds will be processed through the original payment method within 14 business days.</li>
                    <li>3.2. We reserve the right to refuse a refund request if it does not meet the eligibility criteria.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">4. Contact Information</h2>
                <p className="text-sm sm:text-lg">For any questions or concerns regarding our Refund Policy, please contact us at <a href="mailto:contact@doxmastery.com" className="text-blue-600 underline">contact@doxmastery.com</a>.</p>
            </section>

            <section className="mt-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">Doxmastery.com Contact Information</h2>
                <p className="text-sm sm:text-lg mb-2">If you have any questions, concerns, or inquiries, please feel free to contact us:</p>
                <p className="text-sm sm:text-lg">Email: <a href="mailto:contact@doxmastery.com" className="text-blue-600 underline">contact@doxmastery.com</a></p>
                <p className="text-sm sm:text-lg">Telegram: @doxmastery</p>
            </section>
        </div>
    );
}

export default RefundPolicy;
