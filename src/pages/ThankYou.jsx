export default function ThankYou() {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
            <div className="text-center space-y-6">
                <h1 className="font-serif text-4xl text-emerald-400">
                    Thank You!
                </h1>
                <p className="text-gray-300">
                    Your message has been sent successfully.
                    We will get back to you very soon.
                </p>
                <a href="/" className="mt-4 inline-block bg-emerald-500 text-black px-6 py-3 rounded-xl">
                    Back to Home
                </a>
            </div>
        </div>
    );
}
