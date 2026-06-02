import { useEffect } from "react";

/**
 * Sets a unique document title, meta description, and canonical link for a
 * route, then restores the previous values on unmount. Dependency-free so it
 * works in this Vite SPA without adding react-helmet. Gives each legal/support
 * page a distinct identity (title + canonical URL) rather than inheriting the
 * homepage's metadata.
 */
export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    let meta: HTMLMetaElement | null = null;
    let metaCreated = false;
    let prevDescription: string | null = null;
    if (description) {
      meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
        metaCreated = true;
      } else {
        prevDescription = meta.getAttribute("content");
      }
      meta.setAttribute("content", description);
    }

    let link: HTMLLinkElement | null = document.querySelector(
      'link[rel="canonical"]'
    );
    let linkCreated = false;
    let prevHref: string | null = null;
    const href = window.location.origin + window.location.pathname;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
      linkCreated = true;
    } else {
      prevHref = link.getAttribute("href");
    }
    link.setAttribute("href", href);

    return () => {
      document.title = prevTitle;
      if (meta) {
        if (metaCreated) meta.remove();
        else if (prevDescription !== null) meta.setAttribute("content", prevDescription);
      }
      if (link) {
        if (linkCreated) link.remove();
        else if (prevHref !== null) link.setAttribute("href", prevHref);
      }
    };
  }, [title, description]);
}
