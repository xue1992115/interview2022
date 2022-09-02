import parseTemplateToTokens from "./parseTemplateToTokens";
import renderTemplate from "./renderTemplate";
window.hxx_templateEngine = {
  render(templateStr, data) {
    var tokens = parseTemplateToTokens(templateStr);
    console.log(tokens);
    var domStr = renderTemplate(tokens, data);
    return domStr;
  },
};
