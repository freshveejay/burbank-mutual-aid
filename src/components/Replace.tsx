/**
 * Visible inline marker for content MJ should swap in.
 * Every <Replace> is indexed in CONTENT.md by its `id`.
 */
export function Replace({ id, children }: { id: string; children?: React.ReactNode }) {
  return (
    <span className="replace-marker" data-replace-id={id} title={`REPLACE: ${id}`}>
      {children ?? `{REPLACE: ${id}}`}
    </span>
  );
}
