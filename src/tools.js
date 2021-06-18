export default function setTitle(title, append = false) {
  if (typeof title !== "string") {
    throw new Error("Title should be an string");
  }
  if (title.length > 0 && document.title !== title) {
    document.title = title;
  }
}
