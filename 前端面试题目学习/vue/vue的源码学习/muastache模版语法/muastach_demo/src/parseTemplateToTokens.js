import Scanner from "./Scanner";
import nestToken from "./nestTokens";

export default function parseTemplateToTokens(templateStr) {
  var tokens = [];
  var scanner = new Scanner(templateStr);
  // 让扫描器工作
  while (scanner.pos != templateStr.length) {
    var words = scanner.scanUtil("{{");
    words && tokens.push(["text", words]);
    scanner.scan("{{");
    words = scanner.scanUtil("}}");
    if (words) {
      if (words[0] === "#" || words[0] === "/") {
        tokens.push([words[0], words.substring(1)]);
      } else {
        tokens.push(["name", words]);
      }
    }
    scanner.scan("}}");
  }
  return nestToken(tokens);
}
