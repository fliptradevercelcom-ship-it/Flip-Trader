export const Card1 = () => {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary">
        At <strong> FlipTrade Group </strong> , your privacy is our top
        priority. We are committed to safeguarding the confidentiality of your
        personal information and ensuring that your data is handled responsibly.
        This Privacy Policy explains how{" "}
        <strong>FlipTrade Group Limited</strong> (“the Company”, “FlipTrade”,
        “we”, “us”, or “our”) collects, uses, and protects your information when
        you use our trading services, website (www.fliptradegroup.com), mobile
        applications, or any related online platforms.
      </p>
      <br />
      <p className="text-base 2xl:text-xl text-white font_ternary">
        We regularly review and update this Privacy Policy to ensure compliance
        with applicable laws, emerging technologies, and evolving business
        practices. Any personal information we hold will be managed according to
        the most recent version of this Privacy Policy.
      </p>
      <br />
      <p className="text-base 2xl:text-xl text-white font_ternary">
        If you are an employee, contractor, job applicant, or service provider
        of the Company, your personal information will be used in accordance
        with your respective contractual or employment agreement.
      </p>
    </div>
  );
};

export const Card2 = () => {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary pb-4">
        This Privacy Policy applies to the data processing activities of{" "}
        <strong> FlipTrade Group Limited </strong>, covering clients, potential
        clients, website visitors, and employees. It does not apply to external
        websites or third parties that are not operated by us.
      </p>
      <span className="text-base 2xl:text-xl text-white font_ternary">
        FlipTrade Group Limited is registered and regulated under applicable
        financial and data protection laws, with its registered office located
        at:
      </span>
      <p className="pt-2 text-base 2xl:text-xl text-white ">
        Ground Floor, The Sotheby
      </p>
      <p className="pt-2 text-base 2xl:text-xl text-white ">
        Building, Rodney Village, Rodney
      </p>
      <p className="pt-2 text-base 2xl:text-xl text-white ">Bay, Saint Lucia</p>
      <p className="text-base 2xl:text-xl text-white font_ternary pt-4">
        FlipTrade Group may operate under several subsidiaries or associated
        entities, each maintaining its own privacy policies. If you engage with
        another FlipTrade entity, please refer to the corresponding privacy
        statement available on its website.
      </p>
      <p className="text-base 2xl:text-xl text-white font_ternary pt-4">
        We are committed to protecting the privacy of everyone who interacts
        with us. All client data is stored and managed in accordance with
        relevant data protection regulations. We maintain strict technical and
        organizational security measures to safeguard your data from
        unauthorized access, misuse, or loss.
      </p>
    </div>
  );
};

export const Card3 = () => {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary pb-4">
        To provide our trading products and services, we collect personal and
        financial information necessary to identify you, verify your account,
        and comply with regulatory requirements.
      </p>
      <p className="text-[17px] md:text-xl 2xl:text-[25px]">
        The information we collect may include:
      </p>
      <div className="ps-6">
        {[
          "Full name, residential address, and contact details (email, phone number, etc.)",
          "Identity verification details (passport, national ID, driver’s license, tax number, etc.)",
          "Financial information such as source of funds, assets, bank details, and trading statements",
          "Employment and professional information",
          "Details related to trading activity, preferences, and transaction history",
          "Device and browser information, including IP address, for security and analytics"
        ].map((data, index) =>
          <li
            className="text-base 2xl:text-lg text-white list-none pt-2"
            key={index}
          >
            {data}
          </li>
        )}
      </div>
      <p className="text-base 2xl:text-xl text-white font_ternary pt-4">
        We collect this information through account registration, online forms,
        support communications, surveys, or when you interact with our
        platforms. Some information may also be obtained from publicly available
        sources or authorized third parties.
      </p>
    </div>
  );
};

export const Card4 = () => {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary pb-4">
        We process your personal data for the following purposes:
      </p>
      <div className="ps-6">
        {[
          "To verify your identity and approve your trading account",
          "To manage and maintain your relationship with FlipTrade",
          "To process your transactions and provide ongoing support",
          "To meet legal, regulatory, and anti-money laundering obligations",
          "To improve our services and develop new trading products",
          "To contact you with updates, offers, or educational content (where consent is given)",
          "To monitor and enhance security, detect fraud, and ensure compliance"
        ].map((data, index) =>
          <li
            className="text-base 2xl:text-lg text-white list-none pt-2"
            key={index}
          >
            {data}
          </li>
        )}
      </div>
      <p className="text-base 2xl:text-xl text-white font_ternary pt-4">
        All personal data is processed lawfully, fairly, and transparently, in
        accordance with applicable privacy regulations
      </p>
    </div>
  );
};

