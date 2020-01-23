var d = new Date();
var time = d.getHours();

if (time < 12) {
  document.write("<b>Rise and shine!</b>");
}
if (time > 12) {
  document.write("<b>Time to ride the slopes!</b>");
}
if (time == 12) {
  document.write("<b>afk brb lunch!</b>");
}