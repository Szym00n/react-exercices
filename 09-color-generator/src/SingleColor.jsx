import { toast } from "react-toastify";

function SingleColor({ color, className }) {
  const { hex, weight } = color;

  async function saveToClipboard(params) {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("Color copied to clipboard");
      } catch (error) {
        toast.error("Failed to copy to clipboard");
      }
    } else {
      toast.error("Clipboard not available");
    }
  }

  return (
    <article
      className={`color ${className}`}
      style={{ background: `#${hex}` }}
      onClick={saveToClipboard}
    >
      <p className="percent-value">{weight}</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
}
export default SingleColor;
