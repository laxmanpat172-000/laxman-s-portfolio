import List "mo:core/List";
import ContactLib "lib/contact";
import ContactMixin "mixins/contact-api";
import PortfolioMixin "mixins/portfolio-api";

actor {
  let submissions = List.empty<ContactLib.ContactSubmission>();
  let counter = { var nextContactId : Nat = 1 };

  include ContactMixin(submissions, counter);
  include PortfolioMixin();
};
