import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container max-w-4xl px-4 py-12 mx-auto">
        <div className="p-8 rounded-lg shadow-lg bg-light-silver">
          <h1 className="mb-8 text-3xl font-bold text-center text-primary">
            Privacy Policy
          </h1>

          <div className="space-y-6 text-primary">
            <p className="text-lg">
              At <strong>STC Falcon Legal Services</strong>, we are committed to
              protecting your privacy and ensuring the security of your personal
              information.
            </p>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-accent">
                Information We Collect
              </h2>
              <p className="mb-3">
                We may collect the following details when you interact with our
                website:
              </p>
              <ul className="ml-4 space-y-1 list-disc list-inside">
                <li>Your name</li>
                <li>Contact information (such as email address)</li>
                <li>Information related to surveys or offers</li>
              </ul>
              <p className="mt-3">
                This data helps us better understand your needs and improve the
                services we offer.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-accent">
                How We Use Your Information
              </h2>
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="ml-4 space-y-1 list-disc list-inside">
                <li>Keep accurate internal records</li>
                <li>Improve and personalize our services</li>
                <li>
                  Send promotional emails about new products, special offers, or
                  updates (if you've opted in)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-accent">
                Security
              </h2>
              <p>
                Your data is protected using appropriate technical and
                organizational security measures to prevent unauthorized access
                or misuse.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-accent">
                Cookies
              </h2>
              <p className="mb-3">
                Our website uses cookies to enhance your browsing experience and
                analyze site traffic. Cookies help us understand how visitors
                use our site so we can make improvements.
              </p>
              <p>
                You can choose to disable cookies through your browser settings,
                but doing so may affect some website features.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-accent">
                Links to Other Websites
              </h2>
              <p>
                We may include links to third-party websites for your
                convenience. However, we are not responsible for the content or
                privacy practices of those sites. Please review their privacy
                policies before sharing any personal information.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-accent">
                Your Rights
              </h2>
              <p className="mb-3">
                We will never sell, distribute, or share your personal
                information with third parties without your consent—unless
                required by law.
              </p>
              <p className="mb-3">
                If you no longer wish to receive marketing communications or
                want to update your information, please contact us at:
              </p>
              <p className="font-semibold">
                📧{" "}
                <a
                  href="mailto:stcfalcon.ls@gmail.com"
                  className="transition-colors duration-300 text-accent hover:text-accent-hover"
                >
                  stcfalcon.ls@gmail.com
                </a>
              </p>
              <p className="mt-3">
                If you believe any of your information is incorrect, let us know
                and we shall correct it promptly.
              </p>
            </section>

            <div className="pt-6 mt-8 border-t border-gray-300">
              <p className="text-sm text-center text-gray-600">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
