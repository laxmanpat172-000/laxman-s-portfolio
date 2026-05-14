module {
  public type ContactSubmission = {
    id : Nat;
    name : Text;
    email : Text;
    subject : Text;
    message : Text;
    timestamp : Int;
  };

  public type ContactFormInput = {
    name : Text;
    email : Text;
    subject : Text;
    message : Text;
  };

  public type SubmitResult = {
    #ok : Nat;
    #err : Text;
  };
};
