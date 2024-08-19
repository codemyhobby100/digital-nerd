import React from 'react';

const Privacy = () => {
    return (
        <div className="mx-auto p-6 sm:p-8 lg:px-20 xl:px-32 bg-black text-white">
            <h1 className="text-2xl sm:text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
            <p className="text-gray-500 mb-6 text-center">Last Updated: August 2024</p>

            <p className="mb-6 text-sm sm:text-base">
                Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you visit Doxmastery.com.
            </p>

            <section className="mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">1. Information We Collect</h2>
                <ul className="list-decimal list-inside space-y-4 text-sm sm:text-base">
                    <li>1.1. We may collect personal information such as your name, email address, and payment details when you register for an account or purchase a course.</li>
                    <li>1.2. We may also collect non-personal information such as your IP address and browsing habits.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
                <ul className="list-decimal list-inside space-y-4 text-sm sm:text-base">
                    <li>2.1. To provide and improve our services, process transactions, and communicate with you.</li>
                    <li>2.2. To personalize your experience and to send you promotional content if you have opted in to receive it.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">3. Sharing Your Information</h2>
                <ul className="list-decimal list-inside space-y-4 text-sm sm:text-base">
                    <li>3.1. We do not sell or rent your personal information to third parties.</li>
                    <li>3.2. We may share your information with third-party service providers who assist us in operating our website, conducting business, or serving you, as long as those parties agree to keep this information confidential.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">4. Cookies</h2>
                <ul className="list-decimal list-inside space-y-4 text-sm sm:text-base">
                    <li>4.1. We use cookies to enhance your experience on our website. You can choose to disable cookies through your browser settings, but this may limit your access to certain features of the website.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">5. Data Security</h2>
                <ul className="list-decimal list-inside space-y-4 text-sm sm:text-base">
                    <li>5.1. We take reasonable precautions to protect your personal information from unauthorized access, disclosure, alteration, or destruction.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">6. Your Rights</h2>
                <ul className="list-decimal list-inside space-y-4 text-sm sm:text-base">
                    <li>6.1. You have the right to access, correct, or delete your personal information. Please contact us at <a href="mailto:contact@doxmastery.com" className="text-blue-600 underline">contact@doxmastery.com</a> to make such requests.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">7. Changes to This Policy</h2>
                <ul className="list-decimal list-inside space-y-4 text-sm sm:text-base">
                    <li>7.1. We may update this Privacy Policy from time to time. Any changes will be posted on this page and will become effective immediately.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">8. Contact Information</h2>
                <p className="text-sm sm:text-lg">For any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:contact@doxmastery.com" className="text-blue-600 underline">contact@doxmastery.com</a>.</p>
            </section>
        </div>
    );
}

export default Privacy;
