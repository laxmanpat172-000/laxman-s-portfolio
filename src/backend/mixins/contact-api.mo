import ContactTypes "../types/contact";
import ContactLib "../lib/contact";
import List "mo:core/List";
import Runtime "mo:core/Runtime";

mixin (
  submissions : List.List<ContactLib.ContactSubmission>,
  counter : { var nextContactId : Nat }
) {
  public func submitContact(input : ContactTypes.ContactFormInput) : async ContactTypes.SubmitResult {
    Runtime.trap("not implemented");
  };

  public query func getContactSubmissions() : async [ContactTypes.ContactSubmission] {
    Runtime.trap("not implemented");
  };
};
