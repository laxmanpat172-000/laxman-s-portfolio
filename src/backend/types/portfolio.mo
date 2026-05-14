module {
  public type Project = {
    id : Nat;
    title : Text;
    description : Text;
    techStack : [Text];
    githubLink : Text;
    demoLink : Text;
  };

  public type Skill = {
    name : Text;
    proficiency : Nat;
    iconName : Text;
    color : Text;
  };
};