export const Card5 = () => {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary pb-4">
        We may share your personal information with:
      </p>
      <div className="ps-6">
        {[
          "Regulatory and governmental authorities as required by law",
          "Third-party service providers who assist us in business operations (such as payment processors, IT support, or verification agencies)",
          "Other FlipTrade Group entities, where necessary for operational purposes",
          "Legal representatives or auditors where required for compliance"
        ].map((data, index) =>
          <li
            className="text-base 2xl:text-lg text-white list-none pt-2"
            key={index}
          >
            {data}
          </li>
        )}
      </div>
      <p className="text-base 2xl:text-xl text-white font_ternary pt-4">
        All third parties are required to maintain strict confidentiality and
        use your data only for the purposes specified by FlipTrade Group.
      </p>
    </div>
  );
};

export const Card6 = () => {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary pb-4">
        We process your personal data on one or more of the following legal
        bases:
      </p>
      <div className="ps-6">
        {[
          "Contractual necessity – to perform our obligations under your client agreement",
          "Legal compliance – to meet financial and regulatory requirements",
          "Legitimate interests – to operate our business effectively, improve services, and prevent fraud",
          "Consent – when you have explicitly agreed to certain uses of your data (e.g., marketing communications)"
        ].map((data, index) =>
          <li
            className="text-base 2xl:text-lg text-white list-none pt-2"
            key={index}
          >
            {data}
          </li>
        )}
      </div>
      <p className="text-base 2xl:text-xl text-white font_ternary pt-4">
        You may withdraw consent at any time by contacting us or using the
        unsubscribe option in our communications.
      </p>
    </div>
  );
};

export const Card7 = () => {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary pb-4">
        Our website uses cookies to enhance your experience, analyze traffic,
        and provide personalized content. Cookies are small files stored on your
        device that help us recognize your preferences and improve website
        performance.
      </p>
      <p className="text-base 2xl:text-xl text-white font_ternary pt-4">
        You can manage or disable cookies in your browser settings, but doing so
        may affect certain features of our site. We also use cookies for
        remarketing purposes (e.g., Google Ads, AdRoll) to show relevant
        advertisements based on your previous interactions with our site. You
        can opt out of these at any time via Google Ads Settings or the AdRoll
        opt-out page.
      </p>
    </div>
  );
};

export const Card8 = () => {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary pb-4">
        We use advanced security protocols, including SSL encryption and
        multi-layered access control, to protect all personal and financial
        data. Only authorized employees and service providers have access to
        client data, and they are bound by strict confidentiality agreements.
      </p>
      <p className="text-base 2xl:text-xl text-white font_ternary pt-4">
        While we take every precaution to safeguard your information, please
        ensure your login credentials remain private and are not shared with
        anyone.
      </p>
    </div>
  );
};

export const Card9 = () => {
  return (
    <div className="pt-6">
      <p className="text-[17px] md:text-xl 2xl:text-[25px] text-white">
        Legal Disclaimer
      </p>
      <p className="text-base 2xl:text-xl text-white font_ternary pb-4">
        FlipTrade Group may disclose personal data when required by law,
        regulation, or legal authority. We will not be liable for unauthorized
        use of your information resulting from your own negligence, password
        disclosure, or actions of unauthorized parties beyond our control.
      </p>
      <p className="text-[17px] md:text-xl 2xl:text-[25px] text-white">
        Policy Updates
      </p>
      <p className="text-base 2xl:text-xl text-white font_ternary pb-4">
        We may update this Privacy Policy periodically to reflect changes in our
        operations, technology, or regulatory environment. The latest version
        will always be available on our website.
      </p>
    </div>
  );
};

export const Card10 = () => {
  return (
    <div className="pt-6">
      <span className="text-base 2xl:text-xl text-white font_ternary">
        If you have questions about this Privacy Policy or wish to exercise your
        privacy rights, please contact us at:
      </span>
      <p className="pt-2 text-base 2xl:text-xl text-white ">
        Ground Floor, The Sotheby
      </p>
      <p className="pt-2 text-base 2xl:text-xl text-white ">
        Building, Rodney Village, Rodney
      </p>
      <p className="pt-2 text-base 2xl:text-xl text-white pb-2">
        Bay, Saint Lucia
      </p>

      <span className="">
        <a
          href="mailto:support@fliptradegroup.com"
          className="text-white text-base 2xl:text-xl underline"
        >
          support@fliptradegroup.com
        </a>
      </span>

      <p className="text-base 2xl:text-xl text-white font_ternary">
        We take all complaints seriously and will address your concerns promptly
        and professionally.
      </p>
    </div>
  );
};
