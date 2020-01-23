var d = new Date();
var time = d.getHours();

if (time < 12) {
  document.write("<b>Seize the day!</b>");
}
if (time > 12) {
  document.write("<b>Take a moment to breathe!</b>");
}
if (time == 12) {
  document.write("<b>zen time!</b>");
}