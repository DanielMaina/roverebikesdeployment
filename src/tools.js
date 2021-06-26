export default function setTitle(title) {
  const siteName = "Rover E-Bike";

  if (typeof title !== "string") {
    throw new Error("Title should be an string");
  }
  if (title.length > 0 && document.title !== title) {
    document.title = siteName + " | " + title;
  }
}
