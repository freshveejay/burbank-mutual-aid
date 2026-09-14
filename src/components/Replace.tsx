/**
 * Visible inline marker for content MJ should swap in.
 * Every <Replace> is indexed in CONTENT.md by its `id`.
 * Shown only in local dev (`pnpm dev`); hidden on the live site.
 */
export function Replace({ id, children }: { id: string; children?: React.ReactNode }) {
  if (process.env.NODE_ENV === "production") return null;
  return (
    <span className="replace-marker" data-replace-id={id} title={`REPLACE: ${id}`}>
      {children ?? `{REPLACE: ${id}}`}
    </span>
  );
}
