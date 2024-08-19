import React from 'react';

const TermsAndConditions = () => {
    return (
        <div className="mx-auto p-6 sm:p-8 lg:px-20 xl:px-32 bg-black text-white">
            <h1 className="text-2xl sm:text-4xl font-bold mb-6 text-center">Terms and Conditions</h1>
            <p className="text-gray-500 mb-6 text-center">Last Updated: August 2024</p>

            <p className="mb-6 text-sm sm:text-base">
                Welcome to Doxmastery.com. By accessing or using our website, you agree to be bound by these Terms and Conditions. Please read them carefully.
            </p>

            <section className="mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">1. Use of the Website</h2>
                <ul className="list-decimal list-inside space-y-4 text-sm sm:text-base">
                    <li>1.1. You must be at least 18 years old to use this website.</li>
                    <li>1.2. You agree to use Doxmastery.com only for lawful purposes and in accordance with these Terms and Conditions.</li>
                    <li>1.3. We reserve the right to suspend or terminate your access to the website if you violate any part of these Terms.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">2. Accounts and Registration</h2>
                <ul className="list-decimal list-inside space-y-4 text-sm sm:text-base">
                    <li>2.1. To access certain features of our website, you may be required to create an account.</li>
                    <li>2.2. You agree to provide accurate, current, and complete information during the registration process.</li>
                    <li>2.3. You are responsible for maintaining the confidentiality of your account and password.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">3. Educational Courses</h2>
                <ul className="list-decimal list-inside space-y-4 text-sm sm:text-base">
                    <li>3.1. All courses offered on Doxmastery.com are provided for informational and educational purposes.</li>
                    <li>3.2. We make no guarantees regarding the results or outcomes from using the courses offered on our website.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">4. Payment and Pricing</h2>
                <ul className="list-decimal list-inside space-y-4 text-sm sm:text-base">
                    <li>4.1. All prices for courses and other products are listed on the website and are subject to change without notice.</li>
                    <li>4.2. Payments must be made in full before accessing the purchased content.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">5. Intellectual Property</h2>
                <ul className="list-decimal list-inside space-y-4 text-sm sm:text-base">
                    <li>5.1. All content on Doxmastery.com, including text, graphics, logos, and software, is the property of AcctBazaar Ltd or its licensors.</li>
                    <li>5.2. You may not reproduce, distribute, or create derivative works from any content on this website without prior written permission.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
                <ul className="list-decimal list-inside space-y-4 text-sm sm:text-base">
                    <li>6.1. Doxmastery.com and AcctBazaar Ltd shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use of our website or services.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">7. Amendments</h2>
                <ul className="list-decimal list-inside space-y-4 text-sm sm:text-base">
                    <li>7.1. We reserve the right to modify or replace these Terms and Conditions at any time. Any changes will be posted on this page and will become effective immediately.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">8. Governing Law</h2>
                <ul className="list-decimal list-inside space-y-4 text-sm sm:text-base">
                    <li>8.1. These Terms and Conditions are governed by and construed in accordance with the laws of Nigeria.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">9. Contact Information</h2>
                <p className="text-sm sm:text-lg">For any questions regarding these Terms and Conditions, please contact us at <a href="mailto:contact@doxmastery.com" className="text-blue-600 underline">contact@doxmastery.com</a>.</p>
            </section>
        </div>
    );
}

export default TermsAndConditions;
