import PortfolioTypes "../types/portfolio";
import PortfolioLib "../lib/portfolio";
import Runtime "mo:core/Runtime";

mixin () {
  public query func getProjects() : async [PortfolioTypes.Project] {
    Runtime.trap("not implemented");
  };

  public query func getSkills() : async [PortfolioTypes.Skill] {
    Runtime.trap("not implemented");
  };
};
