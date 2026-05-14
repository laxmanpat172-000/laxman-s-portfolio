import ContactTypes "../types/contact";
import List "mo:core/List";
import Time "mo:core/Time";

module {
  public type ContactSubmission = ContactTypes.ContactSubmission;
  public type ContactFormInput = ContactTypes.ContactFormInput;
  public type SubmitResult = ContactTypes.SubmitResult;

  public func submit(
    submissions : List.List<ContactSubmission>,
    nextId : Nat,
    input : ContactFormInput
  ) : (ContactSubmission, Nat) {
    let submission : ContactSubmission = {
      id = nextId;
      name = input.name;
      email = input.email;
      subject = input.subject;
      message = input.message;
      timestamp = Time.now();
    };
    submissions.add(submission);
    (submission, nextId + 1);
  };

  public func getAll(
    submissions : List.List<ContactSubmission>
  ) : [ContactSubmission] {
    submissions.toArray();
  };
};
