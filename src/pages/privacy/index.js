import React, { useEffect } from "react";

import "./index.css";
import setTitle from "../../tools.js";

import topImage from "../../assets/images/privacy-page-top.png";
import bottomImage from "../../assets/images/privacy-page-top.png";

const PrivacyPage = () => {
  useEffect(() => {
    setTitle("Privacy & Legal");
  }, []);

  return (
    <div className="privacy-page">
      <div
        className="main-content"
        style={{ backgroundImage: "url(" + topImage + ")" }}
      >
        <div className="center-wrapper">
          <div className="center-content">
            <h4>Cookie Policy </h4>

            <p>
              <h5>What are cookies?</h5>
              Cookies are tiny text files that are stored on your computer,
              tablet or mobile phone. They are NOT harmful to your computer or
              your security and despite misconceptions, are nothing to do with
              viruses like 'Trojans'. When you visit a website, Cookies allow
              the website to 'remember' you and how you have used the website
              each time you come back, which means you get a much better online
              experience.
            </p>
            <p>
              If you want to know more about cookies there is lots of
              information readily available online.
            </p>
            <p>
              <h5>What if I want to control my cookie permissions? </h5>
              If you don’t want to receive cookies you can modify your browser
              so that it notifies you when they are sent to you, or you can
              refuse cookies altogether. You can also delete cookies that have
              already been set.{" "}
            </p>
            <p>
              <h5>How we use cookies</h5>
              We use Google Analytics, a web analytics service provided by
              Google Inc. (Google) which uses cookies to help analyze how the
              website is used to improve your experience in our systems. A
              so-called “User ID” will be used on this website.
            </p>
            <p>
              The User ID functions as your alias in Google Analytics. Google
              connects your online behavior and the User-ID to a profile. Google
              Analytics tracks your activities on an anonymized basis across
              multiple devices (tablet, PC, smartphone, etc.).{" "}
            </p>
            <p>
              The information generated by the cookies about your use of the
              website (including your IP address) will be transmitted to and
              stored by Google on servers in the United States. Google will use
              this information for the purpose of evaluating your use of the
              website, compiling reports on website activity for us and
              providing other services relating to website activity and internet
              usage.
            </p>
            <p>
              Google may also transfer this information to third parties where
              required to do so by law, or where such third parties process the
              information on Google’s behalf. Google will not associate your IP
              address with any other data held by Google.
            </p>
            <p>
              Google only receives the User-ID, not the information contained in
              the above-mentioned profile or other personal data of yours. A
              summarized version of the profile created is accessible to us. We
              do not attach any other of your personally identifiable data to
              the profile connected to a User-ID.
            </p>
            <p>
              You can opt out of tracking via User ID by sending an e-mail to
              <strong>info@roverebike.ca.</strong>
            </p>
            <p>
              You may also refuse the use of cookies by selecting the
              appropriate settings on your browser, however, please note that if
              you do this you may not be able to use the full functionality of
              this website. By using this website, you consent to the processing
              of data about you by Google in the manner and for the purposes set
              out above.
            </p>
            <p>
              Further information about cookies is available
              at http://www.aboutcookies.org.
            </p>
            <p>
              <h5>User agreement</h5>
              By continuing to use our site, you agree to the placement of
              cookies on your device. If you choose not to receive our cookies,
              we cannot guarantee that your experience will be as fulfilling as
              it would otherwise be.
            </p>
          </div>
        </div>
      </div>

      <div
        className="main-content"
        style={{ backgroundImage: "url(" + bottomImage + ")" }}
      >
        <div className="center-wrapper">
          <div className="center-content">
            <h4>Rover Electronic Bike LTD Privacy Policy</h4>

            <p>
              This Privacy Policy describes how your personal information is
              collected, used, and shared when you visit or make a purchase from
              https://reverbike.ca/ (the “Site”). By using the Site, you agree
              to the collection and use of information in accordance with this
              Privacy Policy.
            </p>
            <p>
              <h5>PERSONAL INFORMATION WE COLLECT</h5>
              When you visit the Site, we automatically collect certain
              information about your device, including information about your
              web browser, IP address, time zone, and some of the cookies that
              are installed on your device. Additionally, as you browse the
              Site, we collect information about the individual web pages or
              products that you view, what websites or search terms referred you
              to the Site, and information about how you interact with the Site.
              We refer to this automatically-collected information as “Device
              Information.”
            </p>
            <p>
              We collect Device Information using the following technologies:
              “Cookies” are data files that are placed on your device or
              computer and often include an anonymous unique identifier. For
              more information about cookies, and how to disable cookies, visit
              http://www.allaboutcookies.org.
            </p>
            <p>
              “Log files” track actions occurring on the Site, and collect data
              including your IP address, browser type, Internet service
              provider, referring/exit pages, and date/time stamps.
            </p>
            <p>
              “Web beacons,” “tags,” and “pixels” are electronic files used to
              record information about how you browse the Site.
            </p>
            <p>
              Additionally when you make a purchase or attempt to make a
              purchase through the Site, we collect certain information from
              you, including but is not limited to: your name, billing address,
              shipping address, payment information (including credit card
              numbers), email address, and phone number.  We refer to this
              information as “Order Information.”
            </p>
            <p>
              When we talk about “Personal Information” in this Privacy Policy,
              we are talking both about Device Information and Order
              Information.
            </p>
            <p>
              <h5>HOW DO WE USE YOUR PERSONAL INFORMATION?</h5>
              We use the Order Information that we collect generally to fulfill
              any orders placed through the Site (including processing your
              payment information, arranging for shipping, and providing you
              with invoices and/or order confirmations).  Additionally, we use
              this Order Information to:
            </p>
            <p>
              Communicate with you; Screen our orders for potential risk or
              fraud; and When in line with the preferences you have shared with
              us, provide you with information or advertising relating to our
              products or services.
            </p>
            <p>
              Understand consumer profile and trends to further improve our
              products or service.
            </p>
            <p>
              We use the Device Information that we collect to help us screen
              for potential risk and fraud (in particular, your IP address), and
              more generally to improve and optimize our Site (for example, by
              generating analytics about how our customers browse and interact
              with the Site, and to assess the success of our marketing and
              advertising campaigns).
            </p>
            <p>
              <h5>SHARING YOUR PERSONAL INFORMATION</h5>
              We share your Personal Information with third parties to help us
              use your Personal Information, as described above.  
            </p>
            <p>
              For example, we use Shopify to power our online store--you can
              read more about how Shopify uses your Personal Information here:
               https://www.shopify.com/legal/privacy.  
            </p>
            <p>
              We also use Google Analytics to help us understand how our
              customers use the Site--you can read more about how Google uses
              your Personal Information here:
               https://www.google.com/intl/en/policies/privacy/.  
            </p>
            <p>
              You can also opt-out of Google Analytics here:
               https://tools.google.com/dlpage/gaoptout.
            </p>
            <p>
              Finally, we may also share your Personal Information to comply
              with applicable laws and regulations, to respond to a subpoena,
              search warrant or other lawful request for information we receive,
              or to otherwise protect our rights.
            </p>
            <p>
              <h5>BEHAVIOURAL ADVERTISING</h5>
              As described above, we use your Personal Information to provide
              you with targeted advertisements or marketing communications we
              believe may be of interest to you.  For more information about how
              targeted advertising works, you can visit the Network Advertising
              Initiative’s (“NAI”) educational page at
              http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.
            </p>
            <p>
              You can opt out of targeted advertising by:
              <br />
              <strong>FACEBOOK</strong>{" "}
              - https://www.facebook.com/settings/?tab=ads
              <br />
              <strong>GOOGLE</strong> -
              https://www.google.com/settings/ads/anonymous
            </p>
            <p>
              Additionally, you can opt out of some of these services by
              visiting the Digital Advertising Alliance’s opt-out portal at:
               http://optout.aboutads.info/.
            </p>
            <p>
              <h5>DO NOT TRACK</h5>
              Please note that we do not alter our Site’s data collection and
              use practices when we see a Do Not Track signal from your browser.
            </p>
            <p>
              <h5>YOUR RIGHTS</h5>
              If you are a European resident, you have the right to access
              personal information we hold about you and to ask that your
              personal information be corrected, updated, or deleted. If you
              would like to exercise this right, please contact us through the
              contact information below. Additionally, if you are a European
              resident we note that we are processing your information in order
              to fulfill contracts we might have with you (for example if you
              make an order through the Site), or otherwise to pursue our
              legitimate business interests listed above.  Additionally, please
              note that your information will be transferred outside of Europe,
              including to Canada and the United States.
            </p>
            <p>
              <h5>DATA RETENTION</h5>
              When you place an order through the Site, we will maintain your
              Order Information for our records unless and until you ask us to
              delete this information.
            </p>
            <p>
              <h5>CHANGES</h5>
              We may update this privacy policy from time to time in order to
              reflect, for example, changes to our practices or for other
              operational, legal or regulatory reasons.
            </p>
            <p>
              <h5>CONTACT US</h5>
              For more information about our privacy practices, if you have
              questions, or if you would like to make a complaint, please
              contact us by e-mail at info@roverebike.ca or by mail using the
              details provided below.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
